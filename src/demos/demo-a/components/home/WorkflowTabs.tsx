import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check, FileText, Mail, Sparkles } from 'lucide-react';
import { workflowSteps } from '../../../../data/company';
import { Section, SectionHeading } from '../Section';
import { ScoreBadge } from '../ScoreBadge';
import { candidateReports } from '../../../../data/candidates';

function CreatePreview() {
  const items = [
    { name: 'Big Five Personality', min: 15 },
    { name: 'Numerical Reasoning', min: 18 },
    { name: 'Stakeholder SJT', min: 20 },
  ];
  return (
    <div className="space-y-2.5">
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Battery · Senior Product Manager</p>
      {items.map((it, i) => (
        <div
          key={it.name}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-night-700 dark:bg-night-900"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand-700/10 text-xs font-bold text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
            {i + 1}
          </span>
          <span className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-200">{it.name}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{it.min} min</span>
        </div>
      ))}
      <p className="pt-1 text-xs text-slate-500 dark:text-slate-400">Total 53 min · Norm: APAC Product Leaders</p>
    </div>
  );
}

function InvitePreview() {
  const rows = [
    { name: 'Amaya Perera', status: 'Completed', done: true },
    { name: 'Kasun Jayawardena', status: 'Completed', done: true },
    { name: 'Dilini Rajapaksa', status: 'In progress · 62%', done: false },
    { name: 'Nuwan Wickramasinghe', status: 'Invited', done: false },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white dark:border-night-700 dark:bg-night-900">
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 text-xs font-semibold text-slate-500 dark:border-night-700 dark:text-slate-400">
        <Mail className="size-3.5" aria-hidden="true" /> 48 invited · 31 completed
      </div>
      <ul>
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 last:border-0 dark:border-night-800">
            <span className="flex-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">{r.name}</span>
            <span
              className={`inline-flex items-center gap-1 text-xs font-medium ${
                r.done ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {r.done && <Check className="size-3.5" aria-hidden="true" />}
              {r.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DecidePreview() {
  return (
    <div className="space-y-2.5">
      {candidateReports.map((r, i) => (
        <div
          key={r.id}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-night-700 dark:bg-night-900"
        >
          <span className="text-xs font-bold text-slate-400">#{i + 1}</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">{r.name}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{r.recommendation}</span>
          </span>
          <ScoreBadge score={r.overallScore} size="sm" />
        </div>
      ))}
      <div className="flex gap-2 rounded-xl bg-brand-700/[0.05] p-3 text-xs leading-relaxed text-slate-700 dark:bg-brand-400/10 dark:text-slate-300">
        <Sparkles className="mt-0.5 size-3.5 shrink-0 text-brand-700 dark:text-brand-400" aria-hidden="true" />
        Both candidates exceed the role benchmark. Amaya leads on stakeholder judgement; Kasun on verbal reasoning.
      </div>
    </div>
  );
}

const previews = [CreatePreview, InvitePreview, DecidePreview];

export function WorkflowTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const onKeyDown = (e: KeyboardEvent) => {
    const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + workflowSteps.length) % workflowSteps.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const step = workflowSteps[active];
  const Preview = previews[active];

  return (
    <Section id="product" tone="muted">
      <SectionHeading
        eyebrow="How MindQ works"
        title="From job profile to confident decision in three steps"
        description="A structured, evidence-based workflow that replaces CV screens and unstructured gut-feel interviews."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div role="tablist" aria-label="Workflow steps" aria-orientation="vertical" className="flex flex-col gap-3" onKeyDown={onKeyDown}>
          {workflowSteps.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`group flex cursor-pointer gap-4 rounded-2xl border p-5 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                  selected
                    ? 'border-brand-700/30 bg-white shadow-md shadow-slate-900/5 dark:border-brand-400/30 dark:bg-night-950'
                    : 'border-transparent hover:border-slate-200 hover:bg-white/60 dark:hover:border-night-700 dark:hover:bg-night-950/50'
                }`}
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold transition-colors ${
                    selected
                      ? 'bg-gradient-to-br from-brand-700 to-coral-500 text-white'
                      : 'bg-slate-200/70 text-slate-600 dark:bg-night-800 dark:text-slate-300'
                  }`}
                >
                  {s.step}
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-slate-900 dark:text-white">
                    <span className="text-slate-400 dark:text-slate-500">{s.short} · </span>
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="rounded-2xl border border-slate-200 bg-slate-100/60 p-5 sm:p-8 dark:border-night-700 dark:bg-night-800/50"
        >
          <div key={step.id} className="animate-fade-up">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-400">
              <FileText className="size-4" aria-hidden="true" />
              Step {step.step}: {step.short}
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {step.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
