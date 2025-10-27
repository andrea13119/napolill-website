'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { NewsHeroSection } from '@/components/sections/news/NewsHeroSection';
import { NewsFeedSection } from '@/components/sections/news/NewsFeedSection';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Layout>
      <NewsHeroSection 
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />
      <NewsFeedSection 
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />
    </Layout>
  );
}
