import Link from "next/link";

const projects = [
  {
    name: "ConversorTotal",
    url: "https://conversortotal.online",
    description:
      "Complete conversion tool for various units and currencies with real-time rates",
    tech: ["React", "Next.js", "API Integration", "TypeScript"],
  },
  {
    name: "Dimsure",
    url: "https://dimsure.online",
    description:
      "Dimension measurement and calculation tool for precise measurements",
    tech: ["React", "Next.js", "TypeScript", "Calculations"],
  },
  {
    name: "Verdurita",
    url: "https://verdurita.com.ar",
    description:
      "Track currency exchange rates in Argentina with historical data",
    tech: ["React", "API Integration", "Charts", "Real-time Data"],
  },
  {
    name: "Equipapp",
    url: "https://equipapp.web.app",
    description:
      "Create balanced teams for football matches using smart algorithms",
    tech: ["React", "Firebase", "Material-UI", "Algorithms"],
  },
  {
    name: "WhatsappNow",
    url: "https://whatsappnow.web.app",
    description: "Send WhatsApp messages without adding contacts to your phone",
    tech: ["React", "Firebase", "PWA", "Material-UI"],
  },
];

export function Projects() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-medium text-foreground mb-12">Projects</h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium text-foreground hover:text-primary transition-colors inline-block"
            >
              {project.name}
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
