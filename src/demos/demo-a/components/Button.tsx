import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-700 text-white shadow-sm shadow-brand-700/20 hover:bg-brand-600 hover:shadow-md hover:shadow-brand-600/25 dark:bg-brand-600 dark:hover:bg-brand-500',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-night-700 dark:bg-night-900 dark:text-white dark:hover:border-slate-500 dark:hover:bg-night-800',
  ghost: 'text-brand-700 hover:bg-brand-700/5 dark:text-brand-400 dark:hover:bg-brand-400/10',
};

const sizes: Record<Size, string> = {
  md: 'px-4 text-sm',
  lg: 'min-h-12 px-6 text-base',
};

function buttonClasses(variant: Variant = 'primary', size: Size = 'md', extra = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = 'primary', size = 'md', className = '', type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...rest} />;
}

interface ButtonLinkProps {
  to: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function ButtonLink({ to, variant = 'primary', size = 'md', className = '', children, onClick }: ButtonLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  );
}
