'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SciencePreviewSection() {
  return (
    <section className="relative py-32 z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Entwickelt in Zusammenarbeit mit <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Neurowissenschaftlern</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Gestützt auf Peer-Review-Forschung.
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Unsere patentierte Technologie erhöht die Durchblutung von Funktionsnetzwerken und Hirnregionen, die mit Fokus und dem Flow-Zustand in Verbindung stehen.
          </p>
        </motion.div>

        {/* Brain Activity Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card-bg rounded-3xl p-8 border border-card-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Blutfluss im Gehirn: fMRI-Studien
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pink Noise */}
              <div className="text-center">
                <div className="w-32 h-32 bg-card-bg/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-500/20 rounded-full"></div>
                </div>
                <p className="text-foreground/60 text-sm">PINK NOISE</p>
              </div>
              
              {/* Average Music */}
              <div className="text-center">
                <div className="w-32 h-32 bg-card-bg/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"></div>
                </div>
                <p className="text-foreground/60 text-sm">AVERAGE MUSIC</p>
              </div>
              
              {/* Napolill */}
              <div className="text-center">
                <div className="w-32 h-32 bg-card-bg/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
                </div>
                <p className="text-foreground/60 text-sm">NAPOLILL</p>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gray-700 rounded"></div>
                <span className="text-foreground/60 text-sm">NIEDRIGER BLUTFLUSS</span>
                <div className="w-4 h-4 bg-pink-500 rounded ml-4"></div>
                <span className="text-foreground/60 text-sm">HOHER BLUTFLUSS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Funding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 border border-purple-800/50">
            <p className="text-foreground/80 text-center mb-8">
              Forschung, finanziert von der National Science Foundation (USA) und veröffentlicht in der Fachzeitschrift Nature Communications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-foreground font-bold text-xl">NSF</span>
                </div>
                <p className="text-foreground/80 text-sm">Supported by the National Science Foundation</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-foreground font-bold text-sm">Nature</span>
                </div>
                <p className="text-foreground/80 text-sm">Published in the journal Nature Communications</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Link to Science Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/science">
            <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-foreground font-bold px-8 py-4 rounded-2xl">
              Mehr zur Wissenschaft
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

