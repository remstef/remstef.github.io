export const defaultDarkTheme: Readonly<string> = "dim"; //"forest"; // "business";

export const defaultLightTheme: Readonly<string> = "caramellatte"; // "garden"; // "nord";

export const defaultTheme: Readonly<string | null> = defaultLightTheme; // set to null to use user system preference

export const theProtagonistsName: Readonly<string> = "Steffen Remus";

export const theProtagonistsInitials: Readonly<string> = "S.R.";

export const theProtagonistsAlternateName: Readonly<string> = "@remstef";

export const theProtagonistsIdentifier: Readonly<string> = "5611665";

export const theProtagonistsAlternateProfiles = {
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

export const showInitialsOrPicture: Readonly<'picture' | 'initials'> = 'picture';

export const profilePictureRaw: Readonly<string> =
  "/raw-images/passfoto-v2-ss-unblurred-squared.jpg";

export const profilePictureOptimized: Readonly<string> = 
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-320.webp'

export const profilePictureOptimizedL: Readonly<string> =
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-640.webp'

export const profilePictureOptimizedXL: Readonly<string> =
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-1280.webp'

export const profilePictureOptimizedS: Readonly<string> =
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-160.webp'

  export const profilePictureOptimizedXS: Readonly<string> =
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-80.webp'

export const showConstructionAlert: Readonly<boolean> = true;

export const seoProfilePictureOpenGraph: Readonly<string> =
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-320-opengraph-image.png';

export const seoProfilePictureTwitterCard: Readonly<string> =
  profilePictureRaw.substring(0, profilePictureRaw.lastIndexOf('.')).replace('/raw-images', 'optimized-images') + '-320-twitter-image.png';

export const seoUrlLocation = `${process.env.NEXT_PUBLIC_WEBSITE_URL}`;

export const seoTitle = "Steffen Remus";

export const seoDescription = `Website of ${theProtagonistsName} / ${theProtagonistsAlternateName}: ${theProtagonistsDescription.replaceAll("\n", " ")}`;

export const seoKeywords =
  "dr. rer. nat. steffen remus, dr steffen remus, steffen remus phd, phd, dr, dr. rer. nat., steffen remus, steffen, remus, language technology, language, technology, ai, ki, artificial intelligence, artificial, intelligence, künstliche intelligenz, künstliche, intelligenz, lt, hamburg, news, chris biemann, biemann, lingustics, computational linguistics, computational, resources, research, researcher, scientist, ki, ai, artificial intelligence, generative ai, genai, generative, large language models, langauge models, machine learning, ml, clustering, supervised classification, supervised, classification, unsupervised, deep learning";

export const seoAuthor = "Steffen Remus";

export const seoRichResultsJsonLD = {
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
    image: seoUrlLocation + profilePictureOptimized,
    sameAs: Object.values(theProtagonistsAlternateProfiles),
  },
};
