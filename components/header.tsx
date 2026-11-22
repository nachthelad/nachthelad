import { Coffee, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { CONTACT_INFO } from "@/lib/constants"

const iconLinkClassName = "grid size-11 place-items-center rounded-md text-primary hover:text-primary/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"

export function Header() {
  return (
    <header>
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-light text-foreground">Ignacio Ventura</h1>

        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Me gusta vibecodear cosas que se me vienen a la cabeza.
        </p>

        <div className="flex justify-center gap-1 pt-2">
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className={iconLinkClassName}
            aria-label="Enviar email a Ignacio Ventura"
          >
            <Mail className="size-6" />
          </Link>
          <Link
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClassName}
            aria-label="Perfil de LinkedIn de Ignacio Ventura"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClassName}
            aria-label="Perfil de GitHub de Ignacio Ventura"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href={CONTACT_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClassName}
            aria-label="Perfil de Twitter/X de Ignacio Ventura"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.848h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.492h2.039L6.488 3.24H4.3l13.31 17.405Z" />
            </svg>
          </Link>
          <Link
            href={CONTACT_INFO.cafecito}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClassName}
            aria-label="Invitame un café en Cafecito"
          >
            <Coffee className="size-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
