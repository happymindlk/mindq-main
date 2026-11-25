import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'plain' | 'muted';
}

export function Section({ id, children, className = '', tone = 'plain' }: SectionProps) {
  const bg = tone === 'muted' ? 'bg-slate-50 dark:bg-night-900' : 'bg-white dark:bg-night-950';
  return (
    <section id={id} className={`${bg} py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export function SectionHeading({ eyebrow, title, description, align = 'center', as = 'h2' }: SectionHeadingProps) {
  const Heading = as;
  const alignCls = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase dark:text-brand-400">{eyebrow}</p>
      )}
      <Heading
        className={`mt-3 font-display font-bold tracking-tight text-balance text-slate-900 dark:text-white ${
          as === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-slate-600 sm:text-lg dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-night-800 dark:bg-night-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[48rem] max-w-[200%] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600/15 via-coral-500/10 to-coral-400/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
