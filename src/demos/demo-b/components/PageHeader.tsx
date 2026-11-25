import type { ReactNode } from 'react';
import { AmbientGlow } from './AmbientGlow';
import { container } from './styles';

interface PageHeaderProps {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ kicker, title, lead, children }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden border-b border-violet-500/10">
      <AmbientGlow className="-z-10 opacity-80" />
      <div className={`${container} pt-14 pb-14 sm:pt-20 sm:pb-16`}>
        <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.025em] text-balance text-slate-900 sm:text-5xl dark:text-white">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-slate-600 dark:text-slate-300">{lead}</p>
        )}
        {children}
      </div>
    </header>
  );
}
