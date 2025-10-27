'use client';

import { motion } from 'framer-motion';
import { BookOpen, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { ReactNode } from 'react';

interface Study {
  title: string;
  author: string;
  year: string;
  journal?: string;
  description: string;
  keyFindings: string[];
  relevance: string;
}

interface Mechanism {
  icon: LucideIcon;
  title: string;
  description: string;
  evidence: string;
}

interface Application {
  title: string;
  description: string;
  examples: string[];
}

interface StudyContentSectionProps {
  studies?: Study[];
  mechanisms?: Mechanism[];
  applications?: Application[];
  additionalContent?: ReactNode;
}

export function StudyContentSection({ 
  studies = [], 
  mechanisms = [], 
  applications = [],
  additionalContent 
}: StudyContentSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Studies */}
        {studies.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wichtige Studien
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Eine Auswahl der relevantesten wissenschaftlichen Untersuchungen
              </p>
            </motion.div>

            <div className="space-y-6">
              {studies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <BookOpen className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {study.title}
                          </h3>
                          <p className="text-sm text-foreground/60 mb-4">
                            {study.author} ({study.year})
                            {study.journal && ` • ${study.journal}`}
                          </p>
                          <p className="text-foreground/70 leading-relaxed mb-6">
                            {study.description}
                          </p>
                          
                          <div className="bg-secondary-purple/10 p-6 rounded-lg mb-4">
                            <h4 className="font-semibold text-lg mb-3">Wichtigste Erkenntnisse:</h4>
                            <ul className="space-y-2">
                              {study.keyFindings.map((finding, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-accent-rose rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-foreground/70">{finding}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-primary-teal/10 p-4 rounded-lg border-l-4 border-primary-teal">
                            <p className="text-sm"><strong>Relevanz für Napolill:</strong> {study.relevance}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Mechanisms */}
        {mechanisms.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wirkmechanismen
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Wie die Technik auf neurologischer Ebene funktioniert
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mechanisms.map((mechanism, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass" hover className="h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center mb-6">
                        <mechanism.icon className="w-8 h-8 text-[var(--icon-color)]" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {mechanism.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-6">
                        {mechanism.description}
                      </p>
                      <div className="bg-secondary-purple/10 p-4 rounded-lg">
                        <p className="text-sm text-foreground/60">
                          <strong>Evidenz:</strong> {mechanism.evidence}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Applications */}
        {applications.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Praktische Anwendungen
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Wie du die Erkenntnisse in der Napolill App nutzt
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {app.title}
                      </h3>
                      <p className="text-foreground/70 mb-6">
                        {app.description}
                      </p>
                      <ul className="space-y-2">
                        {app.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-teal rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground/70">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Content */}
        {additionalContent && (
          <div>{additionalContent}</div>
        )}
      </div>
    </section>
  );
}

