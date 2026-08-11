"use client";

import CardElement from "@/components/card-element";
import { CJ, CollapseElement, T } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";
import MarkdownFile from "../_utils/_markdown-file";

export function TeachingContent({
  supervisionBibHtml,
  md,
}: {
  supervisionBibHtml: string;
  md: MarkdownFile[];
}) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Teaching Experience" classNameTitle="mb-2">
        {/* BEGIN md files content */}
        {md.map((obj) => (
          <div key={obj.filename}>
            <hr className="mb-2 text-base-300" />
            <section id={`${obj.metadata?.sectionid}`} />
            {/* <pre>{JSON.stringify(obj, null, 2)}</pre> */}
            <CollapseElement
              openByDefault={activeSection === obj.metadata?.sectionid}
              show_open_close_icon={true}
              titleBoxClassName=""
              title={<T>{`${obj.metadata?.title}`}</T>}
              children={
                <CJ>
                  <MarkdownConfiguredExplicit>
                    {`${obj.content}`}
                  </MarkdownConfiguredExplicit>
                </CJ>
              }
            />
          </div>
        ))}
        {/* END md files content */}

        {/* B: theses supervision */}
        <hr className="text-base-300" />
        <section id="supervision" />
        <CollapseElement
          openByDefault={activeSection === "supervision"}
          show_open_close_icon={true}
          titleBoxClassName=""
          title={<T>Supervised Theses</T>}
          children={
            <div
              className="biblio"
              dangerouslySetInnerHTML={{ __html: supervisionBibHtml }}
            />
          }
        />
        {/* E: theses supervision */}
      </CardElement>
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
