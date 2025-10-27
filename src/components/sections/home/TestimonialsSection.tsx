'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

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

export function TestimonialsSection() {
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
            Sieh, was unsere Nutzer sagen
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Nutzer von Napolill holen jeden Tag das Beste aus sich heraus. Sieh dir an, was sie zu sagen haben!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-foreground/60 text-sm uppercase tracking-wider mb-8">FEATURED IN</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-foreground/40 text-lg font-semibold">TechCrunch</div>
            <div className="text-foreground/40 text-lg font-semibold">Forbes</div>
            <div className="text-foreground/40 text-lg font-semibold">Wired</div>
            <div className="text-foreground/40 text-lg font-semibold">The Verge</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card-bg border-card-border p-6 hover:bg-card-bg/70 transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-foreground font-semibold">{testimonial.name}</span>
                        {testimonial.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-foreground text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <span className="text-gray-400 text-sm">{testimonial.handle}</span>
                    </div>
                  </div>
                  <p className="text-foreground/90 leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

