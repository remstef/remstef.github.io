"use client";

import CardElement from "@/components/card-element";
import { CollapseElement } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";
import { ReactNode } from "react";

const Titlespan = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    // <span className="font-montserrat font-light text-xl" children={children} />
    <span className="font-pixel text-xl" children={children} />
  );
};
const T = Titlespan;

const Contentdivjustified = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div
      className="font-cmubright text-justify wrap-break-word whitespace-normal [hyphens:auto]"
      children={children}
    />
  );
};
const CJ = Contentdivjustified;

// const html = await readFile(
//   path.join(process.cwd(), "/public/biblio-chicago-li.html"),
//   { encoding: "utf8" },
// );

export interface MarkdownFile {
  fname: string;
  fnamefull: string;
  content: string;
}

export function CvContent({ md }: { md: MarkdownFile[] }) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* <CardElement>
        {JSON.stringify(md, null, 2)}
      </CardElement> */}
      {/* BEGIN */}
      <CardElement title="Curriculum Vitae">
        {/* <h2 className="font-pixel text-xl text-center w-full mb-3">
          Curriculum Vitae
        </h2> */}
        <hr className="mt-2 text-base-300" />
        {md.map((obj) => (
          <div key={obj.fname}>
            <section id={`${obj.fname}`} />
            <CollapseElement
              openByDefault={true}
              show_open_close_icon={true}
              titleBoxClassName=""
              title={<T>{`${obj.fname}`}</T>}
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
