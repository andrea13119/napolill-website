'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { DemoHeroSection } from '@/components/sections/demo/DemoHeroSection';
import { DemoInteractiveSection } from '@/components/sections/demo/DemoInteractiveSection';

export default function DemoPage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <Layout>
      <DemoHeroSection 
        activeFeature={activeFeature} 
        onSelectFeature={setActiveFeature} 
      />
      <DemoInteractiveSection 
        activeFeature={activeFeature} 
        onBack={() => setActiveFeature(null)} 
      />
    </Layout>
  );
}
