import type { ReactNode } from 'react';
import { container } from './styles';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}

export function Section({ id, className = '', children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-20 sm:py-28 ${className}`}>
      <div className={container}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
}

/** The kicker names the section's subject in sentence case; it is not a decorative eyebrow. */
export function SectionHeading({ id, kicker, title, lead, align = 'left' }: SectionHeadingProps) {
  const center = align === 'center';
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {kicker && <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">{kicker}</p>}
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-[2.5rem] sm:leading-[1.12] dark:text-white"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-slate-600 sm:text-lg dark:text-slate-400">{lead}</p>
      )}
    </div>
  );
}
