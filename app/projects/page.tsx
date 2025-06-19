import { ProjectsGrid } from "@/components/projects-grid"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, from web applications to tools that solve real-world problems.
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </div>
  )
}
