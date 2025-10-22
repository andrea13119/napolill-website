'use client';

import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Home, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

export default function OfflinePage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  const checkConnection = () => {
    if (navigator.onLine) {
      window.location.reload();
    } else {
      // You could show a toast or notification here
      alert('Keine Internetverbindung verfügbar. Bitte überprüfe deine Verbindung.');
    }
  };

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
            {/* Icon */}
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
              <WifiOff className="w-16 h-16 text-white" />
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Offline
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Es scheint, als hättest du keine Internetverbindung. 
                Überprüfe deine Verbindung und versuche es erneut.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleRefresh}
                size="lg"
                className="bg-napolill-gradient text-white hover:opacity-90"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Seite neu laden
              </Button>
              
              <Button
                onClick={checkConnection}
                size="lg"
              >
                <Wifi className="w-5 h-5 mr-2" />
                Verbindung prüfen
              </Button>
              
              <Link href="/">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Zur Startseite
                </Button>
              </Link>
            </div>

            {/* Tips */}
            <div className="bg-secondary-purple/10 rounded-lg p-6 text-left">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                💡 Tipps zur Fehlerbehebung:
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Überprüfe deine Internetverbindung</li>
                <li>• Versuche, andere Websites zu besuchen</li>
                <li>• Starte deinen Router oder Modem neu</li>
                <li>• Überprüfe deine Firewall- oder Antivirus-Einstellungen</li>
                <li>• Kontaktiere deinen Internetanbieter, falls das Problem weiterhin besteht</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="text-foreground/60 mb-4">
                Benötigst du Hilfe?
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
