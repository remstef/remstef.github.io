"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeMapping() {
  const { theme, setTheme, forcedTheme, resolvedTheme, systemTheme, themes } =
    useTheme();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!resolvedTheme || done) return;

    setTheme(resolvedTheme === "dark" ? "business" : "cupcake");
    setDone(true);
  }, [resolvedTheme, setTheme, done]);

  return null;
}
