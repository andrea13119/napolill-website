'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

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

export function SolfeggioResearchSection() {
  return (
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
  );
}

