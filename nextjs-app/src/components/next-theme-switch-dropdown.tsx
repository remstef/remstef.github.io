"use client";

import {
  closeDetailsSummaryDropdown,
  registerCloseCurrentDetailsSummaryDropdown,
} from "@/lib/utils";
import themes from "daisyui/theme/object.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitchDropdown() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid Hydration Mismatch
  // Because we cannot know the theme on the server, many of the values returned from useTheme will be undefined until mounted on the client.
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <details className="dropdown">
      <summary
        role="button"
        className="btn btn-ghost [list-style:none] appearance-none [&::-webkit-details-marker]:hidden content-center"
        onClick={registerCloseCurrentDetailsSummaryDropdown}
      >
        <div className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border border-gray-400 p-1 transition-colors">
          <div className="bg-base-content size-1 rounded-full"></div>
          <div className="bg-primary size-1 rounded-full"></div>
          <div className="bg-secondary size-1 rounded-full"></div>
          <div className="bg-accent size-1 rounded-full"></div>
        </div>
      </summary>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-[75vw] sm:w-[50vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[30vw] h-[65vh] sm:h-[50vh] p-2 shadow overflow-auto"
      >
        {Object.keys(themes).map((theme_, i_) => (
          <li key={`theme_${i_}`}>
            <div
              tabIndex={0}
              role="button"
              className="btn group btn-sm flex justify-start items-center gap-1.5 px-1.5 btn-ghost"
              onClick={(e) => {
                setTheme(theme_);
                closeDetailsSummaryDropdown(
                  e as unknown as React.MouseEvent<HTMLAnchorElement>,
                );
              }}
            >
              <div
                data-theme={theme_}
                className="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors"
              >
                <div className="bg-base-content size-1 rounded-full"></div>
                <div className="bg-primary size-1 rounded-full"></div>
                <div className="bg-secondary size-1 rounded-full"></div>
                <div className="bg-accent size-1 rounded-full"></div>
              </div>
              <span
                className={`${theme === theme_ ? "underline" : "font-normal"}`}
              >
                {theme_}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </details>
  );
}
