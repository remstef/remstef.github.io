import {
  seoUrlLocation,
  theProtagonistsAtHandle,
  theProtagonistsFullName,
  theProtagonistsIdentifier,
} from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import { readFile } from "fs/promises";
import { Metadata } from "next";
import path from "path";
import { TeachingContent } from "./_page-content";

const currentpath: string = getPathRelativeToAppFolder(import.meta.url);
const currentPageTitle: string = "Teaching";
const currentPageDescription: string = `Teaching experience of Steffen Remus, Ph.D. (@remstef) an NLP, ML, AI & Software Engineer.`;

// metadata overrides
export const metadata: Metadata = {
  title: currentPageTitle,
  description: currentPageDescription, // per page description
  // keywords: seoKeywords, // TODO: per page keywords
  alternates: {
    canonical: `${seoUrlLocation}${currentpath}`, // per page canonical url
  },
  openGraph: {
    url: `${seoUrlLocation}${currentpath}`, // per page location
    // title: ... // per page title --> automatically inferred from title + template
    // description: ... // per page description --> automatically inferred from meta description
    siteName: `${currentPageTitle}: ${theProtagonistsFullName} (${theProtagonistsAtHandle})`,
  },
  twitter: {
    card: "summary_large_image",
    // title: ... // per page title --> automatically inferred from title + template
    // description: ... // per page description --> automatically inferred from meta description
    site: `${currentPageTitle}: ${theProtagonistsFullName} (${theProtagonistsAtHandle})`, // per page sitename
    siteId: `${currentPageTitle.toLowerCase()}:${theProtagonistsIdentifier}`, // per page siteid
  },
};

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
  path.join(process.cwd(), "/public/biblio-chicago.html"),
  { encoding: "utf8" },
);

const supervisionBibHtml = stripHtmlBodyTags(htmlRaw);

export default function CV() {
  return <TeachingContent supervisionBibHtml={supervisionBibHtml} />;
}
