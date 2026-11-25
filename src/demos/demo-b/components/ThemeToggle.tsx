import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/theme-context';
import { focusRing } from './styles';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-violet-500/15 text-slate-600 transition-colors duration-200 hover:bg-violet-500/10 hover:text-slate-900 dark:border-violet-500/20 dark:text-slate-300 dark:hover:text-white ${focusRing} ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
