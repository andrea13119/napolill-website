'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AppDownloadSection() {
  return (
    <section className="py-20 bg-napolill-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bereit für die Transformation?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
            Lade die Napolill App jetzt herunter und beginne deine Reise zur 
            positiven Veränderung und Gehirn-Reprogrammierung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d">
              <Download className="w-5 h-5 mr-2" />
              Für iOS herunterladen
            </Button>
            <Button size="lg" className="bg-gray-900 text-white hover:opacity-90 modern-button-3d">
              <Download className="w-5 h-5 mr-2" />
              Für Android herunterladen
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-foreground/60 text-sm">
            <div className="flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              <span>Kostenloser Download</span>
            </div>
            <div className="flex items-center">
              <span>✨</span>
              <span className="ml-2">Premium Features</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

