"use client";

import { profilePictureOptimized, showInitialsOrPicture, theProtagonistsInitials, theProtagonistsName } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";


export function AvatarInitials(){
  return (
    <div className="avatar avatar-placeholder">
      <div className="bg-neutral text-neutral-content w-48 rounded-full">
        <span className="text-3xl">{theProtagonistsInitials}</span>
      </div>
    </div>
  );
}

export function AvatarPicture(){
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

export function ProfilePicture() {
  const [mounted, setMounted] = useState(false);
  // Avoid Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // show box with initials if page is not fully loaded yet
  if (!mounted || showInitialsOrPicture === 'initials') return <AvatarInitials />;

  // else (showInitialsOrPicture === 'picture')
  // show box with Image
  return <AvatarPicture />;
  
}
