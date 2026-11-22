import { PortfolioListItem } from "./portfolio-list-item";
import type { Project } from "./projects-data";

export function ProjectsList({
  projects,
  error = false,
}: {
  projects: Project[];
  error?: boolean;
}) {
  if (error) {
    return (
      <p className="text-sm text-muted-foreground">
        No pudimos cargar los proyectos en este momento. Intentá de nuevo más tarde.
      </p>
    );
  }

  if (projects.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-8">
        No hay proyectos disponibles.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-border border-y">
      {projects.map((project) => (
        <PortfolioListItem key={project.name} entry={project} />
      ))}
    </ul>
  );
}
