'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SolfeggioPlayer } from '@/components/SolfeggioPlayer';
import { MoodSelector } from '@/components/MoodSelector';
import { AffirmationsGenerator } from '@/components/AffirmationsGenerator';
import { ProgressSimulator } from '@/components/ProgressSimulator';
import { Button } from '@/components/ui/Button';

interface DemoInteractiveSectionProps {
  activeFeature: string | null;
  onBack: () => void;
}

export function DemoInteractiveSection({ activeFeature, onBack }: DemoInteractiveSectionProps) {
  const renderActiveFeature = () => {
    switch (activeFeature) {
      case 'solfeggio':
        return <SolfeggioPlayer />;
      case 'mood':
        return <MoodSelector />;
      case 'affirmations':
        return <AffirmationsGenerator />;
      case 'progress':
        return <ProgressSimulator />;
      default:
        return null;
    }
  };

  if (!activeFeature) {
    return null;
  }

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Feature-Auswahl
          </Button>

          <div className="bg-secondary-purple/5 rounded-2xl p-8 md:p-12">
            {renderActiveFeature()}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

