import { Header } from "@/components/header";
import dynamic from "next/dynamic";

// Lazy load non-critical components
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main
        id="main-content"
        className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center animate-in fade-in duration-700"
      >
        <Header />
        <ProjectsMobile />
        <ProjectsDesktop />
        <Technical />
        <Contact />
      </main>
    </div>
  );
}
