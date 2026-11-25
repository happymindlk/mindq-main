import type { ReactNode } from 'react';

type Tone = 'violet' | 'coral' | 'emerald' | 'neutral';

const tones: Record<Tone, string> = {
  violet: 'border-violet-500/25 bg-violet-500/10 text-violet-800 dark:text-violet-200',
  coral: 'border-rose-500/25 bg-rose-500/10 text-rose-800 dark:text-rose-200',
  emerald: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300',
  neutral: 'border-slate-400/25 bg-slate-500/5 text-slate-700 dark:text-slate-300',
};

/** Monospace chip for system states and metrics, e.g. "UTC-Locked" or "92/100". */
export function MonoTag({
  children,
  tone = 'violet',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-xs font-medium whitespace-nowrap ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
