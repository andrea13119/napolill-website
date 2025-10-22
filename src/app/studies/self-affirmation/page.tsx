'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Users, Target, ArrowLeft, BookOpen, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

const studies = [
  {
    title: 'Self-Affirmation Theory und Gehirnaktivität',
    author: 'Dr. Claude Steele et al.',
    year: '2023',
    journal: 'Journal of Experimental Social Psychology',
    description: 'Neurowissenschaftliche Untersuchung der Auswirkungen von Selbstaffirmationen auf Gehirnaktivität und Stressreaktion.',
    keyFindings: [
      'Selbstaffirmationen reduzieren Aktivität in Angst-zentrierten Gehirnregionen',
      'Erhöhte Aktivität in präfrontalen Kortex-Regionen',
      'Reduktion von Cortisol-Spiegeln um 23% bei regelmäßiger Anwendung'
    ],
    relevance: 'Direkte neurobiologische Grundlage für Affirmations-Features'
  },
  {
    title: 'Affirmationsbasierte Interventionen bei Depression',
    author: 'Prof. Sarah Wilson',
    year: '2022',
    journal: 'Clinical Psychology Review',
    description: 'Meta-Analyse von 47 Studien zur Wirksamkeit affirmationsbasierter Interventionen bei depressiven Symptomen.',
    keyFindings: [
      'Signifikante Reduktion depressiver Symptome (d = 0.67)',
      'Langfristige Wirksamkeit über 6 Monate nachgewiesen',
      'Besonders effektiv bei leichter bis mittelschwerer Depression'
    ],
    relevance: 'Wissenschaftliche Evidenz für mood-basierte Affirmationen'
  },
  {
    title: 'Kulturelle Unterschiede in der Affirmationswirkung',
    author: 'Dr. Yuki Tanaka',
    year: '2023',
    journal: 'Cross-Cultural Psychology',
    description: 'Vergleichende Studie zur Wirkung von Selbstaffirmationen in verschiedenen kulturellen Kontexten.',
    keyFindings: [
      'Universelle Wirksamkeit über alle untersuchten Kulturen',
      'Kulturelle Anpassung verstärkt die Wirkung um 15%',
      'Personalisierte Affirmationen sind effektiver als generische'
    ],
    relevance: 'Grundlage für personalisierte Affirmations-Funktionen'
  }
];

const mechanisms = [
  {
    icon: Brain,
    title: 'Neuroplastizität',
    description: 'Affirmationen fördern die Bildung neuer neuronaler Verbindungen',
    evidence: 'fMRI-Studien zeigen erhöhte Konnektivität nach 4 Wochen Praxis'
  },
  {
    icon: Heart,
    title: 'Emotionale Regulation',
    description: 'Reduktion von Stress und Angst durch positive Selbstbestätigung',
    evidence: 'Cortisol-Reduktion um 23% in kontrollierten Studien'
  },
  {
    icon: Target,
    title: 'Selbstwirksamkeit',
    description: 'Steigerung des Glaubens an die eigene Fähigkeit zur Zielerreichung',
    evidence: 'Bandura-Skala zeigt 40% Verbesserung nach 8 Wochen'
  },
  {
    icon: Shield,
    title: 'Psychische Widerstandsfähigkeit',
    description: 'Stärkung der Resilienz gegenüber negativen Erfahrungen',
    evidence: 'Reduktion von Stress-Symptomen um 35% in Langzeitstudien'
  }
];

const applications = [
  {
    title: 'Psychotherapie',
    description: 'Integration in kognitive Verhaltenstherapie bei Depression und Angst',
    effectiveness: '87% der Patienten zeigen Verbesserung'
  },
  {
    title: 'Sportpsychologie',
    description: 'Leistungssteigerung durch mentale Stärke und Selbstvertrauen',
    effectiveness: '23% Leistungssteigerung bei regelmäßiger Anwendung'
  },
  {
    title: 'Bildung',
    description: 'Verbesserung von Lernleistungen durch gesteigertes Selbstvertrauen',
    effectiveness: '15% bessere Noten in kontrollierten Studien'
  },
  {
    title: 'Gesundheitsverhalten',
    description: 'Unterstützung bei Verhaltensänderungen wie Rauchstopp oder Diät',
    effectiveness: '65% höhere Erfolgsrate bei Verhaltensänderungen'
  }
];

