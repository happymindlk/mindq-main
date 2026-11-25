import type { ReactNode } from 'react';
import { ArrowRight, Brain, Cpu, EyeOff, FileText, ListChecks, MessagesSquare, Send, Sigma } from 'lucide-react';
import { Section, SectionHeading } from '../Section';
import { MonoTag } from '../MonoTag';
import { surface } from '../styles';

function Tile({ title, body, className = '', children }: { title: string; body: string; className?: string; children: ReactNode }) {
  return (
    <article className={`flex flex-col overflow-hidden rounded-2xl ${surface} ${className}`}>
      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">{children}</div>
      <div className="border-t border-violet-500/10 p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">{body}</p>
      </div>
    </article>
  );
}

const blueprintRows = [
  { req: 'Owns roadmap delivery across squads', module: 'Big Five · Conscientiousness facets' },
  { req: 'Negotiates scope with executives', module: 'Stakeholder SJT' },
  { req: 'Prioritises with revenue data', module: 'Numerical Reasoning' },
];

function BlueprintVisual() {
  return (
    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[auto_auto_minmax(0,1fr)]">
      <div className="flex items-center gap-3 rounded-lg border border-violet-500/20 bg-slate-50 px-3 py-2.5 dark:bg-white/3">
        <FileText className="size-8 shrink-0 text-rose-500 dark:text-rose-400" aria-hidden="true" />
        <div className="min-w-0">
          <p className="truncate font-mono text-xs font-medium text-slate-900 dark:text-white">JD_SeniorPM.pdf</p>
          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">or a role brief</p>
        </div>
      </div>
      <ArrowRight className="hidden size-5 text-violet-500 sm:block" aria-hidden="true" />
      <ul className="space-y-2" aria-label="Generated blueprint">
        {blueprintRows.map((r) => (
          <li
            key={r.req}
            className="flex flex-col gap-0.5 rounded-lg border border-violet-500/15 px-3 py-2 text-[13px] sm:flex-row sm:items-center sm:justify-between sm:gap-3"
          >
            <span className="text-slate-700 dark:text-slate-300">{r.req}</span>
            <span className="font-mono text-[11px] whitespace-nowrap text-violet-700 dark:text-violet-300">{r.module}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const modules = [
  {
    icon: Brain,
    name: 'Psychometric',
    detail: 'Big Five personality traits, scored at facet level',
    tag: 'Personality',
  },
  {
    icon: MessagesSquare,
    name: 'Situational Judgement',
    detail: 'Stakeholder and workplace scenarios drawn from the role',
    tag: 'SJT',
  },
  {
    icon: ListChecks,
    name: 'Role Competency',
    detail: 'Role-specific modules such as Numerical Reasoning',
    tag: 'Competency',
  },
];

function ModulesVisual() {
  return (
    <ol className="relative space-y-3">
      {modules.map((m) => (
        <li key={m.name} className="flex gap-3 rounded-xl border border-violet-500/15 bg-slate-50/70 p-3.5 dark:bg-white/2">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300">
            <m.icon className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold text-slate-900 dark:text-white">{m.name}</p>
              <MonoTag tone="neutral" className="text-[10.5px]!">
                {m.tag}
              </MonoTag>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{m.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SynthesisVisual() {
  return (
    <div className="space-y-2.5 font-mono text-xs">
      <div className="flex items-center justify-between gap-3 rounded-lg border border-violet-500/15 px-3 py-2.5">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Sigma className="size-4 text-violet-600 dark:text-violet-300" aria-hidden="true" />
          Facet scoring
        </span>
        <span className="text-slate-500 dark:text-slate-400">deterministic</span>
      </div>
      <div aria-hidden="true" className="ml-5 h-4 w-px bg-linear-to-b from-violet-500 to-rose-400" />
      <div className="flex items-center justify-between gap-3 rounded-lg border border-violet-500/15 px-3 py-2.5">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Cpu className="size-4 text-rose-500 dark:text-rose-300" aria-hidden="true" />
          JD-aligned AI
        </span>
        <span className="text-emerald-700 dark:text-emerald-400">guardrails ✓</span>
      </div>
    </div>
  );
}

function BlindReviewVisual() {
  const rows = ['Candidate 07', 'Candidate 12', 'Candidate 31'];
  return (
    <div className="space-y-3">
      <ul className="space-y-2" aria-label="Blind review shortlist">
        {rows.map((r, i) => (
          <li key={r} className="flex items-center justify-between gap-3 rounded-lg border border-violet-500/15 px-3 py-2">
            <span className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <EyeOff className="size-4 text-slate-400" aria-hidden="true" />
              {r}
            </span>
            <span className="font-mono text-xs text-slate-900 tabular-nums dark:text-white">{[91, 88, 84][i]}/100</span>
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-2 font-mono text-xs text-violet-700 dark:text-violet-300">
        <Send className="size-3.5" aria-hidden="true" />
        100 invites / batch
      </p>
    </div>
  );
}

export function CapabilitiesBento() {
  return (
    <Section id="platform" labelledBy="platform-title">
      <SectionHeading
        id="platform-title"
        kicker="Platform"
        title="One job description in. A complete, defensible assessment out."
        lead="MindQ reads the role, builds the suite, scores it the same way every time, and explains the results in language a hiring panel can act on."
      />
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <Tile
          className="md:col-span-2"
          title="JD PDF to assessment blueprint"
          body="Upload a job description or role brief. MindQ extracts the requirements and maps each one to the module that measures it, ready for you to review."
        >
          <BlueprintVisual />
        </Tile>
        <Tile
          className="lg:col-start-3 lg:row-span-2 lg:row-start-1"
          title="Modular suites"
          body="Combine Psychometric, Situational Judgement and Role Competency modules into a single candidate experience, tailored to each role."
        >
          <ModulesVisual />
        </Tile>
        <Tile
          title="Deterministic + guardrailed AI"
          body="Scores are calculated before AI runs and are never changed by it. The synthesis cites the scale behind every statement."
        >
          <SynthesisVisual />
        </Tile>
        <Tile
          className="md:col-span-2 lg:col-span-1"
          title="Blind Review & bulk invites"
          body="Shortlist on evidence with names hidden, and invite up to 100 candidates per batch."
        >
          <BlindReviewVisual />
        </Tile>
      </div>
    </Section>
  );
}
