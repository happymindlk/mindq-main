import { Clock, LifeBuoy, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { company } from '../../../data/company';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { focusRing, surface } from '../components/styles';

const channels = [
  { icon: Mail, label: 'Sales & demos', value: company.contact.salesEmail, href: `mailto:${company.contact.salesEmail}` },
  { icon: LifeBuoy, label: 'Client support', value: company.contact.supportEmail, href: `mailto:${company.contact.supportEmail}` },
  { icon: ShieldCheck, label: 'Privacy & security', value: company.contact.privacyEmail, href: `mailto:${company.contact.privacyEmail}` },
  { icon: Phone, label: 'Phone', value: company.contact.phone, href: `tel:${company.contact.phone.replace(/\s/g, '')}` },
];

export function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact Us"
        title="Talk to the MindQ team."
        lead="Book a demo, start a JD-to-Blueprint pilot or request our security documentation. We reply within one business day."
      />
      <Section className="pt-12!">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className={`rounded-2xl p-5 sm:p-8 lg:col-span-8 ${surface}`}>
            <ContactForm idPrefix="contact-page" />
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <ul className="space-y-1">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className={`flex min-h-14 items-center gap-4 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-violet-500/5 ${focusRing}`}
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300">
                      <c.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-500 dark:text-slate-400">{c.label}</span>
                      <span className="block truncate font-medium text-slate-900 dark:text-white">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-4 border-t border-violet-500/15 pt-6 text-sm text-slate-600 dark:text-slate-400">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                <span>
                  {company.contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                {company.contact.hours}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
