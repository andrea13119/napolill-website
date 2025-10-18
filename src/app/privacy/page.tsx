'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/Layout';
import Link from 'next/link';

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Minimale Datensammlung',
    description: 'Wir sammeln nur die Daten, die für die Funktion der App notwendig sind.'
  },
  {
    icon: Lock,
    title: 'End-to-End Verschlüsselung',
    description: 'Alle deine Daten werden verschlüsselt übertragen und gespeichert.'
  },
  {
    icon: Eye,
    title: 'Keine Überwachung',
    description: 'Wir überwachen oder verfolgen deine Aktivitäten nicht.'
  },
  {
    icon: Database,
    title: 'Lokale Speicherung',
    description: 'Deine Affirmationen werden primär lokal auf deinem Gerät gespeichert.'
  }
];

const dataTypes = [
  {
    category: 'App-Nutzungsdaten',
    description: 'Informationen über die Nutzung der App-Features',
    purpose: 'Verbesserung der App-Funktionen und Benutzerfreundlichkeit',
    legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
    retention: 'Maximal 2 Jahre'
  },
  {
    category: 'Geräteinformationen',
    description: 'Technische Informationen über dein Gerät (Modell, Betriebssystem)',
    purpose: 'Kompatibilität und Performance-Optimierung',
    legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
    retention: 'Maximal 1 Jahr'
  },
  {
    category: 'Fehlerberichte',
    description: 'Automatisch generierte Berichte bei App-Abstürzen',
    purpose: 'Behebung von technischen Problemen',
    legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
    retention: 'Maximal 6 Monate'
  },
  {
    category: 'Support-Anfragen',
    description: 'Informationen aus deinen Support-Kontakten',
    purpose: 'Bearbeitung deiner Anfragen und Bereitstellung von Support',
    legalBasis: 'Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)',
    retention: 'Maximal 3 Jahre'
  }
];

