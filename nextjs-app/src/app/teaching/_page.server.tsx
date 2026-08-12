import { readFile } from "fs/promises";
import path from "path";
import MarkdownFile from "../_utils/_markdown-file";
import {
  getMarkdownAsObjectsFromDir,
  getSubDirectoryName,
} from "../_utils/_markdown-utils.server";
import { TeachingContent } from "./_page.client";

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

const staticMarkdown: Array<MarkdownFile> = await getMarkdownAsObjectsFromDir(
  getSubDirectoryName(import.meta.url, "_mdfiles"),
);

// runs at build time on the server
// just a wrapper component, so that the client can receive the loaded md files
export default async function TeachingPage() {
  return (
    <TeachingContent
      supervisionBibHtml={supervisionBibHtml}
      md={staticMarkdown}
    />
  );
}
