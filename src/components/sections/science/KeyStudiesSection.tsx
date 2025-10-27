'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

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

export function KeyStudiesSection() {
  return (
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
  );
}

