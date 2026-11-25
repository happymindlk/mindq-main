import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { assessments } from '../../../../data/assessments';
import type { Assessment } from '../../../../types';
import { Section, SectionHeading } from '../Section';
import { AssessmentCard } from '../AssessmentCard';
import { PreviewTestModal } from '../PreviewTestModal';
import { ButtonLink } from '../Button';

export function LibraryPreview() {
  const [preview, setPreview] = useState<Assessment | null>(null);
  const featured = assessments.filter((a) => a.featured);

  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Assessment Library"
          title="Validated tests for every role and level"
          description="Psychometric, cognitive, behavioural and role-specific assessments — each with published reliability and a free preview."
        />
        <ButtonLink to="/assessments" variant="secondary" className="shrink-0 self-start md:self-auto">
          View all {assessments.length} assessments
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((a) => (
          <AssessmentCard key={a.id} assessment={a} onPreview={setPreview} />
        ))}
      </div>
      <PreviewTestModal assessment={preview} onClose={() => setPreview(null)} />
    </Section>
  );
}
