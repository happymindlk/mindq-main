interface ScoreBadgeProps {
  score: number;
  max?: number;
  size?: 'sm' | 'md';
}

/** Emerald score chip used across reports and cards. */
export function ScoreBadge({ score, max = 100, size = 'md' }: ScoreBadgeProps) {
  const sizing = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-sm';
  return (
    <span
      className={`inline-flex items-center rounded-full bg-emerald-50 font-semibold whitespace-nowrap text-emerald-700 ring-1 ring-emerald-600/20 ring-inset dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/25 ${sizing}`}
    >
      {score}
      <span className="font-medium opacity-70">/{max}</span>
    </span>
  );
}
