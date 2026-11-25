import { useTheme } from '../theme/theme-context';

export function Logo({ className = 'h-8 w-auto' }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <img
      src={theme === 'dark' ? '/brand/logo-dark.png' : '/brand/logo-light.png'}
      alt="MindQ"
      width={487}
      height={160}
      className={className}
    />
  );
}

export function Mark({ className = 'h-6 w-auto' }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <img
      src={theme === 'dark' ? '/brand/mark-dark.png' : '/brand/mark-light.png'}
      alt=""
      aria-hidden="true"
      width={121}
      height={128}
      className={className}
    />
  );
}
