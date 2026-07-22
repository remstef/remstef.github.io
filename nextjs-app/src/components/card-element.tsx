import React from "react";
import { twMerge } from "tailwind-merge";

export default function CardElement({
  children,
  title,
  className,
  classNameBody,
  classNameTitle,
}: Readonly<{
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: string | undefined | null | false | 0;
  classNameBody?: string | undefined | null | false | 0;
  classNameTitle?: string | undefined | null | false | 0;
}>) {
  return (
    <div className={twMerge("card m-1 shadow-xl bg-base-100", className)}>
      <div className={twMerge("card-body", classNameBody)}>
        {title ? <h2 className={twMerge("card-title", classNameTitle)}>{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
