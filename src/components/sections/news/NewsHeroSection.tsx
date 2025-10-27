'use client';

import { motion } from 'framer-motion';
import { Calendar, BookOpen, Search, Filter } from 'lucide-react';

const categories = ['Alle', 'App-Updates', 'Wissenschaft', 'Community'];

interface NewsHeroSectionProps {
  selectedCategory: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
}

export function NewsHeroSection({ 
  selectedCategory, 
  searchTerm, 
  onCategoryChange, 
  onSearchChange 
}: NewsHeroSectionProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center pt-32 md:pt-44">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center justify-center min-h-[50vh]"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Bleibe auf dem Laufenden mit den neuesten Nachrichten, Updates 
              und Erkenntnissen rund um Napolill und Gehirn-Reprogrammierung.
            </p>
            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Regelmäßige Updates
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Wissenschaftliche Artikel
              </div>
              <div className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Kategorien
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-background sticky top-16 z-20 border-b border-primary-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Durchsuche News..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary-purple/10 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-teal"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-napolill-gradient text-foreground'
                    : 'bg-secondary-purple/10 text-foreground/70 hover:bg-secondary-purple/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

