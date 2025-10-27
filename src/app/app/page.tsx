'use client';

import { Layout } from '@/components/layout/Layout';
import { AppHeroSection } from '@/components/sections/app/AppHeroSection';
import { AppScreenshotsSection } from '@/components/sections/app/AppScreenshotsSection';
import { AppFeaturesSection } from '@/components/sections/app/AppFeaturesSection';
import { SolfeggioFrequenciesSection } from '@/components/sections/app/SolfeggioFrequenciesSection';
import { MoodThemesSection } from '@/components/sections/app/MoodThemesSection';
import { AppDownloadSection } from '@/components/sections/app/AppDownloadSection';

export default function AppPage() {
  return (
    <Layout>
      <AppHeroSection />
      <AppScreenshotsSection />
      <AppFeaturesSection />
      <SolfeggioFrequenciesSection />
      <MoodThemesSection />
      <AppDownloadSection />
    </Layout>
  );
}
