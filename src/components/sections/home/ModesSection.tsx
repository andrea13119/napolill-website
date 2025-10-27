'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function ModesSection() {
  return (
    <section className="relative py-32 z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Modi für jede Aufgabe
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
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
                <Card className="bg-card-bg border-card-border p-4 hover:bg-card-bg/70 transition-all duration-300">
                  <div className="aspect-video bg-card-bg/50 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Play className="w-6 h-6 text-foreground ml-0.5" />
                      </div>
                      <p className="text-foreground/60 text-sm">App Video {num}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                      <div>
                        <p className="text-foreground font-semibold">Nutzer {num}</p>
                        <p className="text-gray-400 text-sm">@nutzer_{num}</p>
                      </div>
                    </div>
                    <p className="text-foreground/90 text-sm">
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
              <p className="text-foreground/90 font-medium">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

