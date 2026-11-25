import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { ButtonLink } from './Button';

const navLinks = [
  { label: 'Product', to: '/#product' },
  { label: 'Assessment Library', to: '/assessments' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const BOOK_DEMO = '/contact?intent=demo';

function isActive(to: string, pathname: string, hash: string) {
  if (to.startsWith('/#')) return pathname === '/' && hash === to.slice(1);
  return pathname === to;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Drawer: lock scroll, Esc to close, close on desktop resize.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 768px)');
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors ${
        scrolled || open
          ? 'border-slate-200 bg-white/85 dark:border-night-800 dark:bg-night-950/85'
          : 'border-transparent bg-white/70 dark:bg-night-950/70'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
        <Link
          to="/"
          onClick={close}
          className="flex min-h-11 shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
        >
          <Logo className="h-8 w-auto lg:h-9" />
        </Link>

        <ul className="ml-6 hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={`inline-flex min-h-11 items-center rounded-lg px-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 lg:px-3 ${
                  isActive(l.to, pathname, hash)
                    ? 'text-brand-700 dark:text-brand-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <ButtonLink to={BOOK_DEMO}>Book a Demo</ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand-600 md:hidden dark:text-slate-200 dark:hover:bg-night-800"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white md:hidden dark:border-night-800 dark:bg-night-950"
      >
        <ul className="flex flex-col px-4 py-4">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={close}
                className="flex min-h-13 items-center justify-between border-b border-slate-100 px-2 font-display text-lg font-semibold text-slate-900 dark:border-night-800 dark:text-white"
              >
                {l.label}
                <ArrowRight className="size-4 text-slate-400" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 px-6 pb-8">
          <ButtonLink to={BOOK_DEMO} size="lg" onClick={close} className="w-full">
            Book a Demo
          </ButtonLink>
          <ButtonLink to="/assessments" variant="secondary" size="lg" onClick={close} className="w-full">
            Explore Assessments
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
