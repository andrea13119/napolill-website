'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Zap, Shield, Smartphone, Heart, Play, Plus, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import { useState } from 'react';

const features = [
  {
    icon: Brain,
    title: 'Affirmationen aufnehmen',
    description: 'Erstelle und nutze deine eigenen, persönlichen Affirmationen für gezielte Gehirn-Reprogrammierung.'
  },
  {
    icon: Zap,
    title: 'Solfeggio-Frequenzen',
    description: '9 wissenschaftlich belegte Frequenzen (174Hz - 963Hz) für verschiedene Bewusstseinszustände.'
  },
  {
    icon: Heart,
    title: 'Mood-basierte Themes',
    description: '5 verschiedene Stimmungs-Themes: wütend, traurig, passiv, fröhlich, euphorisch.'
  },
  {
    icon: Smartphone,
    title: 'Flexible Wiedergabe',
    description: '5/10 Min Sessions oder Endlosschleife über Nacht für optimale Wirkung.'
  },
  {
    icon: Shield,
    title: 'Fortschrittsverfolgung',
    description: 'Badges, Streaks und Statistiken für deine persönliche Entwicklung.'
  },
  {
    icon: Brain,
    title: 'Anonym & Werbefrei',
    description: 'Vollständige Privatsphäre mit lokaler und Cloud-Speicherung (Firebase).'
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    handle: "@sarah_mindset",
    text: "Napolill hat meine tägliche Routine komplett verändert. Die Affirmationen mit den Solfeggio-Frequenzen sind magisch!",
    verified: true
  },
  {
    name: "Marcus K.",
    handle: "@marcus_focus",
    text: "Endlich eine App, die wirklich funktioniert. Meine Konzentration ist deutlich besser geworden.",
    verified: true
  },
  {
    name: "Lisa T.",
    handle: "@lisa_zen",
    text: "Die verschiedenen Mood-Themes helfen mir, meine Emotionen besser zu regulieren. Absolut empfehlenswert!",
    verified: false
  }
];

