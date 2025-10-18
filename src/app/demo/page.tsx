'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Play, Zap, Heart, Trophy, Brain } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { SolfeggioPlayer } from '@/components/SolfeggioPlayer';
import { MoodSelector } from '@/components/MoodSelector';
import { AffirmationsGenerator } from '@/components/AffirmationsGenerator';
import { ProgressSimulator } from '@/components/ProgressSimulator';
import { useState } from 'react';
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

export default function DemoPage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case 'solfeggio':
        return <SolfeggioPlayer />;
      case 'mood':
        return <MoodSelector />;
      case 'affirmations':
        return <AffirmationsGenerator />;
      case 'progress':
        return <ProgressSimulator />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-napolill-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 p-2">
                <img 
                  src="/images/icons/logo_napolill.png" 
                  alt="Napolill Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Napolill Demo
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Teste die interaktiven Features der Napolill App direkt im Browser. 
              Erlebe die Kraft der Solfeggio-Frequenzen und erstelle deine eigenen Affirmationen.
            </p>

            <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
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
                  onClick={() => setActiveFeature(feature.id)}
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
                      <div className="flex items-center text-accent-rose font-medium">
                        <Play className="w-4 h-4 mr-2" />
                        Feature testen
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Active Feature Display */}
      {activeFeature && (
        <section className="py-20 bg-secondary-purple/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <button
                onClick={() => setActiveFeature(null)}
                className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Feature-Auswahl
              </button>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {demoFeatures.find(f => f.id === activeFeature)?.name}
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                {demoFeatures.find(f => f.id === activeFeature)?.description}
              </p>
            </motion.div>

            {renderActiveFeature()}
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Erlebe die volle Kraft
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Diese Demo zeigt nur einen kleinen Teil der Funktionen. 
              In der vollständigen Napolill App erwartet dich noch viel mehr.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-napolill-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Vollständige App
                </h3>
                <p className="text-foreground/70">
                  Alle Features ohne Einschränkungen
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-napolill-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Persönliche Daten
                </h3>
                <p className="text-foreground/70">
                  Deine Affirmationen und Fortschritte
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-napolill-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Langzeit-Fortschritt
                </h3>
                <p className="text-foreground/70">
                  Kontinuierliche Verbesserung
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="inline-flex items-center px-8 py-4 bg-napolill-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Play className="w-5 h-5 mr-2" />
                App entdecken
              </Link>
              <Link
                href="/science"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-teal text-primary-teal rounded-lg font-semibold hover:bg-primary-teal hover:text-white transition-colors"
              >
                <Brain className="w-5 h-5 mr-2" />
                Wissenschaft erfahren
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
