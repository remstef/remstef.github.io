import React from "react";

export function HtmlLoader({ filename }: Readonly<{ filename: string }>) {
  const [html, setHtml] = React.useState("");
  const [error, setError] = React.useState(null);
  const containerRef: React.Ref<HTMLDivElement | null> =
    React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    fetch(filename)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setHtml(text))
      .catch((err) => {
        console.error("Error loading html:", err);
        setError(err.message);
      });
  }, [filename]);

  // Execute scripts after HTML is rendered
  React.useEffect(() => {
    if (containerRef.current && html) {
      containerRef.current.innerHTML = html;

      // Find and execute script tags
      const scripts = containerRef.current.querySelectorAll("script");
      scripts.forEach((script) => {
        try {
          // // Remove export statements which aren't supported in eval
          let code = script.innerHTML.replace(
            /export\s+(function|const|class)\s+/g,
            "$1 ",
          );
          // Execute regular (simple) JavaScript
          eval(code);
        } catch (err) {
          console.error("Error executing script:", err, script.innerHTML);
        }
      });
    }
  }, [html]);

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error loading html: {error}</p>
      </div>
    );
  }

  return <div ref={containerRef} />;
}
