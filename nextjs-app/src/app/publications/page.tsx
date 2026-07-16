import "@/../public/biblio-chicago.css";
import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { seoUrlLocation, theProtagonistsAtHandle, theProtagonistsIdentifier, theProtagonistsName } from "@/lib/constants";
import { getPathRelativeToAppFolder } from "@/lib/utils";
import { readFile } from "fs/promises";
import type { Metadata } from "next";
import path from "path";

const currentpath:string = getPathRelativeToAppFolder(import.meta.url);
const title:string = "Publications";

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

const html = await readFile(
  path.join(process.cwd(), "/public/biblio-chicago-li.html"),
  { encoding: "utf8" },
);

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement>
        <div className="font-cmubright">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
