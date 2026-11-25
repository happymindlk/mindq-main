import { CalendarCheck, Clock, Mail, Phone } from 'lucide-react';
import { company } from '../../../../data/company';
import { Section, SectionHeading } from '../Section';
import { ContactForm } from '../ContactForm';

export function ContactDetails() {
  const items = [
    { icon: Mail, label: 'Sales', value: company.contact.salesEmail, href: `mailto:${company.contact.salesEmail}` },
    { icon: Phone, label: 'Phone', value: company.contact.phone, href: `tel:${company.contact.phone.replace(/\s/g, '')}` },
    { icon: Clock, label: 'Hours', value: company.contact.hours },
  ];
  return (
    <ul className="space-y-3">
      {items.map(({ icon: Icon, label, value, href }) => (
        <li key={label} className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-700/[0.07] text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs text-slate-500 dark:text-slate-400">{label}</span>
            {href ? (
              <a href={href} className="text-sm font-semibold break-words text-slate-900 hover:text-brand-700 dark:text-white dark:hover:text-brand-400">
                {value}
              </a>
            ) : (
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{value}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" tone="muted">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact us"
            title="See MindQ on your own roles"
            description="Tell us what you hire for. We’ll build a sample battery and walk you through a live executive report in 30 minutes."
          />
          <ul className="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {['Tailored battery for your top role', 'Sample AI executive summary', '30-day pilot options'].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <CalendarCheck className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-slate-200 pt-8 dark:border-night-700">
            <ContactDetails />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-night-700 dark:bg-night-950">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
