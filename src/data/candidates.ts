import type { CandidateReport } from '../types';

export const candidateReports: CandidateReport[] = [
  {
    id: 'amaya-perera',
    name: 'Amaya Perera',
    initials: 'AP',
    role: 'Senior Product Manager',
    normGroup: 'APAC Product Leaders (n = 4,120)',
    overallScore: 92,
    recommendation: 'Strong hire',
    completedOn: '18 Nov 2026',
    traits: [
      { label: 'Conscientiousness', value: 94 },
      { label: 'Openness', value: 89 },
      { label: 'Emotional Stability', value: 86 },
      { label: 'Agreeableness', value: 78 },
      { label: 'Extraversion', value: 71 },
    ],
    competencies: [
      { label: 'Numerical Reasoning', value: 91 },
      { label: 'Stakeholder SJT', value: 95 },
      { label: 'Verbal Reasoning', value: 88 },
    ],
    aiSummary:
      'Amaya combines exceptionally high conscientiousness with top-decile stakeholder judgement. She is likely to bring structure to ambiguous roadmaps and to negotiate scope changes without damaging relationships. Her numerical reasoning supports data-led prioritisation at portfolio level.',
    strengths: [
      'Escalates delivery risk early and transparently',
      'Translates data into clear trade-off decisions',
      'Calm under shifting executive priorities',
    ],
    developmentAreas: ['May over-plan in fast-moving discovery work — pair with an experimentation coach'],
  },
  {
    id: 'kasun-jayawardena',
    name: 'Kasun Jayawardena',
    initials: 'KJ',
    role: 'Senior Product Manager',
    normGroup: 'APAC Product Leaders (n = 4,120)',
    overallScore: 87,
    recommendation: 'Hire',
    completedOn: '19 Nov 2026',
    traits: [
      { label: 'Conscientiousness', value: 82 },
      { label: 'Openness', value: 93 },
      { label: 'Emotional Stability', value: 79 },
      { label: 'Agreeableness', value: 84 },
      { label: 'Extraversion', value: 88 },
    ],
    competencies: [
      { label: 'Numerical Reasoning', value: 84 },
      { label: 'Stakeholder SJT', value: 86 },
      { label: 'Verbal Reasoning', value: 90 },
    ],
    aiSummary:
      'Kasun is a highly open, energetic communicator who excels at rallying cross-functional teams around a vision. Verbal reasoning is a clear strength. Structured planning and escalation judgement are solid but slightly below Amaya’s profile — a strong fit for zero-to-one product bets.',
    strengths: [
      'Builds momentum and buy-in across teams quickly',
      'Generates creative solutions to novel problems',
      'Persuasive written and verbal communicator',
    ],
    developmentAreas: [
      'Benefits from explicit delivery checkpoints on long programmes',
      'Probe escalation approach in final interview',
    ],
  },
];
