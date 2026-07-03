import CardElement from "@/components/card-element";
import { HtmlLoader } from "@/components/html-loader";
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
          <HtmlLoader
            filename={`${process.env.PAGES_BASE_PATH}/biblio-chicago-li.html`}
          />
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
