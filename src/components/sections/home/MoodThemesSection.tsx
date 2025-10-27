'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function MoodThemesSection() {
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
            Musik, gemacht für <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Entspannen</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Der richtige mentale Zustand, wenn du ihn brauchst.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card-bg rounded-3xl p-8 border border-card-border">
              <h3 className="text-3xl font-bold text-foreground mb-6">Entspannen</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Reduziert Herzfrequenz, Stress und Angst",
                  "Hilft beim Refokussieren und Energie tanken",
                  "Tiefe Entspannung mit Alpha-Wellen-verstärktem Audio"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-foreground/80 text-sm uppercase tracking-wider mb-4">Verfügbare Aktivitäten</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "⚡", text: "Energie tanken" },
                    { icon: "💧", text: "Entspannen" },
                    { icon: "🛋️", text: "Chillen" },
                    { icon: "🛏️", text: "Abschalten" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-xl">{activity.icon}</span>
                      <span className="text-foreground/80 text-sm">{activity.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-16 h-16 text-foreground/60" />
                </div>
                <p className="text-foreground/60">Entspannungs-Illustration</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

