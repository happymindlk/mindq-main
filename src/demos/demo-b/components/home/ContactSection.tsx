import { Mail, Phone } from 'lucide-react';
import { company } from '../../../../data/company';
import { ContactForm } from '../ContactForm';
import { Section, SectionHeading } from '../Section';
import { AmbientGlow } from '../AmbientGlow';
import { focusRing, surface } from '../styles';

export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-title" className="isolate overflow-hidden">
      <AmbientGlow className="-z-10 opacity-70" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            kicker="Book a demo"
            title="Bring a job description. Leave with a blueprint."
            lead="In a 30-minute session we upload one of your JDs, build the suite together and walk through a sample Executive Dossier."
          />
          <ul className="mt-8 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${company.contact.salesEmail}`}
                className={`inline-flex min-h-11 items-center gap-3 rounded-lg text-slate-700 hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-300 ${focusRing}`}
              >
                <Mail className="size-4 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                {company.contact.salesEmail}
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                className={`inline-flex min-h-11 items-center gap-3 rounded-lg text-slate-700 hover:text-violet-700 dark:text-slate-300 dark:hover:text-violet-300 ${focusRing}`}
              >
                <Phone className="size-4 text-violet-600 dark:text-violet-300" aria-hidden="true" />
                {company.contact.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className={`rounded-2xl p-5 sm:p-8 lg:col-span-7 ${surface}`}>
          <ContactForm idPrefix="home-contact" />
        </div>
      </div>
    </Section>
  );
}
