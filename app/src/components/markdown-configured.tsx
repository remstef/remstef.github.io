import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function MarkdownConfiguredProseArticle({
  children,
}: Readonly<{ children: string | null | undefined }>) {
  return (
    <article className="prose">
      <Markdown rehypePlugins={[rehypeRaw]}>
        {children}
      </Markdown>
    </article>
  );
}

export function MarkdownConfiguredExplicit({
  children,
}: Readonly<{ children: string | null | undefined }>) {
  return (
    <Markdown 
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-7 mb-3" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-2" {...props} />,
        h4: ({node, ...props}) => <h4 className="text-xl font-bold mt-5 mb-2" {...props} />,
        h5: ({node, ...props}) => <h5 className="text-lg font-bold mt-4 mb-2" {...props} />,
        h6: ({node, ...props}) => <h6 className="text-base font-bold mt-4 mb-2" {...props} />,
        p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
        li: ({node, ...props}) => <li className="ml-4 -indent-4" {...props} />,
        a: ({node, ...props}) => <a className="text-blue-500 hover:text-blue-700 underline" {...props} />,
        code: ({node, ...props}) => <code className="block bg-gray-900 text-gray-100 p-4 rounded mb-2 overflow-x-auto font-mono text-sm" {...props} />,
        pre: ({node, ...props}) => <pre className="mb-4" {...props} />,
        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-400 pl-4 italic my-2 text-gray-700" {...props} />,
        hr: () => <hr className="my-6 border-t-2 border-gray-300" />,
        img: ({node, ...props}) => <img className="max-w-full h-auto my-2 rounded" {...props} />,
        table: ({node, ...props}) => <table className="border-collapse border border-gray-400 w-full mb-2" {...props} />,
        thead: ({node, ...props}) => <thead className="bg-gray-200" {...props} />,
        th: ({node, ...props}) => <th className="border border-gray-400 px-4 py-2 text-left font-bold" {...props} />,
        td: ({node, ...props}) => <td className="border border-gray-400 px-4 py-2" {...props} />,
      }}
    >
      {children}
    </Markdown>
  );
}
