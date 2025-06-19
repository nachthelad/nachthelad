import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Passionate Developer & Lifelong Learner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a frontend developer with a passion for creating modern web applications. I completed my Frontend
            Development course with React at{" "}
            <a
              href="https://www.coderhouse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              CoderHouse
            </a>{" "}
            and continue learning with AI-powered tools to stay at the forefront of web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Code,
              title: "Clean Code",
              description: "Writing maintainable, scalable code following best practices and modern standards.",
            },
            {
              icon: Palette,
              title: "UI/UX Focus",
              description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Optimizing applications for speed, accessibility, and search engine visibility.",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-0 shadow-none bg-muted/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
