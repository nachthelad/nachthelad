import type { ReactNode } from "react";
import type { Project } from "./projects-data";

export function PortfolioListItem({
  entry,
  avatar,
}: {
  entry: Project;
  avatar?: ReactNode;
}) {
  const { name, description, link } = entry;

  return (
    <li className="group flex items-start gap-3 py-4">
      {avatar}
      <div className="min-w-0 flex-1">
        <h2 className="break-words font-semibold">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="rounded-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
              {name}
            </a>
          ) : name}
        </h2>
        <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${name}`}
            className="mt-3 inline-flex min-h-9 items-center rounded-full border border-border px-4 text-sm font-medium hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
          >
            Abrir
          </a>
        )}
      </div>
    </li>
  );
}
