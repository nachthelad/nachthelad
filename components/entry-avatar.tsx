"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioEntry } from "@/lib/notion";

function projectFavicon(link: string) {
  if (!URL.canParse(link)) return null;
  const { hostname, protocol } = new URL(link);
  if (protocol !== "https:" && protocol !== "http:") return null;
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
}

export function EntryAvatar({ entry }: { entry: PortfolioEntry }) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const { avatar, name } = entry;
  const src = avatar && "src" in avatar ? avatar.src : !avatar && entry.type === "Project" ? projectFavicon(entry.link) : null;
  const fallback = avatar && "emoji" in avatar ? avatar.emoji : Array.from(name.trim())[0]?.toUpperCase();

  return (
    <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full font-semibold">
      {src && src !== failedImage ? (
        <Image unoptimized src={src} width={40} height={40} alt="" className="bot-avatar-art size-full object-cover" onError={() => setFailedImage(src)} />
      ) : fallback}
    </span>
  );
}
