"use client"

import { useEffect } from "react";

export default function UserAgentDetector(){
  // Add this to your layout or a client component
  useEffect(() => {
    const isFirefox = navigator.userAgent.includes("Mozilla") || navigator.userAgent.includes("Firefox");
    const isMobile = /Android|webOS|iOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isFirefox && isMobile) {
      document.documentElement.classList.add('firefox-mobile');
    }
  }, []);

  return null;
}