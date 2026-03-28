# Rediseño Portfolio — Pergamino & Tinta — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar el portfolio de dark-mode con tech tags a un diseño light-mode de 3 secciones (Hero / Proyectos / Contacto) en paleta Pergamino & Tinta, sin tags de tecnologías ni sección Technical.

**Architecture:** Se reemplazan los dos componentes de proyectos (Mobile + Desktop) por uno solo (`ProjectsList`). La página pasa de un contenedor único a tres `<section>` full-width con fondos distintos. Las variables CSS se actualizan globalmente — ningún componente necesita saber el color exacto.

**Tech Stack:** Next.js App Router, Tailwind CSS (CSS variables via HSL), Inter (sin cambios), lucide-react.

---

## Mapa de archivos

| Archivo | Acción | Qué cambia |
|---------|--------|------------|
| `app/globals.css` | Modificar | Nueva paleta HSL, keyframe bounce, remover bloque `.dark` |
| `app/layout.tsx` | Modificar | Remover `className="dark"`, actualizar `themeColor` |
| `components/header.tsx` | Modificar | Bio nuevo |
| `components/projects-list.tsx` | Crear | Lista unificada sin tags ni cards, reemplaza Mobile+Desktop |
| `components/contact.tsx` | Modificar | Dark background, heading nuevo |
| `app/page.tsx` | Modificar | Tres secciones, remover Technical, usar ProjectsList |

---

## Task 1: Paleta CSS

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Reemplazar variables de color y limpiar el bloque .dark**

Reemplazar todo el contenido de `app/globals.css` con:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Pergamino & Tinta palette */
    --background: 37 39% 94%;          /* #F5F0E8 crema cálido */
    --foreground: 30 18% 9%;           /* #1A1612 tinta oscura */
    --card: 37 37% 89%;                /* #EDE5D8 crema secundario */
    --card-foreground: 30 18% 9%;
    --popover: 37 39% 94%;
    --popover-foreground: 30 18% 9%;
    --primary: 29 43% 59%;             /* #C4956A terracota/acento */
    --primary-foreground: 37 39% 94%;
    --secondary: 37 37% 89%;
    --secondary-foreground: 30 18% 9%;
    --muted: 37 37% 89%;               /* #EDE5D8 */
    --muted-foreground: 33 24% 44%;    /* #8B7355 camel medio */
    --accent: 29 43% 59%;
    --accent-foreground: 37 39% 94%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 37 39% 94%;
    --border: 41 27% 82%;              /* #DDD5C4 */
    --input: 41 27% 82%;
    --ring: 29 43% 59%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

html {
  scroll-behavior: smooth;
}

/* Minimal scrollbar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  @apply bg-transparent;
}
::-webkit-scrollbar-thumb {
  @apply bg-muted-foreground/20 rounded-full;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-muted-foreground/40;
}

/* Scroll hint bounce */
@keyframes bounce-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
.animate-bounce-down {
  animation: bounce-down 1.8s ease-in-out infinite;
}
```

- [ ] **Step 2: Verificar visualmente**

Correr `npm run dev`, abrir localhost. El fondo debe ser crema cálido, texto oscuro. No debe haber ningún elemento en azul oscuro.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: apply Pergamino & Tinta light palette"
```

---

## Task 2: HTML root y metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Remover dark mode y actualizar themeColor**

En `app/layout.tsx`, hacer tres cambios:

**Cambio A** — línea 82, `themeColor`:
```tsx
// antes
themeColor: "#000000",
// después
themeColor: "#F5F0E8",
```

**Cambio B** — línea 120, `<html>`:
```tsx
// antes
<html lang="es" className="dark">
// después
<html lang="es">
```

**Cambio C** — línea 12-13, metadata `description` (y las copias en openGraph y twitter):
```tsx
// antes
"Frontend Developer especializado en React y Next.js, enfocado en experiencia de usuario y código limpio. Trabajo en proyectos propios y para clientes, desde herramientas de productividad hasta plataformas con IA."
// después
"Hago que las cosas funcionen — y se vean bien. Trabajo en productos propios y con clientes que necesitan construir algo concreto."
```

Hacer el mismo cambio en `openGraph.description` (línea 54-56) y `twitter.description` (línea 72-74).

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: remove dark mode, update metadata for new bio"
```

---

## Task 3: Bio del header

**Files:**
- Modify: `components/header.tsx`

- [ ] **Step 1: Actualizar el bio**

En `components/header.tsx`, reemplazar el párrafo del bio (línea 10-12):

```tsx
// antes
<p className="text-lg sm:text-xl text-muted-foreground">Frontend Developer</p>

<p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
  Desarrollo aplicaciones web modernas con React y Next.js, enfocado en experiencia de usuario y código limpio. Trabajo tanto en proyectos propios como para clientes, desde herramientas de productividad hasta plataformas con IA.
</p>
// después
<p className="text-lg sm:text-xl text-muted-foreground">Frontend Developer</p>

<p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
  Hago que las cosas funcionen — y se vean bien. Trabajo en proyectos propios y con clientes que necesitan construir algo concreto.
</p>
```

- [ ] **Step 2: Commit**

```bash
git add components/header.tsx
git commit -m "feat: update bio — results-first, no tech stack mention"
```

---

## Task 4: Componente ProjectsList

**Files:**
- Create: `components/projects-list.tsx`

Este componente reemplaza tanto `ProjectsMobile` como `ProjectsDesktop`. Una sola lista responsive, sin cards, sin tags.

- [ ] **Step 1: Crear el componente**

Crear `components/projects-list.tsx`:

```tsx
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "./projects-data";

