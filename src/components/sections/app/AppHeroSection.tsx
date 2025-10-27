'use client';

import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AppHeroSection() {
  return (
    <section className="relative bg-napolill-gradient overflow-hidden flex items-start justify-center pt-32 md:pt-44">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Die Napolill App
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Entdecke die revolutionäre Kombination aus Affirmationen und 
            Solfeggio-Frequenzen für maximale Gehirn-Reprogrammierung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d">
              <Download className="w-5 h-5 mr-2" />
              Jetzt Downloaden
            </Button>
            <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d">
              <Play className="w-5 h-5 mr-2" />
              Demo Video
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

