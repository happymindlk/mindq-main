import type { CompanyInfo, PricingTier, SciencePillar, WorkflowStep } from '../types';

export const company: CompanyInfo = {
  name: 'MindQ',
  domain: 'mindqtalent.com',
  tagline: 'Enterprise psychometric & skills assessment, built on science.',
  mission:
    'We help organisations hire and develop people on validated potential — replacing CV guesswork with fair, evidence-based decisions.',
  story: [
    'MindQ was founded by a team of organisational psychologists and engineers who had spent a decade running assessment centres for banks, telcos and global BPOs. We saw the same pattern everywhere: excellent candidates screened out by keyword filters, and expensive mis-hires made on the strength of a polished interview.',
    'So we built the platform we wished we had — rigorous psychometrics, job-relevant simulations and plain-language AI executive summaries that hiring managers actually read. Every assessment is validated against real job-performance data and monitored continuously for adverse impact.',
    'Today MindQ supports talent teams across South Asia, the Middle East and Europe, from 50-person scale-ups to enterprises assessing tens of thousands of candidates a year.',
  ],
  values: [
    {
      title: 'Evidence over intuition',
      description: 'Every score we report is backed by published reliability and criterion validity data.',
    },
    {
      title: 'Fair by design',
      description: 'We test for adverse impact before release and monitor it continuously in production.',
    },
    {
      title: 'Candidate dignity',
      description: 'Mobile-friendly, accessible tests with clear instructions and feedback for every candidate.',
    },
    {
      title: 'Clarity for decision-makers',
      description: 'Reports written for hiring managers, not psychometricians — with the detail one click away.',
    },
  ],
  stats: [
    { value: '1.2M+', label: 'Assessments completed' },
    { value: '380+', label: 'Enterprise clients' },
    { value: '62%', label: 'Faster time-to-hire' },
    { value: '0.48', label: 'Avg. predictive validity (r)' },
  ],
  team: [
    {
      name: 'Dr. Nirmala Fernando',
      role: 'Chief Science Officer',
      bio: 'Chartered occupational psychologist; 15 years building assessment centres for global financial institutions.',
      initials: 'NF',
    },
    {
      name: 'Ravindu Silva',
      role: 'Co-founder & CEO',
      bio: 'Former Head of Talent Acquisition at a 20,000-person BPO; obsessed with fair, fast hiring.',
      initials: 'RS',
    },
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Head of Psychometrics',
      bio: 'PhD in psychometrics; leads item-response modelling and norm-group research.',
      initials: 'SM',
    },
    {
      name: 'Thilina Gunasekara',
      role: 'CTO',
      bio: 'Builds secure, scalable assessment infrastructure and MindQ’s AI reporting engine.',
      initials: 'TG',
    },
  ],
  contact: {
    salesEmail: 'sales@mindqtalent.com',
    supportEmail: 'support@mindqtalent.com',
    privacyEmail: 'privacy@mindqtalent.com',
    phone: '+94 11 234 5678',
    address: ['Level 12, One Galle Face Tower', 'Colombo 02, Sri Lanka'],
    hours: 'Mon–Fri, 8:30 am – 6:00 pm (GMT+5:30)',
  },
  trustedBy: ['Ceylon Bank Group', 'Lanka Telecom', 'Horizon BPO', 'Meridian Insurance', 'Apex Logistics', 'Serendib Hotels'],
};

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'create',
    step: 1,
    title: 'Build a validated assessment',
    short: 'Create',
    description:
      'Pick a role template or combine up to five tests from the library. MindQ recommends a battery and norm group based on the job profile.',
    bullets: [
      'Role templates for 120+ job families',
      'Mix Big Five, cognitive, SJT and role-specific tests',
      'Add custom screening questions and video responses',
    ],
  },
  {
    id: 'invite',
    step: 2,
    title: 'Invite candidates at scale',
    short: 'Invite',
    description:
      'Send branded invitations by email, link or ATS integration. Candidates complete on any device with built-in proctoring.',
    bullets: [
      'Workday, SAP SuccessFactors & Greenhouse integrations',
      'Webcam snapshots, tab-switch & copy-paste detection',
      'WCAG 2.2 AA accessible candidate experience',
    ],
  },
  {
    id: 'decide',
    step: 3,
    title: 'Decide with AI executive summaries',
    short: 'Decide',
    description:
      'Compare ranked candidates side by side. Each report includes an AI-written executive summary, strengths, risks and interview probes.',
    bullets: [
      'Percentile scores against relevant norm groups',
      'Plain-language AI summaries reviewed by psychologists',
      'Structured interview guides generated per candidate',
    ],
  },
];

export const sciencePillars: SciencePillar[] = [
  {
    id: 'reliability',
    title: 'Reliability',
    metric: 'α ≥ 0.82',
    metricLabel: 'Internal consistency across all scales',
    description: 'Every scale meets or exceeds EFPA review standards for internal consistency and test–retest stability.',
  },
  {
    id: 'validity',
    title: 'Predictive validity',
    metric: 'r = 0.48',
    metricLabel: 'Average correlation with job performance',
    description: 'Validated against supervisor ratings and objective KPIs in 40+ criterion studies across industries.',
  },
  {
    id: 'fairness',
    title: 'Fairness monitoring',
    metric: '4/5ths',
    metricLabel: 'Adverse-impact rule tested on every release',
    description: 'Group differences are monitored by gender, age and language background with automated alerts.',
  },
  {
    id: 'security',
    title: 'Security & privacy',
    metric: 'ISO 27001',
    metricLabel: 'Certified · GDPR & PDPA aligned',
    description: 'Encrypted at rest and in transit, regional data residency, and role-based access for every report.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For growing teams hiring regularly',
    price: '$249',
    priceNote: 'per month, billed annually',
    features: ['Up to 600 candidates / year', 'Full assessment library', 'AI executive summaries', 'Email support'],
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For talent teams standardising selection',
    price: '$690',
    priceNote: 'per month, billed annually',
    highlighted: true,
    features: [
      'Up to 3,000 candidates / year',
      'Custom batteries & norm groups',
      'ATS integrations',
      'Branded candidate experience',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For high-volume & regulated hiring',
    price: 'Custom',
    priceNote: 'tailored to volume and scope',
    features: [
      'Unlimited candidates',
      'Local validation studies',
      'SSO, SCIM & data residency',
      'Dedicated psychologist & CSM',
    ],
  },
];
