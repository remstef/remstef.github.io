"use client";

import {
  pictureOptimization,
  profilePictureOptimized,
  profilePictureOptimizedFlat,
  showInitialsOrPicture,
  theProtagonistsInitials,
  theProtagonistsName,
} from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export function AvatarInitials() {
  return (
    <div className="avatar avatar-placeholder">
      <div className="bg-neutral text-neutral-content w-48 rounded-full">
        <span className="text-3xl">{theProtagonistsInitials}</span>
      </div>
    </div>
  );
}

export function AvatarPicture() {
  return (
    <div className="avatar">
      <div className="rounded-xl w-48 xl:w-64 relative overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimized["webp"][320].location}`}
          placeholder="empty"
          // placeholder="blur"
          // blurDataURL={`${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureXS}`}
          alt={"Profile Picture - " + theProtagonistsName}
          unoptimized={true}
          fill={true}
          // decoding="sync"
          // preload={true}
          loading="eager"
        />
      </div>
    </div>
  );
}

export function AvatarPictureSrcSet() {
  return (
    <div className="avatar">
      <div className="rounded-xl w-48 xl:w-64 relative overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimized["webp"][80].location}`} // Fallback
          // img-80.webp 80w, img-160.webp 160w, img-80.avif 80w, img-160.avif 160w,
          srcSet={profilePictureOptimizedFlat
            .map(
              (p) =>
                `${process.env.NEXT_PUBLIC_BASE_PATH}${p.location} ${p.size}w`,
            )
            .join(", ")}
          // "(max-width: 1280px) 80px, 160px, 320px, 640px, 1280px"
          sizes={`(max-width: ${pictureOptimization.size[pictureOptimization.size.length - 1]}px) ${pictureOptimization.size.map((s) => `${s}px`).join(", ")}`}
          alt="Pre-optimized image"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function ProfilePicture() {
  const [mounted, setMounted] = useState(false);
  // Avoid Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // show box with initials if page is not fully loaded yet
  if (!mounted || showInitialsOrPicture === "initials")
    return <AvatarInitials />;

  // else (showInitialsOrPicture === 'picture')
  // show box with Image
  return <AvatarPicture />;
}
