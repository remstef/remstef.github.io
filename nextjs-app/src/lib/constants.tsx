export const defaultDarkTheme: Readonly<string> = "dim"; //"forest"; // "business";

export const defaultLightTheme: Readonly<string> = "caramellatte"; // "garden"; // "nord";

export const defaultTheme: Readonly<string | null> = defaultLightTheme; // set to null to use user system preference

export const theProtagonistsFullName: Readonly<string> = "Steffen Remus"; // "Steffen Remus, Dr.rer.nat. (Ph.D.)";

export const theProtagonistsName: Readonly<string> = "Steffen Remus";

export const theProtagonistsInitials: Readonly<string> = "S.R.";

export const theProtagonistsAlternateName: Readonly<string> = "@remstef";

export const theProtagonistsIdentifier: Readonly<string> = "5611665";

export const theProtagonistsAlternateProfiles: Readonly<{}> = {
  Institutional: "https://lt.informatik.uni-hamburg.de/people/steffen-remus",
  LinkedIn: "https://www.linkedin.com/in/steffen-remus-54a62498",
  Github: "https://github.com/remstef",
  "Google Scholar": "https://scholar.google.com/citations?user=nDGCpDYAAAAJ",
  ORCiD: "https://orcid.org/0000-0003-4303-8781",
};

export const theProtagonistsDescription: Readonly<string> = `
Dr. rer. nat., Postdoctoral researcher in the Language Technology Group, University of Hamburg, Germany.
Working on supervised and unsupervised methods on the
intersection of machine learning, generative AI, and computational linguistics,
with a focus on (distributional) semantics, information
extraction, information retrieval, knowledge induction and
focused web crawling.
`;

export const showInitialsOrPicture: Readonly<"picture" | "initials"> =
  "picture";

export const profilePictureRaw: Readonly<string> =
  "/raw-images/passfoto-v2-ss-unblurred-squared.jpg";

export const pictureOptimization: Readonly<{
  format: Array<string>;
  size: Array<number>;
}> = {
  format: ["avif", "webp"],
  size: [80, 160, 320, 640, 1280],
};

// Create nested object for access: optimizedPicture[format][size].location
// Usage: profilePictureOptimizedNested['avif'][80].location
export const profilePictureOptimized: Record<
  string,
  Record<number, { location: string; size: number; format: string }>
> = pictureOptimization.size.reduce(
  (acc, size) => {
    pictureOptimization.format.forEach((format) => {
      const location =
        profilePictureRaw
          .substring(0, profilePictureRaw.lastIndexOf("."))
          .replace("/raw-images", "/optimized-images") + `-${size}.${format}`;
      if (!acc[format]) acc[format] = {};
      acc[format][size] = { location, size, format };
    });
    return acc;
  },
  {} as Record<
    string,
    Record<number, { location: string; size: number; format: string }>
  >,
);

// create a flat version of profilePictureOptimized for simplified access
export const profilePictureOptimizedFlat: Array<{
  location: string;
  size: number;
  format: string;
}> = Object.values(profilePictureOptimized).flatMap((obj) =>
  Object.values(obj),
);

export const seoProfilePictureOpenGraph: Readonly<string> =
  profilePictureRaw
    .substring(0, profilePictureRaw.lastIndexOf("."))
    .replace("/raw-images", "optimized-images") + "-320-opengraph-image.png";

export const seoProfilePictureTwitterCard: Readonly<string> =
  profilePictureRaw
    .substring(0, profilePictureRaw.lastIndexOf("."))
    .replace("/raw-images", "optimized-images") + "-320-twitter-image.png";

export const constructionAlert: Readonly<{
  active: boolean;
  typeOfAlert: string;
  message: string;
  seconds: number;
}> = {
  active: true,
  typeOfAlert: "warning",
  message: "This site is under construction.",
  seconds: 3,
};

export const seoUrlLocation: Readonly<string> = `${process.env.NEXT_PUBLIC_WEBSITE_URL}`;

export const seoTitle: Readonly<string> = theProtagonistsFullName;

export const seoDescription: Readonly<string> = `Website of ${theProtagonistsFullName} / ${theProtagonistsAlternateName}: ${theProtagonistsDescription.replaceAll("\n", " ")}`;

export const seoKeywords: Readonly<string> =
  "dr. rer. nat. steffen remus, dr steffen remus, steffen remus phd, phd, dr, dr. rer. nat., steffen remus, steffen, remus, language technology, language, technology, ai, ki, artificial intelligence, artificial, intelligence, künstliche intelligenz, künstliche, intelligenz, lt, hamburg, news, chris biemann, biemann, lingustics, computational linguistics, computational, resources, research, researcher, scientist, ki, ai, artificial intelligence, generative ai, genai, generative, large language models, langauge models, machine learning, ml, clustering, supervised classification, supervised, classification, unsupervised, deep learning, hamburg germany, hamburg, university of hamburg, universität hamburg, universität, sprachtechnologie, nlp, natural language processing, information retrieval, information extraction, knowledge graph, knowledge induction";

export const seoAuthor: Readonly<string> = "Steffen Remus";

export const seoRichResultsJsonLD: Readonly<{}> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-07-01T20:02:59.721Z",
  dateModified: new Date(),
  mainEntity: {
    "@type": "Person",
    name: theProtagonistsName,
    alternateName: theProtagonistsAlternateName,
    identifier: theProtagonistsIdentifier,
    description: `${theProtagonistsName}, ${theProtagonistsDescription.replaceAll("\n", " ").trim()}`,
    image: seoUrlLocation + profilePictureOptimized["webp"][80].location,
    sameAs: Object.values(theProtagonistsAlternateProfiles),
  },
};
