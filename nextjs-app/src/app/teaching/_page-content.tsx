"use client";

import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";

export function TeachingContent() {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Teaching Experience">
        {/* B: ... */}
        <hr className="mt-2 text-base-300" />
        <section id="theses" />
        {/* E: ... */}

        {/* B: ... */}
        <hr className="text-base-300" />
        <section id="curriculaUHH" />
        {/* E: ... */}

        {/* B: ... */}
        <hr className="text-base-300" />
        <section id="curriculaTUD" />
        {/* E: ... */}
      </CardElement>
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
