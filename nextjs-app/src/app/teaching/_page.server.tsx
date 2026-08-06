import { readFile } from "fs/promises";
import path from "path";
import { TeachingContent } from "./_page-content.client";

/**
 * Strips <html> and <body> tags from HTML content
 */
function stripHtmlBodyTags(html: string): string {
  let cleaned = html.replace(/<html[^>]*>/gi, "").replace(/<\/html>/gi, "");
  cleaned = cleaned.replace(/<head[^>]*>/gi, "").replace(/<\/head>/gi, "");
  cleaned = cleaned.replace(/<body[^>]*>/gi, "").replace(/<\/body>/gi, "");
  return cleaned.trim();
}

const htmlRaw = await readFile(
  path.join(process.cwd(), "/public/biblio-supervision-chicago.html"),
  { encoding: "utf8" },
);

const supervisionBibHtml = stripHtmlBodyTags(htmlRaw);

// just a wrapper component, so that the client can receive the loaded md files
export default async function TeachingPage() {
  // This runs at build time on the server
  const { staticMarkdown } = await import("./_static-markdown-loader.server");

  return (
    <TeachingContent
      supervisionBibHtml={supervisionBibHtml}
      md={staticMarkdown}
    />
  );
}
