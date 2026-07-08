"use client";

import {
  profilePictureOptimized,
  profilePictureOptimizedL,
  profilePictureOptimizedS,
  profilePictureOptimizedXL,
  profilePictureOptimizedXS,
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
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimized}`}
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
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimized}`} // Fallback
          srcSet={`
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedXS} 80w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedS} 160w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimized} 320w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedL} 640w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedXL} 1280w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedXS.replace(".webp", ".avif")} 80w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedS.replace(".webp", ".avif")} 160w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimized.replace(".webp", ".avif")} 320w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedL.replace(".webp", ".avif")} 640w,
${process.env.NEXT_PUBLIC_BASE_PATH}${profilePictureOptimizedXL.replace(".webp", ".avif")} 1280w
          `.trim()}
          sizes="(max-width: 1280px) 80px, 160px, 320px, 640px, 1280px"
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
