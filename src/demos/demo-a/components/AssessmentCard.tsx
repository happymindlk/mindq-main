import { Brain, Calculator, Clock, ListChecks, Play, Users, Briefcase } from 'lucide-react';
import type { Assessment, AssessmentCategory } from '../../../types';

const categoryStyle: Record<AssessmentCategory, { icon: typeof Brain; cls: string }> = {
  Psychometric: {
    icon: Brain,
    cls: 'bg-brand-700/8 text-brand-700 ring-brand-700/15 dark:bg-brand-400/10 dark:text-brand-400 dark:ring-brand-400/20',
  },
  Cognitive: {
    icon: Calculator,
    cls: 'bg-sky-50 text-sky-700 ring-sky-600/15 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-400/20',
  },
  Behavioral: {
    icon: Users,
    cls: 'bg-pink-50 text-pink-700 ring-pink-600/15 dark:bg-pink-400/10 dark:text-pink-300 dark:ring-pink-400/20',
  },
  'Role-Specific': {
    icon: Briefcase,
    cls: 'bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20',
  },
};

export function CategoryTag({ category }: { category: AssessmentCategory }) {
  const { icon: Icon, cls } = categoryStyle[category];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${cls}`}>
      <Icon className="size-3.5" aria-hidden="true" />
      {category}
    </span>
  );
}

export function AssessmentCard({ assessment, onPreview }: { assessment: Assessment; onPreview: (a: Assessment) => void }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-600/40 hover:shadow-lg hover:shadow-slate-900/5 dark:border-night-700 dark:bg-night-900 dark:hover:border-brand-400/40 dark:hover:shadow-black/30">
      <div className="flex items-center justify-between gap-3">
        <CategoryTag category={assessment.category} />
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{assessment.level}</span>
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">{assessment.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{assessment.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Measures">
        {assessment.measures.map((m) => (
          <li
            key={m}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-night-800 dark:text-slate-300"
          >
            {m}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <dl className="flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-night-800 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            <dt className="sr-only">Duration</dt>
            <dd>{assessment.durationMinutes} min</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <ListChecks className="size-3.5" aria-hidden="true" />
            <dt className="sr-only">Questions</dt>
            <dd>{assessment.questionCount} items</dd>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <dt>α</dt>
            <dd className="font-semibold text-emerald-700 dark:text-emerald-400">{assessment.reliability.toFixed(2)}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={() => onPreview(assessment)}
          className="mt-4 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 text-sm font-semibold text-brand-700 transition-colors group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-night-700 dark:text-brand-400 dark:group-hover:border-brand-600 dark:group-hover:bg-brand-600 dark:group-hover:text-white"
        >
          <Play className="size-4" aria-hidden="true" />
          Preview Test
          <span className="sr-only">: {assessment.title}</span>
        </button>
      </div>
    </article>
  );
}
