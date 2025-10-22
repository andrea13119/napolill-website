'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const solfeggioFrequencies = [
  { frequency: 174, name: 'Grundlagen & Erdung', description: 'Die Grundlage für alle anderen Frequenzen' },
  { frequency: 284, name: 'Quantenfeld & Zellregeneration', description: 'Regeneriert beschädigte Zellen' },
  { frequency: 396, name: 'Befreiung von Schuld & Angst', description: 'Löst Schuldgefühle und Ängste' },
  { frequency: 417, name: 'Veränderung & Transformation', description: 'Erleichtert Veränderungen' },
  { frequency: 528, name: 'DNA-Reparatur & Liebe', description: 'Die Liebesfrequenz, repariert DNA' },
  { frequency: 639, name: 'Beziehungen & Verbindung', description: 'Verbessert zwischenmenschliche Beziehungen' },
  { frequency: 741, name: 'Klarheit & Intuition', description: 'Bringt Klarheit und Intuition' },
  { frequency: 852, name: 'Innere Wahrheit', description: 'Stärkt die Verbindung zur eigenen Wahrheit' },
  { frequency: 963, name: 'Bewusstsein & Verbindung', description: 'Erhöht das Bewusstsein und die Verbundenheit' }
];

export function SolfeggioPlayer() {
  const [selectedFrequency, setSelectedFrequency] = useState(174);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context
  useEffect(() => {
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.log('Web Audio API not supported');
      }
    };
    
    initAudio();
    
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Generate sine wave for selected frequency
  const generateTone = () => {
    if (!audioContextRef.current) return;
    
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
    }

    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(selectedFrequency, audioContextRef.current.currentTime);
    
    gainNode.gain.setValueAtTime(isMuted ? 0 : volume * 0.1, audioContextRef.current.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);
    
    oscillatorRef.current = oscillator;
    oscillator.start();
    
    return oscillator;
  };

  const togglePlay = () => {
    if (isPlaying) {
      // Stop playing
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start playing
      try {
        if (audioContextRef.current?.state === 'suspended') {
          audioContextRef.current.resume();
        }
        generateTone();
        setIsPlaying(true);
      } catch (error) {
        console.log('Could not start audio:', error);
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (oscillatorRef.current && audioContextRef.current) {
      const gainNode = oscillatorRef.current.context.createGain();
      gainNode.gain.setValueAtTime(isMuted ? 0 : newVolume * 0.1, audioContextRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (oscillatorRef.current && audioContextRef.current) {
      const gainNode = oscillatorRef.current.context.createGain();
      gainNode.gain.setValueAtTime(!isMuted ? 0 : volume * 0.1, audioContextRef.current.currentTime);
    }
  };

  const resetPlayer = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const currentFreq = solfeggioFrequencies.find(f => f.frequency === selectedFrequency);

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
            Solfeggio-Frequenz Player
          </h2>
          <p className="text-foreground/70">
            Entdecke die Wirkung der wissenschaftlich validierten Solfeggio-Frequenzen
          </p>
        </div>

        {/* Current Frequency Display */}
        <div className="text-center mb-8">
          <div className="inline-block bg-napolill-gradient rounded-2xl p-6 mb-4">
            <div className="text-4xl font-bold text-white mb-2">
              {selectedFrequency} Hz
            </div>
            <div className="text-white/90 text-lg">
              {currentFreq?.name}
            </div>
          </div>
          <p className="text-foreground/70 max-w-md mx-auto">
            {currentFreq?.description}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <Button
            onClick={togglePlay}
            size="lg"
            className="w-16 h-16 rounded-full bg-napolill-gradient text-white hover:opacity-90"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </Button>
          
          <Button
            onClick={toggleMute}
            size="lg"
            className="w-12 h-12 rounded-full"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </Button>
          
          <Button
            onClick={resetPlayer}
            size="lg"
            className="w-12 h-12 rounded-full"
          >
            <RotateCcw className="w-6 h-6" />
          </Button>
        </div>

        {/* Volume Control */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <VolumeX className="w-5 h-5 text-foreground/50" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="flex-1 max-w-xs h-2 bg-primary-teal/20 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--primary-teal) 0%, var(--primary-teal) ${volume * 100}%, var(--primary-teal) ${volume * 100}%, #e5e7eb 100%)`
              }}
            />
            <Volume2 className="w-5 h-5 text-foreground/50" />
          </div>
          <p className="text-center text-sm text-foreground/60 mt-2">
            Lautstärke: {Math.round(volume * 100)}%
          </p>
        </div>

        {/* Frequency Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solfeggioFrequencies.map((freq) => (
            <motion.button
              key={freq.frequency}
              onClick={() => {
                setSelectedFrequency(freq.frequency);
                if (isPlaying) {
                  resetPlayer();
                  setTimeout(() => {
                    generateTone();
                    setIsPlaying(true);
                  }, 100);
                }
              }}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedFrequency === freq.frequency
                  ? 'border-accent-rose bg-accent-rose/10'
                  : 'border-primary-teal/20 hover:border-primary-teal/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <div className={`text-xl font-bold mb-1 ${
                  selectedFrequency === freq.frequency ? 'text-accent-rose' : 'text-foreground'
                }`}>
                  {freq.frequency} Hz
                </div>
                <div className="text-sm text-foreground/70 leading-tight">
                  {freq.name}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Warning */}
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-sm text-yellow-600 text-center">
            ⚠️ Nutze Kopfhörer mit angemessener Lautstärke. Bei Unwohlsein sofort stoppen.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
