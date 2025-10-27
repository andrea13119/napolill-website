'use client';

import { motion } from 'framer-motion';
import { Brain, BookOpen, Microscope } from 'lucide-react';

export function ScienceHeroSection() {
  return (
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
            Wissenschaftliche Grundlagen
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
            Die Napolill App basiert auf aktueller Forschung zu Affirmationen, 
            Solfeggio-Frequenzen und Gehirn-Reprogrammierung. Entdecke die 
            wissenschaftlichen Erkenntnisse hinter unserer Technologie.
          </p>
          <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Peer-Reviewed Studien
            </div>
            <div className="flex items-center">
              <Microscope className="w-4 h-4 mr-2" />
              Evidenz-basiert
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Neuroplastizität
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

