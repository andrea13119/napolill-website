'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const moodThemes = [
  { name: 'Wütend', color: 'bg-red-500', description: 'Für die Verarbeitung von Wut und Aggression', icon: '😠' },
  { name: 'Traurig', color: 'bg-blue-500', description: 'Zur Bewältigung von Trauer und Melancholie', icon: '😢' },
  { name: 'Passiv', color: 'bg-gray-500', description: 'Für Entspannung und Gelassenheit', icon: '😐' },
  { name: 'Fröhlich', color: 'bg-yellow-500', description: 'Zur Steigerung der Lebensfreude', icon: '😊' },
  { name: 'Euphorisch', color: 'bg-pink-500', description: 'Für höchste Energie und Begeisterung', icon: '🤩' },
];

export function MoodThemesSection() {
  return (
    <section id="themes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mood-Themes
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Passe die App an deine aktuelle Stimmung an - für maximale 
            emotionale Resonanz und Wirkung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {moodThemes.map((mood, index) => (
            <motion.div
              key={mood.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" hover className="h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 ${mood.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl`}>
                    {mood.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{mood.name}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {mood.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

