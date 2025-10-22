'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Heart, Brain, Volume2, Moon, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

const safetyCategories = [
  {
    icon: Brain,
    title: 'Gehirn & Bewusstsein',
    description: 'Sichere Nutzung für deine mentale Gesundheit'
  },
  {
    icon: Volume2,
    title: 'Audio & Frequenzen',
    description: 'Richtige Lautstärke und Frequenz-Nutzung'
  },
  {
    icon: Moon,
    title: 'Schlaf & Erholung',
    description: 'Gesunde Schlafgewohnheiten mit Napolill'
  },
  {
    icon: Heart,
    title: 'Emotionale Sicherheit',
    description: 'Umgang mit intensiven emotionalen Erfahrungen'
  }
];

const safetyGuidelines = [
  {
    category: 'Allgemeine Sicherheit',
    items: [
      {
        type: 'warning',
        title: 'Keine medizinische Behandlung',
        description: 'Napolill ersetzt keine professionelle medizinische oder psychologische Behandlung. Bei schwerwiegenden psychischen oder physischen Problemen konsultiere immer einen qualifizierten Arzt oder Therapeuten.'
      },
      {
        type: 'info',
        title: 'Persönliche Grenzen respektieren',
        description: 'Höre auf deinen Körper und deine Intuition. Wenn du dich unwohl fühlst, pausiere oder stoppe die Nutzung der App.'
      },
      {
        type: 'info',
        title: 'Regelmäßige Pausen',
        description: 'Mache regelmäßige Pausen zwischen den Sessions. Übermäßige Nutzung kann kontraproduktiv sein.'
      }
    ]
  },
  {
    category: 'Audio-Sicherheit',
    items: [
      {
        type: 'warning',
        title: 'Lautstärke-Kontrolle',
        description: 'Nutze die App nie mit zu hoher Lautstärke. Beginne mit niedrigen Lautstärken und steigere sie vorsichtig. Verwende Kopfhörer verantwortungsvoll.'
      },
      {
        type: 'info',
        title: 'Frequenz-Verträglichkeit',
        description: 'Manche Menschen reagieren empfindlich auf bestimmte Frequenzen. Wenn du dich unwohl fühlst, wechsle zu einer anderen Frequenz oder pausiere.'
      },
      {
        type: 'warning',
        title: 'Epilepsie-Vorsicht',
        description: 'Personen mit Epilepsie oder anderen neurologischen Störungen sollten vor der Nutzung einen Arzt konsultieren.'
      }
    ]
  },
  {
    category: 'Schlaf-Sicherheit',
    items: [
      {
        type: 'info',
        title: 'Schlafqualität überwachen',
        description: 'Beobachte deine Schlafqualität bei nächtlicher Nutzung. Wenn dein Schlaf gestört wird, reduziere die Lautstärke oder verwende die Funktion nicht.'
      },
      {
        type: 'warning',
        title: 'Alarm-Funktionen',
        description: 'Stelle sicher, dass wichtige Alarme (Wecker, Notfall-Alarme) weiterhin funktionieren, wenn du die App über Nacht nutzt.'
      },
      {
        type: 'info',
        title: 'Schlafhygiene',
        description: 'Die App unterstützt gesunde Schlafgewohnheiten, ersetzt aber nicht eine gute Schlafhygiene wie regelmäßige Schlafzeiten und eine ruhige Umgebung.'
      }
    ]
  },
  {
    category: 'Emotionale Sicherheit',
    items: [
      {
        type: 'warning',
        title: 'Intensive Emotionen',
        description: 'Affirmationen können intensive emotionale Reaktionen auslösen. Sei darauf vorbereitet und habe Unterstützung verfügbar, falls nötig.'
      },
      {
        type: 'info',
        title: 'Trauma-Sensibilität',
        description: 'Bei traumatischen Erfahrungen in der Vergangenheit solltest du vorsichtig vorgehen und gegebenenfalls professionelle Unterstützung suchen.'
      },
      {
        type: 'info',
        title: 'Schrittweise Annäherung',
        description: 'Beginne mit sanften, positiven Affirmationen und steigere dich langsam. Überfordere dich nicht.'
      }
    ]
  }
];

