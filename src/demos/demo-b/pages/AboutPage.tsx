import { company } from '../../../data/company';
import { PageHeader } from '../components/PageHeader';
import { Section, SectionHeading } from '../components/Section';
import { LinkButton } from '../components/Button';
import { surface } from '../components/styles';

export function AboutPage() {
  return (
    <>
      <PageHeader kicker="About Us" title="Built by organisational psychologists and engineers." lead={company.mission} />

      <Section labelledBy="story-title">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="story-title" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Our story
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-slate-700 lg:col-span-8 dark:text-slate-300">
            {company.story.map((p) => (
              <p key={p.slice(0, 32)} className="max-w-[68ch]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section labelledBy="values-title" className="border-y border-violet-500/10 bg-slate-50/60 dark:bg-abyss-900/30">
        <SectionHeading id="values-title" title="What we hold ourselves to" />
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {company.values.map((v) => (
            <li key={v.title} className={`rounded-2xl p-6 ${surface}`}>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{v.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="team-title">
        <SectionHeading id="team-title" title="Leadership" />
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {company.team.map((m) => (
            <li key={m.name} className={`flex flex-col rounded-2xl p-6 ${surface}`}>
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-xl bg-linear-to-br from-violet-600 to-rose-500 font-mono text-sm font-semibold text-white"
              >
                {m.initials}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">{m.name}</h3>
              <p className="text-sm font-medium text-violet-700 dark:text-violet-300">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.bio}</p>
            </li>
          ))}
        </ul>

        <div className={`mt-16 flex flex-col items-start gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 ${surface}`}>
          <div>
            <p className="font-display text-xl font-bold text-slate-900 dark:text-white">See it on one of your roles.</p>
            <p className="mt-1 text-slate-600 dark:text-slate-400">Bring a job description and we’ll build the suite live.</p>
          </div>
          <LinkButton to="/contact" size="lg" className="w-full sm:w-auto">
            Book a Demo
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
