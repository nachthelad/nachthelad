import { Header } from "@/components/header";
import { getProjects } from "@/lib/notion";
import dynamic from "next/dynamic";
import type { Project } from "@/components/projects-data";

// Revalidate every 10 minutes — Notion changes appear within 10 minutes, no deploy needed
export const revalidate = 600;

const ProjectsMobile = dynamic(
  () =>
    import("@/components/projects-mobile").then((mod) => ({
      default: mod.ProjectsMobile,
    })),
  {
    loading: () => <div className="mb-20 lg:hidden">Cargando proyectos...</div>,
  }
);

const ProjectsDesktop = dynamic(
  () =>
    import("@/components/projects-desktop").then((mod) => ({
      default: mod.ProjectsDesktop,
    })),
  {
    loading: () => (
      <div className="mb-20 hidden lg:block">Cargando proyectos...</div>
    ),
  }
);

const Technical = dynamic(
  () =>
    import("@/components/technical").then((mod) => ({
      default: mod.Technical,
    })),
  {
    loading: () => (
      <div className="mb-20">Cargando habilidades técnicas...</div>
    ),
  }
);

const Contact = dynamic(
  () =>
    import("@/components/contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => (
      <div className="mb-20">Cargando información de contacto...</div>
    ),
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

  return (
    <div className="min-h-screen bg-background">
      <main
        id="main-content"
        className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center animate-in fade-in duration-700"
      >
        <Header />
        <ProjectsMobile projects={projects} error={notionError} />
        <ProjectsDesktop projects={projects} error={notionError} />
        <Technical />
        <Contact />
      </main>
    </div>
  );
}
