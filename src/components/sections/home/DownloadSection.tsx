'use client';

import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function DownloadSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Ergebnisse jederzeit, überall
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-12">
            Verfügbar im Web, für iOS, Android und auf dem Desktop.
          </p>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Button className="bg-card-bg hover:bg-card-bg/70 text-foreground font-semibold px-6 py-4 rounded-2xl border border-card-border">
              <Smartphone className="w-5 h-5 mr-2" />
              Download on the App Store
            </Button>
            <Button className="bg-card-bg hover:bg-card-bg/70 text-foreground font-semibold px-6 py-4 rounded-2xl border border-card-border">
              <Smartphone className="w-5 h-5 mr-2" />
              GET IT ON Google Play
            </Button>
            <Button className="bg-card-bg hover:bg-card-bg/70 text-foreground font-semibold px-6 py-4 rounded-2xl border border-card-border">
              <div className="w-5 h-5 mr-2 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">N</span>
              </div>
              USE US ON THE WEB
            </Button>
            <Button className="bg-card-bg hover:bg-card-bg/70 text-foreground font-semibold px-6 py-4 rounded-2xl border border-card-border">
              <div className="w-5 h-5 mr-2 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">N</span>
              </div>
              Download for Desktop
            </Button>
          </div>

          {/* Device Mockups Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8"
          >
            <div className="w-32 h-48 bg-card-bg/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-foreground/60 mx-auto mb-2" />
                <p className="text-foreground/60 text-xs">Mobile</p>
              </div>
            </div>
            <div className="w-48 h-32 bg-card-bg/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-white/20 rounded mx-auto mb-2"></div>
                <p className="text-foreground/60 text-xs">Desktop</p>
              </div>
            </div>
            <div className="w-40 h-32 bg-card-bg/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 bg-white/20 rounded mx-auto mb-2"></div>
                <p className="text-foreground/60 text-xs">Tablet</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

