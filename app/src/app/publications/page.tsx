import CardElement from "@/components/card-element";
import { HtmlLoader } from "@/components/html-loader";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement>
        <HtmlLoader filename={`${process.env.PAGES_BASE_PATH}/biblio-chicago-li.html`} />
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