const contraindications = [
  {
    condition: 'Schwangerschaft',
    recommendation: 'Konsultiere deinen Arzt vor der Nutzung, besonders bei Frequenzen unter 100 Hz.',
    severity: 'warning'
  },
  {
    condition: 'Herzschrittmacher',
    recommendation: 'Nutze die App nicht bei aktiven Herzschrittmachern ohne ärztliche Zustimmung.',
    severity: 'danger'
  },
  {
    condition: 'Epilepsie',
    recommendation: 'Konsultiere einen Neurologen vor der Nutzung von Frequenzen über 20 Hz.',
    severity: 'danger'
  },
  {
    condition: 'Psychische Erkrankungen',
    recommendation: 'Bei schwerwiegenden psychischen Erkrankungen nur unter ärztlicher Aufsicht nutzen.',
    severity: 'warning'
  },
  {
    condition: 'Schwerhörigkeit/Hörgeräte',
    recommendation: 'Passe die Lautstärke entsprechend an und konsultiere einen HNO-Arzt bei Fragen.',
    severity: 'info'
  }
];

const emergencyInfo = [
  {
    icon: '🏥',
    title: 'Notfall',
    description: 'Bei medizinischen Notfällen wähle sofort 112 (Deutschland) oder den entsprechenden Notruf in deinem Land.'
  },
  {
    icon: '🆘',
    title: 'Seelische Krise',
    description: 'TelefonSeelsorge: 0800 111 0 111 oder 0800 111 0 222 (Deutschland)'
  },
  {
    icon: '📞',
    title: 'Kinder- und Jugendtelefon',
    description: 'Nummer gegen Kummer: 116 111 (Deutschland)'
  }
];

export default function SafetyPage() {
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
            <Link href="/" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Sicherheitshinweise
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Wichtige Informationen für eine sichere und verantwortungsvolle 
              Nutzung der Napolill App.
            </p>

            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Sicherheit first
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Verantwortungsvolle Nutzung
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Gesundheit & Wohlbefinden
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Categories */}
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
              Sicherheitsbereiche
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Hier findest du wichtige Sicherheitshinweise für alle 
              Bereiche der App-Nutzung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-icon-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-10 h-10 text-[var(--icon-color)]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sicherheitsrichtlinien
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Befolge diese Richtlinien für eine sichere und effektive 
              Nutzung der Napolill App.
            </p>
          </motion.div>

          <div className="space-y-12">
            {safetyGuidelines.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`p-6 rounded-lg border ${
                        item.type === 'warning'
                          ? 'bg-yellow-500/10 border-yellow-500/30'
                          : item.type === 'danger'
                          ? 'bg-red-500/10 border-red-500/30'
                          : 'bg-primary-teal/10 border-primary-teal/30'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {item.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                        ) : item.type === 'danger' ? (
                          <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-primary-teal mt-1 flex-shrink-0" />
                        )}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontraindikationen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Bei folgenden Bedingungen solltest du besondere Vorsicht walten lassen 
              oder einen Arzt konsultieren.
            </p>
          </motion.div>

          <div className="space-y-6">
            {contraindications.map((contraindication, index) => (
              <motion.div
                key={contraindication.condition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg border ${
                  contraindication.severity === 'danger'
                    ? 'bg-red-500/10 border-red-500/30'
                    : contraindication.severity === 'warning'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'bg-blue-500/10 border-blue-500/30'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {contraindication.severity === 'danger' ? (
                    <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  ) : contraindication.severity === 'warning' ? (
                    <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {contraindication.condition}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {contraindication.recommendation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-20 bg-red-500/10 border-t border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notfall-Kontakte
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Bei Notfällen oder Krisen stehen diese Anlaufstellen zur Verfügung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyInfo.map((emergency, index) => (
              <motion.div
                key={emergency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background rounded-lg border border-red-500/20"
              >
                <div className="text-4xl mb-4">{emergency.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {emergency.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {emergency.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-napolill-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Deine Sicherheit ist uns wichtig
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8">
              Wenn du Fragen zu den Sicherheitshinweisen hast oder unsicher bist, 
              zögere nicht, uns zu kontaktieren oder einen Arzt zu konsultieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d">
                <Shield className="w-5 h-5 mr-2" />
                Sicherheitsfragen stellen
              </Button>
              <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d">
                <Heart className="w-5 h-5 mr-2" />
                Gesundheitstipps
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
