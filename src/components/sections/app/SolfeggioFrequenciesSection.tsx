'use client';

import { motion } from 'framer-motion';
import { Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const solfeggioFrequencies = [
  { frequency: '174 Hz', title: 'Grundlagen & Erdung', description: 'Die Grundlage für alle anderen Frequenzen', color: 'bg-blue-500' },
  { frequency: '284 Hz', title: 'Quantenfeld & Zellregeneration', description: 'Regeneriert beschädigte Zellen', color: 'bg-green-500' },
  { frequency: '396 Hz', title: 'Befreiung von Schuld & Angst', description: 'Löst Schuldgefühle und Ängste', color: 'bg-red-500' },
  { frequency: '417 Hz', title: 'Veränderung & Transformation', description: 'Erleichtert Veränderungen', color: 'bg-yellow-500' },
  { frequency: '528 Hz', title: 'DNA-Reparatur & Liebe', description: 'Die Liebesfrequenz, repariert DNA', color: 'bg-pink-500' },
  { frequency: '639 Hz', title: 'Beziehungen & Verbindung', description: 'Verbessert zwischenmenschliche Beziehungen', color: 'bg-purple-500' },
  { frequency: '741 Hz', title: 'Klarheit & Intuition', description: 'Bringt Klarheit und Intuition', color: 'bg-indigo-500' },
  { frequency: '852 Hz', title: 'Innere Wahrheit', description: 'Stärkt die Verbindung zur eigenen Wahrheit', color: 'bg-orange-500' },
  { frequency: '963 Hz', title: 'Bewusstsein & Verbindung', description: 'Erhöht das Bewusstsein und die Verbundenheit', color: 'bg-teal-500' },
];

export function SolfeggioFrequenciesSection() {
  return (
    <section id="frequencies" className="py-20 bg-secondary-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solfeggio-Frequenzen
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Entdecke die 9 wissenschaftlich belegten Solfeggio-Frequenzen und 
            ihre Wirkung auf dein Bewusstsein und Wohlbefinden.
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
                    <div className={`w-12 h-12 ${freq.color} rounded-lg flex items-center justify-center`}>
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{freq.frequency}</h3>
                      <p className="text-sm text-foreground/60">{freq.title}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {freq.description}
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4 w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Frequenz hören
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

