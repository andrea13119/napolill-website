'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Heart, Clock, Award, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { BrainIcon } from '@/components/BrainIcon';

const features = [
  {
    icon: Brain,
    title: 'Persönliche Affirmationen',
    description: 'Erstelle und verwende deine eigenen Affirmationen für gezielte Gehirn-Reprogrammierung.',
    details: ['Sprachaufnahme in hoher Qualität', 'Automatische Transkription', 'Persönliche Kategorisierung', 'Wiedergabe mit Hintergrundmusik']
  },
  {
    icon: Zap,
    title: 'Solfeggio-Frequenzen',
    description: '9 wissenschaftlich belegte Frequenzen für verschiedene Bewusstseinszustände.',
    details: ['174Hz - 963Hz Spektrum', 'Wissenschaftlich kalibriert', 'Individuelle Frequenz-Auswahl', 'Kombination mit Affirmationen']
  },
  {
    icon: Heart,
    title: 'Mood-basierte Themes',
    description: '5 verschiedene Stimmungs-Themes mit angepassten Farben und Frequenzen.',
    details: ['Automatische Theme-Erkennung', 'Visuelle Anpassungen', 'Frequenz-Optimierung', 'Persönliche Vorlieben']
  },
  {
    icon: Clock,
    title: 'Flexible Sessions',
    description: 'Wähle zwischen kurzen Sessions oder Endlosschleife über Nacht.',
    details: ['5/10 Min Sessions', 'Endlosschleife für Schlaf', 'Timer-Funktionen', 'Automatisches Stoppen']
  },
  {
    icon: Award,
    title: 'Fortschrittsverfolgung',
    description: 'Badges, Streaks und Statistiken für deine persönliche Entwicklung.',
    details: ['Tägliche Streaks', 'Achievement Badges', 'Fortschritts-Statistiken', 'Persönliche Meilensteine']
  },
  {
    icon: Shield,
    title: 'Privatsphäre & Sicherheit',
    description: '100% anonyme Nutzung ohne Werbung oder Tracking.',
    details: ['Lokale Datenspeicherung', 'Cloud-Backup (optional)', 'Keine Werbung', 'Vollständige Anonymität']
  }
];

export function AppFeaturesSection() {
  return (
    <section className="py-20 bg-secondary-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            App Features
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Alle Funktionen der Napolill App im Detail - von Affirmationen bis 
            zu wissenschaftlichen Solfeggio-Frequenzen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-napolill-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      {feature.title === 'Persönliche Affirmationen' ? (
                        <BrainIcon size="md" className="filter brightness-0 invert" />
                      ) : (
                        <feature.icon className="w-8 h-8 text-[var(--icon-color)]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-foreground/60">
                            <div className="w-2 h-2 bg-accent-rose rounded-full mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

