import { useId, useRef, useState, type ComponentType, type KeyboardEvent } from 'react';
import { Check, Clock4, FileDown, Lock, Mail, Save } from 'lucide-react';
import { workflowStages } from '../../data/platform';
import { Section, SectionHeading } from '../Section';
import { MonoTag } from '../MonoTag';
import { focusRing, surface } from '../styles';

function BuildVisual() {
  const rows = [
    ['Big Five Personality', 'Psychometric'],
    ['Stakeholder SJT', 'SJT'],
    ['Numerical Reasoning', 'Competency'],
    ['Verbal Reasoning', 'Competency'],
  ];
  return (
    <div>
      <p className="font-mono text-xs text-slate-500 dark:text-slate-400">Blueprint · Senior Product Manager</p>
      <ul className="mt-3 space-y-2">
        {rows.map(([name, kind]) => (
          <li key={name} className="flex items-center justify-between gap-3 rounded-lg border border-violet-500/15 px-3 py-2.5 text-sm">
            <span className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Check className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              {name}
            </span>
            <span className="font-mono text-[11px] text-violet-700 dark:text-violet-300">{kind}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InviteVisual() {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <Mail className="size-4 text-violet-600 dark:text-violet-300" aria-hidden="true" />
          Batch 03
        </span>
        <MonoTag tone="emerald">100/100 sent</MonoTag>
      </div>
      <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">Candidate enters the code from their inbox</p>
      <div className="mt-3 flex gap-1.5 sm:gap-2" aria-label="Example 6-digit verification code">
        {'482916'.split('').map((d, i) => (
          <span
            key={i}
            className="grid h-12 min-w-0 flex-1 place-items-center rounded-lg border border-violet-500/25 bg-slate-50 font-mono text-lg font-semibold text-slate-900 sm:h-14 sm:text-xl dark:bg-white/3 dark:text-white"
          >
            {d}
          </span>
        ))}
      </div>
      <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-400">Passwordless · 6-digit Email OTP</p>
    </div>
  );
}

function AssessVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3 rounded-lg border border-violet-500/15 px-3 py-3">
        <span className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200">
          <Clock4 className="size-4 text-violet-600 dark:text-violet-300" aria-hidden="true" />
          Stakeholder SJT
        </span>
        <span className="font-mono text-lg font-semibold text-slate-900 tabular-nums dark:text-white">14:32</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <MonoTag>UTC-Locked</MonoTag>
        <MonoTag tone="neutral">
          <Save className="size-3" aria-hidden="true" />
          Autosaved 2s ago
        </MonoTag>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-slate-300 px-3 py-3 text-sm dark:border-white/10">
        <span className="text-slate-500 dark:text-slate-400">Big Five Personality</span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
          <Lock className="size-3.5" aria-hidden="true" />
          Submitted · locked
        </span>
      </div>
    </div>
  );
}

function ReportVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Amaya Perera</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">JD role-fit 94%</p>
        </div>
        <p className="font-mono text-3xl font-semibold text-slate-900 tabular-nums dark:text-white">
          92<span className="text-base text-slate-400">/100</span>
        </p>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
        {['Facet scores computed', 'JD alignment complete', 'Guardrails verified'].map((s) => (
          <li key={s} className="flex items-center gap-2">
            <Check className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            {s}
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/5 px-3 py-2.5 font-mono text-xs text-violet-800 dark:text-violet-200">
        <FileDown className="size-4" aria-hidden="true" />
        Executive_Dossier_Perera.pdf
      </p>
    </div>
  );
}

const visuals: Record<string, ComponentType> = {
  build: BuildVisual,
  invite: InviteVisual,
  assess: AssessVisual,
  report: ReportVisual,
};

export function WorkflowStepper() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const stage = workflowStages[active];
  const Visual = visuals[stage.id];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = workflowStages.length;
    let next: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section id="how-it-works" labelledBy="how-title" className="border-y border-violet-500/10 bg-slate-50/60 dark:bg-abyss-900/30">
      <SectionHeading
        id="how-title"
        kicker="How it works"
        title="Four stages, from job description to executive dossier."
        lead="Each stage hands a verified output to the next, so nothing reaches a hiring panel without a scored basis."
      />

      <div role="tablist" aria-label="Workflow stages" className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {workflowStages.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`group relative flex min-h-14 cursor-pointer flex-col items-start justify-center gap-0.5 overflow-hidden rounded-xl border px-4 py-2.5 text-left transition-colors duration-200 ${focusRing} ${
                selected
                  ? 'border-violet-500/40 bg-white dark:bg-abyss-900'
                  : 'border-violet-500/10 hover:border-violet-500/25 hover:bg-white/60 dark:hover:bg-abyss-900/60'
              }`}
            >
              <span className={`font-mono text-xs ${selected ? 'text-violet-700 dark:text-violet-300' : 'text-slate-500 dark:text-slate-400'}`}>
                Stage {i + 1}
              </span>
              <span className={`text-sm font-semibold ${selected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                {s.short}
              </span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-violet-500 to-rose-400 transition-transform duration-300 ${
                  selected ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${stage.id}`}
        key={stage.id}
        className={`mt-4 grid animate-fade-up grid-cols-1 gap-8 rounded-2xl p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 ${surface}`}
      >
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{stage.title}</h3>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{stage.description}</p>
          <ul className="mt-6 space-y-3">
            {stage.points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] text-slate-700 dark:text-slate-300">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-linear-to-br from-violet-500 to-rose-400" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-violet-500/15 bg-slate-50/70 p-4 sm:p-5 dark:bg-abyss-950/60">
          <Visual />
        </div>
      </div>
    </Section>
  );
}
