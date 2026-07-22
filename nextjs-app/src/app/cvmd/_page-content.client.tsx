"use client";

import CardElement from "@/components/card-element";
import { CollapseElement } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";
import { ReactNode } from "react";
import MarkdownFile from "./_markdown";

const Titlespan = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <span className="font-fancy text-xl m-2" children={children} />;
};
const T = Titlespan;

const Contentdivjustified = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div
      className="my-2 pb-2 text-justify wrap-break-word whitespace-normal [hyphens:auto]"
      children={children}
    />
  );
};
const CJ = Contentdivjustified;

// const html = await readFile(
//   path.join(process.cwd(), "/public/biblio-chicago-li.html"),
//   { encoding: "utf8" },
// );

export function CvContent({ md }: { md: MarkdownFile[] }) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Curriculum Vitae">
        {/* <h2 className="text-xl text-center w-full mb-3">
          Curriculum Vitae
        </h2> */}

        <hr className="mt-2 text-base-300" />
        {md.map((obj) => (
          <div key={obj.filename}>
            <section id={`${obj.key}`} />
            {/* <pre>{JSON.stringify(obj, null, 2)}</pre> */}
            <CollapseElement
              openByDefault={activeSection === obj.key}
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
            <hr className="mt-2 text-base-300" />
          </div>
        ))}
      </CardElement>
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
