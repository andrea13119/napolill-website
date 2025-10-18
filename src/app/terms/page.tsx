'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

const importantPoints = [
  {
    icon: CheckCircle,
    title: 'Kostenlose Nutzung',
    description: 'Die Napolill App ist vollständig kostenlos und ohne versteckte Kosten.'
  },
  {
    icon: Scale,
    title: 'Transparente Bedingungen',
    description: 'Klare und verständliche Geschäftsbedingungen ohne juristische Fallstricke.'
  },
  {
    icon: AlertTriangle,
    title: 'Keine Haftung',
    description: 'Die App ersetzt keine professionelle medizinische oder psychologische Behandlung.'
  }
];

export default function TermsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-napolill-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Die Nutzungsbedingungen für die Napolill App - 
              einfach, fair und transparent.
            </p>

            <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Aktualisiert: Januar 2024
              </div>
              <div className="flex items-center">
                <Scale className="w-4 h-4 mr-2" />
                DSGVO-konform
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Fair & Transparent
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Points */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Das Wichtigste auf einen Blick
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Hier sind die wichtigsten Punkte unserer Geschäftsbedingungen 
              zusammengefasst.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {importantPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-napolill-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {point.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Geltungsbereich */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                1. Geltungsbereich
              </h2>
              <div className="bg-background p-6 rounded-lg border border-primary-teal/20">
                <p className="text-foreground/70 leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung 
                  der mobilen Applikation "Napolill" (im Folgenden "App") der 
                  Napolill GmbH (im Folgenden "Anbieter").
                </p>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  Mit der Installation und Nutzung der App akzeptierst du diese 
                  AGB in ihrer jeweils gültigen Fassung.
                </p>
              </div>
            </div>

            {/* Leistungen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                2. Leistungen des Anbieters
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  <strong>2.1 App-Funktionen:</strong><br />
                  Die Napolill App bietet folgende Hauptfunktionen:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>Aufnahme und Wiedergabe persönlicher Affirmationen</li>
                  <li>Nutzung wissenschaftlich validierter Solfeggio-Frequenzen</li>
                  <li>Mood-basierte Themes und Anpassungen</li>
                  <li>Fortschrittsverfolgung mit Badges und Statistiken</li>
                  <li>Lokale und Cloud-Speicherung von Daten</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  <strong>2.2 Kostenlose Nutzung:</strong><br />
                  Die grundlegenden App-Funktionen sind vollständig kostenlos. 
                  Es gibt keine versteckten Kosten, Abonnements oder In-App-Käufe.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>2.3 Verfügbarkeit:</strong><br />
                  Der Anbieter bemüht sich um eine hohe Verfügbarkeit der App, 
                  kann jedoch keine Garantie für eine unterbrechungsfreie Nutzung geben.
                </p>
              </div>
            </div>

            {/* Nutzerrechte und -pflichten */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                3. Nutzerrechte und -pflichten
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  <strong>3.1 Nutzungsrecht:</strong><br />
                  Du erhältst ein nicht-exklusives, nicht-übertragbares Recht 
                  zur Nutzung der App für persönliche, nicht-kommerzielle Zwecke.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>3.2 Nutzerpflichten:</strong><br />
                  Du verpflichtest dich:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>Die App nur für legale Zwecke zu nutzen</li>
                  <li>Keine schädlichen oder rechtswidrigen Inhalte zu erstellen</li>
                  <li>Die Rechte Dritter zu respektieren</li>
                  <li>Die App nicht zu kopieren, zu modifizieren oder zu reverse-engineeren</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  <strong>3.3 Altersbeschränkung:</strong><br />
                  Die App ist für Nutzer ab 16 Jahren bestimmt. Minderjährige 
                  sollten die App nur mit Zustimmung ihrer Erziehungsberechtigten nutzen.
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                4. Haftungsausschluss
              </h2>
              <div className="space-y-4">
                <div className="bg-accent-rose/10 p-6 rounded-lg border border-accent-rose/20">
                  <p className="text-accent-rose font-medium mb-2">
                    ⚠️ Wichtiger Hinweis:
                  </p>
                  <p className="text-foreground/70">
                    Napolill ist kein medizinisches Gerät oder Medikament und 
                    ersetzt keine professionelle medizinische, psychologische 
                    oder therapeutische Behandlung.
                  </p>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>4.1 Keine medizinische Beratung:</strong><br />
                  Die App dient ausschließlich als unterstützendes Wellness-Tool. 
                  Bei gesundheitlichen oder psychischen Problemen solltest du 
                  immer einen qualifizierten Arzt oder Therapeuten konsultieren.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>4.2 Haftungsbeschränkung:</strong><br />
                  Der Anbieter haftet nicht für:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>Schäden durch unsachgemäße Nutzung der App</li>
                  <li>Verluste von Daten durch technische Probleme</li>
                  <li>Auswirkungen der App-Nutzung auf Gesundheit oder Wohlbefinden</li>
                  <li>Indirekte oder Folgeschäden</li>
                </ul>
              </div>
            </div>

            {/* Datenschutz */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                5. Datenschutz
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Der Schutz deiner persönlichen Daten ist uns wichtig. 
                Ausführliche Informationen findest du in unserer 
                <Link href="/privacy" className="text-accent-rose hover:underline ml-1">
                  Datenschutzerklärung
                </Link>.
              </p>
              <div className="bg-background p-6 rounded-lg border border-primary-teal/20 mt-4">
                <p className="text-foreground/70 leading-relaxed">
                  <strong>Grundsätze:</strong><br />
                  • Minimale Datensammlung<br />
                  • Lokale Speicherung sensibler Daten<br />
                  • Keine Weitergabe an Dritte<br />
                  • DSGVO-konforme Verarbeitung
                </p>
              </div>
            </div>

            {/* Änderungen der AGB */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                6. Änderungen der AGB
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Der Anbieter behält sich das Recht vor, diese AGB jederzeit 
                zu ändern. Wesentliche Änderungen werden dir mindestens 30 Tage 
                vor Inkrafttreten mitgeteilt. Die fortgesetzte Nutzung der App 
                nach einer Änderung gilt als Zustimmung zu den neuen Bedingungen.
              </p>
            </div>

            {/* Schlussbestimmungen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                7. Schlussbestimmungen
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  <strong>7.1 Anwendbares Recht:</strong><br />
                  Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>7.2 Gerichtsstand:</strong><br />
                  Gerichtsstand ist der Sitz des Anbieters, sofern du 
                  Kaufmann, juristische Person des öffentlichen Rechts oder 
                  öffentlich-rechtliches Sondervermögen bist.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>7.3 Salvatorische Klausel:</strong><br />
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, 
                  bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>7.4 Kontakt:</strong><br />
                  Bei Fragen zu diesen AGB kannst du uns unter 
                  <a href="mailto:legal@napolill.com" className="text-accent-rose hover:underline">
                    legal@napolill.com
                  </a> kontaktieren.
                </p>
              </div>
            </div>

            {/* Stand */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                8. Stand
              </h2>
              <div className="bg-background p-6 rounded-lg border border-primary-teal/20">
                <p className="text-foreground/70 leading-relaxed">
                  Diese AGB gelten ab dem 1. Januar 2024.<br />
                  Stand: Januar 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fragen zu den AGB?
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Wenn du Fragen zu diesen Geschäftsbedingungen hast oder 
              rechtliche Beratung benötigst, kontaktiere uns gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-napolill-gradient text-white hover:opacity-90">
                <Scale className="w-5 h-5 mr-2" />
                Rechtliches kontaktieren
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                AGB herunterladen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
