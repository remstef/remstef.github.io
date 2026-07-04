"use client";

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

// "use client";

// import { useEffect, useState } from "react";

// export function HtmlLoader({ filename }: Readonly<{ filename: string }>) {
//   const [plainHtmlText, setPlainHtmlText] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(filename)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.text();
//       })
//       .then((text) => setPlainHtmlText(text))
//       .catch((err) => {
//         console.error("Error loading markdown:", err);
//         setError(err.message);
//       });
//   }, [filename]);

//   if (error) {
//     return (
//       <div className="container mx-auto p-4">
//         <p className="text-red-500">Error loading markdown: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <article className="prose">
//       {plainHtmlText}
//     </article>
//   );
// }
