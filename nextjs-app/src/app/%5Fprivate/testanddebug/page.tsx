import type { Metadata } from "next";
import TestAndDebugContent from "./_page-content";

export const metadata: Metadata = {
  title: "Hello World",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      noimageindex: true,
    },
  },
};

export default TestAndDebugContent;
