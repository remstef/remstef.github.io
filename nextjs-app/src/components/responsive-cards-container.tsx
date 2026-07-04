export default function ResponsiveCardsContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container items-center justify-center w-full sm:w-2/3">
      {children}
    </div>
  );
}
