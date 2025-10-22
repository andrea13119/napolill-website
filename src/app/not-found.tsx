'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* 404 Number */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-8xl md:text-9xl font-bold bg-napolill-gradient bg-clip-text text-transparent"
              >
                404
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-rose rounded-full flex items-center justify-center"
              >
                <span className="text-white text-sm">!</span>
              </motion.div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Seite nicht gefunden
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Entschuldigung, die Seite, die du suchst, existiert nicht oder 
                wurde verschoben. Lass uns dich zurück auf den richtigen Weg bringen.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-napolill-gradient text-white hover:opacity-90 w-full sm:w-auto"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Zur Startseite
                </Button>
              </Link>
              
              <Button
                onClick={() => window.history.back()}
                size="lg"
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Zurück
              </Button>
            </div>

            {/* Popular Links */}
            <div className="bg-secondary-purple/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Beliebte Seiten:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link 
                  href="/app" 
                  className="flex items-center p-3 bg-background rounded-lg hover:bg-primary-teal/10 transition-colors"
                >
                  <Search className="w-5 h-5 mr-3 text-accent-rose" />
                  <span className="text-foreground">App Features</span>
                </Link>
                <Link 
                  href="/science" 
                  className="flex items-center p-3 bg-background rounded-lg hover:bg-primary-teal/10 transition-colors"
                >
                  <Search className="w-5 h-5 mr-3 text-accent-rose" />
                  <span className="text-foreground">Wissenschaft</span>
                </Link>
                <Link 
                  href="/demo" 
                  className="flex items-center p-3 bg-background rounded-lg hover:bg-primary-teal/10 transition-colors"
                >
                  <Search className="w-5 h-5 mr-3 text-accent-rose" />
                  <span className="text-foreground">Demo</span>
                </Link>
                <Link 
                  href="/faq" 
                  className="flex items-center p-3 bg-background rounded-lg hover:bg-primary-teal/10 transition-colors"
                >
                  <Search className="w-5 h-5 mr-3 text-accent-rose" />
                  <span className="text-foreground">FAQ</span>
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="text-foreground/60 mb-4">
                Kannst du die gesuchte Seite immer noch nicht finden?
              </p>
              <Link 
                href="/support" 
                className="text-accent-rose hover:underline font-medium"
              >
                Kontaktiere unseren Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
