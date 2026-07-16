import "@/../public/biblio-chicago.css";
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
const currentPageDescription: string = `List of publications (bibliography) of Steffen Remus, Ph.D. (@remstef) an NLP, ML, AI & Software Engineer with a Dr.rer.nat. from the University of Hamburg.`;

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

const html = await readFile(
  path.join(process.cwd(), "/public/biblio-chicago-li.html"),
  { encoding: "utf8" },
);

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement title="Publications">
        <div className="font-cmubright">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
