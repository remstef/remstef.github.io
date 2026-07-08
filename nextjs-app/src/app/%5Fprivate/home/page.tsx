import { seoRichResultsJsonLD } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      noimageindex: true,
    },
  },
};

export default function Home() {
  return (
    <div className="container w-full">
      <pre>{JSON.stringify(seoRichResultsJsonLD, null, 2)}</pre>
    </div>
  );
}
