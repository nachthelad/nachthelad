import { ProjectsMobile } from "@/components/projects-mobile";
import { ProjectsDesktop } from "@/components/projects-desktop";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Mis trabajos
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Proyectos destacados
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una colección de proyectos que construí: aplicaciones web y
            herramientas que resuelven problemas reales.
          </p>
        </div>
        <ProjectsMobile hideTitle />
        <ProjectsDesktop hideTitle />
      </div>
    </div>
  );
}
