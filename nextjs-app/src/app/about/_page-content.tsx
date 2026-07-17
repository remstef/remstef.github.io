import CardElement from "@/components/card-element";
import { ProfilePicture } from "@/components/profile-picture";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import { theProtagonistsAlternateProfiles } from "@/lib/constants";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons/faUniversity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AboutContent() {
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
                <span>Dr.&nbsp;rer.&nbsp;nat.&nbsp;(Ph.D.)</span>,&nbsp;
                <Link href={theProtagonistsAlternateProfiles.Institutional}>
                  <span className="link link-primary link-hover">
                    Research scientist in the Language Technology Group,
                    University of Hamburg, Germany.
                  </span>
                </Link>
                &nbsp; I work on supervised and unsupervised methods on the
                intersection of machine learning, generative AI & LLMs, and
                computational linguistics, with a focus on (distributional)
                semantics, clustering, information extraction, information
                retrieval, and knowledge induction.
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
      <CardElement>
        <div className="font-pixel mb-1 w-full text-2xl text-center">
          Summary
        </div>
        <div className="px-8 mb-2 w-full flex justify-center">
          <div className="font-pixel text-justify flex w-full lg:w-7/8 2xl:w-6/8 wrap-break-word whitespace-normal [hyphens:auto]">
            Passionate about software engineering, machine learning, natural
            language processing and web application development. I have a proven
            track record in the development & provision of technical support for
            AI applications utilising ML or GenAI technologies, scalable data
            pipelines, and CI/CD-driven lifecycles, and I am experienced in
            cloud technologies such as AWS/GCP/Azure, containerized deployments,
            observability and interdisciplinary/cross-functional technical
            mentoring.
          </div>
        </div>
      </CardElement>
      {/*  */}
      <CardElement>
        <div className="font-pixel w-full text-2xl mb-2 text-center">
          Visibility
        </div>
        <div className="mx-1 sm:mx-8 text-3xl text-center flex flex-wrap items-center">
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href={theProtagonistsAlternateProfiles.Institutional}
            title="Institutional Profile"
          >
            <FontAwesomeIcon
              className="link link-primary link-hover"
              icon={faUniversity}
            />
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href={theProtagonistsAlternateProfiles.LinkedIn}
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon
              className="link link-primary link-hover"
              icon={faSquareLinkedin}
            />
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href={theProtagonistsAlternateProfiles.Github}
            title="Github Profile"
          >
            <FontAwesomeIcon
              className="link link-primary link-hover"
              icon={faGithub}
            />
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href={theProtagonistsAlternateProfiles["Google Scholar"]}
            title="Google Scholar Profile"
          >
            <i className="link link-primary link-hover no-underline ai ai-google-scholar-square"></i>
          </Link>
          <Link
            className="flex-1 mx-1 sm:mx-2"
            href={theProtagonistsAlternateProfiles.ORCiD}
            title="OrcId Profile"
          >
            <i className="link link-primary link-hover no-underline ai ai-orcid"></i>
          </Link>
        </div>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
