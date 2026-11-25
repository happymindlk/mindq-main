import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import type { ContactInquiry } from '../../../types';
import { Button } from './Button';

const EMPTY: ContactInquiry = {
  name: '',
  email: '',
  company: '',
  role: '',
  teamSize: '',
  interest: 'Book a demo',
  message: '',
};

const FREE_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];

type Errors = Partial<Record<keyof ContactInquiry, string>>;

function validate(v: ContactInquiry): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  const email = v.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = 'Enter a valid email address, e.g. name@company.com.';
  else if (FREE_EMAIL_DOMAINS.includes(email.split('@')[1].toLowerCase()))
    e.email = 'Please use your work email so we can route you to the right team.';
  if (v.company.trim().length < 2) e.company = 'Please enter your company name.';
  if (!v.teamSize) e.teamSize = 'Select your annual hiring volume.';
  if (v.message.trim().length < 20) e.message = 'Tell us a little more (at least 20 characters).';
  return e;
}

const inputCls =
  'block min-h-11 w-full rounded-xl border bg-white px-3.5 py-2.5 text-base text-slate-900 shadow-xs transition-colors placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 focus:outline-none sm:text-sm dark:bg-night-950 dark:text-white dark:placeholder:text-slate-500';

function fieldBorder(err?: string) {
  return err ? 'border-rose-400 dark:border-rose-400/70' : 'border-slate-300 dark:border-night-700';
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-1.5 text-sm text-rose-600 dark:text-rose-400">
      {message}
    </p>
  ) : null;
}

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-200">
      {children}
      {optional ? (
        <span className="ml-1 font-normal text-slate-500 dark:text-slate-400">(optional)</span>
      ) : (
        <span className="ml-0.5 text-rose-600 dark:text-rose-400" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

interface ContactFormProps {
  defaultInterest?: string;
}

export function ContactForm({ defaultInterest }: ContactFormProps) {
  const [values, setValues] = useState<ContactInquiry>({ ...EMPTY, interest: defaultInterest ?? EMPTY.interest });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInquiry, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const set = (k: keyof ContactInquiry, val: string) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof ContactInquiry) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, company: true, teamSize: true, message: true });
    const firstInvalid = Object.keys(errs)[0];
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus('submitting');
    // Demo only — no backend. Simulate network latency.
    window.setTimeout(() => setStatus('sent'), 900);
  };

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center dark:border-emerald-400/20 dark:bg-emerald-500/10"
      >
        <CheckCircle2 className="size-12 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
          Thanks, {values.name.split(' ')[0]} — we’ll be in touch.
        </h3>
        <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
          A MindQ assessment specialist will reply to <strong>{values.email}</strong> within one business day.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setValues(EMPTY);
            setTouched({});
            setErrors({});
            setStatus('idle');
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const err = (k: keyof ContactInquiry) => (touched[k] ? errors[k] : undefined);
  const describedBy = (k: keyof ContactInquiry) => (err(k) ? `${k}-error` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor="name">Full name</Label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
          onBlur={() => blur('name')}
          aria-invalid={!!err('name')}
          aria-describedby={describedBy('name')}
          className={`${inputCls} ${fieldBorder(err('name'))}`}
          placeholder="Amaya Perera"
        />
        <ErrorText id="name-error" message={err('name')} />
      </div>
      <div>
        <Label htmlFor="email">Work email</Label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => set('email', e.target.value)}
          onBlur={() => blur('email')}
          aria-invalid={!!err('email')}
          aria-describedby={describedBy('email')}
          className={`${inputCls} ${fieldBorder(err('email'))}`}
          placeholder="name@company.com"
        />
        <ErrorText id="email-error" message={err('email')} />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => set('company', e.target.value)}
          onBlur={() => blur('company')}
          aria-invalid={!!err('company')}
          aria-describedby={describedBy('company')}
          className={`${inputCls} ${fieldBorder(err('company'))}`}
        />
        <ErrorText id="company-error" message={err('company')} />
      </div>
      <div>
        <Label htmlFor="role" optional>
          Job title
        </Label>
        <input
          id="role"
          name="role"
          autoComplete="organization-title"
          value={values.role}
          onChange={(e) => set('role', e.target.value)}
          className={`${inputCls} ${fieldBorder()}`}
          placeholder="Head of Talent Acquisition"
        />
      </div>
      <div>
        <Label htmlFor="teamSize">Annual hiring volume</Label>
        <select
          id="teamSize"
          name="teamSize"
          value={values.teamSize}
          onChange={(e) => set('teamSize', e.target.value)}
          onBlur={() => blur('teamSize')}
          aria-invalid={!!err('teamSize')}
          aria-describedby={describedBy('teamSize')}
          className={`${inputCls} ${fieldBorder(err('teamSize'))} cursor-pointer`}
        >
          <option value="">Select…</option>
          <option>Fewer than 100 hires</option>
          <option>100 – 500 hires</option>
          <option>500 – 2,000 hires</option>
          <option>2,000+ hires</option>
        </select>
        <ErrorText id="teamSize-error" message={err('teamSize')} />
      </div>
      <div>
        <Label htmlFor="interest">I’m interested in</Label>
        <select
          id="interest"
          name="interest"
          value={values.interest}
          onChange={(e) => set('interest', e.target.value)}
          className={`${inputCls} ${fieldBorder()} cursor-pointer`}
        >
          <option>Book a demo</option>
          <option>Pricing &amp; plans</option>
          <option>Custom validation study</option>
          <option>Partnership</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">How can we help?</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          onBlur={() => blur('message')}
          aria-invalid={!!err('message')}
          aria-describedby={describedBy('message') ?? 'message-hint'}
          className={`${inputCls} ${fieldBorder(err('message'))} resize-y`}
          placeholder="e.g. We hire ~300 graduates a year and want to add Numerical Reasoning and a Stakeholder SJT to our process."
        />
        {err('message') ? (
          <ErrorText id="message-error" message={err('message')} />
        ) : (
          <p id="message-hint" className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            Share the roles you hire for and any assessments you’re considering.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          By submitting, you agree to our{' '}
          <Link to="/privacy" className="font-medium text-brand-700 underline-offset-2 hover:underline dark:text-brand-400">
            Privacy Policy
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
