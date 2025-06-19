import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

// Contact information - easy to modify
const CONTACT_INFO = {
  email: "nachthelad.dev@gmail.com",
  github: "https://github.com/nachthelad",
  linkedin: "https://www.linkedin.com/in/ignacio-ventura/",
}

export function Header() {
  return (
    <header className="mb-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-light text-foreground">Ignacio Ventura</h1>
        <p className="text-xl text-muted-foreground">Frontend Developer</p>

        <div className="flex justify-center gap-6 pt-4">
          <Link
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
