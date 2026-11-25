import { useState } from 'react';
import { Clock } from 'lucide-react';
import { blogArticles } from '../../../data/blog';
import type { BlogArticle } from '../../../types';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { FilterPills } from '../components/FilterPills';
import { Modal } from '../components/Modal';
import { LinkButton } from '../components/Button';
import { focusRing, surface } from '../components/styles';

type Filter = 'All' | BlogArticle['category'];
const FILTERS: Filter[] = ['All', 'Research', 'Product', 'Hiring Guide', 'News'];

function Meta({ article }: { article: BlogArticle }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
      <span>{article.publishedOn}</span>
      <span className="inline-flex items-center gap-1 font-mono">
        <Clock className="size-3" aria-hidden="true" />
        {article.readMinutes} min
      </span>
    </p>
  );
}

function ArticleCard({ article, onOpen, featured }: { article: BlogArticle; onOpen: () => void; featured?: boolean }) {
  return (
    <li className={featured ? 'md:col-span-2 lg:col-span-3' : ''}>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className={`group flex h-full w-full cursor-pointer flex-col rounded-2xl p-6 text-left transition-colors duration-200 hover:border-violet-500/40 ${surface} ${focusRing} ${
          featured ? 'sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12' : ''
        }`}
      >
        <div className={featured ? 'max-w-3xl' : ''}>
          <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">{article.category}</p>
          <h2
            className={`mt-2 font-display font-bold text-balance text-slate-900 group-hover:text-violet-800 dark:text-white dark:group-hover:text-violet-200 ${
              featured ? 'text-2xl sm:text-3xl' : 'text-lg'
            }`}
          >
            {article.title}
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{article.excerpt}</p>
        </div>
        <div className={`mt-6 shrink-0 ${featured ? 'lg:mt-0 lg:text-right' : 'mt-auto pt-6'}`}>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{article.author}</p>
          <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{article.authorRole}</p>
          <Meta article={article} />
        </div>
      </button>
    </li>
  );
}

export function BlogPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = blogArticles.filter((a) => filter === 'All' || a.category === filter);
  const featured = filter === 'All' ? visible.find((a) => a.featured) : undefined;
  const rest = visible.filter((a) => a !== featured);
  const open = blogArticles.find((a) => a.id === openId) ?? null;

  return (
    <>
      <PageHeader
        kicker="Blog & News"
        title="Research, product notes and hiring guides."
        lead="Written by MindQ’s psychologists and engineers for talent leaders who want evidence behind every decision."
      />
      <Section className="pt-12!">
        <FilterPills label="Filter articles by category" options={FILTERS} value={filter} onChange={setFilter} />
        <p className="sr-only" aria-live="polite">
          {visible.length} articles shown
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured && <ArticleCard article={featured} featured onOpen={() => setOpenId(featured.id)} />}
          {rest.map((a) => (
            <ArticleCard key={a.id} article={a} onOpen={() => setOpenId(a.id)} />
          ))}
        </ul>
      </Section>

      <Modal
        open={!!open}
        onClose={() => setOpenId(null)}
        title={open?.title}
        subtitle={
          open && (
            <span>
              {open.author}, {open.authorRole} · {open.publishedOn}
            </span>
          )
        }
        footer={
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">Want to see this applied to your roles?</p>
            <LinkButton to="/contact" onClick={() => setOpenId(null)}>
              Book a Demo
            </LinkButton>
          </div>
        }
      >
        {open && (
          <div className="space-y-4 text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
            {open.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
