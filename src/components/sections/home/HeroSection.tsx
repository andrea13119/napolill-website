'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WebsiteHeader } from '@/components/WebsiteHeader';

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

export function HeroSection() {
  const [currentMode, setCurrentMode] = useState(0);
  const modes = ['Affirmationen', 'Entspannung', 'Fokus', 'Kreativität'];

  return (
    <>
      {/* Fixed Header Background */}
      <div className="fixed top-0 left-0 right-0 min-h-screen z-0 overflow-hidden">
        <WebsiteHeader variant="mobile" />
        <WebsiteHeader variant="desktop" />
        
        {/* Sanfter Übergang am oberen Rand */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none"></div>
        
        {/* Sanfter Übergang am unteren Rand mit Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 animate-[fadeInUp_3s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Hero Text Section */}
      <section className="relative z-10 min-h-screen flex items-end md:items-center justify-center overflow-hidden bg-background pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="w-full">
          <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 rounded-3xl p-8 md:p-12 border border-teal-800/50">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 text-center"
            >
              {/* Main Title */}
              <motion.div variants={itemVariants} className="space-y-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  <span className="block text-[#2D7A8A] drop-shadow-2xl shadow-black/80 mb-4">
                    Napolill – Deine Stimme.
                  </span>
                  <span className="block bg-gradient-to-r from-[#2D7A8A] via-[#2D7A8A] to-[#2D7A8A] bg-clip-text text-transparent drop-shadow-lg shadow-black/60">
                    Dein neues Selbst.
                  </span>
                </h1>
                <p
                  className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-foreground drop-shadow-xl shadow-black/70 text-center my-8"
                  style={{
                    marginTop: '40px',
                    marginBottom: '40px',
                    fontSize: '1.5rem'
                  }}
                >
                  Nimm deine Affirmationen mit deiner Stimme auf und kombiniere sie mit geführter Vorstellung.
                  <br />
                  So werden Stärke, Ruhe und Fokus zur Gewohnheit.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button 
                  className="bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-button-text font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  NAPOLILL KOSTENLOS TESTEN
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-5 text-lg rounded-2xl border-primary/50 text-primary hover:text-white hover:bg-primary/80 transition-all duration-300 hover:scale-105"
                >
                  Wie es wirkt
                </Button>
              </motion.div>

              {/* Mode Navigation */}
              <motion.div variants={itemVariants} className="mt-20" style={{marginTop: '60px'}}>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <button className="text-foreground/60 hover:text-foreground transition-colors hidden sm:block">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="grid grid-cols-1 sm:flex gap-4 sm:gap-4">
                    {modes.map((mode, index) => (
                      <button
                        key={mode}
                        onClick={() => setCurrentMode(index)}
                        className={`px-6 py-4 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-base sm:text-lg min-w-[140px] ${
                          currentMode === index
                            ? 'bg-white text-black shadow-lg transform scale-105'
                            : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10 hover:scale-105'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                  
                  <button className="text-foreground/60 hover:text-foreground transition-colors hidden sm:block">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

