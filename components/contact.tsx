// Contact information - easy to modify
const CONTACT_INFO = {
  email: "nachthelad.dev@gmail.com",
  github: "https://github.com/nachthelad",
  linkedin: "https://www.linkedin.com/in/ignacio-ventura/",
}

export function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-medium text-foreground mb-12">Get In Touch</h2>

      <div className="space-y-6">
        <div>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            {CONTACT_INFO.email}
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
