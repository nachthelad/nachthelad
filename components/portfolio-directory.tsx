"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { PortfolioEntry } from "@/lib/notion";
import { ProjectsList } from "./projects-list";

function BotAvatar({ bot }: { bot: PortfolioEntry }) {
  const [failedImage, setFailedImage] = useState("");
  const { avatar } = bot;
  return (
    <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border bg-background font-semibold">
      {avatar && "src" in avatar && avatar.src !== failedImage ? (
        <Image unoptimized src={avatar.src} width={40} height={40} alt="" className="size-full object-cover" onError={() => setFailedImage(avatar.src)} />
      ) : avatar && "emoji" in avatar ? avatar.emoji : Array.from(bot.name.trim())[0]?.toUpperCase()}
    </span>
  );
}

function BotsList({ bots, error }: { bots: PortfolioEntry[]; error: boolean }) {
  if (error || !bots.length) {
    return <p className="py-8 text-center text-sm text-muted-foreground">{error ? "No pudimos cargar los bots. Intentá de nuevo más tarde." : "No hay bots disponibles."}</p>;
  }
  return (
    <ul className="divide-y divide-border border-y">
      {bots.map((bot) => (
        <li key={bot.id} className="flex items-center gap-3 py-4">
          <BotAvatar bot={bot} />
          <div className="min-w-0 flex-1">
            <p className="break-words font-semibold">{bot.name}</p>
            <p className="truncate text-sm text-muted-foreground" title={bot.description}>{bot.description}</p>
          </div>
          {bot.link && (
            <a href={bot.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${bot.name}`} className="shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium hover:text-primary focus-visible:outline-2">
              Abrir
            </a>
          )}
        </li>
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
      <div role="group" aria-label="Vista del portfolio" className="mx-auto relative mb-8 grid w-fit grid-cols-2 rounded-full border bg-muted p-1">
        <span aria-hidden="true" className="pointer-events-none absolute inset-1">
          <span className={`block h-full w-1/2 rounded-full bg-secondary transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none ${showBots ? "translate-x-full" : "translate-x-0"}`} />
        </span>
        {(["Proyectos", "Bots"] as const).map((label) => (
          <button key={label} type="button" aria-pressed={showBots === (label === "Bots")} onClick={() => selectView(label === "Bots")}
            className="relative min-h-11 rounded-full px-5 text-sm font-medium text-muted-foreground hover:text-primary aria-pressed:text-white focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
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
