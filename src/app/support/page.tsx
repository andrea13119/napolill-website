'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, HelpCircle, BookOpen, Video, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import { useState } from 'react';

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

const contactFormFields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'E-Mail', type: 'email', required: true },
  { name: 'subject', label: 'Betreff', type: 'text', required: true },
  { name: 'category', label: 'Kategorie', type: 'select', required: true },
  { name: 'message', label: 'Nachricht', type: 'textarea', required: true }
];

const categories = [
  'Technische Probleme',
  'App-Funktionen',
  'Account & Abrechnung',
  'Datenschutz & Sicherheit',
  'Feedback & Vorschläge',
  'Sonstiges'
];

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

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Vielen Dank für deine Nachricht! Wir melden uns innerhalb von 24 Stunden bei dir.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center">
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
                    <Button  size="sm" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
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
              Video-Tutorials & Anleitungen
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Lerne Napolill schnell und einfach kennen mit unseren 
              Schritt-für-Schritt-Anleitungen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-rose/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {tutorial.type === 'Video' ? (
                          <Video className="w-6 h-6 text-accent-rose" />
                        ) : (
                          <BookOpen className="w-6 h-6 text-accent-rose" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {tutorial.title}
                          </h3>
                          <span className="px-2 py-1 bg-primary-teal/10 text-primary-teal text-xs rounded-full">
                            {tutorial.duration}
                          </span>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                          {tutorial.description}
                        </p>
                        <Button variant="ghost" size="sm">
                          {tutorial.type === 'Video' ? 'Video ansehen' : 'Artikel lesen'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontaktformular
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Beschreibe dein Anliegen und wir melden uns schnellstmöglich bei dir.
            </p>
          </motion.div>

          <Card variant="glass" className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground"
                    placeholder="deine@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Betreff *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground"
                  placeholder="Kurze Beschreibung deines Anliegens"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                  Kategorie *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground"
                >
                  <option value="">Bitte wählen...</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground resize-none"
                  placeholder="Beschreibe dein Anliegen ausführlich..."
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/60">
                  * Pflichtfelder
                </p>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Weitere Hilfe
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Hier findest du weitere nützliche Ressourcen und Links.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="glass" hover className="text-center">
              <CardContent className="p-8">
                <HelpCircle className="w-12 h-12 text-accent-rose mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  FAQ
                </h3>
                <p className="text-foreground/70 text-sm mb-6">
                  Finde Antworten auf die häufigsten Fragen
                </p>
                <Button  className="w-full">
                  FAQ durchsuchen
                </Button>
              </CardContent>
            </Card>

            <Card variant="glass" hover className="text-center">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-accent-rose mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Wissensdatenbank
                </h3>
                <p className="text-foreground/70 text-sm mb-6">
                  Umfassende Artikel und Anleitungen
                </p>
                <Button  className="w-full">
                  Artikel durchsuchen
                </Button>
              </CardContent>
            </Card>

            <Card variant="glass" hover className="text-center">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-accent-rose mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Community
                </h3>
                <p className="text-foreground/70 text-sm mb-6">
                  Tausche dich mit anderen Nutzern aus
                </p>
                <Button  className="w-full">
                  Community besuchen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
