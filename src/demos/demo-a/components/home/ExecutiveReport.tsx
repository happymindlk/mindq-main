import { useId, useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { candidateReports } from '../../../../data/candidates';
import type { CandidateReport, TraitScore } from '../../../../types';
import { Mark } from '../Logo';
import { ScoreBadge } from '../ScoreBadge';

function ScoreRing({ score }: { score: number }) {
  const gradId = useId();
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-22 shrink-0">
      <svg viewBox="0 0 80 80" className="size-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6D28D9" />
            <stop offset="60%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r={r} fill="none" strokeWidth="7" className="stroke-slate-100 dark:stroke-night-700" />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          stroke={`url(#${gradId})`}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - score / 100)}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl leading-none font-extrabold text-slate-900 dark:text-white">{score}</span>
        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">/ 100</span>
      </div>
    </div>
  );
}

function Bar({ trait, tone }: { trait: TraitScore; tone: 'brand' | 'emerald' }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-medium text-slate-700 dark:text-slate-300">{trait.label}</span>
        <span className="font-semibold text-slate-900 tabular-nums dark:text-white">{trait.value}</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-night-700">
        <div
          className={`h-full rounded-full transition-[width] duration-700 ease-out ${
            tone === 'brand' ? 'bg-gradient-to-r from-brand-700 to-brand-500' : 'bg-emerald-500'
          }`}
          style={{ width: `${trait.value}%` }}
        />
      </div>
    </div>
  );
}

function ReportBody({ report }: { report: CandidateReport }) {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <ScoreRing score={report.overallScore} />
        <div className="min-w-0">
          <p className="font-display text-lg font-bold text-slate-900 dark:text-white">{report.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{report.role}</p>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/20 ring-inset dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/25">
            <CheckCircle2 className="size-3.5" aria-hidden="true" />
            {report.recommendation}
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-brand-600/15 bg-gradient-to-br from-brand-700/[0.04] to-coral-500/[0.04] p-4 dark:border-brand-400/20 dark:from-brand-400/10 dark:to-coral-400/5">
        <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand-700 uppercase dark:text-brand-400">
          <Sparkles className="size-3.5" aria-hidden="true" />
          AI Executive Summary
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{report.aiSummary}</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Big Five · percentile</p>
          <div className="space-y-2.5">
            {report.traits.map((t) => (
              <Bar key={t.label} trait={t} tone="brand" />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Ability & judgement</p>
          <ul className="space-y-2">
            {report.competencies.map((c) => (
              <li
                key={c.label}
                className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 px-3 py-2 dark:border-night-700"
              >
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{c.label}</span>
                <ScoreBadge score={c.value} size="sm" />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export function ExecutiveReport() {
  const [activeId, setActiveId] = useState(candidateReports[0].id);
  const report = candidateReports.find((r) => r.id === activeId) ?? candidateReports[0];
  const baseId = useId();

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-600/20 via-coral-500/10 to-coral-400/20 blur-2xl dark:from-brand-600/25 dark:to-coral-400/15"
      />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.06] dark:border-night-700 dark:bg-night-900 dark:shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-night-700 dark:bg-night-800">
          <Mark className="h-5 w-auto" />
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Live MindQ Executive Report</p>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>

        {/* Candidate switcher */}
        <div role="tablist" aria-label="Candidate" className="grid grid-cols-2 gap-1 border-b border-slate-200 p-2 dark:border-night-700">
          {candidateReports.map((r) => {
            const selected = r.id === activeId;
            return (
              <button
                key={r.id}
                id={`${baseId}-tab-${r.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActiveId(r.id)}
                className={`flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 ${
                  selected
                    ? 'bg-brand-700/[0.06] ring-1 ring-brand-700/25 dark:bg-brand-400/10 dark:ring-brand-400/30'
                    : 'hover:bg-slate-50 dark:hover:bg-night-800'
                }`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    selected
                      ? 'bg-gradient-to-br from-brand-700 to-coral-500 text-white'
                      : 'bg-slate-100 text-slate-600 dark:bg-night-700 dark:text-slate-300'
                  }`}
                  aria-hidden="true"
                >
                  {r.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">{r.name}</span>
                  <span className="hidden text-xs text-slate-500 sm:block dark:text-slate-400">{r.recommendation}</span>
                </span>
                <ScoreBadge score={r.overallScore} size="sm" />
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${report.id}`}
          aria-live="polite"
          key={report.id}
          className="animate-fade-up"
        >
          <ReportBody report={report} />
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-5 py-2.5 text-[11px] text-slate-500 dark:border-night-700 dark:bg-night-800 dark:text-slate-400">
          Norm group: {report.normGroup} · Completed {report.completedOn}
        </div>
      </div>
    </div>
  );
}
