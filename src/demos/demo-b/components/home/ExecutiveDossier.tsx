import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check, FileDown, ShieldCheck } from 'lucide-react';
import { candidateReports } from '../../../../data/candidates';
import type { TraitScore } from '../../../../types';
import { dossierJd, dossiers, guardrailChecks, type AlignmentBand } from '../../data/dossier';
import { MonoTag } from '../MonoTag';
import { focusRing } from '../styles';

const bandTone: Record<AlignmentBand, 'emerald' | 'violet' | 'coral'> = {
  'Strong alignment': 'emerald',
  Aligned: 'violet',
  'Verify at interview': 'coral',
};

function FacetBar({ item, accent }: { item: TraitScore; accent: 'violet' | 'coral' }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3 text-[13px]">
        <span className="truncate text-slate-700 dark:text-slate-300">{item.label}</span>
        <span className="font-mono text-xs font-medium text-slate-900 tabular-nums dark:text-white">{item.value}</span>
      </div>
      <div
        className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/6"
        role="meter"
        aria-label={`${item.label} percentile`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={item.value}
      >
        <div
          className={`h-full origin-left rounded-full transition-transform duration-500 ease-out ${
            accent === 'violet' ? 'bg-violet-500' : 'bg-linear-to-r from-violet-500 to-rose-400'
          }`}
          style={{ transform: `scaleX(${item.value / 100})` }}
        />
      </div>
    </li>
  );
}

const pipeline = ['Deterministic scoring', 'JD alignment', 'AI synthesis'];

export function ExecutiveDossier() {
  const [activeId, setActiveId] = useState(candidateReports[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const candidate = candidateReports.find((c) => c.id === activeId) ?? candidateReports[0];
  const dossier = dossiers[candidate.id];
  const panelId = `${baseId}-panel`;

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + candidateReports.length) % candidateReports.length;
    setActiveId(candidateReports[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <article
      aria-label="Interactive Executive Candidate Dossier sample"
      className="relative overflow-hidden rounded-[1.25rem] border border-violet-500/20 bg-white/90 shadow-[0_30px_80px_-40px_rgba(76,29,149,0.45)] backdrop-blur-sm dark:border-violet-500/25 dark:bg-abyss-900/85 dark:shadow-[0_30px_100px_-40px_rgba(139,92,246,0.55)]"
    >
      {/* File header */}
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-violet-500/15 px-4 py-3 sm:px-6 dark:border-violet-500/20">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold text-slate-900 dark:text-white">Executive Candidate Dossier</p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{dossierJd.title}</p>
        </div>
        <MonoTag tone="neutral">{dossier.fileRef}</MonoTag>
      </header>

      {/* Candidate switcher */}
      <div role="tablist" aria-label="Sample candidates" className="flex gap-2 px-4 pt-4 sm:px-6">
        {candidateReports.map((c, i) => {
          const selected = c.id === activeId;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${c.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(c.id)}
              onKeyDown={(e) => onTabKey(e, i)}
              className={`flex min-h-11 min-w-0 flex-1 cursor-pointer items-center gap-2.5 rounded-xl border px-2.5 py-1.5 text-left transition-colors duration-200 sm:flex-none sm:pr-4 ${focusRing} ${
                selected
                  ? 'border-violet-500/40 bg-violet-500/10'
                  : 'border-transparent hover:bg-violet-500/5'
              }`}
            >
              <span
                aria-hidden="true"
                className={`grid size-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-semibold ${
                  selected
                    ? 'bg-linear-to-br from-violet-600 to-rose-500 text-white'
                    : 'bg-slate-100 text-slate-600 dark:bg-white/6 dark:text-slate-300'
                }`}
              >
                {c.initials}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                  <span className="sm:hidden">{c.name.split(' ')[0]}</span>
                  <span className="hidden sm:inline">{c.name}</span>
                </span>
                <span className="block font-mono text-[11px] text-slate-500 dark:text-slate-400">{c.overallScore}/100</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${candidate.id}`}
        key={candidate.id}
        className="animate-fade-up px-4 pt-5 pb-4 sm:px-6"
      >
        {/* Pipeline order: scoring always precedes AI */}
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] text-slate-500 dark:text-slate-400" aria-label="Processing order">
          {pipeline.map((p, i) => (
            <li key={p} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 font-mono">
                <Check className="size-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {i + 1}. {p}
              </span>
              {i < pipeline.length - 1 && <span aria-hidden="true" className="h-px w-4 bg-violet-500/30" />}
            </li>
          ))}
        </ol>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Deterministic scores */}
          <section aria-label="Deterministic scores">
            <div className="flex items-end gap-4">
              <p className="font-mono text-5xl leading-none font-semibold tracking-tight text-slate-900 tabular-nums dark:text-white">
                {candidate.overallScore}
                <span className="text-xl text-slate-400 dark:text-slate-500">/100</span>
              </p>
              <div className="pb-0.5">
                <p className="font-mono text-sm font-semibold text-violet-700 dark:text-violet-300">{dossier.roleFit}%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">JD role-fit</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {candidate.normGroup} · <span className="font-mono">{dossier.scoredAtUtc}</span>
            </p>

            <h3 className="mt-5 text-xs font-semibold text-slate-900 dark:text-white">Big Five facets · percentile</h3>
            <ul className="mt-2.5 space-y-2.5">
              {candidate.traits.map((t) => (
                <FacetBar key={t.label} item={t} accent="violet" />
              ))}
            </ul>
            <h3 className="mt-5 text-xs font-semibold text-slate-900 dark:text-white">Module scores</h3>
            <ul className="mt-2.5 space-y-2.5">
              {candidate.competencies.map((t) => (
                <FacetBar key={t.label} item={t} accent="coral" />
              ))}
            </ul>
          </section>

          {/* JD alignment + synthesis */}
          <section aria-label="JD alignment and AI synthesis" className="min-w-0">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white">JD requirement alignment</h3>
            <ul className="mt-2.5 divide-y divide-violet-500/10 rounded-xl border border-violet-500/15 dark:border-violet-500/20">
              {dossier.alignments.map((a) => (
                <li key={a.requirement} className="flex flex-col gap-1.5 px-3 py-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[13px] leading-snug font-medium text-slate-800 dark:text-slate-200">{a.requirement}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{a.evidence}</span>
                    <MonoTag tone={bandTone[a.band]} className="text-[10.5px]!">
                      {a.band}
                    </MonoTag>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl bg-linear-to-br from-violet-500/7 to-rose-500/5 p-3.5 ring-1 ring-violet-500/15 ring-inset">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white">AI executive synthesis</h3>
                <MonoTag tone="emerald">
                  <ShieldCheck className="size-3" aria-hidden="true" />
                  Guardrails verified
                </MonoTag>
              </div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">{dossier.synthesis}</p>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2" aria-label="Language guardrail checks">
                {guardrailChecks.map((g) => (
                  <li key={g} className="flex items-start gap-1.5 text-[11.5px] text-slate-600 dark:text-slate-400">
                    <Check className="mt-0.5 size-3 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-violet-500/15 bg-slate-50/80 px-4 py-3 sm:px-6 dark:border-violet-500/20 dark:bg-white/2">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Interview probes: <span className="font-mono">{dossier.interviewProbes.length}</span> generated
        </p>
        <span
          role="note"
          className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-dashed border-violet-500/35 px-3 text-xs font-semibold text-violet-800 dark:text-violet-200"
        >
          <FileDown className="size-4" aria-hidden="true" />
          Download Executive PDF
          <span className="font-mono font-normal text-slate-500 dark:text-slate-400">preview</span>
        </span>
      </footer>
    </article>
  );
}
