"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UserAgent = {
  userAgentString: string;
  detectedAsFirefoxMobile: boolean;
} | null;

interface UserAgentContextType {
  userAgent: UserAgent;
}

const UserAgentContext = createContext<UserAgentContextType | undefined>(undefined);

export function UserAgentProvider({ children }: { children: React.ReactNode }) {
  const [userAgent, setUserAgent] = useState<UserAgent>(null);

  

  useEffect(() => {
    const isFirefox = navigator.userAgent.includes("Mozilla") || navigator.userAgent.includes("Firefox");
    const isMobile = /Android|webOS|iOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isFirefoxMobile = isFirefox && isMobile;
    document.documentElement.setAttribute('data-firefox-mobile', String(isFirefoxMobile));
    if (isFirefoxMobile) {
      document.documentElement.classList.add('firefox-mobile');
    }
    setUserAgent({userAgentString: navigator.userAgent, detectedAsFirefoxMobile: isFirefoxMobile})
  }, []);

  return (
    <UserAgentContext.Provider value={{ userAgent }}>
      {children}
    </UserAgentContext.Provider>
  );
}

export function useUserAgent() {
  const context = useContext(UserAgentContext);
  if (!context) {
    throw new Error("'useUserAgent' must be used within an 'UserAgentProvider'!");
  }
  return context;
}
