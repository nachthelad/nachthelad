import { ExternalLink } from "lucide-react";
import Link from "next/link";
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
    <div className="divide-y divide-border border-t border-b border-border">
      {projects.map((project) => (
        <Link
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${project.name}`}
          className="flex items-center justify-between gap-4 py-4 group text-left"
        >
          <div className="min-w-0">
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
              {project.description}
            </p>
          </div>
          <ExternalLink className="h-4 w-4 text-primary shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </div>
  );
}
