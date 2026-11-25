import { ArrowRight, BadgeCheck, CalendarCheck, Clock, ShieldCheck } from 'lucide-react';
import { company } from '../../../../data/company';
import { ButtonLink } from '../Button';
import { ExecutiveReport } from './ExecutiveReport';

const proofPoints = [
  { icon: BadgeCheck, label: 'EFPA-standard reliability' },
  { icon: Clock, label: '62% faster time-to-hire' },
  { icon: ShieldCheck, label: 'ISO 27001 · GDPR' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-night-950">
      {/* Subtle clinical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(15_23_42/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_23_42/0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [background-size:48px_48px] dark:[background-image:linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-12 pb-16 sm:px-6 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-night-700 dark:bg-night-900 dark:text-slate-300">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-brand-700 to-coral-500" aria-hidden="true" />
            Enterprise psychometric & skills assessment
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hire on <span className="text-gradient">validated potential</span>, not CV guesswork.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
            Combine Big Five personality, cognitive reasoning and situational judgement tests into one candidate
            experience — then decide with AI executive summaries your hiring managers will actually read.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact?intent=demo" size="lg">
              <CalendarCheck className="size-5" aria-hidden="true" />
              Book a Demo
            </ButtonLink>
            <ButtonLink to="/assessments" variant="secondary" size="lg">
              Explore Assessments
              <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {proofPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                <Icon className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <ExecutiveReport />
      </div>

      {/* Trusted by */}
      <div className="relative border-y border-slate-200 bg-slate-50/70 dark:border-night-800 dark:bg-night-900/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
          <p className="shrink-0 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Trusted by talent teams at
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 lg:justify-between lg:flex-1">
            {company.trustedBy.map((name) => (
              <li key={name} className="font-display text-sm font-bold whitespace-nowrap text-slate-400 dark:text-slate-500">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
