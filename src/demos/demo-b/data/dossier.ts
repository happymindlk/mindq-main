/**
 * Demo B dossier layer. Scores come from the shared `candidateReports`; this file adds the
 * JD-alignment and guardrail-verified synthesis that the Executive Dossier renders. Copy follows
 * MindQ's language guardrails: psychometric terminology, percentile evidence, no subjective labels.
 */

export type AlignmentBand = 'Strong alignment' | 'Aligned' | 'Verify at interview';

export interface JdAlignment {
  requirement: string;
  evidence: string;
  value: number;
  band: AlignmentBand;
}

export interface DossierEntry {
  candidateId: string;
  fileRef: string;
  roleFit: number;
  scoredAtUtc: string;
  alignments: JdAlignment[];
  synthesis: string;
  interviewProbes: string[];
}

export const dossierJd = {
  title: 'Senior Product Manager, Payments Platform',
  source: 'JD_SeniorPM_Payments.pdf',
  modules: ['Big Five Personality', 'Stakeholder SJT', 'Numerical Reasoning', 'Verbal Reasoning'],
};

export const guardrailChecks = [
  'Psychometric terminology only',
  'Every statement cites a scored scale',
  'No subjective or character labels',
  'No CV, photo or demographic inputs',
];

export const dossiers: Record<string, DossierEntry> = {
  'amaya-perera': {
    candidateId: 'amaya-perera',
    fileRef: 'MQ-2611-0418',
    roleFit: 94,
    scoredAtUtc: '2026-11-18 09:42 UTC',
    alignments: [
      { requirement: 'Own roadmap delivery across squads', evidence: 'Conscientiousness · 94th pct', value: 94, band: 'Strong alignment' },
      { requirement: 'Negotiate scope with executive stakeholders', evidence: 'Stakeholder SJT · 95th pct', value: 95, band: 'Strong alignment' },
      { requirement: 'Prioritise using revenue and risk data', evidence: 'Numerical Reasoning · 91st pct', value: 91, band: 'Strong alignment' },
      { requirement: 'Represent the product externally', evidence: 'Extraversion · 71st pct', value: 71, band: 'Verify at interview' },
    ],
    synthesis:
      'Conscientiousness (94th percentile) and Stakeholder SJT (95th percentile) indicate consistent planning behaviour and effective trade-off judgement against the JD’s roadmap-ownership and executive-negotiation requirements. Numerical Reasoning (91st percentile) supports the data-led prioritisation responsibilities. Extraversion (71st percentile) is the lowest scale in the profile and maps to the JD’s external-representation duty, so it is listed for interview verification.',
    interviewProbes: [
      'Describe a roadmap you re-sequenced after new revenue data arrived.',
      'Walk through a partner or customer briefing you led end to end.',
    ],
  },
  'kasun-jayawardena': {
    candidateId: 'kasun-jayawardena',
    fileRef: 'MQ-2611-0419',
    roleFit: 88,
    scoredAtUtc: '2026-11-19 14:07 UTC',
    alignments: [
      { requirement: 'Own roadmap delivery across squads', evidence: 'Conscientiousness · 82nd pct', value: 82, band: 'Verify at interview' },
      { requirement: 'Negotiate scope with executive stakeholders', evidence: 'Stakeholder SJT · 86th pct', value: 86, band: 'Aligned' },
      { requirement: 'Prioritise using revenue and risk data', evidence: 'Numerical Reasoning · 84th pct', value: 84, band: 'Aligned' },
      { requirement: 'Represent the product externally', evidence: 'Extraversion · 88th pct', value: 88, band: 'Strong alignment' },
    ],
    synthesis:
      'Openness (93rd percentile) and Verbal Reasoning (90th percentile) are the highest scales in the profile and align with the JD’s product-discovery and external-representation requirements. Stakeholder SJT (86th) and Numerical Reasoning (84th) fall within the role-fit band. Conscientiousness (82nd percentile) is below the norm group’s top decile against the roadmap-delivery requirement, so it is listed as a structured interview probe.',
    interviewProbes: [
      'How do you set and track delivery checkpoints on a multi-quarter programme?',
      'Describe a time you escalated a delivery risk. What triggered it?',
    ],
  },
};
