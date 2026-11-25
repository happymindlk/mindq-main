import { useId, useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { faqCategories, faqs } from '../../../data/faqs';
import type { FaqCategory, FaqItem } from '../../../types';
import { PageHero, Section } from '../components/Section';
import { Pill } from '../components/Pill';
import { ButtonLink } from '../components/Button';

function AccordionItem({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className="border-b border-slate-200 last:border-0 dark:border-night-700">
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex min-h-14 w-full cursor-pointer items-center gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600 sm:px-6"
        >
          <span className="flex-1 font-display text-base font-semibold text-slate-900 dark:text-white">{item.question}</span>
          <ChevronDown
            className={`size-5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180 text-brand-700 dark:text-brand-400' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 dark:text-slate-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqPage() {
  const [category, setCategory] = useState<'All' | FaqCategory>('All');
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const groups = (category === 'All' ? faqCategories : [category]).map((c) => ({
    category: c,
    items: faqs.filter((f) => f.category === c),
  }));

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about MindQ assessments, the science behind them, and how we protect candidate data."
      />
      <Section className="pt-10! md:pt-14!">
        <div className="mx-auto max-w-3xl">
          <div
            role="group"
            aria-label="Filter questions"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {(['All', ...faqCategories] as const).map((c) => (
              <Pill key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </Pill>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {groups.map((g) => (
              <section key={g.category} aria-labelledby={`faq-${g.category}`}>
                <h2 id={`faq-${g.category}`} className="mb-4 text-sm font-semibold tracking-wide text-brand-700 uppercase dark:text-brand-400">
                  {g.category}
                </h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-night-700 dark:bg-night-900">
                  {g.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      open={openId === item.id}
                      onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center dark:border-night-700 dark:bg-night-900">
            <MessageCircleQuestion className="size-10 text-brand-700 dark:text-brand-400" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">Still have questions?</h2>
            <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
              Our assessment specialists and psychologists are happy to help.
            </p>
            <ButtonLink to="/contact">Contact us</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
