import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { company } from '../../../data/company';
import { Logo } from './Logo';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Blog & News', to: '/blog' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Assessment Library', to: '/assessments' },
      { label: 'How it works', to: '/#product' },
      { label: 'Pricing', to: '/#pricing' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Book a Demo', to: '/contact?intent=demo' },
    ],
  },
];

const YEAR = new Date().getFullYear();

const linkCls =
  'inline-flex min-h-11 items-center text-sm text-slate-600 transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-brand-600 md:min-h-9 dark:text-slate-400 dark:hover:text-brand-400';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-night-800 dark:bg-night-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-brand-600">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">{company.tagline}</p>
            <ul className="mt-6 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href={`mailto:${company.contact.salesEmail}`} className={`${linkCls} gap-2`}>
                  <Mail className="size-4" aria-hidden="true" />
                  {company.contact.salesEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`} className={`${linkCls} gap-2`}>
                  <Phone className="size-4" aria-hidden="true" />
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 py-2.5 md:py-1.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {company.contact.address.join(', ')}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{col.title}</h3>
                <ul className="mt-3 space-y-0.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className={linkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-night-800 dark:text-slate-400">
          <p>© {YEAR} MindQ · {company.domain}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            ISO 27001 certified · GDPR &amp; PDPA aligned
          </p>
        </div>
      </div>
    </footer>
  );
}
