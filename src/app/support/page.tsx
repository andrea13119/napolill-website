'use client';

import { Layout } from '@/components/layout/Layout';
import { SupportHeroSection } from '@/components/sections/support/SupportHeroSection';
import { ContactFormSection } from '@/components/sections/support/ContactFormSection';
import { SupportResourcesSection } from '@/components/sections/support/SupportResourcesSection';

export default function SupportPage() {
  return (
    <Layout>
      <SupportHeroSection />
      <ContactFormSection />
      <SupportResourcesSection />
    </Layout>
  );
}
