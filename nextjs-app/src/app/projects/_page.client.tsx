"use client";

import CardElement from "@/components/card-element";
import { C, CollapseElement, T } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";
import MarkdownFile, { compareMarkdownFiles } from "../_utils/_markdown-file";

export function PageContent({ md }: { md: MarkdownFile[] }) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Research Projects" classNameTitle="mb-2">
        {md
          .sort((a, b) => compareMarkdownFiles(b, a))
          .map((obj) => (
            <div key={obj.filename}>
              <hr className="mb-2 text-base-300" />
              <section id={`${obj.metadata?.sectionid}`} />
              {/* <pre>{JSON.stringify(obj, null, 2)}</pre> */}
              <CollapseElement
                openByDefault={
                  activeSection === obj.metadata?.sectionid ||
                  obj.metadata?.open
                }
                show_open_close_icon={true}
                titleBoxClassName=""
                title={<T>{`${obj.metadata?.title}`}</T>}
                children={
                  <C className="">
                    <MarkdownConfiguredExplicit>
                      {`${obj.content}`}
                    </MarkdownConfiguredExplicit>
                  </C>
                }
              />
            </div>
          ))}
      </CardElement>
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
