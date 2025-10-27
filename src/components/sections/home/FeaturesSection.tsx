'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function FeaturesSection() {
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
            Solfeggio-Frequenzen & Affirmationen
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Musik, die speziell für Leistung und die Aufgaben entwickelt wurde, die dir am wichtigsten sind.
          </p>
        </motion.div>

        {/* App Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-3xl p-6 border border-teal-800/50">
                <div className="aspect-[9/16] bg-card-bg/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-teal-400" />
                    </div>
                    <p className="text-foreground/80 text-sm">Solfeggio-Frequenzen</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-6 border border-purple-800/50">
                <div className="aspect-[9/16] bg-card-bg/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-foreground/80 text-sm">Affirmationen</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-6 border border-blue-800/50">
                <div className="aspect-[9/16] bg-card-bg/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-blue-400" />
                    </div>
                    <p className="text-foreground/80 text-sm">Mood-Themes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Solfeggio-Frequenzen
              </h4>
              <p className="text-foreground/70">
                Patentierte Audiotechnologie, die nachweislich effektiver für den Fokus ist als binaurale Beats und Fokus-Playlists von Spotify und YouTube.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Anpassbare Affirmationen
              </h4>
              <p className="text-foreground/70">
                Erhöhe einfach die Intensität für den maximalen Fokus-Effekt. Personalisiere deine Affirmationen für deine spezifischen Ziele.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Link to App Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/app">
            <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-foreground font-bold px-8 py-4 rounded-2xl">
              App-Features entdecken
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

