import ResponsiveCardsContainer from "@/components/responsive-cards-container";
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
    <ResponsiveCardsContainer>
      <></>
    </ResponsiveCardsContainer>
  );
}
