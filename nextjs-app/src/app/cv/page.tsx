import { seoUrlLocation, theProtagonistsAtHandle, theProtagonistsIdentifier, theProtagonistsName } from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import { Metadata } from "next";
import { CvContent } from "./_page-content";

const currentpath:string = getPathRelativeToAppFolder(import.meta.url);
const title:string = "CV";

// metadata overrides
export const metadata: Metadata = {
  title: title,
  // description: `${seoDescription}`, // TODO: per page description
  // keywords: seoKeywords, // TODO: per page keywords
  alternates: {
    canonical: `${seoUrlLocation}${currentpath}`, // per page canonical url
  },
  openGraph: {
    url: `${seoUrlLocation}${currentpath}`, // per page location 
    // title: ... // per page title --> automatically inferred from title + template
    // description: seoDescription, // TODO: per page description
    siteName: `${title}: ${theProtagonistsName} (${theProtagonistsAtHandle})`,
  },
  twitter: {
    card: "summary_large_image",
    // title: ... // per page title --> automatically inferred from title + template
    // description: seoDescription, // TODO: per page description
    site: `${title}: ${theProtagonistsName} (${theProtagonistsAtHandle})`, // per page sitename
    siteId: `${title.toLowerCase()}:${theProtagonistsIdentifier}`, // per page siteid
  }
};

export default function CV() {
  return <CvContent />;
}
