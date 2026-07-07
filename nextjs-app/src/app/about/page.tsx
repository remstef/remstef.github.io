import CardElement from "@/components/card-element";
import { ProfilePicture } from "@/components/profile-picture";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons/faUniversity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <ResponsiveCardsContainer>
      {/*  */}
      <CardElement>
        {/* <div className="w-full text-2xl mb-2 sm:text-center">About Me</div> */}
        <div className="font-pixel flex flex-wrap-reverse place-content-center place-items-center">
          {/* head info of myself */}
          <div className="w-full lg:w-2/3 2xl:w-1/2">
            <div className="p-4 pr-8 justify-center text-justify wrap-break-word whitespace-normal [hyphens:auto]">
              <h2 className="text-2xl my-2">Steffen Remus</h2>
              <p className="pl-4">
                <span>Dr. rer. nat.</span>
                ,&nbsp;
                <Link href="https://www.inf.uni-hamburg.de/en/inst/ab/lt/people/steffen-remus.html">
                  <span className="link link-primary link-hover">
                    Postdoctoral researcher in the Language Technology Group,
                    University of Hamburg, Germany.
                  </span>
                </Link>
                &nbsp; I work on supervised and unsupervised methods on the
                intersection of machine learning, generative AI, and
                computational linguistics, with a focus on (distributional)
                semantics, information extraction, information retrieval,
                knowledge induction and focused web crawling.
              </p>
            </div>
          </div>
          {/* picture or initials of the protagonist */}
          <div className="justify-center lg:w-1/3 2xl:w-1/4">
            <div className="text-center">
              <ProfilePicture />
            </div>
          </div>
        </div>
      </CardElement>
      {/*  */}
      <CardElement>
        <div className="font-pixel w-full text-2xl mb-2 sm:text-center">
          Visibility
        </div>
        <div className="mx-1 sm:mx-8 text-3xl text-center flex flex-wrap items-center">
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href="https://lt.informatik.uni-hamburg.de/people/steffen-remus"
            title="Institutional Profile"
          >
            <FontAwesomeIcon
              className="link link-primary link-hover"
              icon={faUniversity}
            />
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href="https://www.linkedin.com/in/steffen-remus-54a62498"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon
              className="link link-primary link-hover"
              icon={faSquareLinkedin}
            />
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href="https://github.com/remstef"
            title="Github Profile"
          >
            <FontAwesomeIcon
              className="link link-primary link-hover"
              icon={faGithub}
            />
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href="https://scholar.google.com/citations?user=nDGCpDYAAAAJ"
            title="Google Scholar Profile"
          >
            <i className="link link-primary link-hover no-underline ai ai-google-scholar-square"></i>
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href="https://orcid.org/0000-0003-4303-8781"
            title="OrcId Profile"
          >
            <i className="link link-primary link-hover no-underline ai ai-orcid"></i>
          </Link>
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
