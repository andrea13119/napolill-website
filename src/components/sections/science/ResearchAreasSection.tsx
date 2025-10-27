'use client';

import { motion } from 'framer-motion';
import { Brain, Microscope, Zap, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
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

export function ResearchAreasSection() {
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
  );
}

