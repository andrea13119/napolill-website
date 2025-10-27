'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, BookOpen, HelpCircle, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live-Chat',
    description: 'Sofortige Hilfe durch unseren Support',
    availability: 'Mo-Fr 9:00-18:00',
    action: 'Chat starten'
  },
  {
    icon: Mail,
    title: 'E-Mail Support',
    description: 'Detaillierte Anfragen per E-Mail',
    availability: '24h Antwortzeit',
    action: 'E-Mail senden'
  },
  {
    icon: Phone,
    title: 'Telefonischer Support',
    description: 'Persönliche Beratung am Telefon',
    availability: 'Mo-Fr 10:00-16:00',
    action: 'Anrufen'
  },
  {
    icon: BookOpen,
    title: 'Wissensdatenbank',
    description: 'Umfassende Hilfe-Artikel und Tutorials',
    availability: 'Immer verfügbar',
    action: 'Durchsuchen'
  }
];

export function SupportHeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center pt-32 md:pt-44">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center justify-center min-h-[50vh]"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Support & Hilfe
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Wir sind hier, um dir zu helfen. Finde Antworten auf deine Fragen 
              oder kontaktiere unser Support-Team direkt.
            </p>
            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Schnelle Hilfe
              </div>
              <div className="flex items-center">
                <HelpCircle className="w-4 h-4 mr-2" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Video-Tutorials
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
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
              Wie können wir dir helfen?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wähle die beste Option für deine Anfrage. Unser Support-Team 
              ist bereit, dir zu helfen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                      <option.icon className="w-8 h-8 text-[var(--icon-color)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {option.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {option.description}
                    </p>
                    <p className="text-xs text-foreground/60 mb-6">
                      {option.availability}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

