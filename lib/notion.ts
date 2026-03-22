import type { Project } from "@/components/projects-data";

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const NOTION_API_KEY = process.env.NOTION_API_KEY!;

type NotionPage = {
  properties: {
    Name: { title: { plain_text: string }[] };
    Description: { rich_text: { plain_text: string }[] };
    Technologies: { multi_select: { name: string }[] };
    Link: { url: string | null };
  };
};

export async function getProjects(): Promise<Project[]> {
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
      }),
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Notion API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return (data.results as NotionPage[]).map((page) => ({
    name: page.properties.Name.title.map((t) => t.plain_text).join(""),
    description: page.properties.Description.rich_text
      .map((t) => t.plain_text)
      .join(""),
    technologies: page.properties.Technologies.multi_select.map((t) => t.name),
    link: page.properties.Link.url ?? "",
  }));
}
