import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "./projects-data";

export function ProjectsDesktop({
  hideTitle = false,
  projects,
  error = false,
}: {
  hideTitle?: boolean;
  projects: Project[];
  error?: boolean;
}) {
  return (
    <section className="mb-20 hidden lg:block">
      {!hideTitle && (
        <h2 className="text-2xl font-medium text-foreground mb-12">
          Proyectos
        </h2>
      )}

      {error && (
        <p className="text-sm text-muted-foreground">
          No pudimos cargar los proyectos en este momento. Intentá de nuevo más tarde.
        </p>
      )}

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold truncate">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <Button asChild size="default">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver demo del proyecto ${project.name}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 max-w-3xl text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
