import { Header } from "@/components/header";
import { getProjects } from "@/lib/notion";
import dynamic from "next/dynamic";
import type { Project } from "@/components/projects-data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Revalidate every 10 minutes — Notion changes appear within 10 minutes, no deploy needed
export const revalidate = 600;

const ProjectsList = dynamic(
  () =>
    import("@/components/projects-list").then((mod) => ({
      default: mod.ProjectsList,
    })),
  {
    loading: () => <div className="py-4 text-sm text-muted-foreground">Cargando proyectos...</div>,
  }
);

const Contact = dynamic(
  () =>
    import("@/components/contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => null,
  }
);

export default async function HomePage() {
  let projects: Project[] = [];
  let notionError = false;
  try {
    projects = await getProjects();
  } catch (err) {
    console.error("[Notion] Error fetching projects:", err);
    notionError = true;
  }

  const featuredProject = projects[0] ?? null;

  return (
    <main id="main-content" className="animate-in fade-in duration-700">

      {/* ── Sección 1: Hero ── */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 bg-background relative">
        <div className="w-full max-w-2xl mx-auto">
          <Header />

          {featuredProject && (
            <Link
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto destacado: ${featuredProject.name}`}
              className="mt-10 block rounded-2xl bg-card border border-border px-6 py-5 text-left group hover:border-primary/40 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Proyecto destacado
              </p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {featuredProject.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-primary shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          )}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Proyectos</span>
          <span className="text-lg animate-bounce-down">↓</span>
        </div>
      </section>

      {/* ── Sección 2: Proyectos ── */}
      <section className="py-20 px-4 sm:px-6 bg-muted">
        <div className="w-full max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
            Todos los proyectos
          </p>
          <ProjectsList projects={projects} error={notionError} />
        </div>
      </section>

      {/* ── Sección 3: Contacto ── */}
      <section className="py-20 px-4 sm:px-6 bg-foreground text-center">
        <div className="w-full max-w-2xl mx-auto">
          <Contact />
        </div>
      </section>

    </main>
  );
}
