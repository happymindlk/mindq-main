import { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { blogArticles } from '../../../data/blog';
import type { BlogArticle } from '../../../types';
import { PageHero, Section } from '../components/Section';
import { Pill } from '../components/Pill';
import { Modal } from '../components/Modal';
import { ButtonLink } from '../components/Button';

const categories = ['All', ...Array.from(new Set(blogArticles.map((a) => a.category)))] as const;

const categoryCls: Record<BlogArticle['category'], string> = {
  Research: 'text-brand-700 dark:text-brand-400',
  Product: 'text-pink-700 dark:text-pink-300',
  'Hiring Guide': 'text-sky-700 dark:text-sky-300',
  News: 'text-emerald-700 dark:text-emerald-400',
};

function Meta({ article }: { article: BlogArticle }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
      <span>{article.publishedOn}</span>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="size-3.5" aria-hidden="true" />
        {article.readMinutes} min read
      </span>
    </p>
  );
}

/** Decorative cover — gradient tuned per category, no stock imagery. */
function Cover({ article, tall }: { article: BlogArticle; tall?: boolean }) {
  const grad: Record<BlogArticle['category'], string> = {
    Research: 'from-brand-700 via-brand-600 to-coral-500',
    Product: 'from-coral-500 via-pink-500 to-brand-600',
    'Hiring Guide': 'from-sky-600 via-brand-600 to-brand-700',
    News: 'from-emerald-600 via-teal-600 to-brand-700',
  };
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${grad[article.category]} ${tall ? 'aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/9]'}`}>
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.25)_1px,transparent_0)] [background-size:18px_18px]" />
      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-900 dark:bg-night-950/80 dark:text-white">
        {article.category}
      </span>
    </div>
  );
}

export function BlogPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [reading, setReading] = useState<BlogArticle | null>(null);

  const featured = blogArticles.find((a) => a.featured) ?? blogArticles[0];
  const list = blogArticles.filter((a) => (category === 'All' ? a.id !== featured.id : a.category === category));

  return (
    <>
      <PageHero
        eyebrow="Blog & News"
        title="Insights on evidence-based hiring"
        description="Research, product updates and practical guides from MindQ’s psychologists and talent experts."
      />
      <Section className="pt-10! md:pt-14!">
        {category === 'All' && (
          <button
            type="button"
            onClick={() => setReading(featured)}
            className="group grid w-full cursor-pointer grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-shadow hover:shadow-xl hover:shadow-slate-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 lg:grid-cols-2 dark:border-night-700 dark:bg-night-900"
          >
            <Cover article={featured} tall />
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-wide text-coral-500 uppercase">Featured</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-balance text-slate-900 sm:text-3xl dark:text-white">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{featured.excerpt}</p>
              <div className="mt-6">
                <Meta article={featured} />
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-400">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </button>
        )}

        <div
          role="group"
          aria-label="Filter articles"
          className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {categories.map((c) => (
            <Pill key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Pill>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <article
              key={a.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 dark:border-night-700 dark:bg-night-900"
            >
              <Cover article={a} />
              <div className="flex flex-1 flex-col p-6">
                <p className={`text-xs font-semibold ${categoryCls[a.category]}`}>{a.category}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">{a.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.excerpt}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <Meta article={a} />
                  <button
                    type="button"
                    onClick={() => setReading(a)}
                    className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-brand-700 hover:bg-brand-700/5 focus-visible:outline-2 focus-visible:outline-brand-600 dark:text-brand-400 dark:hover:bg-brand-400/10"
                  >
                    Read<span className="sr-only">: {a.title}</span>
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Modal
        open={reading !== null}
        onClose={() => setReading(null)}
        size="lg"
        title={reading?.title}
        subtitle={
          reading && (
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className={`font-semibold ${categoryCls[reading.category]}`}>{reading.category}</span>
              <span aria-hidden="true">·</span>
              <span>
                {reading.author}, {reading.authorRole}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {reading.publishedOn} · {reading.readMinutes} min read
              </span>
            </span>
          )
        }
        footer={
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">See the science in action on your own roles.</p>
            <ButtonLink to="/contact?intent=demo" onClick={() => setReading(null)}>
              Book a Demo
            </ButtonLink>
          </div>
        }
      >
        {reading && (
          <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <p className="text-lg font-medium text-slate-900 dark:text-white">{reading.excerpt}</p>
            {reading.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
