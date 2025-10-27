'use client';

import { motion } from 'framer-motion';

export function ProductivitySection() {
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
            Napolill steigert produktive Stunden pro Woche
          </h2>
        </motion.div>

        {/* Productivity Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card-bg rounded-3xl p-12 border border-card-border"
        >
          <div className="flex items-end justify-center space-x-16 mb-8">
            {/* Without Napolill */}
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">30</div>
              <div className="text-foreground/60 text-sm mb-4">STUNDEN</div>
              <div className="w-16 h-32 bg-gray-700 rounded-t-lg mb-4"></div>
              <div className="text-foreground/60 text-sm">OHNE NAPOLILL</div>
            </div>
            
            {/* With Napolill */}
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">52</div>
              <div className="text-foreground/60 text-sm mb-4">STUNDEN</div>
              <div className="w-16 h-48 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg mb-4"></div>
              <div className="text-foreground/60 text-sm">MIT NAPOLILL</div>
            </div>
          </div>
          
          {/* Gradient Line */}
          <div className="relative">
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="absolute right-0 top-0 transform -translate-y-2">
              <div className="bg-red-500 text-foreground px-3 py-1 rounded-full text-sm font-bold">
                +73%
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

