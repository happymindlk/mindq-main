import { Hero } from '../components/home/Hero';
import { WorkflowTabs } from '../components/home/WorkflowTabs';
import { LibraryPreview } from '../components/home/LibraryPreview';
import { SciencePillars } from '../components/home/SciencePillars';
import { PricingTeaser } from '../components/home/PricingTeaser';
import { ContactSection } from '../components/home/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <WorkflowTabs />
      <LibraryPreview />
      <SciencePillars />
      <PricingTeaser />
      <ContactSection />
    </>
  );
}
