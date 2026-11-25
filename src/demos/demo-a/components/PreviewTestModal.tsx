import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Clock, RotateCcw, X } from 'lucide-react';
import type { Assessment } from '../../../types';
import { Modal } from './Modal';
import { Button, ButtonLink } from './Button';
import { CategoryTag } from './AssessmentCard';

interface PreviewTestModalProps {
  assessment: Assessment | null;
  onClose: () => void;
}

export function PreviewTestModal({ assessment, onClose }: PreviewTestModalProps) {
  return (
    <Modal
      open={assessment !== null}
      onClose={onClose}
      title={assessment ? `Preview: ${assessment.title}` : ''}
      subtitle={
        assessment && (
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <CategoryTag category={assessment.category} />
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" />
              Full test: {assessment.durationMinutes} min · {assessment.questionCount} items
            </span>
          </span>
        )
      }
    >
      {/* Keyed so state resets per assessment */}
      {assessment && <PreviewRunner key={assessment.id} assessment={assessment} onClose={onClose} />}
    </Modal>
  );
}

function PreviewRunner({ assessment, onClose }: { assessment: Assessment; onClose: () => void }) {
  const questions = assessment.sampleQuestions;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  const selected = answers[q.id];
  const answered = selected !== undefined;
  const isScored = q.correctIndex !== undefined;
  const scoredQuestions = questions.filter((x) => x.correctIndex !== undefined);
  const correctCount = scoredQuestions.filter((x) => answers[x.id] === x.correctIndex).length;

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="py-4 text-center">
        <CheckCircle2 className="mx-auto size-12 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">Preview complete</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">
          {scoredQuestions.length > 0
            ? `You answered ${correctCount} of ${scoredQuestions.length} sample items correctly. The full test adapts difficulty and compares results against your chosen norm group.`
            : 'Personality items have no right or wrong answers. In the full test, responses are scored across facets and compared against your chosen norm group.'}
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="secondary" onClick={restart}>
            <RotateCcw className="size-4" aria-hidden="true" />
            Try again
          </Button>
          <ButtonLink to="/contact?intent=demo" onClick={onClose}>
            Book a Demo
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>
          Sample question {index + 1} of {questions.length}
        </span>
        <span>{isScored ? 'Scored item' : 'Self-report item'}</span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-night-800"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={index + (answered ? 1 : 0)}
        aria-label="Preview progress"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-700 to-coral-500 transition-[width] duration-300"
          style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {q.context && (
        <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 dark:border-night-700 dark:bg-night-800 dark:text-slate-300">
          {q.context}
        </p>
      )}
      <p className="mt-5 font-medium text-slate-900 dark:text-white" id={`q-${q.id}`}>
        {q.prompt}
      </p>

      <div role="radiogroup" aria-labelledby={`q-${q.id}`} className="mt-4 grid gap-2">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = isScored && i === q.correctIndex;
          let state =
            'border-slate-200 bg-white text-slate-800 hover:border-brand-600/50 hover:bg-brand-700/5 dark:border-night-700 dark:bg-night-900 dark:text-slate-200 dark:hover:border-brand-400/50';
          if (answered && isScored && isCorrect)
            state = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200';
          else if (answered && isSelected && isScored)
            state = 'border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-500/10 dark:text-rose-200';
          else if (isSelected)
            state = 'border-brand-700 bg-brand-700/5 text-brand-800 dark:border-brand-400 dark:bg-brand-400/10 dark:text-brand-200';
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={answered && isScored}
              onClick={() => setAnswers((a) => ({ ...a, [q.id]: i }))}
              className={`flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-default ${state}`}
            >
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                  isSelected || (answered && isCorrect) ? 'border-current' : 'border-slate-300 dark:border-slate-600'
                }`}
                aria-hidden="true"
              >
                {answered && isScored && isCorrect ? (
                  <Check className="size-3.5" />
                ) : answered && isScored && isSelected ? (
                  <X className="size-3.5" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {answered && (
          <p className="mt-4 animate-fade-up rounded-xl bg-brand-700/5 p-4 text-sm leading-relaxed text-slate-700 dark:bg-brand-400/10 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">
              {isScored ? (selected === q.correctIndex ? 'Correct. ' : 'Not quite. ') : 'Noted. '}
            </span>
            {q.explanation}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="ghost" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          Back
        </Button>
        <Button
          disabled={!answered}
          onClick={() => (index === questions.length - 1 ? setFinished(true) : setIndex((i) => i + 1))}
        >
          {index === questions.length - 1 ? 'See summary' : 'Next question'}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
