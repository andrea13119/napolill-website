'use client';

import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { FeaturesSection } from '@/components/sections/home/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { FocusSection } from '@/components/sections/home/FocusSection';
import { ModesSection } from '@/components/sections/home/ModesSection';
import { ProductivitySection } from '@/components/sections/home/ProductivitySection';
import { SciencePreviewSection } from '@/components/sections/home/SciencePreviewSection';
import { MoodThemesSection } from '@/components/sections/home/MoodThemesSection';
import { FAQSection } from '@/components/sections/shared/FAQSection';
import { DownloadSection } from '@/components/sections/home/DownloadSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      <div className="relative bg-background z-10">
        <FeaturesSection />
        <TestimonialsSection />
        <FocusSection />
        <ModesSection />
        <ProductivitySection />
        <SciencePreviewSection />
        <MoodThemesSection />
        <FAQSection />
        <DownloadSection />
    </div>
    </Layout>
  );
}