export default function PrivacyPage() {
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
              Datenschutzerklärung
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Dein Datenschutz ist uns wichtig. Hier erfährst du, wie wir 
              deine Daten schützen und verarbeiten.
            </p>

            <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                DSGVO-konform
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Verschlüsselt
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Transparent
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Unsere Datenschutz-Grundsätze
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Wir setzen höchste Standards für den Schutz deiner Privatsphäre 
              und die Sicherheit deiner Daten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-napolill-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {principle.description}
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
            {/* Verantwortlicher */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                1. Verantwortlicher
              </h2>
              <div className="bg-background p-6 rounded-lg border border-primary-teal/20">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  <strong>Verantwortlicher für die Datenverarbeitung:</strong>
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Napolill GmbH<br />
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland<br />
                  <br />
                  E-Mail: privacy@napolill.com<br />
                  Telefon: +49 123 456 789
                </p>
              </div>
            </div>

            {/* Datenschutzbeauftragter */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                2. Datenschutzbeauftragter
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Unser Datenschutzbeauftragter ist unter folgender Adresse erreichbar:
              </p>
              <div className="bg-background p-6 rounded-lg border border-primary-teal/20 mt-4">
                <p className="text-foreground/70 leading-relaxed">
                  Datenschutzbeauftragter<br />
                  Napolill GmbH<br />
                  E-Mail: datenschutz@napolill.com
                </p>
              </div>
            </div>

            {/* Allgemeine Hinweise zur Datenverarbeitung */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                3. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  <strong>Umfang der Verarbeitung personenbezogener Daten:</strong><br />
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, 
                  soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer 
                  Inhalte und Leistungen erforderlich ist.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong>Rechtsgrundlage für die Verarbeitung:</strong><br />
                  Art. 6 Abs. 1 lit. b DSGVO dient uns als Rechtsgrundlage für 
                  Verarbeitungsvorgänge, bei denen wir eine Erfüllung eines Vertrages 
                  vorbereiten oder durchführen.
                </p>
              </div>
            </div>

            {/* Datenerhebung und -verwendung */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                4. Datenerhebung und -verwendung in der App
              </h2>
              <div className="space-y-6">
                <p className="text-foreground/70 leading-relaxed">
                  Die Napolill App ist darauf ausgelegt, deine Privatsphäre zu schützen. 
                  Wir sammeln nur die minimal notwendigen Daten für die Funktionalität der App.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-primary-teal/20">
                    <thead>
                      <tr className="bg-primary-teal/10">
                        <th className="border border-primary-teal/20 p-4 text-left text-foreground font-semibold">
                          Datentyp
                        </th>
                        <th className="border border-primary-teal/20 p-4 text-left text-foreground font-semibold">
                          Zweck
                        </th>
                        <th className="border border-primary-teal/20 p-4 text-left text-foreground font-semibold">
                          Rechtsgrundlage
                        </th>
                        <th className="border border-primary-teal/20 p-4 text-left text-foreground font-semibold">
                          Speicherdauer
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTypes.map((dataType, index) => (
                        <tr key={index} className="hover:bg-primary-teal/5">
                          <td className="border border-primary-teal/20 p-4 text-foreground/70">
                            <strong>{dataType.category}</strong><br />
                            <span className="text-sm">{dataType.description}</span>
                          </td>
                          <td className="border border-primary-teal/20 p-4 text-foreground/70">
                            {dataType.purpose}
                          </td>
                          <td className="border border-primary-teal/20 p-4 text-foreground/70">
                            {dataType.legalBasis}
                          </td>
                          <td className="border border-primary-teal/20 p-4 text-foreground/70">
                            {dataType.retention}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Deine Rechte */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                5. Deine Rechte
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Recht auf Auskunft (Art. 15 DSGVO)</h3>
                    <p className="text-foreground/70 text-sm">
                      Du hast das Recht, Auskunft über die von uns verarbeiteten 
                      personenbezogenen Daten zu verlangen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                    <p className="text-foreground/70 text-sm">
                      Du hast das Recht auf Berichtigung unrichtiger oder 
                      Vervollständigung unvollständiger Daten.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Recht auf Löschung (Art. 17 DSGVO)</h3>
                    <p className="text-foreground/70 text-sm">
                      Du hast das Recht, die Löschung deiner personenbezogenen 
                      Daten zu verlangen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-rose mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                    <p className="text-foreground/70 text-sm">
                      Du hast das Recht, deine Daten in einem strukturierten, 
                      gängigen Format zu erhalten.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies und Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                6. Cookies und Tracking
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  Die Napolill App verwendet keine Tracking-Cookies oder andere 
                  Tracking-Technologien. Wir respektieren deine Privatsphäre und 
                  sammeln keine Daten über deine Aktivitäten außerhalb der App.
                </p>
                <div className="bg-accent-rose/10 p-4 rounded-lg">
                  <p className="text-accent-rose font-medium">
                    ✅ Keine Werbe-Cookies<br />
                    ✅ Keine Tracking-Pixel<br />
                    ✅ Keine Drittanbieter-Analytics<br />
                    ✅ Keine Social Media Plugins
                  </p>
                </div>
              </div>
            </div>

            {/* Datensicherheit */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                7. Datensicherheit
              </h2>
              <div className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  Wir verwenden geeignete technische und organisatorische 
                  Sicherheitsmaßnahmen, um deine Daten gegen zufällige oder 
                  vorsätzliche Manipulationen, teilweisen oder vollständigen 
                  Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter 
                  zu schützen.
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                  <li>End-to-End Verschlüsselung aller Datenübertragungen</li>
                  <li>Lokale Speicherung sensibler Daten auf deinem Gerät</li>
                  <li>Regelmäßige Sicherheitsupdates und Penetrationstests</li>
                  <li>Zugriffskontrolle und Authentifizierung</li>
                  <li>Regelmäßige Backups mit Verschlüsselung</li>
                </ul>
              </div>
            </div>

            {/* Aktualität und Änderung dieser Datenschutzerklärung */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                8. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 
                Januar 2024. Durch die Weiterentwicklung unserer App und 
                Angebote oder aufgrund geänderter gesetzlicher beziehungsweise 
                behördlicher Vorgaben kann es notwendig werden, diese 
                Datenschutzerklärung zu ändern.
              </p>
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
              Fragen zum Datenschutz?
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Wenn du Fragen zu dieser Datenschutzerklärung hast oder deine 
              Datenschutzrechte ausüben möchtest, kontaktiere uns gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-napolill-gradient text-white hover:opacity-90">
                <Shield className="w-5 h-5 mr-2" />
                Datenschutz kontaktieren
              </Button>
              <Button variant="outline" size="lg">
                <Eye className="w-5 h-5 mr-2" />
                Meine Daten anfordern
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
