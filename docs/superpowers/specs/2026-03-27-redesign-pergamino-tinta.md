# Rediseño Portfolio — Pergamino & Tinta

**Fecha:** 2026-03-27
**Estado:** Aprobado por el usuario

---

## Contexto

El portfolio actual tiene dark mode con paleta azul oscuro/negra y muestra dos tipos de tags de tecnologías: en cada proyecto y en una sección "Technical" separada. El usuario quiere un cambio de cara hacia algo más "profesional" — sin enumerar herramientas, que los proyectos hablen solos, y con la paleta de colores cálida Pantone 2026.

---

## Decisiones de diseño

### Paleta — Pergamino & Tinta
| Rol | Color | Hex |
|-----|-------|-----|
| Background principal | Crema cálido | `#F5F0E8` |
| Background secundario (sección proyectos) | Crema oscuro | `#EDE5D8` |
| Background contraste (contacto) | Tinta oscura | `#1A1612` |
| Texto principal | Casi negro cálido | `#1A1612` |
| Texto secundario / muted | Camel medio | `#8B7355` |
| Acento / links / flechas | Terracota/camel | `#C4956A` |
| Bordes | Crema borde | `#DDD5C4` |

### Modo
Dark mode → **Light mode hardcodeado** (`<html className="">`, remover `"dark"`).

### Tipografía
Sin cambios — Inter se mantiene. Ajustar pesos/tamaños según mockup aprobado.

---

## Estructura de la página

### Sección 1 — Hero (100vh)
- Nombre: `Ignacio Ventura`, font-light, 54–62px
- Rol: `Frontend Developer`, muted
- Bio nueva (minimalista): *"Hago que las cosas funcionen — y se vean bien. Trabajo en productos propios y con clientes que necesitan construir algo concreto."*
- Íconos sociales (LinkedIn, GitHub, Twitter, Email) — círculos con fondo EDE5D8
- Tarjeta del proyecto destacado: **Cannafriend** con label "Proyecto destacado", descripción breve, flecha ↗
- Indicador de scroll al pie (↓ "Proyectos")

### Sección 2 — Proyectos (background `#EDE5D8`)
- Label uppercase "Todos los proyectos"
- Lista tipo tabla: nombre | descripción | ↗
- Sin tags de tecnologías
- Proyectos visibles (no hidden): Cannafriend, Tolva, ConversorTotal, Dimsure, Verdurita, Equipapp, WhatsappNow, MarAbierto

### Sección 3 — Contacto (background `#1A1612`)
- Heading: *"¿Hablamos?"*, font-light, color `#F5F0E8`
- Subtítulo: "Abierto a oportunidades y proyectos interesantes."
- Links: email, LinkedIn, GitHub, Twitter — color acento `#C4956A`

---

## Cambios en el código

### CSS Variables (`app/globals.css`)
Reemplazar toda la paleta dark por la paleta Pergamino & Tinta. Variables a cambiar: `--background`, `--foreground`, `--card`, `--muted`, `--muted-foreground`, `--border`, `--primary`, `--secondary`, etc.

### Layout (`app/layout.tsx`)
- Remover `className="dark"` del `<html>`

### Header (`components/header.tsx`)
- Actualizar bio al texto aprobado
- Ajustar estilos para paleta light

### Sección Technical (`components/technical.tsx`)
- **Eliminar** del render en `app/page.tsx`
- El archivo puede quedar pero no se importa

### Tags de proyectos
- `components/projects-desktop.tsx` — eliminar el bloque de badges de tecnologías (líneas 59–65)
- `components/projects-mobile.tsx` — eliminar el bloque de badges de tecnologías (líneas 52–62)

### Nueva estructura de secciones (`app/page.tsx`)
Reemplazar el layout actual de sección única por tres secciones visuales:
1. `<section>` Hero — full viewport height, contenido centrado
2. `<section>` Proyectos — fondo `#EDE5D8`, lista completa
3. `<section>` Contacto — fondo `#1A1612`, texto claro

### Componente tarjeta destacada
Nuevo componente simple inline o en `components/featured-project.tsx` — recibe el primer proyecto de la lista y lo renderiza como card destacada en el hero.

### Scroll hint
Elemento decorativo con animación CSS simple (bounce) al pie del hero.

---

## Verificación

1. `npm run dev` → abrir localhost
2. Hero visible completo sin scroll, fondo crema, texto oscuro
3. Scroll a sección proyectos → fondo EDE5D8, sin ningún badge/tag visible
4. Scroll a contacto → fondo #1A1612, links en acento camel
5. `npm run build` → sin errores de TypeScript
6. Verificar mobile: hero compacto, lista de proyectos legible
