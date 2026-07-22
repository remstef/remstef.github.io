import { twMerge } from "tailwind-merge";

export default function ResponsiveCardsContainer({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={twMerge(
        "container items-center justify-center w-full sm:w-2/3",
        className,
      )}
    >
      {children}
    </div>
  );
}
