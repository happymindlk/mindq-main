import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { focusRing } from './styles';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base = `inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[background-color,box-shadow,color,opacity] duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`;

const variants: Record<Variant, string> = {
  primary:
    'bg-linear-to-r from-violet-600 to-rose-500 text-white shadow-[0_8px_24px_-10px_rgba(139,92,246,0.6)] hover:from-violet-500 hover:to-rose-400',
  secondary:
    'border border-violet-500/25 bg-white/70 text-slate-900 hover:bg-violet-500/10 dark:border-violet-400/25 dark:bg-white/3 dark:text-white dark:hover:bg-violet-500/10',
  ghost: 'text-slate-700 hover:bg-violet-500/10 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
};

const sizes: Record<Size, string> = {
  md: 'px-4 text-sm',
  lg: 'min-h-12 px-6 text-[15px]',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

function buttonClass(variant: Variant = 'primary', size: Size = 'md', className = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  type = 'button',
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends CommonProps {
  to: string;
  onClick?: () => void;
}

export function LinkButton({ to, variant = 'primary', size = 'md', className = '', children, onClick }: LinkButtonProps) {
  return (
    <Link to={to} onClick={onClick} className={buttonClass(variant, size, className)}>
      {children}
    </Link>
  );
}
