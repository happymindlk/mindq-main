import { privacyLastUpdated, privacySections } from '../../../data/privacy';
import { company } from '../../../data/company';
import { PageHero, Section } from '../components/Section';

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How MindQ collects, uses and protects personal information. Last updated ${privacyLastUpdated}.`}
      />
      <Section className="pt-10! md:pt-14!">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Privacy policy sections" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">On this page</p>
            <ol className="mt-3 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-1">
              {privacySections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-700 lg:min-h-9 dark:text-slate-400 dark:hover:bg-night-900 dark:hover:text-brand-400"
                  >
                    <span className="w-5 text-xs text-slate-400 tabular-nums">{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl space-y-10">
            {privacySections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                  <span className="mr-2 text-slate-400">{i + 1}.</span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-slate-700 dark:text-slate-300">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="list-disc space-y-2 pl-5 marker:text-brand-600">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
            <p className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 dark:border-night-700 dark:bg-night-900 dark:text-slate-400">
              Questions about this policy? Email{' '}
              <a
                href={`mailto:${company.contact.privacyEmail}`}
                className="font-semibold text-brand-700 hover:underline dark:text-brand-400"
              >
                {company.contact.privacyEmail}
              </a>
              .
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
