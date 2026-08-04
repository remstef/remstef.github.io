"use client";

import CardElement from "@/components/card-element";
import { CollapseElement, T } from "@/components/collapse-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";

export function TeachingContent({supervisionBibHtml}: { supervisionBibHtml: string }) {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Teaching Experience">

        {/* B: ... */}
        <hr className="text-base-300" />
        <section id="curriculaUHH" />
        {/* E: ... */}

        {/* B: ... */}
        <hr className="text-base-300" />
        <section id="curriculaTUD" />
        {/* E: ... */}

        {/* B: ... */}
        <hr className="text-base-300" />
        <section id="supervision" />
        <CollapseElement
          openByDefault={activeSection === "supervision"}
          show_open_close_icon={true}
          titleBoxClassName=""
          title={<T>Supervision</T>}
          children={
            <div className="biblio" dangerouslySetInnerHTML={{ __html: supervisionBibHtml }} />
          }
        />
        {/* E: ... */}

      </CardElement>

      {/* B: ... */}
      <section id="theses" />
      <CardElement title="Theses Supervision">
        <div className="biblio" dangerouslySetInnerHTML={{ __html: supervisionBibHtml }} />
      </CardElement>
      {/* E: ... */}
    
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
