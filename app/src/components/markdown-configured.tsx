import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function MarkdownConfigured({
  children,
}: Readonly<{ children: string | null | undefined }>) {
  return (
    <article className="prose">
      <Markdown rehypePlugins={[rehypeRaw]}>{children}</Markdown>
    </article>
  );
}
