'use client';

import { motion } from 'framer-motion';
import { Download, Brain, Zap, Shield, Smartphone, Heart, Play, Clock, Award, Cloud, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import { useState } from 'react';

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

const moodThemes = [
  { name: 'Wütend', color: 'bg-red-500', description: 'Für die Verarbeitung von Wut und Aggression', icon: '😠' },
  { name: 'Traurig', color: 'bg-blue-500', description: 'Zur Bewältigung von Trauer und Melancholie', icon: '😢' },
  { name: 'Passiv', color: 'bg-gray-500', description: 'Für Entspannung und Gelassenheit', icon: '😐' },
  { name: 'Fröhlich', color: 'bg-yellow-500', description: 'Zur Steigerung der Lebensfreude', icon: '😊' },
  { name: 'Euphorisch', color: 'bg-pink-500', description: 'Für höchste Energie und Begeisterung', icon: '🤩' },
];

const features = [
  {
    icon: Brain,
    title: 'Persönliche Affirmationen',
    description: 'Erstelle und verwende deine eigenen Affirmationen für gezielte Gehirn-Reprogrammierung.',
    details: ['Sprachaufnahme in hoher Qualität', 'Automatische Transkription', 'Persönliche Kategorisierung', 'Wiedergabe mit Hintergrundmusik']
  },
  {
    icon: Zap,
    title: 'Solfeggio-Frequenzen',
    description: '9 wissenschaftlich belegte Frequenzen für verschiedene Bewusstseinszustände.',
    details: ['174Hz - 963Hz Spektrum', 'Wissenschaftlich kalibriert', 'Individuelle Frequenz-Auswahl', 'Kombination mit Affirmationen']
  },
  {
    icon: Heart,
    title: 'Mood-basierte Themes',
    description: '5 verschiedene Stimmungs-Themes mit angepassten Farben und Frequenzen.',
    details: ['Automatische Theme-Erkennung', 'Visuelle Anpassungen', 'Frequenz-Optimierung', 'Persönliche Vorlieben']
  },
  {
    icon: Clock,
    title: 'Flexible Sessions',
    description: 'Wähle zwischen kurzen Sessions oder Endlosschleife über Nacht.',
    details: ['5/10 Min Sessions', 'Endlosschleife für Schlaf', 'Timer-Funktionen', 'Automatisches Stoppen']
  },
  {
    icon: Award,
    title: 'Fortschrittsverfolgung',
    description: 'Badges, Streaks und Statistiken für deine persönliche Entwicklung.',
    details: ['Tägliche Streaks', 'Achievement Badges', 'Fortschritts-Statistiken', 'Persönliche Meilensteine']
  },
  {
    icon: Shield,
    title: 'Privatsphäre & Sicherheit',
    description: '100% anonyme Nutzung ohne Werbung oder Tracking.',
    details: ['Lokale Datenspeicherung', 'Cloud-Backup (optional)', 'Keine Werbung', 'Vollständige Anonymität']
  }
];

// Screenshot Carousel Component
function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = Array.from({ length: 11 }, (_, i) => i + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Screenshot Display */}
      <div className="relative max-w-md mx-auto mb-8">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card variant="glass" className="overflow-hidden shadow-2xl">
            <div className="aspect-[9/16] relative">
              <img
                src={`/screenshots/screenshot-${screenshots[currentIndex]}.png`}
                alt={`Napolill App Screenshot ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </Card>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Vorheriges Screenshot"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Nächstes Screenshot"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-3 overflow-x-auto pb-4">
        {screenshots.map((num, index) => (
          <button
            key={num}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-2 ring-accent-rose scale-110'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img
              src={`/screenshots/screenshot-${num}.png`}
              alt={`Thumbnail ${num}`}
              className="w-full h-full object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-accent-rose/20" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <span className="text-foreground/70 text-sm">
          {currentIndex + 1} von {screenshots.length}
        </span>
      </div>
    </div>
  );
}

export default function AppPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-napolill-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 p-2">
                <img 
                  src="/images/icons/logo_napolill.png" 
                  alt="Napolill Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Die Napolill App
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Entdecke die revolutionäre Kombination aus Affirmationen und 
              Solfeggio-Frequenzen für maximale Gehirn-Reprogrammierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-teal hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Jetzt Downloaden
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary-teal">
                <Play className="w-5 h-5 mr-2" />
                Demo Video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Gallery */}
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
              App Screenshots
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Entdecke die intuitive Benutzeroberfläche und die mächtigen Features 
              der Napolill App in dieser interaktiven Galerie.
            </p>
          </motion.div>

          {/* Screenshot Carousel */}
          <ScreenshotCarousel />
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-secondary-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              App Features
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Alle Funktionen der Napolill App im Detail - von Affirmationen bis 
              zu wissenschaftlichen Solfeggio-Frequenzen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-napolill-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        {feature.title === 'Persönliche Affirmationen' ? (
                          <img 
                            src="/images/icons/brain.png" 
                            alt="Brain Icon" 
                            className="w-8 h-8 object-contain filter brightness-0 invert"
                          />
                        ) : (
                          <feature.icon className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-foreground/70 mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-sm text-foreground/60">
                              <div className="w-2 h-2 bg-accent-rose rounded-full mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solfeggio Frequencies */}
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

      {/* Mood Themes */}
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
              Wähle das passende Theme für deine aktuelle Stimmung und lass 
              die App ihre Farben und Frequenzen entsprechend anpassen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {moodThemes.map((mood, index) => (
              <motion.div
                key={mood.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${mood.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                      {mood.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {mood.name}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {mood.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
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
              App Screenshots
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Ein Blick in die Napolill App - moderne, intuitive Bedienung 
              mit wissenschaftlich fundierten Funktionen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((screenshot, index) => (
              <motion.div
                key={screenshot}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="overflow-hidden">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary-teal to-secondary-purple flex items-center justify-center">
                    <div className="text-center text-white">
                      <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm opacity-75">Screenshot {screenshot}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-napolill-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starte deine Transformation
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Lade die Napolill App jetzt herunter und beginne deine Reise 
              zur Gehirn-Reprogrammierung mit wissenschaftlichen Methoden.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-primary-teal hover:bg-white/90 text-lg px-8 py-4">
                <Smartphone className="w-5 h-5 mr-2" />
                Google Play Store
              </Button>
              <Button size="lg" className="bg-white text-primary-teal hover:bg-white/90 text-lg px-8 py-4">
                <Smartphone className="w-5 h-5 mr-2" />
                Apple App Store
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70 text-sm mt-8">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                100% Kostenlos
              </div>
              <div className="flex items-center">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud-Backup
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Keine Werbung
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Privatsphäre
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
