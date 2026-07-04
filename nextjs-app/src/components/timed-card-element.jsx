function TimedCardElement({
  children,
  title,
  cardClassName = "bg-base-100",
  seconds = 5,
  onHide,
}) {
  const [state, setState] = useState("visible"); // "visible" | "fading" | "hidden"

  useEffect(() => {
    const fadeStart = setTimeout(
      () => setState("fading"),
      (seconds - 0.5) * 1000,
    );
    const hide = setTimeout(() => {
      setState("hidden");
      if (onHide) onHide();
    }, seconds * 1000);
    return () => {
      clearTimeout(fadeStart);
      clearTimeout(hide);
    };
  }, [seconds, onHide]);

  if (state === "hidden") return null;

  return (
    <div
      className={twMerge(
        `card m-1 shadow-xl transition-opacity duration-500 ${state === "fading" ? "opacity-0" : "opacity-100"}`,
        cardClassName,
      )}
    >
      <div className="card-body">
        {title ? <h2 className="card-title">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
