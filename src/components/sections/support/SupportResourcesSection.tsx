'use client';

import { motion } from 'framer-motion';
import { Video, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const tutorials = [
  {
    title: 'Erste Schritte mit Napolill',
    description: 'Lerne die Grundfunktionen der App kennen',
    duration: '5 Min',
    type: 'Video'
  },
  {
    title: 'Affirmationen aufnehmen',
    description: 'So nimmst du deine persönlichen Affirmationen auf',
    duration: '3 Min',
    type: 'Artikel'
  },
  {
    title: 'Solfeggio-Frequenzen verstehen',
    description: 'Alles über die verschiedenen Frequenzen und ihre Wirkung',
    duration: '8 Min',
    type: 'Video'
  },
  {
    title: 'Fortschritte verfolgen',
    description: 'Wie du deine Entwicklung mit Badges und Statistiken verfolgst',
    duration: '4 Min',
    type: 'Artikel'
  }
];

export function SupportResourcesSection() {
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
            Hilfreiche Ressourcen
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Entdecke unsere Video-Tutorials und Hilfe-Artikel für einen 
            schnellen Einstieg und Tipps zur optimalen Nutzung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {tutorial.type === 'Video' ? (
                      <Video className="w-5 h-5 text-accent-rose" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-primary-teal" />
                    )}
                    <span className="text-xs text-foreground/60 font-medium uppercase">
                      {tutorial.type}
                    </span>
                    <span className="text-xs text-foreground/60">•</span>
                    <span className="text-xs text-foreground/60">{tutorial.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {tutorial.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {tutorial.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-napolill-gradient rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Noch Fragen?
            </h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Unser Support-Team ist jederzeit für dich da. Wir helfen dir gerne 
              bei allen Fragen rund um die Napolill App.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:opacity-90">
                Häufige Fragen
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20">
                E-Mail Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

