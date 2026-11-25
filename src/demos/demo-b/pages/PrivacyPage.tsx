import { company } from '../../../data/company';
import { privacyLastUpdated, privacySections } from '../../../data/privacy';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { focusRing } from '../components/styles';

/** Proctoring/webcam capture isn't part of MindQ's platform, so those lines are omitted from this policy view. */
const isApplicable = (text: string) => !/webcam|proctoring/i.test(text);

export function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Privacy Policy"
        title="How MindQ handles personal information."
        lead={<span className="font-mono text-base">Last updated {privacyLastUpdated}</span>}
      />
      <Section className="pt-12!">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <nav aria-label="Policy sections" className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">On this page</p>
              <ol className="mt-3 flex flex-wrap gap-x-1 lg:flex-col">
                {privacySections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`inline-flex min-h-11 items-center rounded-lg px-2 text-sm text-slate-600 transition-colors duration-200 hover:text-violet-700 lg:-ml-2 dark:text-slate-400 dark:hover:text-violet-300 ${focusRing}`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <article className="space-y-12 lg:col-span-8 lg:col-start-5">
            {privacySections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
                <h2 id={`${s.id}-title`} className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-slate-700 dark:text-slate-300">
                  {s.paragraphs.filter(isApplicable).map((p) => (
                    <p key={p.slice(0, 32)} className="max-w-[70ch]">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="max-w-[70ch] space-y-2">
                      {s.bullets.filter(isApplicable).map((b) => (
                        <li key={b.slice(0, 32)} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
            <p className="border-t border-violet-500/15 pt-6 text-sm text-slate-600 dark:text-slate-400">
              Privacy questions:{' '}
              <a
                href={`mailto:${company.contact.privacyEmail}`}
                className={`rounded font-medium text-violet-700 underline underline-offset-2 dark:text-violet-300 ${focusRing}`}
              >
                {company.contact.privacyEmail}
              </a>
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
