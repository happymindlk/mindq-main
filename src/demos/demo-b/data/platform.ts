import type { LucideIcon } from 'lucide-react';
import { Clock4, Database, FileLock2, MonitorSmartphone, ScanText } from 'lucide-react';

export interface WorkflowStage {
  id: string;
  title: string;
  short: string;
  description: string;
  points: string[];
}

export const workflowStages: WorkflowStage[] = [
  {
    id: 'build',
    title: 'Upload a JD and build the suite',
    short: 'Upload JD',
    description:
      'Drop in a job description PDF or a short role brief. MindQ extracts the role requirements and proposes an assessment blueprint you can edit before anything is sent.',
    points: [
      'Requirements mapped to Psychometric, SJT and Role Competency modules',
      'Add, remove or reorder modules before publishing',
      'Every module keeps its link back to the JD requirement it measures',
    ],
  },
  {
    id: 'invite',
    title: 'Bulk invite with Email OTP',
    short: 'Invite',
    description:
      'Invite up to 100 candidates per batch. Each candidate signs in with a passwordless 6-digit code sent to their email, so there are no accounts or passwords to manage.',
    points: [
      'Up to 100 invitations per batch',
      'Passwordless 6-digit Email OTP verification',
      'One active session per candidate at any time',
    ],
  },
  {
    id: 'assess',
    title: 'Timed assessment with autosave',
    short: 'Assess',
    description:
      'Timers are enforced by the server in UTC, so a refreshed tab or a changed device clock never adds time. Answers save as candidates go and lock once the section is submitted.',
    points: [
      'Server-enforced UTC timers per module',
      'Continuous autosave; answers lock after submission',
      'Question order shuffled for every candidate',
    ],
  },
  {
    id: 'report',
    title: 'Executive dossier and PDF',
    short: 'Report',
    description:
      'Deterministic facet-level scoring runs first. AI synthesis then evaluates the scores against the JD, passes through language guardrails, and is ready to share as an Executive PDF.',
    points: [
      'Facet scores computed before any AI step',
      'JD-aligned synthesis that cites the scale behind every claim',
      'Blind Review mode hides names while panels compare results',
    ],
  },
];

export interface IntegrityItem {
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
}

export const integrityItems: IntegrityItem[] = [
  {
    title: 'Multi-tenant isolation',
    tag: 'RLS Isolated',
    description: 'Row-level security at the database layer keeps every client’s candidates and results separate.',
    icon: Database,
  },
  {
    title: 'Server-enforced timers',
    tag: 'UTC-Locked',
    description: 'Time limits run on the server clock in UTC. Refreshing or changing the device clock has no effect.',
    icon: Clock4,
  },
  {
    title: 'Answer locking',
    tag: 'Post-submit lock',
    description: 'Once a section is submitted its answers are read-only. Nothing can be revisited or edited.',
    icon: FileLock2,
  },
  {
    title: 'Single active session',
    tag: '1 session',
    description: 'A new sign-in ends any other open session, so an assessment can’t run on two devices at once.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Language guardrails',
    tag: '0 subjective labels',
    description: 'AI output is checked for objective psychometric terminology before it reaches a report.',
    icon: ScanText,
  },
];
