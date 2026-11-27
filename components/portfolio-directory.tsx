"use client";

import { useSearchParams } from "next/navigation";
import type { PortfolioEntry } from "@/lib/notion";
import styles from "./portfolio-directory.module.css";
import { PortfolioListItem } from "./portfolio-list-item";
import { ProjectsList } from "./projects-list";

type DirectoryProps = {
  projects: PortfolioEntry[];
  bots: PortfolioEntry[];
  error: boolean;
};

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

function PortfolioViewSwitch({ showBots, onSelectView }: { showBots: boolean; onSelectView?: (showBots: boolean) => void }) {
  return (
    <div role="group" aria-label="Vista del portfolio" className="mx-auto relative mb-8 grid w-fit grid-cols-2 rounded-full border bg-muted p-0.5">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0.5">
        <span className={`block h-full w-1/2 rounded-full bg-secondary motion-safe:transition-transform motion-safe:duration-[180ms] motion-safe:ease-[cubic-bezier(.4,0,.2,1)] ${showBots ? "translate-x-full" : "translate-x-0"}`} />
      </span>
      {(["Proyectos", "Bots"] as const).map((label) => (
        <button
          key={label}
          type="button"
          aria-pressed={showBots === (label === "Bots")}
          onClick={onSelectView && (() => onSelectView(label === "Bots"))}
          className="relative min-h-10 rounded-full px-4 text-[13px] font-medium text-muted-foreground hover:text-primary aria-pressed:text-white focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:min-h-9"
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function PortfolioDirectoryFallback({ projects, error }: Pick<DirectoryProps, "projects" | "error">) {
  return (
    <>
      <PortfolioViewSwitch showBots={false} />
      <ProjectsList projects={projects} error={error} />
    </>
  );
}

export function PortfolioDirectory({ projects, bots, error }: DirectoryProps) {
  const showBots = useSearchParams().get("view") === "bots";

  function selectView(nextShowBots: boolean) {
    const url = new URL(window.location.href);
    if ((url.searchParams.get("view") === "bots") === nextShowBots) return;

    if (nextShowBots) url.searchParams.set("view", "bots");
    else url.searchParams.delete("view");
    window.history.pushState(null, "", url);
  }

  return (
    <>
      <PortfolioViewSwitch showBots={showBots} onSelectView={selectView} />
      <div className={styles.panels}>
        <div className={styles.panel} aria-hidden={showBots} inert={showBots}>
          <div className={styles.content}>
            <ProjectsList projects={projects} error={error} />
          </div>
        </div>
        <div className={styles.panel} aria-hidden={!showBots} inert={!showBots}>
          <div className={styles.content}>
            <BotsList bots={bots} error={error} />
          </div>
        </div>
      </div>
    </>
  );
}
