import type { FaqCategory, FaqItem } from '../types';

export const faqCategories: FaqCategory[] = ['Product', 'Science', 'Security & Privacy', 'Pricing'];

export const faqs: FaqItem[] = [
  {
    id: 'what-is-mindq',
    category: 'Product',
    question: 'What is MindQ?',
    answer:
      'MindQ is an enterprise psychometric and skills assessment platform. You combine validated tests — Big Five personality, cognitive reasoning, situational judgement and role-specific simulations — into one candidate experience, then compare results with AI executive summaries.',
  },
  {
    id: 'how-long',
    category: 'Product',
    question: 'How long does a typical assessment take candidates?',
    answer:
      'Most batteries take 35–60 minutes. Individual tests range from 12 to 35 minutes, and adaptive cognitive tests shorten automatically for candidates whose ability level is identified early.',
  },
  {
    id: 'integrations',
    category: 'Product',
    question: 'Does MindQ integrate with our ATS?',
    answer:
      'Yes. We offer native integrations with Workday, SAP SuccessFactors, Greenhouse, Lever and SmartRecruiters, plus a REST API and webhooks for custom systems.',
  },
  {
    id: 'ai-summaries',
    category: 'Product',
    question: 'How are AI Executive Summaries produced?',
    answer:
      'Summaries are generated from the candidate’s scored results only — never from CVs, photos or demographic data. Templates and outputs are reviewed by our psychology team, and every statement links back to the underlying score.',
  },
  {
    id: 'validity',
    category: 'Science',
    question: 'How do you prove the tests predict job performance?',
    answer:
      'We run criterion-validity studies that correlate test scores with supervisor ratings and objective KPIs. Our average predictive validity is r = 0.48 across 40+ studies, and technical manuals are available to clients under NDA.',
  },
  {
    id: 'norms',
    category: 'Science',
    question: 'Which norm groups do you compare candidates against?',
    answer:
      'Choose from 60+ norm groups by region, job level and job family — for example "APAC Product Leaders" or "Graduate Finance Applicants". Enterprise clients can build organisation-specific norms.',
  },
  {
    id: 'fairness',
    category: 'Science',
    question: 'How do you prevent bias?',
    answer:
      'Every item is reviewed for cultural and linguistic bias, and every test is checked against the 4/5ths adverse-impact rule before release. We continuously monitor production data and alert clients to any emerging group differences.',
  },
  {
    id: 'data-location',
    category: 'Security & Privacy',
    question: 'Where is candidate data stored?',
    answer:
      'Data is hosted in ISO 27001-certified data centres. Enterprise customers can choose regional residency in Singapore, Frankfurt or Mumbai.',
  },
  {
    id: 'gdpr',
    category: 'Security & Privacy',
    question: 'Is MindQ GDPR and PDPA compliant?',
    answer:
      'Yes. We act as a data processor, sign DPAs with every client, support candidate access and deletion requests, and apply configurable retention policies.',
  },
  {
    id: 'cheating',
    category: 'Security & Privacy',
    question: 'How do you prevent cheating?',
    answer:
      'Randomised item banks, time limits, webcam snapshots, full-screen enforcement, and tab-switch and copy-paste detection. Suspicious sessions are flagged in the report.',
  },
  {
    id: 'pricing-model',
    category: 'Pricing',
    question: 'How is MindQ priced?',
    answer:
      'Plans are priced by annual candidate volume, not per test, so you can use the full library without counting credits. Enterprise pricing is tailored to volume and services.',
  },
  {
    id: 'trial',
    category: 'Pricing',
    question: 'Can we pilot MindQ before committing?',
    answer:
      'Yes. Book a demo and we will set up a 30-day pilot with up to 50 candidates and a results review with one of our psychologists.',
  },
];
