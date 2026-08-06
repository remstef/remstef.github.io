"use client";

import {
  profilePictureOptimized,
  profilePictureOptimizedFlat,
  showInitialsOrPicture,
  theProtagonistsInitials,
  theProtagonistsName,
} from "@/lib/constants";
import { useState } from "react";

export function AvatarInitials() {
  return (
    <div className="avatar avatar-placeholder">
      <div className="bg-neutral text-neutral-content w-48 xl:w-64 aspect-square rounded-full">
        <span className="text-5xl">{theProtagonistsInitials}</span>
      </div>
    </div>
  );
}

export function ProfilePicture() {
  const [loaded, setLoaded] = useState(false);

  if (showInitialsOrPicture === "initials") return <AvatarInitials />;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  // Display size: w-48 = 192px, xl:w-64 = 256px
  const sizes = "(min-width: 1280px) 256px, 192px";

  const srcSetFor = (format: string) =>
    profilePictureOptimizedFlat
      .filter((p) => p.format === format)
      .map((p) => `${basePath}${p.location} ${p.size}w`)
      .join(", ");

  return (
    <div className="avatar">
      {/* aspect-square reserves exact space — zero layout shift */}
      <div className="rounded-xl w-48 xl:w-64 relative overflow-hidden aspect-square">
        {/* Initials: painted instantly (LCP), fade out once image loads, then hidden in the DOM */}
        <div
          aria-hidden={loaded}
          className={`absolute inset-0 z-10 flex items-center justify-center bg-neutral text-neutral-content transition-opacity duration-1000 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-5xl">{theProtagonistsInitials}</span>
        </div>
        <picture className="relative z-0 block w-full h-full">
          <source type="image/avif" srcSet={srcSetFor("avif")} sizes={sizes} />
          <source type="image/webp" srcSet={srcSetFor("webp")} sizes={sizes} />
          <img
            src={`${basePath}${profilePictureOptimized["webp"][320].location}`}
            alt={`Profile Picture - ${theProtagonistsName}`}
            loading="eager"
            decoding="async"
            onLoad={() => setLoaded(true)}
            ref={(img) => {
              // Handle cache-hits where load fired before hydration
              if (img?.complete) setLoaded(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </picture>
      </div>
    </div>
  );
}
