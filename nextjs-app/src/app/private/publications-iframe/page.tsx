import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
};

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement>
        <div className="font-cmubright">
          <iframe
            src="/biblio-chicago-li.html"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
