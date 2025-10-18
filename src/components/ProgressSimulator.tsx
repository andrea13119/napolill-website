'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Calendar, Target, Star, Award, Zap, Heart } from 'lucide-react';
import { Button } from './ui/Button';

const badges = [
  {
    id: 'first_session',
    name: 'Erste Schritte',
    description: 'Erste Affirmations-Session abgeschlossen',
    icon: Star,
    color: 'bg-yellow-500',
    unlocked: true
  },
  {
    id: 'week_streak',
    name: 'Woche der Disziplin',
    description: '7 Tage am Stück genutzt',
    icon: Calendar,
    color: 'bg-blue-500',
    unlocked: true
  },
  {
    id: 'month_streak',
    name: 'Monat der Transformation',
    description: '30 Tage am Stück genutzt',
    icon: Flame,
    color: 'bg-red-500',
    unlocked: true
  },
  {
    id: 'frequency_master',
    name: 'Frequenz-Meister',
    description: 'Alle 9 Solfeggio-Frequenzen genutzt',
    icon: Zap,
    color: 'bg-purple-500',
    unlocked: true
  },
  {
    id: 'affirmation_creator',
    name: 'Affirmations-Künstler',
    description: '50 eigene Affirmationen erstellt',
    icon: Heart,
    color: 'bg-pink-500',
    unlocked: false
  },
  {
    id: 'zen_master',
    name: 'Zen-Meister',
    description: '100 Meditations-Sessions',
    icon: Target,
    color: 'bg-green-500',
    unlocked: false
  },
  {
    id: 'night_owl',
    name: 'Nachteule',
    description: '50 Endlosschleife-Sessions',
    icon: Star,
    color: 'bg-indigo-500',
    unlocked: false
  },
  {
    id: 'champion',
    name: 'Napolill-Champion',
    description: 'Alle Badges freigeschaltet',
    icon: Trophy,
    color: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    unlocked: false
  }
];

const stats = {
  totalSessions: 47,
  currentStreak: 12,
  longestStreak: 30,
  totalTime: 2840, // in minutes
  affirmationsCreated: 23,
  frequenciesUsed: 9,
  nightsUsed: 15
};

export function ProgressSimulator() {
  const [animatedStats, setAnimatedStats] = useState({
    totalSessions: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalTime: 0,
    affirmationsCreated: 0,
    frequenciesUsed: 0,
    nightsUsed: 0
  });
  const [showAllBadges, setShowAllBadges] = useState(false);

  // Animate stats on component mount
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          totalSessions: Math.floor(stats.totalSessions * progress),
          currentStreak: Math.floor(stats.currentStreak * progress),
          longestStreak: Math.floor(stats.longestStreak * progress),
          totalTime: Math.floor(stats.totalTime * progress),
          affirmationsCreated: Math.floor(stats.affirmationsCreated * progress),
          frequenciesUsed: Math.floor(stats.frequenciesUsed * progress),
          nightsUsed: Math.floor(stats.nightsUsed * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedStats(stats);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const unlockedBadges = badges.filter(badge => badge.unlocked);
  const lockedBadges = badges.filter(badge => !badge.unlocked);

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
            Fortschritts-Simulator
          </h2>
          <p className="text-foreground/70">
            Sieh dir deine Fortschritte und Erfolge in der Napolill App an
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-napolill-gradient rounded-xl p-6 text-white text-center"
          >
            <Calendar className="w-8 h-8 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">{animatedStats.totalSessions}</div>
            <div className="text-white/80 text-sm">Sessions gesamt</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center"
          >
            <Flame className="w-8 h-8 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">{animatedStats.currentStreak}</div>
            <div className="text-white/80 text-sm">Tage am Stück</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white text-center"
          >
            <Target className="w-8 h-8 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">{formatTime(animatedStats.totalTime)}</div>
            <div className="text-white/80 text-sm">Gesamtzeit</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white text-center"
          >
            <Award className="w-8 h-8 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">{unlockedBadges.length}</div>
            <div className="text-white/80 text-sm">Badges freigeschaltet</div>
          </motion.div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-secondary-purple/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Sessions</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/70">Gesamt:</span>
                <span className="font-semibold text-foreground">{animatedStats.totalSessions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Längster Streak:</span>
                <span className="font-semibold text-foreground">{animatedStats.longestStreak} Tage</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary-purple/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Erstellte Inhalte</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/70">Affirmationen:</span>
                <span className="font-semibold text-foreground">{animatedStats.affirmationsCreated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Frequenzen genutzt:</span>
                <span className="font-semibold text-foreground">{animatedStats.frequenciesUsed}/9</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary-purple/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Nächtliche Nutzung</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-foreground/70">Endlosschleife-Sessions:</span>
                <span className="font-semibold text-foreground">{animatedStats.nightsUsed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Durchschnitt pro Nacht:</span>
                <span className="font-semibold text-foreground">6.2h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Badges & Achievements</h3>
            <Button
              onClick={() => setShowAllBadges(!showAllBadges)}
              variant="outline"
              size="sm"
            >
              {showAllBadges ? 'Nur freigeschaltete' : 'Alle anzeigen'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(showAllBadges ? badges : unlockedBadges).map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  badge.unlocked
                    ? 'border-accent-rose bg-accent-rose/10'
                    : 'border-gray-300 bg-gray-100 opacity-50'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-3 ${
                    !badge.unlocked ? 'grayscale' : ''
                  }`}>
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`font-semibold mb-2 ${
                    badge.unlocked ? 'text-foreground' : 'text-gray-500'
                  }`}>
                    {badge.name}
                  </h4>
                  <p className={`text-sm ${
                    badge.unlocked ? 'text-foreground/70' : 'text-gray-400'
                  }`}>
                    {badge.description}
                  </p>
                  {!badge.unlocked && (
                    <div className="mt-2">
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        Gesperrt
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Fortschritt zu nächsten Badges</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground/70">Affirmations-Künstler</span>
                  <span className="text-foreground/70">{animatedStats.affirmationsCreated}/50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-pink-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(animatedStats.affirmationsCreated / 50) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground/70">Zen-Meister</span>
                  <span className="text-foreground/70">{animatedStats.totalSessions}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(animatedStats.totalSessions / 100) * 100}%` }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground/70">Nachteule</span>
                  <span className="text-foreground/70">{animatedStats.nightsUsed}/50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-indigo-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(animatedStats.nightsUsed / 50) * 100}%` }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 bg-napolill-gradient rounded-xl p-6 text-white text-center"
        >
          <Trophy className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Großartiger Fortschritt!</h4>
          <p className="text-white/90">
            Du bist auf dem besten Weg zur vollständigen Gehirn-Reprogrammierung. 
            Weiter so!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
