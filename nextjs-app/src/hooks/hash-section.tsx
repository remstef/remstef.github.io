// inspired by
// https://www.xjavascript.com/blog/how-to-update-url-hash-when-scrolling-through-sections-in-reactjs/#how-to-detect-the-active-section

import { useEffect, useState } from "react";

export function useHash(initialState: string) {
  const [activeSection, setActiveSection] = useState<string>(initialState);

  // Handle initial hash or hash change
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1); // Remove '#'
    if (hash) {
      setActiveSection(hash);
      // // Scroll to the section, this is actually not necessary
      // const section = document.getElementById(hash);
      // if (section) {
      //   section.scrollIntoView({ behavior: 'smooth' });
      // }
    }
  };

  useEffect(() => {
    // Run once on mount to handle initial hash
    handleHashChange();
    // Listen for hash changes (e.g., user clicks browser back/forward)
    window.addEventListener("hashchange", handleHashChange);
    // remove once finished
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return [activeSection, setActiveSection];
}
