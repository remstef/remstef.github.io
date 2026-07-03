
"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

export function CollapseElement({
  title = "Lorem Ipsum",
  children = "Lorem Ipsum dolor sit amet",
  openByDefault = false,
  titleBoxClassName = "hover:bg-base-200",
  show_open_close_icon = true,
}: Readonly<{
  children: React.ReactNode;
  title: React.ReactNode;
  openByDefault?: boolean;
  titleBoxClassName?: string | undefined | null | false | 0;
  show_open_close_icon?: boolean | undefined | null | false | 0;
}>) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(openByDefault);
  }, [openByDefault]);

  return (
    <>
      {/* title box (always shown) */}
      <div
        className={twMerge("cursor-pointer flex ", titleBoxClassName)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* open and close icon */}
        {show_open_close_icon ? (
          <div className="ml-2 mr-2 content-center">
            {/* chevron https://heroicons.com/ * /}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            */}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            )}
          </div>
        ) : (
          <div className="ml-3" />
        )}
        {/* title text (always shown) */}
        <div className="flex w-full">{title}</div>
      </div>
      {/* content box (only shown if wanted) */}
      {isOpen && <div className="ml-3">{children}</div>}
    </>
  );
}
