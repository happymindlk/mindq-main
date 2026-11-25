import { useState } from 'react';
import { Search, SearchX, X } from 'lucide-react';
import { assessmentCategories, assessments } from '../../../data/assessments';
import type { Assessment, AssessmentCategory } from '../../../types';
import { PageHero, Section } from '../components/Section';
import { Pill } from '../components/Pill';
import { AssessmentCard } from '../components/AssessmentCard';
import { PreviewTestModal } from '../components/PreviewTestModal';
import { Button, ButtonLink } from '../components/Button';

type Filter = 'All' | AssessmentCategory;

export function AssessmentsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Filter>('All');
  const [preview, setPreview] = useState<Assessment | null>(null);

  const q = query.trim().toLowerCase();
  const matchesQuery = (a: Assessment) =>
    !q || [a.title, a.summary, a.category, ...a.measures].some((s) => s.toLowerCase().includes(q));

  const results = assessments.filter((a) => (category === 'All' || a.category === category) && matchesQuery(a));

  const countFor = (c: Filter) =>
    assessments.filter((a) => (c === 'All' || a.category === c) && matchesQuery(a)).length;

  const reset = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <>
      <PageHero
        eyebrow="Assessment Library"
        title="Find the right test for every role"
        description="Validated psychometric, cognitive, behavioural and role-specific assessments. Preview sample questions before you build a battery."
      />
      <Section className="pt-10! md:pt-12!">
        <div className="flex flex-col gap-4">
          <label htmlFor="assessment-search" className="sr-only">
            Search assessments
          </label>
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id="assessment-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tests, skills or traits"
              className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pr-12 pl-12 text-base text-slate-900 shadow-xs placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 focus:outline-none dark:border-night-700 dark:bg-night-900 dark:text-white dark:placeholder:text-slate-500 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute top-1/2 right-1 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-night-800 dark:hover:text-white"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <div
            role="group"
            aria-label="Filter by category"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {assessmentCategories.map((c) => (
              <Pill key={c} active={category === c} onClick={() => setCategory(c)} count={countFor(c)}>
                {c}
              </Pill>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
          Showing <strong className="text-slate-900 dark:text-white">{results.length}</strong> of {assessments.length} assessments
          {category !== 'All' && ` in ${category}`}
          {q && ` matching “${query.trim()}”`}
        </p>

        {results.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((a) => (
              <AssessmentCard key={a.id} assessment={a} onPreview={setPreview} />
            ))}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-night-700">
            <SearchX className="size-10 text-slate-400" aria-hidden="true" />
            <h2 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">No assessments found</h2>
            <p className="mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              Try a different keyword or category — or ask us about a custom role-specific assessment.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" onClick={reset}>
                Clear filters
              </Button>
              <ButtonLink to="/contact">Request a custom test</ButtonLink>
            </div>
          </div>
        )}
      </Section>
      <PreviewTestModal assessment={preview} onClose={() => setPreview(null)} />
    </>
  );
}
