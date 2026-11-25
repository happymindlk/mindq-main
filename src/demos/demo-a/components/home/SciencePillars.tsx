import { Activity, Lock, Scale, Target } from 'lucide-react';
import { sciencePillars } from '../../../../data/company';
import { Section, SectionHeading } from '../Section';

const icons = { reliability: Activity, validity: Target, fairness: Scale, security: Lock } as const;

export function SciencePillars() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Science & validity"
        title="Built by occupational psychologists. Proven on real performance data."
        description="Every MindQ assessment ships with a technical manual covering reliability, validity, norms and fairness."
      />
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4 dark:border-night-700 dark:bg-night-700">
        {sciencePillars.map((p) => {
          const Icon = icons[p.id as keyof typeof icons] ?? Activity;
          return (
            <div key={p.id} className="flex flex-col bg-white p-6 sm:p-7 dark:bg-night-900">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-700/[0.07] text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">{p.title}</h3>
              <p className="mt-1 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">{p.metric}</p>
              <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">{p.metricLabel}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
