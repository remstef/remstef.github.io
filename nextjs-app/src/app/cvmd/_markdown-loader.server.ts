import MarkdownFile from "../_markdown/_markdown-file";
import {
  getMarkdownAsObjectsFromDir,
  getSubDirectoryName,
} from "../_markdown/_markdown-utils.server";

export const staticMarkdown: Array<MarkdownFile> =
  await getMarkdownAsObjectsFromDir(
    getSubDirectoryName(import.meta.url, "_markdown"),
  );
