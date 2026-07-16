import {
  seoUrlLocation,
  theProtagonistsAtHandle,
  theProtagonistsFullName,
  theProtagonistsIdentifier,
} from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import { Metadata } from "next";
import AboutContent from "./about/_page-content";

const currentpath: string = getPathRelativeToAppFolder(import.meta.url);
const currentPageTitle: string = "About";

// metadata overrides
export const metadata: Metadata = {
  // title: ..., --> do not update title, its defined in layout.tsx
  // description: ..., --> do not update description, its defined in layout.tsx
  // keywords:  ..., --> do not update keywords, its defined in layout.tsx
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

export default function Page() {
  return <AboutContent />;
}