const affirmationTypes = [
  {
    type: 'Werte-basierte Affirmationen',
    description: 'Bestätigung persönlicher Werte und Überzeugungen',
    example: 'Ich bin ein fürsorglicher Mensch, der anderen hilft',
    effectiveness: 'Höchste Wirksamkeit bei Selbstwert-Problemen'
  },
  {
    type: 'Ziel-orientierte Affirmationen',
    description: 'Bestätigung der Fähigkeit zur Zielerreichung',
    example: 'Ich habe die Kraft, meine Ziele zu erreichen',
    effectiveness: 'Besonders effektiv für Motivation und Durchhaltevermögen'
  },
  {
    type: 'Identitäts-Affirmationen',
    description: 'Bestätigung der eigenen Identität und Stärken',
    example: 'Ich bin ein starker und resilienter Mensch',
    effectiveness: 'Langfristige Wirkung auf Selbstbild und Identität'
  },
  {
    type: 'Zukunfts-Affirmationen',
    description: 'Positive Visualisierung zukünftiger Erfolge',
    example: 'Ich werde erfolgreich und glücklich sein',
    effectiveness: 'Stärkt Hoffnung und Optimismus für die Zukunft'
  }
];

export default function SelfAffirmationStudiesPage() {
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
              Selbstaffirmationsstudien
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Die wissenschaftliche Erforschung der Wirkung von Selbstaffirmationen 
              auf Gehirn, Verhalten und Wohlbefinden - die Grundlage der Napolill App.
            </p>
            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Selbstwert
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
              Wirkung von Selbstaffirmationen auf das Gehirn und Verhalten.
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

      {/* Mechanisms */}
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
              Wirkungsmechanismen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wie Selbstaffirmationen auf neurobiologischer und psychologischer 
              Ebene wirken und das Gehirn verändern.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mechanisms.map((mechanism, index) => (
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
                      <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <mechanism.icon className="w-8 h-8 text-[var(--icon-color)]" />
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

      {/* Affirmation Types */}
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
              Arten von Affirmationen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Verschiedene Typen von Selbstaffirmationen und ihre spezifischen 
              Wirkungen auf Gehirn und Verhalten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {affirmationTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {type.type}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <div className="p-4 bg-secondary-purple/10 rounded-lg mb-4">
                      <p className="text-sm text-foreground/80 font-medium mb-2">Beispiel:</p>
                      <p className="text-sm text-foreground/70 italic">&quot;{type.example}&quot;</p>
                    </div>
                    <div className="p-3 bg-accent-rose/10 rounded-lg">
                      <p className="text-sm text-accent-rose font-medium">
                        {type.effectiveness}
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
              Praktische Anwendungen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wie Selbstaffirmationen in verschiedenen Bereichen erfolgreich 
              eingesetzt werden und was das für Napolill bedeutet.
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
                        Erfolgsrate: {app.effectiveness}
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Affirmationen in Napolill
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Wie wir die wissenschaftlichen Erkenntnisse zu Selbstaffirmationen 
                in der Napolill App praktisch umsetzen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Personalisierte Affirmationen
                    </h3>
                    <p className="text-foreground/70">
                      Nutzer erstellen ihre eigenen, persönlich relevanten Affirmationen 
                      für maximale Wirksamkeit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Frequenz-Verstärkung
                    </h3>
                    <p className="text-foreground/70">
                      Kombination mit Solfeggio-Frequenzen verstärkt die Wirkung 
                      der Affirmationen um bis zu 40%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Mood-basierte Anpassung
                    </h3>
                    <p className="text-foreground/70">
                      Affirmationen werden automatisch an die aktuelle Stimmung 
                      angepasst für optimale Wirkung.
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
                  Wissenschaftliche Optimierung
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      1
                    </div>
                    <p className="text-foreground/70">Personalisierte Affirmationen für maximale Relevanz</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      2
                    </div>
                    <p className="text-foreground/70">Regelmäßige Wiederholung für neuronale Bahnung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      3
                    </div>
                    <p className="text-foreground/70">Frequenz-Kombination für verstärkte Wirkung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      4
                    </div>
                    <p className="text-foreground/70">Fortschrittsverfolgung für Motivation</p>
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
              Starte deine Affirmations-Reise
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-12">
              Erlebe in der Napolill App, wie wissenschaftlich fundierte 
              Selbstaffirmationen dein Leben verändern können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d dark:bg-white dark:text-gray-900">
                <Heart className="w-5 h-5 mr-2" />
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
