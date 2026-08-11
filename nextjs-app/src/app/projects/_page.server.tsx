
import MarkdownFile from "../_markdown-utils/_markdown-file";
import {
  getMarkdownAsObjectsFromDir,
  getSubDirectoryName,
} from "../_markdown-utils/_markdown-utils.server";
import { PageContent } from "./_page-content.client";

// runs at build time on the server
// just a wrapper component, so that the client can receive the loaded md files
export default async function ServerPageContent() {
  const staticMarkdown: Array<MarkdownFile> = await getMarkdownAsObjectsFromDir(
    getSubDirectoryName(import.meta.url, "_mdfiles"),
  );
  return <PageContent md={staticMarkdown} />;
}
