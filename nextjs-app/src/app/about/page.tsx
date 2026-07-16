import { seoUrlLocation, theProtagonistsAtHandle, theProtagonistsIdentifier, theProtagonistsName } from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import type { Metadata } from "next";
import AboutContent from "./_page-content";

/***
 * 
 * /about is a copy of the landing page, which is currently not linked!
 *
 ***/

const currentpath:string = getPathRelativeToAppFolder(import.meta.url);
const title:string = "About";

// metadata overrides
export const metadata: Metadata = {
  title: title,
  // description: `${seoDescription}`, // TODO: per page description
  // keywords: seoKeywords, // TODO: per page keywords
  alternates: {
    canonical: `${seoUrlLocation}`, // about is the same as the landing page, so the canonical version is the root "/". Once the content changes / is different from the landing page, the canonical should become: `${seoUrlLocation}${currentpath}`, // per page canonical url
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

export default function About() {
  return <AboutContent />;
}
