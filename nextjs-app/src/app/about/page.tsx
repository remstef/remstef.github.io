import type { Metadata } from "next";
import AboutContent from "./_page-content";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <AboutContent />;
}
