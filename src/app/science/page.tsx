'use client';

import { Layout } from '@/components/layout/Layout';
import { ScienceHeroSection } from '@/components/sections/science/ScienceHeroSection';
import { ResearchAreasSection } from '@/components/sections/science/ResearchAreasSection';
import { SolfeggioResearchSection } from '@/components/sections/science/SolfeggioResearchSection';
import { KeyStudiesSection } from '@/components/sections/science/KeyStudiesSection';

export default function SciencePage() {
  return (
    <Layout>
      <ScienceHeroSection />
      <ResearchAreasSection />
      <SolfeggioResearchSection />
      <KeyStudiesSection />
    </Layout>
  );
}
