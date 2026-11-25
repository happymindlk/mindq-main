export type AssessmentCategory = 'Psychometric' | 'Cognitive' | 'Behavioral' | 'Role-Specific';

export type AssessmentLevel = 'All levels' | 'Entry' | 'Mid' | 'Senior' | 'Executive';

export interface SampleQuestion {
  id: string;
  prompt: string;
  /** Optional supporting context, e.g. a data table or scenario. */
  context?: string;
  options: string[];
  /** Index into `options`. Omitted for personality items, which have no correct answer. */
  correctIndex?: number;
  explanation: string;
}

export interface Assessment {
  id: string;
  title: string;
  category: AssessmentCategory;
  summary: string;
  measures: string[];
  durationMinutes: number;
  questionCount: number;
  level: AssessmentLevel;
  reliability: number;
  featured?: boolean;
  sampleQuestions: SampleQuestion[];
}

export interface TraitScore {
  label: string;
  /** 0–100 percentile against the selected norm group. */
  value: number;
}

export type Recommendation = 'Strong hire' | 'Hire' | 'Hire with development plan' | 'Not recommended';

export interface CandidateReport {
  id: string;
  name: string;
  initials: string;
  role: string;
  normGroup: string;
  overallScore: number;
  recommendation: Recommendation;
  completedOn: string;
  traits: TraitScore[];
  competencies: TraitScore[];
  aiSummary: string;
  strengths: string[];
  developmentAreas: string[];
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  short: string;
  description: string;
  bullets: string[];
}

export type FaqCategory = 'Product' | 'Science' | 'Security & Privacy' | 'Pricing';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'Research' | 'Product' | 'Hiring Guide' | 'News';
  author: string;
  authorRole: string;
  publishedOn: string;
  readMinutes: number;
  featured?: boolean;
  body: string[];
}

export interface SciencePillar {
  id: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  highlighted?: boolean;
  features: string[];
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface CompanyInfo {
  name: string;
  domain: string;
  tagline: string;
  mission: string;
  story: string[];
  values: CompanyValue[];
  stats: CompanyStat[];
  team: TeamMember[];
  contact: {
    salesEmail: string;
    supportEmail: string;
    privacyEmail: string;
    phone: string;
    address: string[];
    hours: string;
  };
  trustedBy: string[];
}

export interface PrivacySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  interest: string;
  message: string;
}
