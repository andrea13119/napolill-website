'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function AppScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = Array.from({ length: 11 }, (_, i) => i + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            App Screenshots
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Durchstöbere alle Features der App
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Screenshot Display */}
          <div className="relative max-w-md mx-auto mb-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card variant="glass" className="overflow-hidden shadow-2xl">
                <div className="aspect-[9/16] relative">
                  <img
                    src={`/screenshots/screenshot-${screenshots[currentIndex]}.png`}
                    alt={`Napolill App Screenshot ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Card>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--button-outline-hover-bg)] backdrop-blur-sm rounded-full flex items-center justify-center text-button-outline-text hover:bg-[var(--button-outline-border)] transition-all duration-300"
              aria-label="Vorheriges Screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--button-outline-hover-bg)] backdrop-blur-sm rounded-full flex items-center justify-center text-button-outline-text hover:bg-[var(--button-outline-border)] transition-all duration-300"
              aria-label="Nächstes Screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-3 overflow-x-auto pb-4">
            {screenshots.map((num, index) => (
              <button
                key={num}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-accent-rose scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={`/screenshots/screenshot-${num}.png`}
                  alt={`Thumbnail ${num}`}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-accent-rose/20" />
                )}
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-foreground/70 text-sm">
              {currentIndex + 1} von {screenshots.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

