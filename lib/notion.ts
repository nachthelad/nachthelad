import type { Project } from "@/components/projects-data";

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const NOTION_API_KEY = process.env.NOTION_API_KEY!;

const projectLogos = new Map([
  ["rapidapi.com/nachthelad-nachthelad-apis/api/feriados-argentina", "/projects/feriados-argentina.png"],
  ["rapidapi.com/nachthelad-nachthelad-apis/api/indices-argentina", "/projects/indices-argentina.png"],
  ["nitro-canna.vercel.app", "/projects/nitro.png"],
  ["eliantus.com.ar", "/projects/eliantus.svg"],
  ["equipapp.vercel.app", "/projects/equipapp.png"],
  ["mk1-moveset.vercel.app", "/projects/mk1.webp"],
  ["daily-red-es.vercel.app", "/projects/daily-red.png"],
]);

async function getProjectLogo(link: string | null, hasAvatar: boolean) {
  if (!link || !URL.canParse(link)) return null;
  const { hostname, pathname, protocol } = new URL(link);
  if (protocol !== "https:" && protocol !== "http:") return null;
  const host = hostname.replace(/^www\./, "");
  const logo = projectLogos.get(host + pathname.replace(/\/$/, "")) ?? projectLogos.get(host);
  if (logo || hasAvatar) return logo ?? null;

  const favicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
  try {
    // Google also sends a decodable globe PNG with its 404 responses.
    const response = await fetch(favicon, { next: { revalidate: 600 }, signal: AbortSignal.timeout(3000) });
    return response.ok ? favicon : null;
  } catch {
    return null;
  }
}

const directoryBotAvatars = new Map([
  ["/bots/gio-pokesellado-ar", "/bots/gio.svg"],
  ["/bots/mallmann-parrilla-argentina", "/bots/mallmann.svg"],
  ["/bots/nitro-grow-journal", "/bots/nitro.svg"],
  ["/bots/pokerbot-holdem-coach", "/bots/pokerbot.svg"],
]);

type FileImage =
  | { type: "file"; file: { url: string } }
  | { type: "external"; external: { url: string } };
type Avatar = { emoji: string } | { src: string };

export type PortfolioEntry = Project & { id: string; type: string; avatar: Avatar | null; projectLogo: string | null };

type NotionPage = {
  id: string;
  icon?: FileImage | { type: "emoji"; emoji: string } | { type: "custom_emoji"; custom_emoji: { url: string } } | null;
  cover?: FileImage | null;
  properties: {
    Type?: { select: { name: string } | null };
    Image?: { files?: FileImage[]; url?: string };
    Name: { title: { plain_text: string }[] };
    Description: { rich_text: { plain_text: string }[] };
    Technologies: { multi_select: { name: string }[] };
    Link: { url: string | null };
  };
};

function imageUrl(image?: FileImage | null) {
  return image?.type === "file" ? image.file.url : image?.external?.url;
}

function getAvatar({ icon, properties, cover }: NotionPage): Avatar | null {
  const link = properties.Link.url;
  const listing = link && URL.canParse(link) ? new URL(link) : null;
  if (properties.Type?.select?.name === "Bot" && listing?.origin === "https://grok-bot.directory") {
    const src = directoryBotAvatars.get(listing.pathname.replace(/\/$/, ""));
    if (src) return { src };
  }

  if (icon?.type === "emoji") return { emoji: icon.emoji };
  const iconUrl = icon?.type === "custom_emoji" ? icon.custom_emoji.url : imageUrl(icon);
  const src = iconUrl || imageUrl(properties.Image?.files?.[0]) || properties.Image?.url || imageUrl(cover);
  return src ? { src } : null;
}

export async function getProjects(): Promise<PortfolioEntry[]> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Hidden", checkbox: { equals: false } },
        sorts: [{ property: "Order", direction: "ascending" }],
      }),
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Notion API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return Promise.all((data.results as NotionPage[]).map(async (page) => {
    const type = page.properties.Type?.select?.name || "Project";
    const avatar = getAvatar(page);
    return {
      id: page.id,
      type,
      avatar,
      projectLogo: type === "Project" ? await getProjectLogo(page.properties.Link.url, !!avatar) : null,
      name: page.properties.Name.title.map((t) => t.plain_text).join(""),
      description: page.properties.Description.rich_text
        .map((t) => t.plain_text)
        .join(""),
      technologies: page.properties.Technologies.multi_select.map((t) => t.name),
      link: page.properties.Link.url ?? "",
    };
  }));
}
