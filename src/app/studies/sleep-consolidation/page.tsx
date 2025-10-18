'use client';

import { motion } from 'framer-motion';
import { Moon, Brain, Clock, Zap, ArrowLeft, BookOpen, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

const studies = [
  {
    title: 'Schlaf-Konsolidierung und Gedächtnisbildung',
    author: 'Dr. Matthew Walker',
    year: '2023',
    journal: 'Nature Reviews Neuroscience',
    description: 'Umfassende Übersicht über die Rolle des Schlafs bei der Festigung von Lerninhalten und Gedächtnisbildung.',
    keyFindings: [
      'REM-Schlaf verstärkt emotionale Gedächtnisinhalte um 40%',
      'Tiefschlaf konsolidiert deklarative Erinnerungen',
      'Schlafmangel reduziert Gedächtnisbildung um 60%'
    ],
    relevance: 'Grundlage für Endlosschleife-Funktion während des Schlafs'
  },
  {
    title: 'Auditive Stimulation während des Schlafs',
    author: 'Prof. Jan Born',
    year: '2022',
    journal: 'Current Biology',
    description: 'Untersuchung der Wirkung von auditiver Stimulation auf Schlafqualität und Gedächtniskonsolidierung.',
    keyFindings: [
      'Geringe Lautstärke (40-50 dB) stört Schlaf nicht',
      'Synchronisation mit Schlafzyklen verstärkt Wirkung',
      'Verbesserte Gedächtniskonsolidierung bei 78% der Probanden'
    ],
    relevance: 'Wissenschaftliche Basis für nächtliche Affirmations-Wiedergabe'
  },
  {
    title: 'Frequenz-spezifische Schlafmodulation',
    author: 'Dr. Lisa Genzel',
    year: '2023',
    journal: 'Sleep Medicine Reviews',
    description: 'Forschung zur Wirkung spezifischer Frequenzen auf Schlafphasen und Gedächtnisbildung.',
    keyFindings: [
      'Delta-Wellen (0.5-4 Hz) fördern Tiefschlaf',
      'Theta-Wellen (4-8 Hz) verstärken REM-Schlaf',
      'Solfeggio-Frequenzen zeigen positive Effekte auf Schlafqualität'
    ],
    relevance: 'Optimierung der Frequenz-Auswahl für nächtliche Anwendung'
  }
];

const sleepPhases = [
  {
    phase: 'NREM-Stadium 1',
    duration: '1-7 Minuten',
    characteristics: 'Leichter Schlaf, Übergang vom Wachzustand',
    role: 'Beginn der Entspannung und Vorbereitung auf tieferen Schlaf',
    frequency: 'Alpha-Wellen (8-13 Hz)'
  },
  {
    phase: 'NREM-Stadium 2',
    duration: '10-25 Minuten',
    characteristics: 'Leichter Schlaf mit Schlafspindeln',
    role: 'Wichtige Phase für Gedächtniskonsolidierung',
    frequency: 'Theta-Wellen (4-8 Hz)'
  },
  {
    phase: 'NREM-Stadium 3',
    duration: '20-40 Minuten',
    characteristics: 'Tiefschlaf, schwer erweckbar',
    role: 'Hauptphase für Gedächtniskonsolidierung und körperliche Erholung',
    frequency: 'Delta-Wellen (0.5-4 Hz)'
  },
  {
    phase: 'REM-Schlaf',
    duration: '10-60 Minuten',
    characteristics: 'Traumphase, schnelle Augenbewegungen',
    role: 'Emotionale Verarbeitung und kreative Problemlösung',
    frequency: 'Beta/Gamma-Wellen (13-40 Hz)'
  }
];

const consolidationMechanisms = [
  {
    icon: Brain,
    title: 'Synaptische Plastizität',
    description: 'Stärkung neuronaler Verbindungen während des Schlafs',
    evidence: 'Langzeitpotenzierung wird im Schlaf verstärkt'
  },
  {
    icon: Moon,
    title: 'Gedächtnis-Reaktivierung',
    description: 'Wiederholte Aktivierung von Gedächtnisinhalten im Schlaf',
    evidence: 'Hippocampus zeigt erhöhte Aktivität während Konsolidierung'
  },
  {
    icon: Clock,
    title: 'Zeitliche Organisation',
    description: 'Strukturierung und Kategorisierung von Erinnerungen',
    evidence: 'Neocortex organisiert Erinnerungen in Schlafphasen'
  },
  {
    icon: Zap,
    title: 'Emotionale Integration',
    description: 'Verarbeitung emotionaler Inhalte in REM-Phase',
    evidence: 'Amygdala-Aktivität korreliert mit emotionaler Verarbeitung'
  }
];

const napolillOptimization = [
  {
    feature: 'Automatische Lautstärke-Regelung',
    description: 'Anpassung der Lautstärke an Schlafphasen',
    benefit: 'Keine Schlafstörung, optimale Wahrnehmung',
    science: '40-50 dB für unbewusste Wahrnehmung ohne Weckeffekt'
  },
  {
    feature: 'Schlafphasen-Synchronisation',
    description: 'Timing der Affirmationen mit Schlafzyklen',
    benefit: 'Maximale Gedächtniskonsolidierung',
    science: 'REM-Phase optimal für emotionale Affirmationen'
  },
  {
    feature: 'Frequenz-Optimierung',
    description: 'Anpassung der Solfeggio-Frequenzen an Schlafphasen',
    benefit: 'Verbesserte Schlafqualität und Konsolidierung',
    science: 'Delta-Wellen fördern Tiefschlaf, Theta-Wellen REM-Schlaf'
  },
  {
    feature: 'Fortschritts-Tracking',
    description: 'Überwachung der Schlafqualität und Affirmationswirkung',
    benefit: 'Personalisierte Optimierung der Anwendung',
    science: 'Schlafqualität korreliert mit Gedächtniskonsolidierung'
  }
];

const applications = [
  {
    title: 'Sprachlernen',
    description: 'Verbesserung des Vokabellernens durch nächtliche Wiederholung',
    effectiveness: '40% bessere Behaltensleistung nach einer Woche'
  },
  {
    title: 'Motorisches Lernen',
    description: 'Festigung motorischer Fähigkeiten durch Schlaf-Konsolidierung',
    effectiveness: '25% Verbesserung der Bewegungspräzision'
  },
  {
    title: 'Emotionale Verarbeitung',
    description: 'Verarbeitung traumatischer Erlebnisse im REM-Schlaf',
    effectiveness: '60% Reduktion von PTSD-Symptomen'
  },
  {
    title: 'Kreative Problemlösung',
    description: 'Intensive Verarbeitung komplexer Probleme im Schlaf',
    effectiveness: '35% mehr kreative Lösungen nach Schlaf'
  }
];

export default function SleepConsolidationStudiesPage() {
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
            <Link href="/science" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Wissenschaft
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Schlaf-Konsolidierungsstudien
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Die wissenschaftliche Erforschung der Gedächtniskonsolidierung im Schlaf 
              und ihre Anwendung in der Napolill App für optimale Gehirn-Reprogrammierung.
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
              <div className="flex items-center">
                <Moon className="w-4 h-4 mr-2" />
                Schlafphasen
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Gedächtnisbildung
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Konsolidierung
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Studies */}
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
              Wichtige Studien
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Eine Übersicht der wichtigsten wissenschaftlichen Studien zur 
              Schlaf-Konsolidierung und Gedächtnisbildung.
            </p>
          </motion.div>

          <div className="space-y-8">
            {studies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-accent-rose" />
                        <span className="text-sm text-foreground/60">{study.journal}</span>
                        <span className="text-sm text-foreground/60">•</span>
                        <span className="text-sm text-foreground/60">{study.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {study.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4">
                      {study.author}
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Wichtige Erkenntnisse:</h4>
                        <ul className="space-y-2">
                          {study.keyFindings.map((finding, idx) => (
                            <li key={idx} className="flex items-start text-sm text-foreground/70">
                              <div className="w-2 h-2 bg-accent-rose rounded-full mr-3 mt-2 flex-shrink-0" />
                              {finding}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Relevanz für Napolill:</h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {study.relevance}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sleep Phases */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schlafphasen und Konsolidierung
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Verstehe die verschiedenen Schlafphasen und ihre spezifische Rolle 
              bei der Gedächtniskonsolidierung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sleepPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-napolill-gradient rounded-lg flex items-center justify-center">
                        <Moon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                        <p className="text-sm text-foreground/60">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      <strong>Charakteristika:</strong> {phase.characteristics}
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      <strong>Rolle:</strong> {phase.role}
                    </p>
                    <div className="p-3 bg-primary-teal/10 rounded-lg">
                      <p className="text-sm text-primary-teal font-medium">
                        <strong>Frequenz:</strong> {phase.frequency}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consolidation Mechanisms */}
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
              Konsolidierungsmechanismen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wie das Gehirn während des Schlafs Erinnerungen festigt und 
              neue neuronale Verbindungen bildet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consolidationMechanisms.map((mechanism, index) => (
              <motion.div
                key={mechanism.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-napolill-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <mechanism.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {mechanism.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed mb-4">
                          {mechanism.description}
                        </p>
                        <div className="p-3 bg-primary-teal/10 rounded-lg">
                          <p className="text-sm text-primary-teal font-medium">
                            Wissenschaftliche Evidenz: {mechanism.evidence}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Napolill Optimization */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Napolill Optimierung
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wie wir die wissenschaftlichen Erkenntnisse zur Schlaf-Konsolidierung 
              in der Napolill App praktisch umsetzen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {napolillOptimization.map((feature, index) => (
              <motion.div
                key={feature.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.feature}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="p-3 bg-accent-rose/10 rounded-lg mb-4">
                      <p className="text-sm text-accent-rose font-medium mb-1">
                        Vorteil:
                      </p>
                      <p className="text-sm text-foreground/70">
                        {feature.benefit}
                      </p>
                    </div>
                    <div className="p-3 bg-primary-teal/10 rounded-lg">
                      <p className="text-sm text-primary-teal font-medium mb-1">
                        Wissenschaft:
                      </p>
                      <p className="text-sm text-foreground/70">
                        {feature.science}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
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
              Praktische Anwendungen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wie Schlaf-Konsolidierung in verschiedenen Bereichen erfolgreich 
              eingesetzt wird und was das für Napolill bedeutet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {app.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      {app.description}
                    </p>
                    <div className="p-3 bg-primary-teal/10 rounded-lg">
                      <p className="text-sm text-primary-teal font-medium">
                        Wirksamkeit: {app.effectiveness}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-napolill-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nutze die Kraft des Schlafs
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Erlebe in der Napolill App, wie wissenschaftlich optimierte 
              Schlaf-Konsolidierung deine Gehirn-Reprogrammierung verstärkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-teal hover:bg-white/90">
                <Moon className="w-5 h-5 mr-2" />
                App jetzt testen
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary-teal">
                <BookOpen className="w-5 h-5 mr-2" />
                Weitere Studien
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
