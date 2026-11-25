import { Link } from 'react-router-dom';
import { company } from '../../../data/company';
import { Logo } from './Logo';
import { MonoTag } from './MonoTag';
import { container, focusRing } from './styles';

const footerLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Blog & News', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Contact Us', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-violet-500/15 bg-slate-50 dark:border-violet-500/20 dark:bg-abyss-950">
      <div className={`${container} py-14`}>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" aria-label="MindQ home" className={`inline-flex min-h-11 items-center rounded-lg ${focusRing}`}>
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              JD-aligned psychometric assessment with deterministic scoring and guardrailed AI executive synthesis.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <MonoTag tone="neutral">RLS Isolated</MonoTag>
              <MonoTag tone="neutral">UTC-Locked</MonoTag>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 sm:flex sm:flex-wrap sm:gap-x-2">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`inline-flex min-h-11 items-center rounded-lg text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-violet-700 sm:px-3 dark:text-slate-300 dark:hover:text-violet-300 ${focusRing}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-violet-500/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
          <p>
            © 2026 {company.name}. {company.domain}
          </p>
          <a
            href={`mailto:${company.contact.salesEmail}`}
            className={`inline-flex min-h-11 items-center rounded-lg hover:text-violet-700 dark:hover:text-violet-300 ${focusRing}`}
          >
            {company.contact.salesEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
