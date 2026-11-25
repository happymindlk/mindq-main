import { Hero } from '../components/home/Hero';
import { CapabilitiesBento } from '../components/home/CapabilitiesBento';
import { WorkflowStepper } from '../components/home/WorkflowStepper';
import { IntegrityStrip } from '../components/home/IntegrityStrip';
import { ContactSection } from '../components/home/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesBento />
      <WorkflowStepper />
      <IntegrityStrip />
      <ContactSection />
    </>
  );
}
