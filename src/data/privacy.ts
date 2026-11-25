import type { PrivacySection } from '../types';

export const privacyLastUpdated = '1 November 2026';

export const privacySections: PrivacySection[] = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      'This Privacy Policy explains how MindQ ("MindQ", "we", "us") collects, uses and protects personal information when you visit mindqtalent.com, request a demo, or use the MindQ platform as a client or candidate.',
      'When clients use MindQ to assess candidates, the client is the data controller and MindQ acts as a data processor on the client’s instructions.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    paragraphs: ['We collect only what we need to provide and improve our services:'],
    bullets: [
      'Contact details you provide, such as name, work email, company and job title.',
      'Assessment responses, scores and timing data generated when candidates complete tests.',
      'Proctoring data, such as webcam snapshots, where enabled by the client and consented to by the candidate.',
      'Technical data, such as IP address, browser type and device information, used for security and performance.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How we use information',
    paragraphs: ['We use personal information to:'],
    bullets: [
      'Deliver, score and report assessments on behalf of our clients.',
      'Generate AI executive summaries from scored assessment data only.',
      'Conduct anonymised, aggregated research to maintain norm groups and validity evidence.',
      'Respond to enquiries and demo requests, and send service communications.',
      'Detect fraud, cheating and security threats.',
    ],
  },
  {
    id: 'ai',
    title: 'Automated processing and AI',
    paragraphs: [
      'MindQ produces scores and AI-generated summaries to support — not replace — human hiring decisions. Our AI models never use protected characteristics, photographs or CV content.',
      'Clients are contractually required to keep a human in the loop for hiring decisions. Candidates may request human review of their results through the hiring organisation.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing and transfers',
    paragraphs: [
      'We do not sell personal information. We share it only with the client organisation that invited a candidate, with vetted sub-processors under written agreements, or where required by law.',
      'Where data is transferred internationally, we rely on appropriate safeguards such as Standard Contractual Clauses.',
    ],
  },
  {
    id: 'security',
    title: 'Security and retention',
    paragraphs: [
      'MindQ is ISO 27001 certified. Data is encrypted in transit (TLS 1.2+) and at rest (AES-256), with role-based access controls and audit logging.',
      'Assessment data is retained according to each client’s configured retention policy (default 24 months) and then deleted or irreversibly anonymised.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    paragraphs: [
      'Depending on your location, including under GDPR and Sri Lanka’s Personal Data Protection Act, you may have the right to access, correct, delete or restrict processing of your personal information, and to object to automated decision-making.',
      'Candidates should direct requests to the organisation that invited them; we will assist that organisation in responding. Other requests can be sent to privacy@mindqtalent.com.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    paragraphs: [
      'Our website uses essential cookies to operate and, with your consent, analytics cookies to understand how it is used. You can change your preferences at any time.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    paragraphs: [
      'For any privacy questions, contact our Data Protection Officer at privacy@mindqtalent.com or write to MindQ, Level 12, One Galle Face Tower, Colombo 02, Sri Lanka.',
    ],
  },
];
