import { CONTACT_INFO } from "@/lib/constants"

export function Contact() {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-light text-background mb-3 tracking-tight">
        ¿Hablamos?
      </h2>
      <p className="text-sm text-background/60 mb-8">
        Abierto a oportunidades y proyectos interesantes.
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-sm text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-0.5"
          aria-label="Enviar email a Ignacio Ventura"
        >
          {CONTACT_INFO.email}
        </a>
        <a
          href={CONTACT_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-0.5"
          aria-label="Ver perfil de LinkedIn de Ignacio Ventura"
        >
          LinkedIn
        </a>
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-0.5"
          aria-label="Ver perfil de GitHub de Ignacio Ventura"
        >
          GitHub
        </a>
        <a
          href={CONTACT_INFO.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-0.5"
          aria-label="Perfil de Twitter/X de Ignacio Ventura"
        >
          Twitter
        </a>
      </div>
    </>
  )
}
