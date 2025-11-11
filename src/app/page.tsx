'use client';

import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { FeaturesSection } from '@/components/sections/home/FeaturesSection';
import { FAQSection } from '@/components/sections/shared/FAQSection';
import { DownloadSection } from '@/components/sections/home/DownloadSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      <div className="relative bg-background z-10">
        <FeaturesSection />
        <FAQSection />
        <DownloadSection />
      </div>
    </Layout>
  );
}
