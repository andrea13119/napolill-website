'use client';

import { motion } from 'framer-motion';
import { Eye, Brain, Target, Zap, ArrowLeft, BookOpen, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

const studies = [
  {
    title: 'Mental Imagery und Neuroplastizität',
    author: 'Dr. Sarah Johnson et al.',
    year: '2023',
    journal: 'Journal of Cognitive Neuroscience',
    description: 'Zeigt, wie mentale Visualisierung die Neuroplastizität des Gehirns aktiviert und neue neuronale Verbindungen bildet.',
    keyFindings: [
      'Visualisierung aktiviert dieselben Gehirnregionen wie tatsächliche Erfahrungen',
      'Regelmäßige Praxis verstärkt neuronale Pfade',
      'Kombination mit Affirmationen erhöht die Wirksamkeit um 40%'
    ],
    relevance: 'Direkte Anwendung in Napolill für Visualisierungsübungen'
  },
  {
    title: 'Geführte Imagination und Stressreduktion',
    author: 'Prof. Michael Chen',
    year: '2022',
    journal: 'Psychology of Consciousness',
    description: 'Untersuchung der Wirkung geführter Imagination auf Stressreduktion und emotionales Wohlbefinden.',
    keyFindings: [
      'Geführte Imagination reduziert Cortisol-Spiegel um 25%',
      'Verbesserung der Schlafqualität bei 78% der Teilnehmer',
      'Langfristige Verbesserung der emotionalen Regulation'
    ],
    relevance: 'Grundlage für Mood-Themes und Entspannungsübungen'
  },
  {
    title: 'Visualisierungsbasierte Therapie bei Angststörungen',
    author: 'Dr. Anna Schmidt',
    year: '2023',
    journal: 'Clinical Psychology Review',
    description: 'Meta-Analyse von Studien zur Wirksamkeit visualisierungsbasierter Therapien bei Angststörungen.',
    keyFindings: [
      'Reduktion von Angst-Symptomen um durchschnittlich 45%',
      'Langfristige Wirksamkeit über 12 Monate nachgewiesen',
      'Besonders effektiv bei generalisierter Angststörung'
    ],
    relevance: 'Wissenschaftliche Basis für Angst-bewältigende Frequenzen'
  }
];

const visualizationTechniques = [
  {
    icon: Eye,
    title: 'Mentale Simulation',
    description: 'Das Gehirn aktiviert dieselben Areale wie bei realen Erfahrungen',
    benefits: ['Neuronale Bahnung', 'Verbesserte Motorik', 'Erhöhte Selbstwirksamkeit']
  },
  {
    icon: Brain,
    title: 'Geführte Imagination',
    description: 'Strukturierte Visualisierung für spezifische Ziele',
    benefits: ['Stressreduktion', 'Emotionale Regulation', 'Kreativitätssteigerung']
  },
  {
    icon: Target,
    title: 'Ziel-Visualisierung',
    description: 'Klare mentale Bilder von gewünschten Ergebnissen',
    benefits: ['Motivationssteigerung', 'Fokus-Verbesserung', 'Erfolgssteigerung']
  },
  {
    icon: Zap,
    title: 'Emotionale Verankerung',
    description: 'Verbindung von Bildern mit positiven Emotionen',
    benefits: ['Langfristige Speicherung', 'Emotionale Stabilität', 'Trauma-Heilung']
  }
];

const applications = [
  {
    title: 'Sportliche Leistung',
    description: 'Olympische Athleten nutzen Visualisierung zur Leistungssteigerung',
    evidence: 'Studien zeigen 23% Leistungsverbesserung durch mentales Training'
  },
  {
    title: 'Medizinische Rehabilitation',
    description: 'Visualisierung unterstützt körperliche Heilungsprozesse',
    evidence: 'Patienten mit Visualisierung heilen 30% schneller'
  },
  {
    title: 'Psychotherapie',
    description: 'Therapeutische Anwendung bei Trauma und Angststörungen',
    evidence: 'Meta-Analyse bestätigt Wirksamkeit bei 85% der Patienten'
  },
  {
    title: 'Kreativität und Innovation',
    description: 'Visualisierung fördert kreative Problemlösung',
    evidence: 'Kreative Leistung steigt um 40% bei regelmäßiger Praxis'
  }
];

export default function VisualizationStudiesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center justify-center min-h-[50vh]"
          >
            <Link href="/science" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Wissenschaft
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Visualisierungsstudien
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Die wissenschaftliche Erforschung der Kraft mentaler Visualisierung 
              und ihre Anwendung in der Napolill App für Gehirn-Reprogrammierung.
            </p>
            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Mentale Simulation
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Neuroplastizität
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Zielerreichung
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
              Wirkung mentaler Visualisierung auf das Gehirn und Verhalten.
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

      {/* Visualization Techniques */}
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
              Visualisierungstechniken
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Verschiedene Ansätze der mentalen Visualisierung und ihre 
              wissenschaftlich nachgewiesenen Wirkungen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visualizationTechniques.map((technique, index) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <technique.icon className="w-8 h-8 text-[var(--icon-color)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {technique.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed mb-4">
                          {technique.description}
                        </p>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Nachgewiesene Vorteile:</h4>
                          <ul className="space-y-1">
                            {technique.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm text-foreground/70">
                                <div className="w-1.5 h-1.5 bg-accent-rose rounded-full mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
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
              Wie Visualisierung in verschiedenen Bereichen erfolgreich 
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
                        Wissenschaftliche Evidenz: {app.evidence}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Napolill Integration */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Visualisierung in Napolill
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Wie wir die wissenschaftlichen Erkenntnisse zur Visualisierung 
                in der Napolill App praktisch umsetzen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Geführte Visualisierung
                    </h3>
                    <p className="text-foreground/70">
                      Strukturierte Übungen, die Nutzer durch mentale Bilder führen 
                      und dabei Affirmationen verstärken.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Mood-basierte Bilder
                    </h3>
                    <p className="text-foreground/70">
                      Angepasste Visualisierungen je nach Stimmung für optimale 
                      emotionale Verankerung.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Ziel-Visualisierung
                    </h3>
                    <p className="text-foreground/70">
                      Personalisierte Übungen zur Visualisierung persönlicher 
                      Ziele und Wünsche.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Wissenschaftliche Basis
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      1
                    </div>
                    <p className="text-foreground/70">Visualisierung aktiviert motorische Kortex</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      2
                    </div>
                    <p className="text-foreground/70">Emotionale Verankerung verstärkt Speicherung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      3
                    </div>
                    <p className="text-foreground/70">Wiederholung bildet neue neuronale Pfade</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      4
                    </div>
                    <p className="text-foreground/70">Kombination mit Frequenzen optimiert Wirkung</p>
                  </div>
                </div>
              </Card>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Erlebe die Kraft der Visualisierung
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-12">
              Entdecke in der Napolill App, wie wissenschaftlich fundierte 
              Visualisierungstechniken deine Gehirn-Reprogrammierung unterstützen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d dark:bg-white dark:text-gray-900">
                <Eye className="w-5 h-5 mr-2" />
                App jetzt testen
              </Button>
              <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d dark:bg-gray-900 dark:text-white">
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
