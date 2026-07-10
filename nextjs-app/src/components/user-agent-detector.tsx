"use client"

import { useAlerts } from "@/context/alerts-state";
import { useEffect } from "react";

export default function UserAgentDetector(){
  const { listOfActiveAlerts, showAlert, removeAlert } = useAlerts();
  // Add this to your layout or a client component
  useEffect(() => {
    const isFirefox = navigator.userAgent.includes("Mozilla") || navigator.userAgent.includes("Firefox");
    const isMobile = /Android|webOS|iOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    showAlert(
      "info",
      `Your on: ${navigator.userAgent}`,
      30,
    );

    if (isFirefox && isMobile) {
      showAlert(
        "info",
        `Firefox mobile detected`,
        30,
      );
      document.documentElement.classList.add('firefox-mobile');
    }
  }, []);

  return null;
}