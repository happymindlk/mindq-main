import type { ReactNode } from 'react';

interface PillProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  count?: number;
}

/** Filter pill — 44px min height for touch. */
export function Pill({ active, onClick, children, count }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
        active
          ? 'border-brand-700 bg-brand-700 text-white dark:border-brand-600 dark:bg-brand-600'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-night-700 dark:bg-night-900 dark:text-slate-300 dark:hover:bg-night-800'
      }`}
    >
      {children}
      {count !== undefined && (
        <span
          className={`rounded-full px-1.5 text-xs ${
            active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 dark:bg-night-800 dark:text-slate-400'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}
