import type { BlogArticle } from '../types';

export const blogArticles: BlogArticle[] = [
  {
    id: 'cv-screening-validity',
    title: 'Why CV screening predicts so little — and what to use instead',
    excerpt:
      'Decades of selection research show years of experience and education explain only a sliver of job performance. Here is what the evidence says works better.',
    category: 'Research',
    author: 'Dr. Sarah Mitchell',
    authorRole: 'Head of Psychometrics',
    publishedOn: '12 Nov 2026',
    readMinutes: 7,
    featured: true,
    body: [
      'Most hiring funnels still start with a CV screen. It feels efficient: a recruiter scans for the right titles, the right degree and the right number of years. The problem is that these signals are weak predictors of how someone will actually perform.',
      'Meta-analytic research on selection methods consistently finds that years of experience correlate only modestly with job performance once someone has the basic skills for the role. Education level adds little beyond that. Meanwhile, cognitive ability tests, structured interviews and well-designed situational judgement tests show substantially stronger relationships with performance.',
      'CV screening also introduces bias. Names, universities and employment gaps all trigger assumptions that have nothing to do with capability. Candidates from non-traditional backgrounds — career changers, returners, self-taught specialists — are disproportionately filtered out.',
      'The alternative is to move validated assessment to the top of the funnel. Short cognitive and personality measures, followed by a role-relevant simulation, give every applicant the same chance to demonstrate potential. Structured interviews then probe the specific areas the assessment flagged.',
      'Teams that make this switch typically report faster time-to-hire, more diverse shortlists and fewer early-tenure exits. The CV still has a role — confirming eligibility and context — but it should no longer be the gatekeeper.',
    ],
  },
  {
    id: 'ai-executive-summaries',
    title: 'Introducing AI Executive Summaries for every candidate report',
    excerpt:
      'Hiring managers told us they skip to the bottom of 12-page reports. So we wrote the bottom first — in plain language, linked to every underlying score.',
    category: 'Product',
    author: 'Thilina Gunasekara',
    authorRole: 'CTO',
    publishedOn: '28 Oct 2026',
    readMinutes: 5,
    body: [
      'Psychometric reports have a reputation problem: they are precise, thorough and almost never read in full by the people making hiring decisions.',
      'AI Executive Summaries change that. Every MindQ report now opens with a short, plain-language summary of the candidate’s profile against the role, followed by key strengths, development areas and suggested interview probes.',
      'Summaries are generated only from scored assessment data. They never see CVs, photos or demographic information. Each sentence is traceable back to a specific scale score, and our psychology team reviews templates and samples every week.',
      'In our pilot with 14 enterprise clients, hiring managers spent 3× longer engaging with reports and were significantly more likely to use the suggested interview probes.',
    ],
  },
  {
    id: 'big-five-hiring-guide',
    title: 'A hiring manager’s guide to the Big Five personality traits',
    excerpt:
      'Conscientiousness, Openness, Extraversion, Agreeableness and Emotional Stability — what each trait predicts at work, and what it does not.',
    category: 'Hiring Guide',
    author: 'Dr. Nirmala Fernando',
    authorRole: 'Chief Science Officer',
    publishedOn: '9 Oct 2026',
    readMinutes: 9,
    body: [
      'The Big Five model is the most widely researched framework in personality psychology. It describes personality along five broad dimensions, each of which has distinct relationships with workplace outcomes.',
      'Conscientiousness — organisation, dependability, drive — is the most consistent personality predictor of performance across almost all jobs. Emotional Stability predicts performance under pressure and in customer-facing roles.',
      'Extraversion matters most in sales and leadership roles, while Openness predicts training performance and success in roles requiring creativity. Agreeableness predicts effective teamwork but can be a double-edged sword in negotiation-heavy roles.',
      'Crucially, there is no "perfect" profile. The right profile depends on the role, the team and the context. That is why MindQ reports compare candidates against role-relevant norm groups and translate trait scores into job-specific implications.',
    ],
  },
  {
    id: 'sjt-design',
    title: 'How we design situational judgement tests that candidates trust',
    excerpt:
      'Great SJTs feel like a preview of the job. Our five-step design process starts with critical-incident interviews with your best performers.',
    category: 'Research',
    author: 'Dr. Sarah Mitchell',
    authorRole: 'Head of Psychometrics',
    publishedOn: '22 Sep 2026',
    readMinutes: 6,
    body: [
      'Situational judgement tests (SJTs) present realistic work scenarios and ask candidates to choose the most effective response. When done well, they predict performance and give candidates an honest preview of the role.',
      'Our process begins with critical-incident interviews: we ask high and low performers to describe real situations that made the difference in their role. These become the raw material for scenarios.',
      'Subject-matter experts then rate response options, and we pilot items with job incumbents to build a scoring key grounded in what actually works in your organisation.',
      'Finally, every SJT is checked for adverse impact and reading-level burden before release, so it measures judgement — not language proficiency.',
    ],
  },
  {
    id: 'colombo-office',
    title: 'MindQ opens new Colombo innovation hub',
    excerpt:
      'Our new office at One Galle Face will house our psychometrics research lab and expanded customer success team for South Asia.',
    category: 'News',
    author: 'Ravindu Silva',
    authorRole: 'Co-founder & CEO',
    publishedOn: '3 Sep 2026',
    readMinutes: 3,
    body: [
      'We are delighted to announce the opening of our new Colombo innovation hub at One Galle Face Tower.',
      'The hub houses our psychometrics research lab, where we will run local norming and validation studies in Sinhala, Tamil and English, alongside an expanded customer success team for South Asia.',
      'We will be hiring more than 40 people over the next year across research, engineering and client services — using MindQ assessments, of course.',
    ],
  },
  {
    id: 'volume-hiring',
    title: 'Volume hiring without the shortcuts: a BPO case study',
    excerpt:
      'How Horizon BPO assessed 18,000 applicants in a quarter, cut time-to-offer from 21 to 6 days and reduced 90-day attrition by 31%.',
    category: 'Hiring Guide',
    author: 'Ravindu Silva',
    authorRole: 'Co-founder & CEO',
    publishedOn: '14 Aug 2026',
    readMinutes: 8,
    body: [
      'Horizon BPO needed to staff three new client programmes in a single quarter — roughly 900 hires from 18,000 applicants.',
      'Their previous process relied on phone screens and a generic English test. Time-to-offer averaged 21 days, and nearly a third of new hires left within 90 days.',
      'With MindQ, every applicant completed a 30-minute mobile battery: Customer Service Associate simulation, a short Big Five measure and Verbal Reasoning. Top-scoring candidates were automatically invited to structured interviews.',
      'Time-to-offer dropped to six days. More importantly, 90-day attrition fell by 31%, and new-hire quality scores rose across all three programmes.',
    ],
  },
];
