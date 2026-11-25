import { Check } from 'lucide-react';
import { pricingTiers } from '../../../../data/company';
import { Section, SectionHeading } from '../Section';
import { ButtonLink } from '../Button';

export function PricingTeaser() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple plans based on hiring volume"
        description="Every plan includes the full assessment library and AI executive summaries. No per-test credits."
      />
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
        {pricingTiers.map((t) => (
          <div
            key={t.id}
            className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
              t.highlighted
                ? 'border-brand-700 bg-white shadow-xl shadow-brand-700/10 dark:border-brand-500 dark:bg-night-900 dark:shadow-brand-900/20'
                : 'border-slate-200 bg-white dark:border-night-700 dark:bg-night-900'
            }`}
          >
            {t.highlighted && (
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand-700 to-coral-500 px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{t.name}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t.tagline}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{t.price}</span>
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.priceNote}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-slate-700 dark:text-slate-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <ButtonLink
              to="/contact?intent=demo"
              variant={t.highlighted ? 'primary' : 'secondary'}
              className="mt-8 w-full"
            >
              {t.id === 'enterprise' ? 'Talk to sales' : 'Book a Demo'}
            </ButtonLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
