'use client';

import { Layout } from '@/components/layout/Layout';
import { FAQHeroSection } from '@/components/sections/faq/FAQHeroSection';
import { FAQListSection } from '@/components/sections/faq/FAQListSection';

export default function FAQPage() {
  return (
    <Layout>
      <FAQHeroSection />
      <FAQListSection />
    </Layout>
  );
}
