'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Play, Zap, Brain, Heart, Trophy } from 'lucide-react';
import Link from 'next/link';

const demoFeatures = [
  {
    id: 'solfeggio',
    name: 'Solfeggio-Player',
    icon: Zap,
    description: 'Teste die wissenschaftlich validierten Frequenzen',
    color: 'bg-blue-500'
  },
  {
    id: 'mood',
    name: 'Mood-Selector',
    icon: Heart,
    description: 'Erlebe die Anpassung an deine Stimmung',
    color: 'bg-pink-500'
  },
  {
    id: 'affirmations',
    name: 'Affirmations-Generator',
    icon: Brain,
    description: 'Erstelle deine persönlichen Affirmationen',
    color: 'bg-green-500'
  },
  {
    id: 'progress',
    name: 'Fortschritts-Simulator',
    icon: Trophy,
    description: 'Sieh deine Fortschritte und Badges',
    color: 'bg-purple-500'
  }
];

interface DemoHeroSectionProps {
  activeFeature: string | null;
  onSelectFeature: (featureId: string) => void;
}

export function DemoHeroSection({ activeFeature, onSelectFeature }: DemoHeroSectionProps) {
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
            <Link href="/" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Napolill Demo
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Teste die interaktiven Features der Napolill App direkt im Browser. 
              Erlebe die Kraft der Solfeggio-Frequenzen und erstelle deine eigenen Affirmationen.
            </p>

            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Interaktiv
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Audio-Features
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Personalisierung
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Selection */}
      {!activeFeature && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wähle ein Feature zum Testen
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Entdecke die verschiedenen Funktionen der Napolill App und 
                erlebe, wie sie deine Gehirn-Reprogrammierung unterstützen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demoFeatures.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  onClick={() => onSelectFeature(feature.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-background border-2 border-primary-teal/20 rounded-xl hover:border-accent-rose/50 transition-all text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-rose transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-accent-rose">
                        <Play className="w-4 h-4 mr-2" />
                        <span className="font-medium">Jetzt testen</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