export function ProjectsList({
  projects,
  error = false,
}: {
  projects: Project[];
  error?: boolean;
}) {
  if (error) {
    return (
      <p className="text-sm text-muted-foreground">
        No pudimos cargar los proyectos en este momento. Intentá de nuevo más tarde.
      </p>
    );
  }

  return (
    <div className="divide-y divide-border border-t border-border">
      {projects.map((project) => (
        <Link
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${project.name}`}
          className="flex items-center justify-between gap-4 py-4 group text-left"
        >
          <div className="min-w-0">
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
              {project.description}
            </p>
          </div>
          <ExternalLink className="h-4 w-4 text-primary shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/projects-list.tsx
git commit -m "feat: add ProjectsList — unified list without tech tags"
```

---

## Task 5: Contact con dark background

**Files:**
- Modify: `components/contact.tsx`

El componente Contact ahora es responsable solo del contenido — el background oscuro lo aplica la section en page.tsx. Actualizar estilos para que el texto sea legible sobre fondo oscuro.

- [ ] **Step 1: Reescribir el componente**

Reemplazar todo el contenido de `components/contact.tsx`:

```tsx
import { CONTACT_INFO } from "@/lib/constants"

export function Contact() {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-light text-background mb-3 tracking-tight">
        ¿Hablamos?
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
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
```

- [ ] **Step 2: Commit**

```bash
git add components/contact.tsx
git commit -m "feat: update Contact for dark background section"
```

---

## Task 6: Reestructura de page.tsx

**Files:**
- Modify: `app/page.tsx`

Esta es la tarea central. Reemplaza el contenedor único por tres secciones, incorpora ProjectsList, el card del proyecto destacado, el scroll hint, y elimina Technical + ProjectsMobile + ProjectsDesktop.

- [ ] **Step 1: Reemplazar page.tsx completo**

```tsx
import { Header } from "@/components/header";
import { getProjects } from "@/lib/notion";
import dynamic from "next/dynamic";
import type { Project } from "@/components/projects-data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// Revalidate every 10 minutes — Notion changes appear within 10 minutes, no deploy needed
export const revalidate = 600;

const ProjectsList = dynamic(
  () =>
    import("@/components/projects-list").then((mod) => ({
      default: mod.ProjectsList,
    })),
  {
    loading: () => <div className="py-4 text-sm text-muted-foreground">Cargando proyectos...</div>,
  }
);

const Contact = dynamic(
  () =>
    import("@/components/contact").then((mod) => ({ default: mod.Contact })),
  {
    loading: () => null,
  }
);

export default async function HomePage() {
  let projects: Project[] = [];
  let notionError = false;
  try {
    projects = await getProjects();
  } catch (err) {
    console.error("[Notion] Error fetching projects:", err);
    notionError = true;
  }

  const featuredProject = projects[0] ?? null;

  return (
    <main id="main-content" className="animate-in fade-in duration-700">

      {/* ── Sección 1: Hero ── */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 bg-background relative">
        <div className="w-full max-w-2xl mx-auto">
          <Header />

          {featuredProject && (
            <Link
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto destacado: ${featuredProject.name}`}
              className="mt-10 block rounded-2xl bg-card border border-border px-6 py-5 text-left group hover:border-primary/40 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                Proyecto destacado
              </p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {featuredProject.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-primary shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          )}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Proyectos</span>
          <span className="text-lg animate-bounce-down">↓</span>
        </div>
      </section>

      {/* ── Sección 2: Proyectos ── */}
      <section className="py-20 px-4 sm:px-6 bg-muted">
        <div className="w-full max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
            Todos los proyectos
          </p>
          <ProjectsList projects={projects} error={notionError} />
        </div>
      </section>

      {/* ── Sección 3: Contacto ── */}
      <section className="py-20 px-4 sm:px-6 bg-foreground text-center">
        <div className="w-full max-w-2xl mx-auto">
          <Contact />
        </div>
      </section>

    </main>
  );
}
```

- [ ] **Step 2: Verificar en dev**

```bash
npm run dev
```

Verificar:
- Hero ocupa viewport completo, proyecto destacado visible (Cannafriend)
- Scroll a sección proyectos: fondo EDE5D8 (crema), lista sin ningún tag/badge
- Scroll a contacto: fondo oscuro (#1A1612), links en terracota
- Mobile (Chrome DevTools 375px): todo legible, scroll hint visible

- [ ] **Step 3: Build de producción — sin errores TS**

```bash
npm run build
```

Esperado: `✓ Compiled successfully` sin errores de TypeScript. Si hay error de tipo, el más probable es que `featuredProject` sea `null` — el guard `featuredProject &&` ya lo cubre.

- [ ] **Step 4: Commit final**

```bash
git add app/page.tsx
git commit -m "feat: restructure page into 3 sections — hero/projects/contact"
```

---

## Verificación end-to-end

1. `npm run dev` → abrir `http://localhost:3000`
2. **Hero**: fondo `#F5F0E8`, nombre grande font-light, bio nuevo sin mencionar React/Next.js, card de Cannafriend, scroll hint con animación bounce
3. **Proyectos**: fondo levemente más oscuro `#EDE5D8`, lista de proyectos con nombre + descripción + ícono ↗, **cero badges/tags visibles**
4. **Contacto**: fondo oscuro `#1A1612`, "¿Hablamos?", links en terracota
5. **Mobile** (380px): las tres secciones se ven bien, hero no overflows
6. `npm run build` → sin errores
