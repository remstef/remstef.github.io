import {
  seoUrlLocation,
  theProtagonistsAtHandle,
  theProtagonistsFullName,
  theProtagonistsIdentifier,
} from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import { Metadata } from "next";
import { ProfessionsContent } from "./_page-content";

const currentpath: string = getPathRelativeToAppFolder(import.meta.url);
const currentPageTitle: string = "Professional Experience";
const currentPageDescription: string = `Professional experience of Steffen Remus, Ph.D. (@remstef) an NLP, ML, AI & Software Engineer.`;

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

export default function CV() {
  return <ProfessionsContent />;
}
