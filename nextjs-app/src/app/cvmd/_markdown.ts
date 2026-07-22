export default interface MarkdownFile {
  filename: string;
  key: string;
  filesuffix: string;
  dirname: string;
  content: string;
  metadata?: {
    title?: string,
    pos?: number
  };
}