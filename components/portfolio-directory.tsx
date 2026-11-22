"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { PortfolioEntry } from "@/lib/notion";
import { PortfolioListItem } from "./portfolio-list-item";
import { ProjectsList } from "./projects-list";

function BotsList({ bots, error }: { bots: PortfolioEntry[]; error: boolean }) {
  if (error || !bots.length) {
    return <p className="py-8 text-center text-sm text-muted-foreground">{error ? "No pudimos cargar los bots. Intentá de nuevo más tarde." : "No hay bots disponibles."}</p>;
  }
  return (
    <ul className="divide-y divide-border border-y">
      {bots.map((bot) => (
        <PortfolioListItem key={bot.id} entry={bot} />
      ))}
    </ul>
  );
}

export function PortfolioDirectory({ projects, bots, error }: { projects: PortfolioEntry[]; bots: PortfolioEntry[]; error: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const showBots = searchParams.get("view") === "bots";

  function selectView(bots: boolean) {
    const params = new URLSearchParams(searchParams);
    if (bots) params.set("view", "bots");
    else params.delete("view");
    const query = params.toString();
    const url = `${pathname}${query ? `?${query}` : ""}#portfolio`;
    if (url !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.pushState(null, "", url);
    }
  }

  return (
    <>
      <div role="group" aria-label="Vista del portfolio" className="mx-auto relative mb-8 grid w-fit grid-cols-2 rounded-full border bg-muted p-0.5">
        <span aria-hidden="true" className="pointer-events-none absolute inset-0.5">
          <span className={`block h-full w-1/2 rounded-full bg-secondary transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none ${showBots ? "translate-x-full" : "translate-x-0"}`} />
        </span>
        {(["Proyectos", "Bots"] as const).map((label) => (
          <button key={label} type="button" aria-pressed={showBots === (label === "Bots")} onClick={() => selectView(label === "Bots")}
            className="relative min-h-10 rounded-full px-4 text-[13px] font-medium text-muted-foreground hover:text-primary aria-pressed:text-white focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-9">
            {label}
          </button>
        ))}
      </div>
      <div key={showBots ? "bots" : "projects"} className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
        {showBots ? <BotsList bots={bots} error={error} /> : <ProjectsList projects={projects} error={error} />}
      </div>
    </>
  );
}
