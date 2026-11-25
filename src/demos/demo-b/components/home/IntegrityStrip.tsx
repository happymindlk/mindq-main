import { integrityItems } from '../../data/platform';
import { Section, SectionHeading } from '../Section';
import { MonoTag } from '../MonoTag';

export function IntegrityStrip() {
  return (
    <Section id="integrity" labelledBy="integrity-title">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="integrity-title"
          kicker="Integrity"
          title="Enterprise security and assessment integrity, enforced on the server."
        />
        <p className="max-w-md text-[15px] leading-relaxed text-slate-600 lg:pb-1.5 dark:text-slate-400">
          Candidates verify by email code with nothing to install. Questions are shuffled per candidate, and Blind
          Review keeps identities out of shortlisting.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-violet-500/15 bg-violet-500/15 sm:grid-cols-2 lg:grid-cols-5 dark:border-violet-500/20 dark:bg-violet-500/20">
        {integrityItems.map((item, i) => (
          <li
            key={item.title}
            className={`flex flex-col gap-4 bg-white p-6 dark:bg-abyss-900 ${
              i === integrityItems.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <item.icon className="size-6 text-violet-600 dark:text-violet-300" aria-hidden="true" />
            <div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
            <MonoTag className="mt-auto self-start">{item.tag}</MonoTag>
          </li>
        ))}
      </ul>
    </Section>
  );
}
