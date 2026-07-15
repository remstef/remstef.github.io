import { getPathRelativeToAppFolder } from "@/lib/utils";
import { Metadata } from "next";
import AboutContent from "./about/_page-content";

const currentpath:string = getPathRelativeToAppFolder(import.meta.url);

export const metadata: Metadata = {
  // title: "About",
};

export default function Page() {

  

  return (
    <AboutContent />
    // <>
    // <p>{currentpath}</p>
    // </>
  );
}
