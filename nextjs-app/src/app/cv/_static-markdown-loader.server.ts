import MarkdownFile from "../_markdown-utils/_markdown-file";
import {
  getMarkdownAsObjectsFromDir,
  getSubDirectoryName,
} from "../_markdown-utils/_markdown-utils.server";

export const staticMarkdown: Array<MarkdownFile> =
  await getMarkdownAsObjectsFromDir(
    getSubDirectoryName(import.meta.url, "_mdfiles"),
  );
