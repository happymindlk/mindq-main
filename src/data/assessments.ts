import type { Assessment, AssessmentCategory } from '../types';

export const assessmentCategories: Array<'All' | AssessmentCategory> = [
  'All',
  'Psychometric',
  'Cognitive',
  'Behavioral',
  'Role-Specific',
];

export const assessments: Assessment[] = [
  {
    id: 'big-five',
    title: 'Big Five Personality (OCEAN)',
    category: 'Psychometric',
    summary:
      'A workplace-calibrated measure of Openness, Conscientiousness, Extraversion, Agreeableness and Emotional Stability, mapped to 18 job-relevant facets.',
    measures: ['Conscientiousness', 'Emotional stability', 'Collaboration style'],
    durationMinutes: 15,
    questionCount: 60,
    level: 'All levels',
    reliability: 0.88,
    featured: true,
    sampleQuestions: [
      {
        id: 'bf-1',
        prompt: 'I prefer to finish one task completely before starting the next.',
        options: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
        explanation:
          'Personality items have no right answer. This item contributes to the Conscientiousness — Orderliness facet.',
      },
      {
        id: 'bf-2',
        prompt: 'When plans change at the last minute, I adapt quickly without much stress.',
        options: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
        explanation: 'This item contributes to Emotional Stability and the Adaptability facet.',
      },
      {
        id: 'bf-3',
        prompt: 'I enjoy introducing myself to new people at industry events.',
        options: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
        explanation: 'This item contributes to Extraversion — Social Confidence.',
      },
    ],
  },
  {
    id: 'numerical-reasoning',
    title: 'Numerical Reasoning',
    category: 'Cognitive',
    summary:
      'Interpret tables, charts and business data under time pressure. Adaptive item difficulty keeps the test short while staying precise across ability levels.',
    measures: ['Data interpretation', 'Ratios & percentages', 'Quantitative logic'],
    durationMinutes: 18,
    questionCount: 20,
    level: 'Mid',
    reliability: 0.91,
    featured: true,
    sampleQuestions: [
      {
        id: 'nr-1',
        prompt: 'Q2 revenue was LKR 48M and Q3 revenue was LKR 54M. What was the quarter-on-quarter growth?',
        options: ['6.0%', '11.1%', '12.5%', '14.8%'],
        correctIndex: 2,
        explanation: '(54 − 48) ÷ 48 = 0.125, so growth was 12.5%.',
      },
      {
        id: 'nr-2',
        prompt: 'A team of 8 processes 1,200 claims per week. At the same rate, how many claims would a team of 14 process?',
        options: ['1,800', '2,100', '2,400', '1,950'],
        correctIndex: 1,
        explanation: '1,200 ÷ 8 = 150 per person. 150 × 14 = 2,100.',
      },
      {
        id: 'nr-3',
        prompt: 'Operating costs are 35% of revenue. If revenue is LKR 80M, what is the operating profit before other costs?',
        options: ['LKR 28M', 'LKR 45M', 'LKR 52M', 'LKR 55M'],
        correctIndex: 2,
        explanation: 'Costs = 0.35 × 80 = 28M. Profit = 80 − 28 = LKR 52M.',
      },
    ],
  },
  {
    id: 'stakeholder-sjt',
    title: 'Stakeholder Management SJT',
    category: 'Behavioral',
    summary:
      'Realistic workplace scenarios that measure how candidates balance competing stakeholder priorities, escalate risk and protect relationships.',
    measures: ['Prioritisation', 'Influence', 'Escalation judgement'],
    durationMinutes: 20,
    questionCount: 16,
    level: 'Senior',
    reliability: 0.84,
    featured: true,
    sampleQuestions: [
      {
        id: 'sjt-1',
        context:
          'You are leading a system migration. Two days before go-live, the Finance Director asks you to add a reporting feature that was never in scope.',
        prompt: 'What is the MOST effective response?',
        options: [
          'Agree to add it — the Finance Director is senior and influential.',
          'Decline firmly and point to the signed-off scope document.',
          'Acknowledge the need, explain the go-live risk, and propose a dated follow-up release.',
          'Escalate immediately to the CEO to make the call.',
        ],
        correctIndex: 2,
        explanation:
          'The best response protects the relationship and the delivery: it validates the need, makes risk transparent and offers a concrete path.',
      },
      {
        id: 'sjt-2',
        context:
          'A key client emails your manager directly to complain about a delay you were not aware of.',
        prompt: 'What should you do FIRST?',
        options: [
          'Reply to the client yourself to apologise.',
          'Find out the facts about the delay, then align with your manager on a response.',
          'Wait for your manager to raise it with you.',
          'Forward the email to the delivery team and ask them to respond.',
        ],
        correctIndex: 1,
        explanation: 'Establishing the facts and aligning internally avoids mixed messages to the client.',
      },
    ],
  },
  {
    id: 'verbal-reasoning',
    title: 'Verbal Reasoning',
    category: 'Cognitive',
    summary:
      'Evaluate written arguments and business passages to judge whether statements are true, false or cannot be determined from the text.',
    measures: ['Critical reading', 'Inference', 'Argument evaluation'],
    durationMinutes: 16,
    questionCount: 24,
    level: 'All levels',
    reliability: 0.89,
    featured: true,
    sampleQuestions: [
      {
        id: 'vr-1',
        context:
          'Remote onboarding programmes that include a named buddy show 23% higher 90-day retention. However, the effect disappears when buddies are assigned more than three new hires at once.',
        prompt: 'Statement: Assigning every new hire a buddy will always improve retention.',
        options: ['True', 'False', 'Cannot say'],
        correctIndex: 1,
        explanation: 'The passage says the effect disappears when buddies have more than three hires, so "always" is false.',
      },
      {
        id: 'vr-2',
        context:
          'The company will open a Colombo office in Q1. Hiring for the office will be led by the regional HR team.',
        prompt: 'Statement: The Colombo office will employ more than 50 people.',
        options: ['True', 'False', 'Cannot say'],
        correctIndex: 2,
        explanation: 'Headcount is not mentioned, so it cannot be determined from the passage.',
      },
    ],
  },
  {
    id: 'abstract-reasoning',
    title: 'Abstract Reasoning',
    category: 'Cognitive',
    summary:
      'Identify rules in sequences of shapes and patterns. A strong, culture-fair predictor of learning agility and problem solving in novel situations.',
    measures: ['Pattern recognition', 'Learning agility', 'Fluid intelligence'],
    durationMinutes: 14,
    questionCount: 18,
    level: 'All levels',
    reliability: 0.87,
    sampleQuestions: [
      {
        id: 'ar-1',
        prompt: 'Which number completes the sequence? 3, 6, 12, 24, __',
        options: ['30', '36', '48', '60'],
        correctIndex: 2,
        explanation: 'Each term doubles: 24 × 2 = 48.',
      },
      {
        id: 'ar-2',
        prompt: 'Which number completes the sequence? 2, 5, 11, 23, __',
        options: ['35', '46', '47', '49'],
        correctIndex: 2,
        explanation: 'Each term is ×2 + 1: 23 × 2 + 1 = 47.',
      },
    ],
  },
  {
    id: 'leadership-sjt',
    title: 'Leadership Judgement SJT',
    category: 'Behavioral',
    summary:
      'Measures how first-line and senior leaders coach, delegate, give feedback and make decisions with incomplete information.',
    measures: ['Coaching', 'Delegation', 'Decision quality'],
    durationMinutes: 22,
    questionCount: 18,
    level: 'Executive',
    reliability: 0.83,
    sampleQuestions: [
      {
        id: 'ls-1',
        context:
          'A high-performing team member has missed two deadlines this month and seems disengaged in meetings.',
        prompt: 'What is the MOST effective first step?',
        options: [
          'Issue a formal written warning.',
          'Hold a private conversation to understand what has changed.',
          'Redistribute their work to others quietly.',
          'Raise it in the next team meeting so expectations are clear.',
        ],
        correctIndex: 1,
        explanation: 'A private, curious conversation surfaces root causes without damaging trust.',
      },
    ],
  },
  {
    id: 'integrity',
    title: 'Integrity & Work Ethic',
    category: 'Psychometric',
    summary:
      'Assesses reliability, rule-following and counterproductive work behaviour risk, with built-in response-distortion detection.',
    measures: ['Reliability', 'Rule adherence', 'Response consistency'],
    durationMinutes: 12,
    questionCount: 40,
    level: 'All levels',
    reliability: 0.86,
    sampleQuestions: [
      {
        id: 'in-1',
        prompt: 'It is acceptable to bend company rules if it helps a customer.',
        options: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
        explanation: 'Items like this feed the Rule Adherence scale and are cross-checked for consistency.',
      },
    ],
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    category: 'Psychometric',
    summary:
      'Ability-based measure of perceiving, understanding and managing emotions in self and others — essential for client-facing and people-leader roles.',
    measures: ['Self-awareness', 'Empathy', 'Emotion regulation'],
    durationMinutes: 15,
    questionCount: 30,
    level: 'Mid',
    reliability: 0.85,
    sampleQuestions: [
      {
        id: 'ei-1',
        context: 'A colleague’s proposal was rejected in front of the leadership team. Afterwards they are unusually quiet.',
        prompt: 'What is your colleague MOST likely feeling?',
        options: ['Relief', 'Embarrassment and disappointment', 'Indifference', 'Excitement'],
        correctIndex: 1,
        explanation: 'Public rejection of one’s work most commonly produces embarrassment and disappointment.',
      },
    ],
  },
  {
    id: 'customer-service',
    title: 'Customer Service Associate',
    category: 'Role-Specific',
    summary:
      'Job-simulation for contact-centre and frontline roles: de-escalation, written tone, policy application and multitasking.',
    measures: ['De-escalation', 'Written communication', 'Policy judgement'],
    durationMinutes: 25,
    questionCount: 22,
    level: 'Entry',
    reliability: 0.82,
    sampleQuestions: [
      {
        id: 'cs-1',
        context: 'A customer writes: “This is the third time my order has been delayed. I want a refund NOW.”',
        prompt: 'Which reply opening is BEST?',
        options: [
          '“As per our policy, refunds take 7–10 working days.”',
          '“I’m sorry your order has been delayed three times — that’s frustrating. Let me sort this out now.”',
          '“Please calm down so I can help you.”',
          '“Delays are caused by our courier partner, not us.”',
        ],
        correctIndex: 1,
        explanation: 'Acknowledging the specific issue and emotion, then taking ownership, de-escalates fastest.',
      },
    ],
  },
  {
    id: 'sales-aptitude',
    title: 'B2B Sales Aptitude',
    category: 'Role-Specific',
    summary:
      'Combines drive and resilience scales with consultative-selling scenarios to predict quota attainment in complex B2B sales.',
    measures: ['Resilience', 'Discovery questioning', 'Negotiation'],
    durationMinutes: 24,
    questionCount: 26,
    level: 'Mid',
    reliability: 0.84,
    sampleQuestions: [
      {
        id: 'sa-1',
        context: 'On a discovery call, the prospect says: “We’re happy with our current provider.”',
        prompt: 'What is the BEST next question?',
        options: [
          '“Can I send you our pricing anyway?”',
          '“What would need to change for you to consider an alternative?”',
          '“Did you know we are 20% cheaper?”',
          '“Who else should I speak to?”',
        ],
        correctIndex: 1,
        explanation: 'An open question that respects their position uncovers latent needs without pressure.',
      },
    ],
  },
  {
    id: 'finance-analyst',
    title: 'Financial Analyst',
    category: 'Role-Specific',
    summary:
      'Applied finance case covering variance analysis, working capital and investment appraisal for analyst and FP&A roles.',
    measures: ['Variance analysis', 'Cash-flow reasoning', 'Commercial judgement'],
    durationMinutes: 30,
    questionCount: 20,
    level: 'Mid',
    reliability: 0.88,
    sampleQuestions: [
      {
        id: 'fa-1',
        prompt: 'Budgeted sales were 10,000 units at LKR 500. Actual sales were 9,000 units at LKR 540. What is the sales price variance?',
        options: ['LKR 360,000 favourable', 'LKR 400,000 favourable', 'LKR 500,000 adverse', 'LKR 140,000 adverse'],
        correctIndex: 0,
        explanation: 'Price variance = (540 − 500) × 9,000 actual units = LKR 360,000 favourable.',
      },
    ],
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering Fundamentals',
    category: 'Role-Specific',
    summary:
      'Language-agnostic assessment of data structures, complexity, debugging and system-design reasoning for mid-level engineers.',
    measures: ['Algorithms', 'Debugging', 'System design'],
    durationMinutes: 35,
    questionCount: 18,
    level: 'Mid',
    reliability: 0.87,
    sampleQuestions: [
      {
        id: 'se-1',
        prompt: 'What is the average time complexity of looking up a key in a well-distributed hash map?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctIndex: 0,
        explanation: 'With a good hash function and load factor, lookups are constant time on average.',
      },
      {
        id: 'se-2',
        prompt: 'Which approach BEST protects a public API from a sudden traffic spike?',
        options: ['Increase the database timeout', 'Add rate limiting and a queue', 'Disable logging', 'Return cached 500 errors'],
        correctIndex: 1,
        explanation: 'Rate limiting and queuing smooth load and protect downstream services.',
      },
    ],
  },
];
