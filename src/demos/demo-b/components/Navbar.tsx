import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { LinkButton } from './Button';
import { container, focusRing } from './styles';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'Platform', to: '/#platform' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Integrity', to: '/#integrity' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

/** Hash links on the home page re-scroll even when the hash hasn't changed. */
function useHashClick() {
  const { pathname, hash } = useLocation();
  return (to: string) => {
    const [path, target] = to.split('#');
    if (target && pathname === (path || '/') && hash === `#${target}`) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
}

const linkBase = `rounded-lg text-sm font-medium transition-colors duration-200 ${focusRing}`;

function desktopLinkClass(active: boolean) {
  return `${linkBase} inline-flex min-h-11 items-center px-3 ${
    active ? 'text-slate-900 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
  }`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHashClick = useHashClick();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector<HTMLElement>('a')?.focus();
    const toggleButton = toggleRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onBreakpoint);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onBreakpoint);
      toggleButton?.focus();
    };
  }, [open]);

  const close = (to?: string) => {
    if (to) onHashClick(to);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled || open
            ? 'border-violet-500/15 bg-white/85 dark:border-violet-500/20 dark:bg-abyss-950/85'
            : 'border-transparent bg-white/40 dark:bg-abyss-950/40'
        }`}
      >
        <nav aria-label="Primary" className={`${container} flex h-16 items-center justify-between gap-4`}>
          <Link to="/" onClick={() => close('/')} aria-label="MindQ home" className={`-ml-1 inline-flex min-h-11 items-center rounded-lg p-1 ${focusRing}`}>
            <Logo className="h-7 w-auto sm:h-8" />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) =>
              item.to.includes('#') ? (
                <li key={item.to}>
                  <Link to={item.to} onClick={() => onHashClick(item.to)} className={desktopLinkClass(false)}>
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => desktopLinkClass(isActive)}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <LinkButton to="/contact">Book a Demo</LinkButton>
            </div>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-violet-500/15 text-slate-700 transition-colors duration-200 hover:bg-violet-500/10 md:hidden dark:border-violet-500/20 dark:text-slate-200 ${focusRing}`}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>
      {/* Rendered outside <header>: its backdrop-filter would otherwise become the drawer's containing block. */}
      {open && (
        <div
          id="mobile-drawer"
          ref={drawerRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 animate-fade-up overflow-y-auto border-t border-violet-500/15 bg-white md:hidden dark:border-violet-500/20 dark:bg-abyss-950"
        >
          <div className={`${container} flex min-h-full flex-col py-6`}>
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.to} className="border-b border-violet-500/10">
                  <Link
                    to={item.to}
                    onClick={() => close(item.to)}
                    className={`flex min-h-14 items-center rounded-lg px-1 font-display text-lg font-semibold text-slate-900 dark:text-white ${focusRing}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <LinkButton to="/contact" size="lg" onClick={() => close()} className="w-full">
                Book a Demo
              </LinkButton>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                Typical reply within one business day.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
