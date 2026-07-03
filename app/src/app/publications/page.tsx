import CardElement from "@/components/card-element";
import { HtmlLoader } from "@/components/html-loader";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";

export default function Publications() {
  return (
    <ResponsiveCardsContainer>
      <CardElement>
        <div className="font-cmubright">
          <HtmlLoader filename={`${process.env.PAGES_BASE_PATH}/biblio-chicago-li.html`} />
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
