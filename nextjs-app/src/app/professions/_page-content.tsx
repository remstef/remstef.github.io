"use client";

import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";

export function ProfessionsContent() {
  const [activeSection, setActiveSection] = useHash("");

  return (
    <ResponsiveCardsContainer>
      {/* BEGIN */}
      <CardElement title="Professional Experience">
        {/* B: ... */}
        <hr className="mt-2 text-base-300" />
        <section id="x" />
        {/* E: ... */}

        {/* B: ... */}
        <hr className="text-base-300" />
        <section id="y" />
        {/* E: ... */}
      </CardElement>
      {/* END */}
    </ResponsiveCardsContainer>
  );
}
