/** Brand violet-to-coral glow. Decorative and clipped by its own wrapper, so it never causes horizontal scroll. */
export function AmbientGlow({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] max-w-none -translate-x-[75%] animate-glow-drift rounded-full bg-violet-400/20 blur-[120px] dark:bg-violet-600/25" />
      <div className="absolute -top-32 left-1/2 h-[420px] w-[640px] max-w-none translate-x-[0%] animate-glow-drift rounded-full bg-rose-300/20 blur-[120px] [animation-delay:-9s] dark:bg-rose-500/15" />
    </div>
  );
}
