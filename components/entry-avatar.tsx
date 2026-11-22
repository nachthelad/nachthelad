"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioEntry } from "@/lib/notion";

export function EntryAvatar({ entry }: { entry: PortfolioEntry }) {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const { avatar, projectLogo } = entry;
  const emoji = avatar && "emoji" in avatar ? avatar.emoji : null;
  const sources = [avatar && "src" in avatar && avatar.src, projectLogo, "/icon.svg"];
  const src = sources.find((url): url is string => !!url && !failedImages.includes(url));

  return (
    <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full font-semibold">
      {emoji || (src && (
        <Image
          key={src}
          unoptimized
          src={src}
          width={40}
          height={40}
          alt=""
          className={src === projectLogo ? "bot-avatar-art size-full object-contain" : "bot-avatar-art size-full object-cover"}
          onError={() => setFailedImages((failed) => [...failed, src])}
        />
      ))}
    </span>
  );
}
