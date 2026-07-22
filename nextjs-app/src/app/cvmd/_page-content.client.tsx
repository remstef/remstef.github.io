"use client";

import CardElement from "@/components/card-element";
import { CollapseElement } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";
import Link from "next/link";
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

export function CvContent({ md }: { md: MarkdownFile[] }) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Curriculum Vitae" classNameTitle="mb-2">
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
      {/* B: CV as PDF */}
      <CardElement className="font-fancy">
        <section id="downloadcv" />
        <CollapseElement
          openByDefault={false}
          titleBoxClassName=""
          show_open_close_icon={activeSection === "downloadcv"}
          title={
            <span className="text-xl text-center w-full mr-3">
              Download CV as PDF
            </span>
          }
          children={
            <div className="flex justify-center">
              <div className="flex-1 justify-center content-center items-center text-center">
                <Link
                  role="button"
                  href="./pdf/cv-resume-1page.pdf"
                  className="w-64 px-2 py-2 mx-8 my-2 btn"
                  children={<span>Short Resume PDF</span>}
                />
                <Link
                  role="button"
                  href="./pdf/cv-resume-full.pdf"
                  className="w-64 px-2 py-2 mx-8 my-2 btn"
                  children={<span>Full Resume PDF</span>}
                />
                <Link
                  role="button"
                  href="./pdf/cv-tabular-1page.pdf"
                  className="w-64 px-2 py-2 mx-8 my-2 btn"
                  children={<span>Short Tabular PDF</span>}
                />
              </div>
            </div>
          }
        />
      </CardElement>
      {/* E: CV as PDF */}
    </ResponsiveCardsContainer>
  );
}
