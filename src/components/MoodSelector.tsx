'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Brain, Shield, Eye } from 'lucide-react';

const moods = [
  {
    id: 'angry',
    name: 'Wütend',
    emoji: '😠',
    color: 'bg-red-500',
    gradient: 'from-red-500 to-red-700',
    description: 'Für die Verarbeitung von Wut und Aggression',
    frequency: 396,
    affirmation: 'Ich lasse meine Wut los und finde Frieden in mir.'
  },
  {
    id: 'sad',
    name: 'Traurig',
    emoji: '😢',
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-700',
    description: 'Zur Bewältigung von Trauer und Melancholie',
    frequency: 639,
    affirmation: 'Ich erlaube mir zu trauern und öffne mich für Trost.'
  },
  {
    id: 'passive',
    name: 'Passiv',
    emoji: '😐',
    color: 'bg-gray-500',
    gradient: 'from-gray-500 to-gray-700',
    description: 'Für Entspannung und Gelassenheit',
    frequency: 174,
    affirmation: 'Ich bin ruhig und gelassen in meinem inneren Frieden.'
  },
  {
    id: 'happy',
    name: 'Fröhlich',
    emoji: '😊',
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-yellow-700',
    description: 'Zur Steigerung der Lebensfreude',
    frequency: 528,
    affirmation: 'Ich strahle Freude aus und teile sie mit anderen.'
  },
  {
    id: 'euphoric',
    name: 'Euphorisch',
    emoji: '🤩',
    color: 'bg-pink-500',
    gradient: 'from-pink-500 to-pink-700',
    description: 'Für höchste Energie und Begeisterung',
    frequency: 963,
    affirmation: 'Ich bin voller Energie und Begeisterung für das Leben.'
  }
];

export function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const currentMood = moods.find(mood => mood.id === selectedMood);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setShowDetails(true);
  };

  const resetSelection = () => {
    setSelectedMood(null);
    setShowDetails(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-background rounded-xl p-8 shadow-xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Mood-Selector Demo
          </h2>
          <p className="text-foreground/70">
            Wähle deine aktuelle Stimmung und erlebe, wie Napolill sich anpasst
          </p>
        </div>

        {/* Mood Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {moods.map((mood, index) => (
            <motion.button
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              className={`p-6 rounded-xl border-2 transition-all ${
                selectedMood === mood.id
                  ? `border-${mood.color.replace('bg-', '')}-500 bg-${mood.color.replace('bg-', '')}-500/10`
                  : 'border-primary-teal/20 hover:border-primary-teal/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${mood.color} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl`}>
                  {mood.emoji}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {mood.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {mood.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mood Details */}
        {showDetails && currentMood && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-r ${currentMood.gradient} rounded-xl p-8 text-white`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{currentMood.emoji}</div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {currentMood.name} Theme
                  </h3>
                  <p className="text-white/80">
                    Angepasste Frequenzen und Affirmationen
                  </p>
                </div>
              </div>
              <button
                onClick={resetSelection}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Theme Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Empfohlene Frequenz
                  </h4>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">
                      {currentMood.frequency} Hz
                    </div>
                    <p className="text-white/80">
                      Optimal für deine aktuelle Stimmung
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Passende Affirmation
                  </h4>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-white italic">
                      &quot;{currentMood.affirmation}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Demo */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Theme-Anpassungen
                  </h4>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Hintergrundfarbe:</span>
                        <div className={`w-8 h-8 ${currentMood.color} rounded-full`}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Akzentfarbe:</span>
                        <div className={`w-8 h-8 bg-gradient-to-r ${currentMood.gradient} rounded-full`}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Textfarbe:</span>
                        <div className="w-8 h-8 bg-white rounded-full border-2 border-white/50"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Wirkung
                  </h4>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-white/90">
                      {currentMood.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5 mr-2 inline" />
                Frequenz hören
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5 mr-2 inline" />
                Affirmation aufnehmen
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-5 h-5 mr-2 inline" />
                Session starten
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Info Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60 max-w-2xl mx-auto">
            In der Napolill App passt sich die gesamte Benutzeroberfläche automatisch 
            an deine gewählte Stimmung an. Farben, Frequenzen und Empfehlungen 
            werden optimiert für deine aktuelle emotionale Verfassung.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
