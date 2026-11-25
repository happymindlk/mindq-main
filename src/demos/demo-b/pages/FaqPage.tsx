import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqCategory } from '../../../types';
import { faqCategoryList, faqItems } from '../data/faqs';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { FilterPills } from '../components/FilterPills';
import { LinkButton } from '../components/Button';
import { focusRing, surface } from '../components/styles';

type Filter = 'All' | FaqCategory;

export function FaqPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set([faqItems[0].id]));
  const baseId = useId();

  const filters: Filter[] = ['All', ...faqCategoryList];
  const visible = faqItems.filter((f) => filter === 'All' || f.category === filter);

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <>
      <PageHeader
        kicker="FAQ"
        title="Questions talent and security teams ask us."
        lead="How JD-to-Blueprint works, how scoring and AI synthesis are kept separate, and how assessment integrity is enforced."
      />
      <Section className="pt-12!">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FilterPills label="Filter questions by topic" options={filters} value={filter} onChange={setFilter} />
            <ul className="mt-8 divide-y divide-violet-500/15 border-y border-violet-500/15 dark:divide-violet-500/20 dark:border-violet-500/20">
              {visible.map((f) => {
                const open = openIds.has(f.id);
                const btnId = `${baseId}-${f.id}-q`;
                const panelId = `${baseId}-${f.id}-a`;
                return (
                  <li key={f.id}>
                    <h2>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => toggle(f.id)}
                        className={`flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 rounded-lg py-4 text-left font-display text-[17px] font-semibold text-slate-900 transition-colors duration-200 hover:text-violet-800 dark:text-white dark:hover:text-violet-200 ${focusRing}`}
                      >
                        {f.question}
                        <ChevronDown
                          className={`size-5 shrink-0 text-violet-600 transition-transform duration-200 dark:text-violet-300 ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h2>
                    <div id={panelId} role="region" aria-labelledby={btnId} hidden={!open}>
                      <p className="max-w-[68ch] pb-5 leading-relaxed text-slate-600 dark:text-slate-400">{f.answer}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <aside className="lg:col-span-4">
            <div className={`rounded-2xl p-6 lg:sticky lg:top-24 ${surface}`}>
              <p className="font-display text-lg font-bold text-slate-900 dark:text-white">Still have a question?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Our team can walk through security reviews, data handling and a pilot on your own roles.
              </p>
              <LinkButton to="/contact" className="mt-5 w-full">
                Contact Us
              </LinkButton>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
