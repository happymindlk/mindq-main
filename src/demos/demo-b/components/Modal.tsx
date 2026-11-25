import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { focusRing } from './styles';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Modal({ open, onClose, title, subtitle, children, footer }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
      if (e.key === 'Tab' && panelRef.current) {
        const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-60 flex items-end justify-center sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm dark:bg-black/70" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative flex max-h-[92dvh] w-full animate-fade-up flex-col rounded-t-2xl border border-violet-500/20 bg-white shadow-2xl outline-none sm:max-w-2xl sm:rounded-2xl dark:bg-abyss-900"
      >
        <div className="flex items-start gap-4 border-b border-violet-500/15 px-5 py-4 sm:px-7 dark:border-violet-500/20">
          <div className="min-w-0 flex-1">
            <h2 id={titleId} className="font-display text-lg font-bold text-balance text-slate-900 sm:text-xl dark:text-white">
              {title}
            </h2>
            {subtitle && <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</div>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className={`-mr-2 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl text-slate-500 transition-colors duration-200 hover:bg-violet-500/10 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white ${focusRing}`}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">{children}</div>
        {footer && <div className="border-t border-violet-500/15 px-5 py-4 sm:px-7 dark:border-violet-500/20">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
