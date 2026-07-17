import { CvContent } from "./_page-content.client";

// just a wrapper component, so that the client can receive the loaded md files
export default async function CvPage() {
  // This runs at build time on the server
  const { staticMarkdown } = await import("./_markdown-loader.server");

  return <CvContent md={staticMarkdown} />;
}
