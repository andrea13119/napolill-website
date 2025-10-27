'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { ReactNode } from 'react';

interface ContentSection {
  id: string;
  title: string;
  content: ReactNode;
  icon?: LucideIcon;
}

interface LegalContentSectionProps {
  sections: ContentSection[];
  lastUpdated?: string;
}

export function LegalContentSection({ sections, lastUpdated }: LegalContentSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {lastUpdated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-foreground/60">
              Zuletzt aktualisiert: {lastUpdated}
            </p>
          </motion.div>
        )}

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    {section.icon && (
                      <div className="w-12 h-12 bg-icon-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-[var(--icon-color)]" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {section.title}
                      </h2>
                      <div className="text-foreground/70 leading-relaxed space-y-4 prose prose-invert max-w-none">
                        {section.content}
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
  );
}

