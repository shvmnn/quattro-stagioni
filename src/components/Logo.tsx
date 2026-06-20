export function SeasonsMark({
  className = "",
  size = 26,
}: {
  className?: string;
  size?: number;
}) {
  // Four quadrants = the four seasons. The signature brand element.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 1v30M1 16h30" stroke="currentColor" strokeWidth="1.2" />
      {/* small seasonal accents in each quadrant */}
      <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="23" cy="9" r="2" fill="currentColor" opacity="0.55" />
      <circle cx="9" cy="23" r="2" fill="currentColor" opacity="0.55" />
      <circle cx="23" cy="23" r="2" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const main = variant === "light" ? "text-cream" : "text-green";
  const sub = variant === "light" ? "text-gold-soft" : "text-gold";
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <SeasonsMark className={sub} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-lg font-semibold tracking-wide ${main}`}>
          Le Quattro Stagioni
        </span>
        <span className={`text-[0.6rem] tracking-[0.35em] uppercase ${sub}`}>
          Cucina Italiana · 1989
        </span>
      </span>
    </span>
  );
}
