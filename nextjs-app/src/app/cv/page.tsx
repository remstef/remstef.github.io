import type { Metadata } from "next";
import { CvContent } from "./_page-content";

export const metadata: Metadata = {
  title: "CV",
};

export default function CV() {
  return <CvContent />;
}
