import type { FaqCategory, FaqItem } from '../../../types';
import { faqs as sharedFaqs } from '../../../data/faqs';

/**
 * Demo B FAQ set. Shared items are reused only where they describe implemented capabilities;
 * the rest are rewritten so the page never mentions features MindQ doesn't ship.
 */
const REUSED_IDS = ['gdpr', 'trial'];

const demoBFaqs: FaqItem[] = [
  {
    id: 'what-is-mindq',
    category: 'Product',
    question: 'What is MindQ?',
    answer:
      'MindQ is an enterprise psychometric and skills assessment platform. You upload a job description, MindQ builds a tailored assessment suite from Psychometric, Situational Judgement and Role Competency modules, and each candidate’s results arrive as an Executive Dossier with deterministic scores and a JD-aligned AI synthesis.',
  },
  {
    id: 'jd-upload',
    category: 'Product',
    question: 'What can I upload to generate an assessment suite?',
    answer:
      'A job description PDF or a short written role brief. MindQ extracts the role requirements and proposes a blueprint of modules. You review and edit the blueprint before any candidate is invited.',
  },
  {
    id: 'bulk-invites',
    category: 'Product',
    question: 'How do candidates get access?',
    answer:
      'You invite candidates by email, up to 100 per batch. Each candidate verifies with a passwordless 6-digit code sent to their inbox, so there are no accounts or passwords to create.',
  },
  {
    id: 'blind-review',
    category: 'Product',
    question: 'What is Blind Review?',
    answer:
      'Blind Review hides candidate names and identifying details while your panel compares results, so shortlisting decisions are made on assessment evidence first.',
  },
  {
    id: 'scoring',
    category: 'Science',
    question: 'How are candidates scored?',
    answer:
      'Scoring is deterministic: the same responses always produce the same facet-level scores. Those scores are calculated before any AI step runs, and AI never changes them.',
  },
  {
    id: 'ai-summaries',
    category: 'Science',
    question: 'What does the AI do, and what are the language guardrails?',
    answer:
      'After scoring, AI evaluates the results against the job description and writes an executive synthesis. Automated guardrails check that every statement uses objective psychometric terminology, cites the scale it is based on, and contains no subjective or character labels. The AI only sees scored results, never CVs, photos or demographic data.',
  },
  {
    id: 'integrity',
    category: 'Security & Privacy',
    question: 'How do you protect assessment integrity?',
    answer:
      'Timers are enforced by the server in UTC, answers autosave and lock after a section is submitted, question order is shuffled for every candidate, and only one active session is allowed per candidate at a time.',
  },
  {
    id: 'isolation',
    category: 'Security & Privacy',
    question: 'How is our data kept separate from other clients?',
    answer:
      'MindQ is multi-tenant with row-level security (RLS) enforced in the database. Every query is scoped to your organisation, so one client can never read another client’s candidates or results.',
  },
];

export const faqItems: FaqItem[] = [...demoBFaqs, ...sharedFaqs.filter((f) => REUSED_IDS.includes(f.id))];

export const faqCategoryList: FaqCategory[] = Array.from(new Set(faqItems.map((f) => f.category)));
