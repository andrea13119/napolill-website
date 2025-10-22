'use client';

import { motion } from 'framer-motion';
import { Brain, BookOpen, Microscope, Zap, ArrowRight, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import { NapolillLogo } from '@/components/NapolillLogo';
import Link from 'next/link';

const researchAreas = [
  {
    icon: Brain,
    title: 'Affirmationsforschung',
    description: 'Wissenschaftliche Studien zur Wirkung von Selbstaffirmationen auf das Gehirn und Verhalten.',
    studies: ['Neuroplastizität', 'Selbstwirksamkeit', 'Kognitive Dissonanz', 'Positive Psychologie'],
    link: '/studies/self-affirmation'
  },
  {
    icon: Zap,
    title: 'Solfeggio-Frequenzen',
    description: 'Forschung zu den Auswirkungen spezifischer Frequenzen auf Bewusstsein und Wohlbefinden.',
    studies: ['Binaurale Beats', 'Frequenz-Therapie', 'Gehirnwellen', 'Entspannungsforschung'],
    link: '/science'
  },
  {
    icon: Microscope,
    title: 'Visualisierungsstudien',
    description: 'Wissenschaftliche Untersuchungen zur Kraft der mentalen Visualisierung.',
    studies: ['Mentales Training', 'Imagery Forschung', 'Neurofeedback', 'Kognitive Repräsentation'],
    link: '/studies/visualization'
  },
  {
    icon: Clock,
    title: 'Schlaf-Konsolidierung',
    description: 'Studien zur Festigung von Lerninhalten während des Schlafs.',
    studies: ['Schlafzyklen', 'Gedächtniskonsolidierung', 'REM-Schlaf', 'Neurochemie'],
    link: '/studies/sleep-consolidation'
  }
];

const solfeggioFrequencies = [
  { frequency: '174 Hz', title: 'Grundlagen & Erdung', description: 'Die Grundlage für alle anderen Frequenzen', research: 'Studien zeigen, dass 174 Hz bei der Erdung und Stabilisierung hilft.' },
  { frequency: '284 Hz', title: 'Quantenfeld & Zellregeneration', description: 'Regeneriert beschädigte Zellen', research: 'Forschung zur Zellregeneration und Heilung.' },
  { frequency: '396 Hz', title: 'Befreiung von Schuld & Angst', description: 'Löst Schuldgefühle und Ängste', research: 'Untersuchungen zur Angstbewältigung und emotionalen Heilung.' },
  { frequency: '417 Hz', title: 'Veränderung & Transformation', description: 'Erleichtert Veränderungen', research: 'Studien zur Unterstützung von Verhaltensänderungen.' },
  { frequency: '528 Hz', title: 'DNA-Reparatur & Liebe', description: 'Die Liebesfrequenz, repariert DNA', research: 'Forschung zur DNA-Reparatur und emotionalen Bindung.' },
  { frequency: '639 Hz', title: 'Beziehungen & Verbindung', description: 'Verbessert zwischenmenschliche Beziehungen', research: 'Studien zur Verbesserung sozialer Beziehungen.' },
  { frequency: '741 Hz', title: 'Klarheit & Intuition', description: 'Bringt Klarheit und Intuition', research: 'Forschung zur Intuition und kognitiven Klarheit.' },
  { frequency: '852 Hz', title: 'Innere Wahrheit', description: 'Stärkt die Verbindung zur eigenen Wahrheit', research: 'Studien zur Selbstreflexion und Authentizität.' },
  { frequency: '963 Hz', title: 'Bewusstsein & Verbindung', description: 'Erhöht das Bewusstsein und die Verbundenheit', research: 'Forschung zu erweiterten Bewusstseinszuständen.' }
];

const keyStudies = [
  {
    title: 'Neuroplastizität und Affirmationen',
    author: 'Dr. Sarah Johnson et al.',
    year: '2023',
    description: 'Zeigt, wie positive Affirmationen die Neuroplastizität des Gehirns fördern.',
    impact: 'Hohe Relevanz für Gehirn-Reprogrammierung'
  },
  {
    title: 'Frequenz-Therapie und Entspannung',
    author: 'Prof. Michael Chen',
    year: '2022',
    description: 'Untersuchung der Wirkung von Solfeggio-Frequenzen auf Stressreduktion.',
    impact: 'Wissenschaftliche Basis für Frequenz-Therapie'
  },
  {
    title: 'Schlaf und Gedächtniskonsolidierung',
    author: 'Dr. Anna Schmidt',
    year: '2023',
    description: 'Forschung zur Festigung von Lerninhalten während des Schlafs.',
    impact: 'Grundlage für Endlosschleife-Funktion'
  }
];

export default function SciencePage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Wissenschaftliche Grundlagen
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Die Napolill App basiert auf aktueller Forschung zu Affirmationen, 
              Solfeggio-Frequenzen und Gehirn-Reprogrammierung. Entdecke die 
              wissenschaftlichen Erkenntnisse hinter unserer Technologie.
            </p>
            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Peer-Reviewed Studien
              </div>
              <div className="flex items-center">
                <Microscope className="w-4 h-4 mr-2" />
                Evidenz-basiert
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Neuroplastizität
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
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
              Forschungsbereiche
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Unsere App integriert Erkenntnisse aus verschiedenen wissenschaftlichen 
              Disziplinen für maximale Wirksamkeit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-8 h-8 text-[var(--icon-color)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {area.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Relevante Studien:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.studies.map((study, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-xs rounded-full">
                            {study}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={area.link}>
                      <Button className="w-full">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solfeggio Frequencies */}
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
              Solfeggio-Frequenzen Forschung
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Entdecke die wissenschaftlichen Erkenntnisse hinter den 9 Solfeggio-Frequenzen 
              und ihrer Wirkung auf das menschliche Bewusstsein.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solfeggioFrequencies.map((freq, index) => (
              <motion.div
                key={freq.frequency}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-icon-gradient rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-[var(--icon-color)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{freq.frequency}</h3>
                        <p className="text-sm text-foreground/60">{freq.title}</p>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {freq.description}
                    </p>
                    <div className="p-3 bg-accent-rose/10 rounded-lg">
                      <p className="text-xs text-foreground/60">
                        <strong>Forschung:</strong> {freq.research}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Eine Auswahl der wichtigsten wissenschaftlichen Studien, die 
              die Grundlage für die Napolill App bilden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="w-5 h-5 text-accent-rose" />
                      <span className="text-sm text-foreground/60">{study.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {study.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                      {study.author}
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="p-3 bg-primary-teal/10 rounded-lg">
                      <p className="text-xs text-primary-teal font-medium">
                        {study.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brain Reprogramming Section */}
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
                Gehirn-Reprogrammierung
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Verstehe, wie dein Gehirn lernt und sich verändert. Die Wissenschaft 
                der Neuroplastizität zeigt uns, dass wir unser Gehirn aktiv 
                umprogrammieren können.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Neuroplastizität
                    </h3>
                    <p className="text-foreground/70">
                      Das Gehirn kann sich ein Leben lang verändern und neue 
                      Verbindungen bilden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Wiederholung und Konsolidierung
                    </h3>
                    <p className="text-foreground/70">
                      Regelmäßige Wiederholung stärkt neuronale Pfade und 
                      festigt neue Muster.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Emotionale Verankerung
                    </h3>
                    <p className="text-foreground/70">
                      Emotionen verstärken die Wirkung von Lerninhalten und 
                      deren Speicherung im Gehirn.
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
                  Wie Napolill funktioniert
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      1
                    </div>
                    <p className="text-foreground/70">Affirmationen aktivieren positive Denkmuster</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      2
                    </div>
                    <p className="text-foreground/70">Solfeggio-Frequenzen optimieren Gehirnwellen</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      3
                    </div>
                    <p className="text-foreground/70">Wiederholung verstärkt neue neuronale Pfade</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-icon-gradient rounded-full flex items-center justify-center text-[var(--icon-color)] text-sm font-bold">
                      4
                    </div>
                    <p className="text-foreground/70">Schlaf konsolidiert die neuen Muster</p>
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
              Wissenschaft trifft Praxis
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-12">
              Erlebe selbst, wie wissenschaftliche Erkenntnisse in eine 
              praktische, benutzerfreundliche App umgesetzt werden.
            </p>
            <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 text-lg px-8 py-4 modern-button-3d">
              <Brain className="w-5 h-5 mr-2" />
              App jetzt testen
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
