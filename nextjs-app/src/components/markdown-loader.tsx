"use client";

import { useEffect, useState } from "react";
import {
  MarkdownConfiguredExplicit,
  MarkdownConfiguredProseArticle,
} from "./markdown-configured";

export function MarkdownLoader({
  filename,
  use = "explicit",
}: Readonly<{ filename: string; use?: "explicit" | "prose" }>) {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(filename)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setMarkdown(text))
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setError(err.message);
      });
  }, [filename]);

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error loading markdown: {error}</p>
      </div>
    );
  }

  return use === "explicit" ? (
    <MarkdownConfiguredExplicit>{markdown}</MarkdownConfiguredExplicit>
  ) : (
    <MarkdownConfiguredProseArticle>{markdown}</MarkdownConfiguredProseArticle>
  );
}
