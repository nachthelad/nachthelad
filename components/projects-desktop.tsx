import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "./projects-data";

export function ProjectsDesktop({
  hideTitle = false,
}: {
  hideTitle?: boolean;
}) {
  return (
    <section className="mb-20 hidden lg:block">
      {!hideTitle && (
        <h2 className="text-2xl font-medium text-foreground mb-12">
          Proyectos
        </h2>
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
                    <Button asChild size="sm">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver demo
                      </Link>
                    </Button>
                    {project.github && (
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                    )}
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
