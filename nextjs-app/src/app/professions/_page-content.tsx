"use client";

import CardElement from "@/components/card-element";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { useHash } from "@/hooks/hash-section";

// const Titlespan = ({ children }: Readonly<{ children: ReactNode }>) => {
//   return (
//     // <span className="font-montserrat font-light text-xl" children={children} />
//     <span className="font-pixel text-xl" children={children} />
//   );
// };
// const T = Titlespan;

// const Contentdivjustified = ({
//   children,
// }: Readonly<{ children: ReactNode }>) => {
//   return (
//     <div
//       className="font-cmubright text-justify wrap-break-word whitespace-normal [hyphens:auto]"
//       children={children}
//     />
//   );
// };
// const CJ = Contentdivjustified;

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
