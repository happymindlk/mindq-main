import { ArrowRight, Eye, HeartHandshake, Microscope, Scale } from 'lucide-react';
import { company } from '../../../data/company';
import { PageHero, Section, SectionHeading } from '../components/Section';
import { ButtonLink } from '../components/Button';
import { Mark } from '../components/Logo';

const valueIcons = [Microscope, Scale, HeartHandshake, Eye];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MindQ"
        title={
          <>
            Making hiring decisions <span className="text-gradient">fairer and smarter</span>
          </>
        }
        description={company.mission}
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Our story" title="Psychologists and engineers, building the tools we needed" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {company.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 content-start gap-4">
            {company.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 dark:border-night-700 dark:bg-night-900"
              >
                <p className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</p>
              </div>
            ))}
            <div className="col-span-2 flex items-center gap-4 rounded-2xl border border-brand-700/15 bg-gradient-to-br from-brand-700/[0.05] to-coral-500/[0.05] p-5 dark:border-brand-400/20 dark:from-brand-400/10 dark:to-coral-400/5">
              <Mark className="h-10 w-auto shrink-0" />
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Headquartered in Colombo, serving clients across South Asia, the Middle East and Europe.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Our values" title="What guides every assessment we ship" />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {company.values.map((v, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-night-700 dark:bg-night-950">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-700/[0.07] text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership" title="The team behind the science" />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {company.team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-slate-200 p-6 dark:border-night-700">
              <span
                className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-coral-500 font-display text-lg font-bold text-white"
                aria-hidden="true"
              >
                {m.initials}
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-slate-900 dark:text-white">{m.name}</h3>
              <p className="text-sm font-medium text-brand-700 dark:text-brand-400">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-slate-900 px-6 py-12 text-center dark:bg-night-900 dark:ring-1 dark:ring-night-700">
          <h2 className="font-display text-2xl font-bold text-balance text-white sm:text-3xl">
            Ready to hire on validated potential?
          </h2>
          <p className="max-w-lg text-slate-300">See a live executive report built on your own roles.</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact?intent=demo" size="lg" className="dark:bg-brand-600!">
              Book a Demo
            </ButtonLink>
            <ButtonLink
              to="/assessments"
              variant="ghost"
              size="lg"
              className="text-white! hover:bg-white/10!"
            >
              Explore Assessments
              <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
