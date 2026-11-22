import { CONTACT_INFO } from "@/lib/constants"

export function Contact() {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8">
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="text-sm text-primary hover:text-primary/80 transition-colors"
        aria-label="Enviar email a Ignacio Ventura"
      >
        Email
      </a>
      <a
        href={CONTACT_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary hover:text-primary/80 transition-colors"
        aria-label="Ver perfil de LinkedIn de Ignacio Ventura"
      >
        LinkedIn
      </a>
      <a
        href={CONTACT_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary hover:text-primary/80 transition-colors"
        aria-label="Ver perfil de GitHub de Ignacio Ventura"
      >
        GitHub
      </a>
      <div className="flex gap-x-6 sm:gap-x-8">
        <a
          href={CONTACT_INFO.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors"
          aria-label="Perfil de Twitter/X de Ignacio Ventura"
        >
          Twitter
        </a>
        <a
          href={CONTACT_INFO.cafecito}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Cafecito
        </a>
      </div>
    </div>
  )
}
