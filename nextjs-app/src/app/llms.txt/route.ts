import { seoMetaDescriptionDefault, seoTitle, seoUrlLocation, theProtagonistsDescription } from "@/lib/constants";

export const dynamic = "force-static";

// TODO: generate route URLs automatically. Refactore Navbar:navItems to something like utils/routes or so. 
// Include title, metadescription and so on in those route objects.
// TODO: create a section for each route and write the md file content
export async function GET() {
  const content = `
# ${seoTitle}

> A modern web application built with Next.js and React introducing ${seoMetaDescriptionDefault}
 
## Pages

- [About](${seoUrlLocation}): Short introduction of Steffen Remus, Ph.D. (@remstef); NLP, ML, AI & Software Engineer.
- [CV](${seoUrlLocation}/cv): CV (curriculum vitae, Lebenslauf) of Steffen Remus, Ph.D. (@remstef); NLP, ML, AI & Software Engineer. 
- [Teaching](${seoUrlLocation}/teaching): Teaching experience of Steffen Remus, Ph.D. (@remstef); NLP, ML, AI & Software Engineer.
- [Publications](${seoUrlLocation}/publications): List of publications | Steffen Remus, Ph.D. (@remstef); NLP, ML, AI & Software Engineer.;

## About
${theProtagonistsDescription}

## CV
...


`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
