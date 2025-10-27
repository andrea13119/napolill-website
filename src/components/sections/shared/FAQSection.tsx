'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
  showLink?: boolean;
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "WARUM FUNKTIONIEREN AFFIRMATIONEN MIT SOLFEGGIO-FREQUENZEN?",
    answer: "Die Kombination aus gezielten Affirmationen und wissenschaftlich belegten Solfeggio-Frequenzen verstärkt die Wirkung auf das Unterbewusstsein und fördert die Neuroplastizität."
  },
  {
    question: "IST DAS DASSELBE WIE BINAURALE BEATS?",
    answer: "Nein, Solfeggio-Frequenzen sind eine andere Technologie. Sie basieren auf natürlichen Resonanzfrequenzen und sind wissenschaftlich besser erforscht."
  },
  {
    question: "WIE UMFANGREICH SIND EURE WISSENSCHAFTLICHEN STUDIEN?",
    answer: "Unsere App basiert auf aktueller Forschung zu Affirmationen, Solfeggio-Frequenzen und Gehirn-Reprogrammierung aus renommierten wissenschaftlichen Quellen."
  },
  {
    question: "IST DAS NUR FÜR MENSCHEN MIT BESTIMMTEN PROBLEMEN?",
    answer: "Nein, Napolill ist für jeden geeignet, der seine mentale Gesundheit verbessern und sein Unterbewusstsein positiv beeinflussen möchte."
  }
];

export function FAQSection({ items = defaultFAQItems, showLink = true }: FAQSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="relative py-32 z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Häufige Fragen</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card-bg border-card-border hover:bg-card-bg/70 transition-all duration-300">
                <CardContent className="p-6">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <Plus className={`w-4 h-4 text-foreground transition-transform duration-300 ${expandedFaq === index ? 'rotate-45' : ''}`} />
                      </div>
                      <span className="text-foreground font-semibold text-lg">{item.question}</span>
                    </div>
                  </button>
                  
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pl-12"
                    >
                      <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Link to FAQ Page */}
        {showLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/faq">
              <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-foreground font-bold px-8 py-4 rounded-2xl">
                Alle FAQs ansehen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

