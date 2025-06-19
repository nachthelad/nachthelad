import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="mb-4">
            Available for work
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Frontend
            <span className="block text-primary">Developer</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I create modern web applications with React, Next.js, and cutting-edge technologies. I completed my Frontend
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

        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
