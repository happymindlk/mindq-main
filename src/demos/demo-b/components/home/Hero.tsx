import { ArrowDown } from 'lucide-react';
import { AmbientGlow } from '../AmbientGlow';
import { LinkButton } from '../Button';
import { container } from '../styles';
import { ExecutiveDossier } from './ExecutiveDossier';

const flow = ['JD.pdf', 'Blueprint', 'Facet scores', 'Synthesis', 'Executive PDF'];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <AmbientGlow />
      {/* Hairline grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.08)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_30%_20%,black,transparent_70%)] bg-size-[56px_56px]"
      />
      <div className={`${container} grid grid-cols-1 items-start gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-28`}>
        <div className="lg:col-span-5 lg:pt-16">
          <h1
            id="hero-title"
            className="font-display text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance text-slate-900 sm:text-6xl lg:text-[4.1rem] dark:text-white"
          >
            Hire against the job description, not a hunch.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-600 dark:text-slate-300">
            JD-aligned psychometric and AI hiring intelligence. MindQ turns a job description into a tailored
            Psychometric, SJT and Role Competency suite. Every candidate is scored
            deterministically first, then receives a JD-aligned AI executive synthesis written in objective
            psychometric language.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton to="/contact" size="lg">
              Book a Demo
            </LinkButton>
            <LinkButton to="/#how-it-works" variant="secondary" size="lg">
              See How It Works
              <ArrowDown className="size-4" aria-hidden="true" />
            </LinkButton>
          </div>

          <ol
            aria-label="From job description to executive report"
            className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-slate-500 dark:text-slate-400"
          >
            {flow.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={
                    i === 0 || i === flow.length - 1
                      ? 'rounded-md border border-violet-500/25 px-1.5 py-0.5 text-violet-800 dark:text-violet-200'
                      : ''
                  }
                >
                  {step}
                </span>
                {i < flow.length - 1 && <span aria-hidden="true" className="h-px w-3 bg-linear-to-r from-violet-500 to-rose-400" />}
              </li>
            ))}
          </ol>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <ExecutiveDossier />
          <p className="mt-3 text-center text-xs text-slate-500 lg:text-right dark:text-slate-400">
            Sample dossier with illustrative candidates. Switch between them to compare.
          </p>
        </div>
      </div>
    </section>
  );
}
