export default interface MarkdownFile {
  filename: string;
  key: string;
  filesuffix: string;
  dirname: string;
  content: string;
  metadata?: {
    title?: string;
    sectionid?: string;
    pos?: number;
  };
}

/** Compare by metadata.pos ascending (files without pos go last), then by filename. */
export function compareMarkdownFiles(a: MarkdownFile, b: MarkdownFile): number {
  const posDiff =
    (a.metadata?.pos ?? Number.MAX_SAFE_INTEGER) -
    (b.metadata?.pos ?? Number.MAX_SAFE_INTEGER);
  if (posDiff !== 0) return posDiff;
  return a.filename.localeCompare(b.filename);
}
