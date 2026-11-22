import { Header } from "@/components/header";
import { getProjects } from "@/lib/notion";
import { Contact } from "@/components/contact";
import { PortfolioDirectory } from "@/components/portfolio-directory";
import { ProjectsList } from "@/components/projects-list";
import { Suspense } from "react";

// Revalidate every 10 minutes — Notion changes appear within 10 minutes, no deploy needed
export const revalidate = 600;

export default async function HomePage() {
  let entries: Awaited<ReturnType<typeof getProjects>> = [];
  let notionError = false;
  try {
    entries = await getProjects();
  } catch (err) {
    console.error("[Notion] Error fetching projects:", err);
    notionError = true;
  }

  const projects = entries.filter((entry) => entry.type === "Project");
  const bots = entries.filter((entry) => entry.type === "Bot");

  return (
    <main id="main-content" className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">

      {/* ── Sección 1: Hero ── */}
      <section className="px-4 pt-12 pb-2 text-center sm:px-6 sm:pt-16">
        <Header />
      </section>

      {/* ── Sección 2: Proyectos ── */}
      <section className="pt-6 pb-4 px-4 sm:px-6">
        <div id="portfolio" className="w-full max-w-2xl mx-auto scroll-mt-8">
          <Suspense fallback={<ProjectsList projects={projects} error={notionError} />}>
            <PortfolioDirectory projects={projects} bots={bots} error={notionError} />
          </Suspense>
        </div>
      </section>

      {/* ── Sección 3: Contacto ── */}
      <footer className="pt-12 pb-12 px-4 sm:px-6 text-center">
        <div className="w-full max-w-2xl mx-auto">
          <Contact />
        </div>
      </footer>

    </main>
  );
}