const faqItems = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  const [currentMode, setCurrentMode] = useState(0);
  const modes = ['Affirmationen', 'Entspannung', 'Fokus', 'Kreativität'];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section - Brain.fm Style */}
      <section className="relative h-[100vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Website Header Image - Background */}
        <div className="absolute top-0 left-0 right-0 h-[70vh] md:h-full overflow-hidden">
          <img 
            src="/images/icons/website-header_mobile.png" 
            alt="Napolill Website Header Mobile" 
            className="w-full h-full object-cover object-top opacity-60 sm:opacity-50 md:hidden transition-all duration-300"
          />
          <img 
            src="/images/icons/website-header.png" 
            alt="Napolill Website Header Desktop" 
            className="hidden md:block w-full h-full object-cover object-top opacity-40 transition-all duration-300"
          />
          
          {/* Gradient Overlay für sanften Übergang - entfernt da beide Bereiche gleichen Hintergrund haben */}
          
          {/* Content over Image */}
          <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex items-center justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
              {/* Main Title */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                  <span className="block text-white drop-shadow-2xl shadow-black/80">Positives Denken</span>
                  <span className="block bg-brain-gradient-blue-purple bg-clip-text text-transparent drop-shadow-lg shadow-black/60">
                    {modes[currentMode]}
                </span>
              </h1>
                <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-white drop-shadow-xl shadow-black/70">
                  Die App mit Modi für jede Stimmung in deinem Leben.
              </p>
            </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-12">
                <Button 
                  className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  NAPOLILL KOSTENLOS TESTEN
                </Button>
              </motion.div>

              {/* Mode Navigation */}
              <motion.div variants={itemVariants} className="flex items-center justify-center space-x-8 mt-16">
                <button className="text-white/60 hover:text-white transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex space-x-4">
                  {modes.map((mode, index) => (
                    <button
                      key={mode}
                      onClick={() => setCurrentMode(index)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        currentMode === index
                          ? 'bg-white text-black'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                <button className="text-white/60 hover:text-white transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
            </motion.div>
            </motion.div>
              </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Sieh, was unsere Nutzer sagen
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Nutzer von Napolill holen jeden Tag das Beste aus sich heraus. Sieh dir an, was sie zu sagen haben!
            </p>
          </motion.div>

          {/* Featured In */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-white/60 text-sm uppercase tracking-wider mb-8">FEATURED IN</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-white/40 text-lg font-semibold">TechCrunch</div>
              <div className="text-white/40 text-lg font-semibold">Forbes</div>
              <div className="text-white/40 text-lg font-semibold">Wired</div>
              <div className="text-white/40 text-lg font-semibold">The Verge</div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 hover:bg-gray-900/70 transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-semibold">{testimonial.name}</span>
                          {testimonial.verified && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <span className="text-gray-400 text-sm">{testimonial.handle}</span>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Enhancement Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Erreiche tiefen Fokus in <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Minuten</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              Komm schneller in die Zone – mit personalisierter Affirmations-Musik, wissenschaftlich fundiert.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Unsere Technologie verbessert und fördert koordinierte neuronale Aktivität in nur fünf Minuten.
            </p>
          </motion.div>

          {/* Focus Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">119% Fokus-Steigerung</h3>
                <p className="text-white/70">Napolill vs. Durchschnittliche Musik</p>
              </div>
              
              {/* Chart Placeholder */}
              <div className="relative h-64 bg-gray-800/50 rounded-2xl p-6">
                <div className="flex items-end justify-between h-full">
                  {/* Average Music Line */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 bg-blue-500/30 rounded-t"></div>
                    <span className="text-white/60 text-sm">AVERAGE MUSIC</span>
                  </div>
                  
                  {/* Napolill Line */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t h-32"></div>
                    <span className="text-white/60 text-sm">NAPOLILL</span>
                  </div>
                </div>
                
                {/* Gradient Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Video Demo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative max-w-4xl mx-auto w-full">
              <div className="aspect-video bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg">Video abspielen</p>
                  <p className="text-white/60 text-sm">0:58</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features with Horizontal Scroll */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Modi für jede Aufgabe
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Erhalte Musik, die für die Aufgaben optimiert ist, die du erledigen musst.
            </p>
          </motion.div>

          {/* Horizontal Scroll Videos */}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex-shrink-0 w-80">
                  <Card className="bg-gray-900/50 border-gray-800 p-4 hover:bg-gray-900/70 transition-all duration-300">
                    <div className="aspect-video bg-gray-800/50 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                        <p className="text-white/60 text-sm">App Video {num}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                        <div>
                          <p className="text-white font-semibold">Nutzer {num}</p>
                          <p className="text-gray-400 text-sm">@nutzer_{num}</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm">
                        Napolill hat meine Produktivität um {num * 20}% gesteigert. Die Affirmationen sind perfekt auf meine Bedürfnisse abgestimmt!
                      </p>
                  </div>
                </Card>
                </div>
              ))}
            </div>
              </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: "🔇", text: "Kein Gesang oder störende Geräusche" },
              { icon: "🧠", text: "Entwickelt, um Ablenkung zu verhindern" },
              { icon: "⏱️", text: "Extralange Tracks, um Unterbrechungen zu vermeiden" },
              { icon: "🔬", text: "Von Menschen komponiert, wissenschaftlich bestätigt" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <p className="text-white/90 font-medium">{feature.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Productivity Data Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Napolill steigert produktive Stunden pro Woche
            </h2>
          </motion.div>

          {/* Productivity Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-3xl p-12 border border-gray-800"
          >
            <div className="flex items-end justify-center space-x-16 mb-8">
              {/* Without Napolill */}
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">30</div>
                <div className="text-white/60 text-sm mb-4">STUNDEN</div>
                <div className="w-16 h-32 bg-gray-700 rounded-t-lg mb-4"></div>
                <div className="text-white/60 text-sm">OHNE NAPOLILL</div>
              </div>
              
              {/* With Napolill */}
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">52</div>
                <div className="text-white/60 text-sm mb-4">STUNDEN</div>
                <div className="w-16 h-48 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg mb-4"></div>
                <div className="text-white/60 text-sm">MIT NAPOLILL</div>
              </div>
            </div>
            
            {/* Gradient Line */}
            <div className="relative">
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              <div className="absolute right-0 top-0 transform -translate-y-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  +73%
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Science Preview Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Entwickelt in Zusammenarbeit mit <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Neurowissenschaftlern</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              Gestützt auf Peer-Review-Forschung.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Unsere patentierte Technologie erhöht die Durchblutung von Funktionsnetzwerken und Hirnregionen, die mit Fokus und dem Flow-Zustand in Verbindung stehen.
            </p>
          </motion.div>

          {/* Brain Activity Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Blutfluss im Gehirn: fMRI-Studien
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pink Noise */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-800/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full"></div>
                  </div>
                  <p className="text-white/60 text-sm">PINK NOISE</p>
                </div>
                
                {/* Average Music */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-800/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"></div>
                  </div>
                  <p className="text-white/60 text-sm">AVERAGE MUSIC</p>
                </div>
                
                {/* Napolill */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-800/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
                  </div>
                  <p className="text-white/60 text-sm">NAPOLILL</p>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gray-700 rounded"></div>
                  <span className="text-white/60 text-sm">NIEDRIGER BLUTFLUSS</span>
                  <div className="w-4 h-4 bg-pink-500 rounded ml-4"></div>
                  <span className="text-white/60 text-sm">HOHER BLUTFLUSS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Funding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 border border-purple-800/50">
              <p className="text-white/80 text-center mb-8">
                Forschung, finanziert von der National Science Foundation (USA) und veröffentlicht in der Fachzeitschrift Nature Communications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">NSF</span>
                  </div>
                  <p className="text-white/80 text-sm">Supported by the National Science Foundation</p>
          </div>

                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">Nature</span>
                  </div>
                  <p className="text-white/80 text-sm">Published in the journal Nature Communications</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Link to Science Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/science">
              <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-white font-bold px-8 py-4 rounded-2xl">
                Mehr zur Wissenschaft
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* App Features with Screenshots */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Solfeggio-Frequenzen & Affirmationen
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Musik, die speziell für Leistung und die Aufgaben entwickelt wurde, die dir am wichtigsten sind.
            </p>
          </motion.div>

          {/* App Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Overlapping Screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-3xl p-6 border border-teal-800/50">
                  <div className="aspect-[9/16] bg-gray-800/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-teal-400" />
                      </div>
                      <p className="text-white/80 text-sm">Solfeggio-Frequenzen</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-6 border border-purple-800/50">
                  <div className="aspect-[9/16] bg-gray-800/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-purple-400" />
                      </div>
                      <p className="text-white/80 text-sm">Affirmationen</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-6 border border-blue-800/50">
                  <div className="aspect-[9/16] bg-gray-800/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-white/80 text-sm">Mood-Themes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Solfeggio-Frequenzen
                </h4>
                <p className="text-white/70">
                  Patentierte Audiotechnologie, die nachweislich effektiver für den Fokus ist als binaurale Beats und Fokus-Playlists von Spotify und YouTube.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Anpassbare Affirmationen
                </h4>
                <p className="text-white/70">
                  Erhöhe einfach die Intensität für den maximalen Fokus-Effekt. Personalisiere deine Affirmationen für deine spezifischen Ziele.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Link to App Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/app">
              <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-white font-bold px-8 py-4 rounded-2xl">
                App-Features entdecken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mood-based Themes Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Musik, gemacht für <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Entspannen</span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Der richtige mentale Zustand, wenn du ihn brauchst.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800">
                <h3 className="text-3xl font-bold text-white mb-6">Entspannen</h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Reduziert Herzfrequenz, Stress und Angst",
                    "Hilft beim Refokussieren und Energie tanken",
                    "Tiefe Entspannung mit Alpha-Wellen-verstärktem Audio"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                  </div>

                <div className="mb-6">
                  <h4 className="text-white/80 text-sm uppercase tracking-wider mb-4">Verfügbare Aktivitäten</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "⚡", text: "Energie tanken" },
                      { icon: "💧", text: "Entspannen" },
                      { icon: "🛋️", text: "Chillen" },
                      { icon: "🛏️", text: "Abschalten" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-xl">{activity.icon}</span>
                        <span className="text-white/80 text-sm">{activity.text}</span>
                  </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-16 h-16 text-white/60" />
                  </div>
                  <p className="text-white/60">Entspannungs-Illustration</p>
                  </div>
                </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-brain-gradient-blue-purple bg-clip-text text-transparent">Häufige Fragen</span>
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <Plus className={`w-4 h-4 text-white transition-transform duration-300 ${expandedFaq === index ? 'rotate-45' : ''}`} />
                        </div>
                        <span className="text-white font-semibold text-lg">{item.question}</span>
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
                        <p className="text-white/80 leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Link to FAQ Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/faq">
              <Button className="bg-brain-gradient-blue-purple hover:bg-brain-gradient-purple-pink text-white font-bold px-8 py-4 rounded-2xl">
                Alle FAQs ansehen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ergebnisse jederzeit, überall
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Verfügbar im Web, für iOS, Android und auf dem Desktop.
            </p>

            {/* Download Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Button className="bg-gray-900/50 hover:bg-gray-900/70 text-white font-semibold px-6 py-4 rounded-2xl border border-gray-800">
                <Smartphone className="w-5 h-5 mr-2" />
                Download on the App Store
              </Button>
              <Button className="bg-gray-900/50 hover:bg-gray-900/70 text-white font-semibold px-6 py-4 rounded-2xl border border-gray-800">
                <Smartphone className="w-5 h-5 mr-2" />
                GET IT ON Google Play
              </Button>
              <Button className="bg-gray-900/50 hover:bg-gray-900/70 text-white font-semibold px-6 py-4 rounded-2xl border border-gray-800">
                <div className="w-5 h-5 mr-2 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">N</span>
                </div>
                USE US ON THE WEB
              </Button>
              <Button className="bg-gray-900/50 hover:bg-gray-900/70 text-white font-semibold px-6 py-4 rounded-2xl border border-gray-800">
                <div className="w-5 h-5 mr-2 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">N</span>
                </div>
                Download for Desktop
              </Button>
            </div>

            {/* Device Mockups Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-8"
            >
              <div className="w-32 h-48 bg-gray-800/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-8 h-8 text-white/60 mx-auto mb-2" />
                  <p className="text-white/60 text-xs">Mobile</p>
                </div>
              </div>
              <div className="w-48 h-32 bg-gray-800/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded mx-auto mb-2"></div>
                  <p className="text-white/60 text-xs">Desktop</p>
                </div>
              </div>
              <div className="w-40 h-32 bg-gray-800/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded mx-auto mb-2"></div>
                  <p className="text-white/60 text-xs">Tablet</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
    </div>
      </section>
    </Layout>
  );
}