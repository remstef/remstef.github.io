import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import {
  seoUrlLocation,
  theProtagonistsAtHandle,
  theProtagonistsFullName,
  theProtagonistsIdentifier,
} from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import { readFile } from "fs/promises";
import type { Metadata } from "next";
import path from "path";

const currentpath: string = getPathRelativeToAppFolder(import.meta.url);
const currentPageTitle: string = "Publications";
const currentPageDescription: string = `List of publications of Steffen Remus, Ph.D. (@remstef) an NLP, ML, AI & Software Engineer.`;

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

const html = stripHtmlBodyTags(htmlRaw);

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement title="Publications">
        <div className="biblio" dangerouslySetInnerHTML={{ __html: html }} />
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
