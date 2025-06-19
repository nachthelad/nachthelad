import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    name: "WhatsappNow",
    description:
      "Send WhatsApp messages without adding contacts. My first application that solves a common daily problem with a clean, intuitive interface.",
    technologies: ["React", "Firebase", "PWA", "Material-UI"],
    link: "https://whatsappnow.web.app/",
    github: "https://github.com/nachthelad/whatsappnow",
  },
  {
    name: "Equipapp",
    description:
      "Create balanced teams for football matches. Perfect for organizing games with friends using smart team balancing algorithms.",
    technologies: ["React", "Firebase", "Material-UI", "Algorithms"],
    link: "https://equipapp.web.app/",
    github: "https://github.com/nachthelad/equipapp",
  },
  {
    name: "Verdurita",
    description:
      "Track different currency exchange rates in Argentina with real-time updates and historical data visualization.",
    technologies: ["React", "API Integration", "Charts.js", "Real-time Data"],
    link: "https://verdurita.com.ar",
    github: "https://github.com/nachthelad/verdurita",
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-colors text-lg">{project.name}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button asChild size="sm" className="flex-1">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
