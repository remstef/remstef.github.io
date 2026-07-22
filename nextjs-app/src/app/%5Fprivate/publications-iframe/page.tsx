import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      noimageindex: true,
    },
  },
};

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement>
        <iframe
          src="/biblio-chicago-li.html"
          width="100%"
          height="100%"
        ></iframe>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
