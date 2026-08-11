"use client";

import CardElement from "@/components/card-element";
import { CJ, CollapseElement, T } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";
import MarkdownFile from "../_markdown-utils/_markdown-file";

export function PageContent({ md }: { md: MarkdownFile[] }) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Projects" classNameTitle="mb-2">
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
      </CardElement>
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
