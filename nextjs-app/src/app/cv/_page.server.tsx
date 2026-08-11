import MarkdownFile from "../_utils/_markdown-file";
import {
  getMarkdownAsObjectsFromDir,
  getSubDirectoryName,
} from "../_utils/_markdown-utils.server";
import { CvContent } from "./_page.client";

// runs at build time on the server
// just a wrapper component, so that the client can receive the loaded md files
export default async function CvPage() {
  const staticMarkdown: Array<MarkdownFile> = await getMarkdownAsObjectsFromDir(
    getSubDirectoryName(import.meta.url, "_mdfiles"),
  );
  return <CvContent md={staticMarkdown} />;
}
