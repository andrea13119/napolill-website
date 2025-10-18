'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, RefreshCw, Heart, Target, Zap, Star, Copy, Volume2 } from 'lucide-react';
import { Button } from './ui/Button';

const affirmationTemplates = {
  self_worth: {
    name: 'Selbstwert',
    icon: Heart,
    templates: [
      'Ich bin wertvoll und liebenswert.',
      'Ich verdiene Liebe und Respekt.',
      'Ich bin genug, genau so wie ich bin.',
      'Ich akzeptiere mich vollständig.',
      'Ich bin stolz auf mich und meine Fortschritte.'
    ]
  },
  confidence: {
    name: 'Selbstvertrauen',
    icon: Target,
    templates: [
      'Ich vertraue auf meine Fähigkeiten.',
      'Ich kann alles erreichen, was ich mir vornehme.',
      'Ich bin mutig und handle entschlossen.',
      'Ich glaube an mich und meine Träume.',
      'Ich überwinde jede Herausforderung mit Stärke.'
    ]
  },
  success: {
    name: 'Erfolg',
    icon: Star,
    templates: [
      'Ich bin erfolgreich in allem, was ich tue.',
      'Erfolg fließt mir mühelos zu.',
      'Ich ziehe positive Möglichkeiten an.',
      'Ich verdiene Erfolg und Anerkennung.',
      'Meine Ziele werden sich manifestieren.'
    ]
  },
  healing: {
    name: 'Heilung',
    icon: Zap,
    templates: [
      'Ich heile jeden Tag ein bisschen mehr.',
      'Mein Körper ist stark und gesund.',
      'Ich lasse alte Wunden los.',
      'Ich öffne mich für Heilung und Wachstum.',
      'Ich verdiene Gesundheit und Wohlbefinden.'
    ]
  }
};

const personalizationOptions = [
  'Ich bin',
  'Ich kann',
  'Ich verdiene',
  'Ich schaffe',
  'Ich wähle',
  'Ich erlaube mir',
  'Ich öffne mich für',
  'Ich vertraue darauf, dass'
];

export function AffirmationsGenerator() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [customAffirmation, setCustomAffirmation] = useState('');
  const [generatedAffirmation, setGeneratedAffirmation] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const generateAffirmation = () => {
    if (selectedCategory && affirmationTemplates[selectedCategory as keyof typeof affirmationTemplates]) {
      const templates = affirmationTemplates[selectedCategory as keyof typeof affirmationTemplates].templates;
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      setGeneratedAffirmation(randomTemplate);
      setShowPreview(true);
    } else if (customAffirmation.trim()) {
      setGeneratedAffirmation(customAffirmation.trim());
      setShowPreview(true);
    }
  };

  const generateRandomTemplate = () => {
    const categories = Object.keys(affirmationTemplates);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const templates = affirmationTemplates[randomCategory as keyof typeof affirmationTemplates].templates;
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    setGeneratedAffirmation(randomTemplate);
    setShowPreview(true);
  };

  const personalizeAffirmation = (start: string) => {
    const current = customAffirmation || generatedAffirmation;
    if (current.startsWith('Ich bin') || current.startsWith('Ich kann') || current.startsWith('Ich verdiene')) {
      const rest = current.substring(current.indexOf(' ') + 1);
      const newAffirmation = `${start} ${rest}`;
      setCustomAffirmation(newAffirmation);
      setGeneratedAffirmation(newAffirmation);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedAffirmation);
      // You could add a toast notification here
    } catch (err) {
      console.log('Failed to copy text: ', err);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    // In a real app, this would start audio recording
    setTimeout(() => setIsRecording(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-background rounded-xl p-8 shadow-xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Affirmations-Generator
          </h2>
          <p className="text-foreground/70">
            Erstelle deine persönlichen Affirmationen oder lass dich inspirieren
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Wähle eine Kategorie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(affirmationTemplates).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setCustomAffirmation('');
                  setShowPreview(false);
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCategory === key
                    ? 'border-accent-rose bg-accent-rose/10'
                    : 'border-primary-teal/20 hover:border-primary-teal/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <category.icon className="w-6 h-6 text-accent-rose" />
                  <span className="font-medium text-foreground">{category.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Custom Affirmation Input */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Oder erstelle deine eigene Affirmation
          </h3>
          <div className="space-y-4">
            <textarea
              value={customAffirmation}
              onChange={(e) => setCustomAffirmation(e.target.value)}
              placeholder="Schreibe hier deine persönliche Affirmation..."
              className="w-full h-24 px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground resize-none"
            />
            
            {/* Personalization Options */}
            <div>
              <p className="text-sm text-foreground/60 mb-2">Schnellstart-Optionen:</p>
              <div className="flex flex-wrap gap-2">
                {personalizationOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => personalizeAffirmation(option)}
                    className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full hover:bg-primary-teal/20 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Generate Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={generateAffirmation}
            disabled={!selectedCategory && !customAffirmation.trim()}
            size="lg"
            className="bg-napolill-gradient text-white hover:opacity-90"
          >
            <Plus className="w-5 h-5 mr-2" />
            Affirmation generieren
          </Button>
          <Button
            onClick={generateRandomTemplate}
            variant="outline"
            size="lg"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Zufällige Inspiration
          </Button>
        </div>

        {/* Generated Affirmation Preview */}
        {showPreview && generatedAffirmation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-napolill-gradient rounded-xl p-8 text-white mb-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Deine Affirmation</h3>
              <div className="bg-white/20 rounded-lg p-6 mb-6">
                <p className="text-xl italic leading-relaxed">
                  &quot;{generatedAffirmation}&quot;
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={copyToClipboard}
                  className="bg-white text-primary-teal hover:bg-white/90"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Kopieren
                </Button>
                <Button
                  onClick={startRecording}
                  disabled={isRecording}
                  className="bg-white/20 text-white hover:bg-white/30"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  {isRecording ? 'Aufnahme...' : 'Aufnehmen'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tips */}
        <div className="bg-secondary-purple/10 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            💡 Tipps für effektive Affirmationen
          </h4>
          <ul className="space-y-2 text-foreground/70">
            <li>• Verwende die Gegenwart ("Ich bin" statt "Ich werde sein")</li>
            <li>• Formuliere positiv (keine Verneinungen wie "nicht" oder "keine")</li>
            <li>• Mache sie persönlich und emotional bedeutsam</li>
            <li>• Wiederhole sie regelmäßig, am besten täglich</li>
            <li>• Glaube an das, was du sagst, auch wenn es sich zunächst fremd anfühlt</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
