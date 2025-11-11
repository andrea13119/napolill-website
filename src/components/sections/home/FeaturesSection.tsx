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
            Uno-Reverse
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Was von außen in dich geschrieben wurde, überschreibst du jetzt von innen – mit Vorstellungskraft, klaren Worten und täglicher Wiederholung.
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
              <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-3xl p-5 border border-teal-800/50 max-w-xs mx-auto">
                <div className="aspect-[3/4] bg-card-bg/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center px-5">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-teal-300" />
                    </div>
                    <h3 className="text-foreground text-lg font-semibold mb-3">
                      Veränderung ≠ linear:
                    </h3>
                    <p className="text-foreground/70 text-base leading-relaxed mb-5">
                      Stimmungsschwankungen sind beim Umlernen normal – verstehe sie, statt sie zu fürchten.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-6 py-3 text-base rounded-xl border-teal-500/50 text-teal-200 hover:text-white hover:bg-teal-600/80 transition-all duration-300 hover:scale-105"
                    >
                      Erfahre mehr
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-5 border border-purple-800/50 max-w-xs mx-auto">
                <div className="aspect-[3/4] bg-card-bg/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center px-5">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-purple-300" />
                    </div>
                    <h3 className="text-foreground text-lg font-semibold mb-3">
                      Intensität prägt:
                    </h3>
                    <p className="text-foreground/70 text-base leading-relaxed mb-5">
                      Emotionale Aufladung (Körpersprache, Tonfall, Visualisierung) festigt Neues.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-6 py-3 text-base rounded-xl border-purple-500/50 text-purple-200 hover:text-white hover:bg-purple-600/80 transition-all duration-300 hover:scale-105"
                    >
                      Erfahre mehr
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-5 border border-blue-800/50 max-w-xs mx-auto">
                <div className="aspect-[3/4] bg-card-bg/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center px-5">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-foreground text-lg font-semibold mb-3">
                      Wiederholung gewinnt:
                    </h3>
                    <p className="text-foreground/70 text-base leading-relaxed mb-5">
                      Gewohnheiten entstehen durch konsistentes Training im Alltag.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-6 py-3 text-base rounded-xl border-blue-500/50 text-blue-200 hover:text-white hover:bg-blue-600/80 transition-all duration-300 hover:scale-105"
                    >
                      Erfahre mehr
                    </Button>
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
                Napolill mischt deine Stimme mit gezielten Frequenz-Soundscapes, die dein Nervensystem beruhigen, Fokus schärfen und mentale Routinen neu verankern.
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
                Du nimmst klare, emotional aufgeladene Statements in deiner Stimme auf, verknüpfst sie mit Visualisierungen und festigst so täglich dein neues Selbstbild.
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
          className="flex flex-col items-center gap-10 mt-12"
        >
          <div className="max-w-3xl w-full bg-card-bg/80 border border-card-border rounded-3xl p-8 text-left">
            <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
              Wie Napolill hilft
            </h3>
            <div className="space-y-5 text-foreground/80 text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Aufnehmen</span> – Formuliere &amp; sprich deine Sätze klar und selbstbewusst.
              </p>
              <p>
                <span className="font-semibold text-foreground">Vorstellen</span> – Sieh dich im gewünschten Zustand, als wäre er schon da.
              </p>
              <p>
                <span className="font-semibold text-foreground">Dranbleiben</span> – Streaks, Erinnerungen &amp; Wenn-Dann-Pläne halten dich auf Kurs.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/app">
                <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-foreground font-bold px-8 py-4 rounded-2xl">
                  App-Features ansehen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-2xl text-lg"
                >
                  Demo starten
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

