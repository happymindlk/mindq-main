import { focusRing } from './styles';

interface FilterPillsProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

/** Single-select filter rendered as toggle buttons; 44px tall for touch. */
export function FilterPills<T extends string>({ label, options, value, onChange }: FilterPillsProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o)}
            className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${focusRing} ${
              active
                ? 'border-violet-500/50 bg-violet-500/10 text-violet-800 dark:text-violet-200'
                : 'border-violet-500/15 text-slate-600 hover:border-violet-500/30 hover:text-slate-900 dark:border-violet-500/20 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
