import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "./projects-data";

export function ProjectsMobile({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section className="mb-20 lg:hidden">
      {!hideTitle && (
        <h2 className="text-2xl font-medium text-foreground mb-12">
          Proyectos
        </h2>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="group h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors text-lg">
                {project.name}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-left">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Button asChild className="w-full">
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
                  <Button asChild variant="outline" className="w-full">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
