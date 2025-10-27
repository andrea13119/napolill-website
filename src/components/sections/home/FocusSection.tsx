'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function FocusSection() {
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
            Erreiche tiefen Fokus in <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Minuten</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8">
            Komm schneller in die Zone – mit personalisierter Affirmations-Musik, wissenschaftlich fundiert.
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Unsere Technologie verbessert und fördert koordinierte neuronale Aktivität in nur fünf Minuten.
          </p>
        </motion.div>

        {/* Focus Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card-bg rounded-3xl p-8 border border-card-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">119% Fokus-Steigerung</h3>
              <p className="text-foreground/70">Napolill vs. Durchschnittliche Musik</p>
            </div>
            
            <div className="relative h-64 bg-card-bg/50 rounded-2xl p-6">
              <div className="flex items-end justify-between h-full">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 bg-blue-500/30 rounded-t"></div>
                  <span className="text-foreground/60 text-sm">AVERAGE MUSIC</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t h-32"></div>
                  <span className="text-foreground/60 text-sm">NAPOLILL</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Video Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative max-w-4xl mx-auto w-full">
            <div className="aspect-video bg-card-bg rounded-3xl overflow-hidden border border-card-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-foreground ml-1" />
                </div>
                <p className="text-foreground text-lg">Video abspielen</p>
                <p className="text-foreground/60 text-sm">0:58</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

