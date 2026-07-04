import React from "react";
import { twMerge } from "tailwind-merge";

export default function CardElement({
  children,
  title,
  cardClassName = "bg-base-100",
}: Readonly<{
  children: React.ReactNode;
  title?: React.ReactNode;
  cardClassName?: string | undefined | null | false | 0;
}>) {
  return (
    <div className={twMerge("card m-1 shadow-xl", cardClassName)}>
      <div className="card-body">
        {title ? <h2 className="card-title">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
