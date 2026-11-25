import { useSearchParams } from 'react-router-dom';
import { Headset, MapPin, ShieldCheck } from 'lucide-react';
import { company } from '../../../data/company';
import { PageHero, Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { ContactDetails } from '../components/home/ContactSection';

export function ContactPage() {
  const [params] = useSearchParams();
  const isDemo = params.get('intent') === 'demo';

  const cards = [
    {
      icon: Headset,
      title: 'Customer support',
      body: 'Existing clients and candidates with technical questions.',
      link: { label: company.contact.supportEmail, href: `mailto:${company.contact.supportEmail}` },
    },
    {
      icon: ShieldCheck,
      title: 'Privacy & data requests',
      body: 'Access, correction or deletion requests and DPA enquiries.',
      link: { label: company.contact.privacyEmail, href: `mailto:${company.contact.privacyEmail}` },
    },
    {
      icon: MapPin,
      title: 'Colombo HQ',
      body: company.contact.address.join(', '),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={isDemo ? 'Book a Demo' : 'Contact Us'}
        title={isDemo ? 'See MindQ on your own roles' : 'Talk to the MindQ team'}
        description="Tell us about your hiring goals. An assessment specialist will reply within one business day."
      />
      <Section className="pt-10! md:pt-14!">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-night-700 dark:bg-night-900">
            <h2 className="mb-6 font-display text-xl font-bold text-slate-900 dark:text-white">
              {isDemo ? 'Request your demo' : 'Send us a message'}
            </h2>
            <ContactForm key={isDemo ? 'demo' : 'general'} defaultInterest={isDemo ? 'Book a demo' : 'Something else'} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-night-700 dark:bg-night-900">
              <h2 className="mb-5 font-display text-base font-bold text-slate-900 dark:text-white">Sales</h2>
              <ContactDetails />
            </div>
            {cards.map(({ icon: Icon, title, body, link }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-6 dark:border-night-700">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-700/[0.07] text-brand-700 dark:bg-brand-400/10 dark:text-brand-400">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{body}</p>
                  {link && (
                    <a
                      href={link.href}
                      className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold break-all text-brand-700 hover:underline dark:text-brand-400"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </>
  );
}
