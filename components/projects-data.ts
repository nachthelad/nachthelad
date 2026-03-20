export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    name: "Cannafriend",
    description:
      "Diario de cultivo y consumo de marihuana, simple y útil. Podés registrar tus plantas, fotos, tareas, recordatorios y sesiones; y analizar tu planta con IA.",
    technologies: ["React", "Next.js", "Tailwind CSS", "IA"],
    link: "https://cannafriend.app",
  },
  {
    name: "Eliantus",
    description:
      "Sitio web institucional para una empresa agro-industrial con plataforma de trazabilidad digital, catálogo de productos y portal de clientes autenticado.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://eliantus.vercel.app",
    hidden: true,
  },
  {
    name: "Tolva",
    description:
      "Aplicación web construida con Next.js y TypeScript con utilidades avanzadas de parsing y procesamiento de datos.",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://tolva.vercel.app",
    github: "https://github.com/nachthelad/tolva",
  },
  {
    name: "ConversorTotal",
    description:
      "Herramienta completa de conversión para distintas unidades y monedas con tasas en tiempo real.",
    technologies: ["React", "Next.js", "Integración de API", "TypeScript"],
    link: "https://conversortotal.online",
  },
  {
    name: "Dimsure",
    description:
      "Medición y cálculo de dimensiones con resultados precisos y fáciles de usar.",
    technologies: ["React", "Next.js", "TypeScript", "Cálculos"],
    link: "https://dimsure.online",
  },
  {
    name: "Verdurita",
    description:
      "Seguimiento de distintos tipos de cambio en Argentina con datos históricos.",
    technologies: [
      "React",
      "Integración de API",
      "Charts.js",
      "Datos en tiempo real",
    ],
    link: "https://verdurita.com.ar",
    github: "https://github.com/nachthelad/verdurita",
  },
  {
    name: "Equipapp",
    description:
      "Creación de equipos equilibrados para partidos de fútbol con algoritmos de balanceo.",
    technologies: ["React", "Firebase", "Material-UI", "Algoritmos"],
    link: "https://equipapp.vercel.app/",
    github: "https://github.com/nachthelad/equipapp",
  },
  {
    name: "WhatsappNow",
    description:
      "Envia mensajes por WhatsApp sin agendar contactos. Interfaz limpia e intuitiva para resolver un problema cotidiano.",
    technologies: ["React", "Firebase", "PWA", "Material-UI"],
    link: "https://whatsappnow.vercel.app/",
    github: "https://github.com/nachthelad/whatsappnow",
  },
  {
    name: "MarAbierto",
    description:
      "Marketplace de NFTs construido sobre la red Ethereum. Permite explorar, comprar y vender colecciones digitales con una interfaz moderna.",
    technologies: ["React", "Material-UI", "Web3", "Ethereum"],
    link: "https://marabiertoreact.vercel.app/",
    github: "https://github.com/nachthelad/MarAbierto",
  },
];
