import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Loader2 } from 'lucide-react';
import type { ContactInquiry } from '../../../types';
import { Button } from './Button';
import { focusRing } from './styles';

const INTERESTS = ['Book a demo', 'JD-to-Blueprint pilot', 'Enterprise security review', 'Something else'];

const EMPTY: ContactInquiry = {
  name: '',
  email: '',
  company: '',
  role: '',
  teamSize: '',
  interest: INTERESTS[0],
  message: '',
};

const FREE_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];

type Field = keyof ContactInquiry;
type Errors = Partial<Record<Field, string>>;

function validate(v: ContactInquiry): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Enter your full name.';
  const email = v.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = 'Enter a valid email address, e.g. name@company.com.';
  else if (FREE_EMAIL_DOMAINS.includes(email.split('@')[1].toLowerCase()))
    e.email = 'Use your work email so we can route you to the right team.';
  if (v.company.trim().length < 2) e.company = 'Enter your company name.';
  if (!v.teamSize) e.teamSize = 'Select your annual hiring volume.';
  if (v.message.trim().length < 20) e.message = 'Add a little more detail (at least 20 characters).';
  return e;
}

const inputCls = `block min-h-11 w-full rounded-xl border bg-white px-3.5 py-2.5 text-base text-slate-900 transition-colors duration-200 placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/25 focus:outline-none sm:text-sm dark:bg-abyss-950 dark:text-white dark:placeholder:text-slate-500`;

function fieldBorder(err?: string) {
  return err ? 'border-rose-500 dark:border-rose-400/80' : 'border-slate-300 dark:border-violet-500/20';
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-1.5 text-sm text-rose-700 dark:text-rose-300">
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

export function ContactForm({ idPrefix = 'contact' }: { idPrefix?: string }) {
  const [values, setValues] = useState<ContactInquiry>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const id = (k: Field) => `${idPrefix}-${k}`;

  const set = (k: Field, val: string) => {
    const next = { ...values, [k]: val };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: Field) => {
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
    // Demo only: no backend. Simulate network latency.
    window.setTimeout(() => setStatus('sent'), 900);
  };

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-emerald-500/25 bg-emerald-500/5 px-6 py-12 text-center"
      >
        <CheckCircle2 className="size-11 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
          Request received, {values.name.trim().split(' ')[0]}.
        </h3>
        <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
          A MindQ specialist will reply to <strong className="font-semibold">{values.email}</strong> within one
          business day.
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
          Send another request
        </Button>
      </div>
    );
  }

  const err = (k: Field) => (touched[k] ? errors[k] : undefined);
  const describedBy = (k: Field) => (err(k) ? `${id(k)}-error` : undefined);
  const common = (k: Field) => ({
    id: id(k),
    name: k,
    value: values[k],
    'aria-invalid': !!err(k),
    'aria-describedby': describedBy(k),
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor={id('name')}>Full name</Label>
        <input
          {...common('name')}
          autoComplete="name"
          onChange={(e) => set('name', e.target.value)}
          onBlur={() => blur('name')}
          className={`${inputCls} ${fieldBorder(err('name'))}`}
        />
        <ErrorText id={`${id('name')}-error`} message={err('name')} />
      </div>
      <div>
        <Label htmlFor={id('email')}>Work email</Label>
        <input
          {...common('email')}
          type="email"
          inputMode="email"
          autoComplete="email"
          onChange={(e) => set('email', e.target.value)}
          onBlur={() => blur('email')}
          className={`${inputCls} ${fieldBorder(err('email'))}`}
          placeholder="name@company.com"
        />
        <ErrorText id={`${id('email')}-error`} message={err('email')} />
      </div>
      <div>
        <Label htmlFor={id('company')}>Company</Label>
        <input
          {...common('company')}
          autoComplete="organization"
          onChange={(e) => set('company', e.target.value)}
          onBlur={() => blur('company')}
          className={`${inputCls} ${fieldBorder(err('company'))}`}
        />
        <ErrorText id={`${id('company')}-error`} message={err('company')} />
      </div>
      <div>
        <Label htmlFor={id('role')} optional>
          Job title
        </Label>
        <input
          id={id('role')}
          name="role"
          value={values.role}
          autoComplete="organization-title"
          onChange={(e) => set('role', e.target.value)}
          className={`${inputCls} ${fieldBorder()}`}
          placeholder="Head of Talent Acquisition"
        />
      </div>
      <div>
        <Label htmlFor={id('teamSize')}>Annual hiring volume</Label>
        <select
          {...common('teamSize')}
          onChange={(e) => set('teamSize', e.target.value)}
          onBlur={() => blur('teamSize')}
          className={`${inputCls} ${fieldBorder(err('teamSize'))} cursor-pointer`}
        >
          <option value="">Select…</option>
          <option>Fewer than 100 hires</option>
          <option>100 – 500 hires</option>
          <option>500 – 2,000 hires</option>
          <option>2,000+ hires</option>
        </select>
        <ErrorText id={`${id('teamSize')}-error`} message={err('teamSize')} />
      </div>
      <div>
        <Label htmlFor={id('interest')}>I’m interested in</Label>
        <select
          id={id('interest')}
          name="interest"
          value={values.interest}
          onChange={(e) => set('interest', e.target.value)}
          className={`${inputCls} ${fieldBorder()} cursor-pointer`}
        >
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor={id('message')}>Which roles are you hiring for?</Label>
        <textarea
          {...common('message')}
          aria-describedby={describedBy('message') ?? `${id('message')}-hint`}
          rows={4}
          onChange={(e) => set('message', e.target.value)}
          onBlur={() => blur('message')}
          className={`${inputCls} ${fieldBorder(err('message'))} resize-y`}
          placeholder="e.g. 40 graduate analysts and 6 senior product managers this year. We’d like to test JD upload with our current role briefs."
        />
        {err('message') ? (
          <ErrorText id={`${id('message')}-error`} message={err('message')} />
        ) : (
          <p id={`${id('message')}-hint`} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            A job description or two helps us tailor the demo to your roles.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          By submitting, you agree to our{' '}
          <Link
            to="/privacy"
            className={`rounded font-medium text-violet-700 underline underline-offset-2 dark:text-violet-300 ${focusRing}`}
          >
            Privacy Policy
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending request…
            </>
          ) : (
            'Request a demo'
          )}
        </Button>
      </div>
    </form>
  );
}
