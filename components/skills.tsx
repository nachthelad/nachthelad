import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Firebase",
    "Vercel",
    "Responsive Design",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
  ]

  return (
    <section className="py-16 lg:py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="outline" className="mb-4">
          Technologies
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Skills & Technologies</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
