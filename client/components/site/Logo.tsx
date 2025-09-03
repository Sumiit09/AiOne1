export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-8 w-8"
        viewBox="0 0 64 64"
        aria-label="AiOne logo"
        role="img"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={`hsl(var(--brand-start))`} />
            <stop offset="100%" stopColor={`hsl(var(--brand-end))`} />
          </linearGradient>
        </defs>
        <path
          d="M32 2 58 16v32L32 62 6 48V16z"
          fill="none"
          stroke="url(#g)"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path d="M24 24 40 16 40 40 24 48z" fill="#0f1117" stroke="#0b0f1a" strokeWidth="2" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight">AiOne</span>
    </div>
  );
}
