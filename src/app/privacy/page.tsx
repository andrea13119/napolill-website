'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  ArrowLeft, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  FileText,
  Users,
  Settings,
  AlertTriangle,
  Download,
  Trash2,
  Edit3
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
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
    retention: 'Maximal 2 Jahre',
    icon: Settings
  },
  {
    category: 'Geräteinformationen',
    description: 'Technische Informationen über dein Gerät (Modell, Betriebssystem)',
    purpose: 'Kompatibilität und Performance-Optimierung',
    legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
    retention: 'Maximal 1 Jahr',
    icon: Settings
  },
  {
    category: 'Fehlerberichte',
    description: 'Automatisch generierte Berichte bei App-Abstürzen',
    purpose: 'Behebung von technischen Problemen',
    legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
    retention: 'Maximal 6 Monate',
    icon: AlertTriangle
  },
  {
    category: 'Support-Anfragen',
    description: 'Informationen aus deinen Support-Kontakten',
    purpose: 'Bearbeitung deiner Anfragen und Bereitstellung von Support',
    legalBasis: 'Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)',
    retention: 'Maximal 3 Jahre',
    icon: Users
  }
];

const userRights = [
  {
    title: 'Recht auf Auskunft',
    article: 'Art. 15 DSGVO',
    description: 'Du hast das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.',
    icon: FileText
  },
  {
    title: 'Recht auf Berichtigung',
    article: 'Art. 16 DSGVO',
    description: 'Du hast das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.',
    icon: Edit3
  },
  {
    title: 'Recht auf Löschung',
    article: 'Art. 17 DSGVO',
    description: 'Du hast das Recht, die Löschung deiner personenbezogenen Daten zu verlangen.',
    icon: Trash2
  },
  {
    title: 'Recht auf Datenübertragbarkeit',
    article: 'Art. 20 DSGVO',
    description: 'Du hast das Recht, deine Daten in einem strukturierten, gängigen Format zu erhalten.',
    icon: Download
  }
];

export default function PrivacyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center flex flex-col items-center justify-center min-h-[50vh]"
            >
              <Link href="/" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Startseite
              </Link>
              
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                Datenschutzerklärung
              </h1>

              <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
                Dein Datenschutz ist uns wichtig. Hier erfährst du, wie wir 
                deine Daten schützen und verarbeiten.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-foreground/70 text-sm">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 mr-2" />
                  DSGVO-konform
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Lock className="w-5 h-5 mr-2" />
                  Verschlüsselt
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Eye className="w-5 h-5 mr-2" />
                  Transparent
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Unsere Datenschutz-Grundsätze
            </h2>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
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
              >
                <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-primary-teal/20">
                  <div className="w-24 h-24 bg-icon-gradient rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-12 h-12 text-[var(--icon-color)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {principle.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {principle.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-secondary-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-32"
          >
            {/* Verantwortlicher */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  1. Verantwortlicher
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Verantwortlicher für die Datenverarbeitung
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <Card className="p-12 border-2 border-primary-teal/20 bg-background/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    <div className="w-full lg:w-auto flex-shrink-0">
                      <div className="w-24 h-24 bg-icon-gradient rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                        <Users className="w-12 h-12 text-[var(--icon-color)]" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-6">Napolill GmbH</h3>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                          Als verantwortlicher Anbieter der Napolill App verarbeiten wir deine Daten 
                          nach höchsten Datenschutzstandards und in Übereinstimmung mit der DSGVO.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary-teal" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Adresse</h4>
                            <p className="text-foreground/70 leading-relaxed">
                              Musterstraße 123<br />
                              12345 Musterstadt<br />
                              Deutschland
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary-teal" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">E-Mail</h4>
                            <p className="text-foreground/70 leading-relaxed">
                              privacy@napolill.com
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-primary-teal" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Telefon</h4>
                            <p className="text-foreground/70 leading-relaxed">
                              +49 123 456 789
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Datenschutzbeauftragter */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  2. Datenschutzbeauftragter
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Unser Datenschutzbeauftragter ist unter folgender Adresse erreichbar
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <Card className="p-12 border-2 border-primary-teal/20 bg-background/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    <div className="w-full lg:w-auto flex-shrink-0">
                      <div className="w-24 h-24 bg-icon-gradient rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                        <Shield className="w-12 h-12 text-[var(--icon-color)]" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-6">Datenschutzbeauftragter</h3>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                          Unser Datenschutzbeauftragter steht dir bei allen Fragen zum Datenschutz 
                          und der Ausübung deiner Rechte zur Verfügung.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary-teal" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Unternehmen</h4>
                            <p className="text-foreground/70 leading-relaxed">
                              Napolill GmbH
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary-teal" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">E-Mail</h4>
                            <p className="text-foreground/70 leading-relaxed">
                              datenschutz@napolill.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Allgemeine Hinweise zur Datenverarbeitung */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  3. Allgemeine Hinweise zur Datenverarbeitung
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Grundsätze unserer Datenverarbeitung
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <Card className="p-10 border-2 border-primary-teal/20 bg-background/50 backdrop-blur-sm h-full">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center">
                      <Database className="w-8 h-8 text-[var(--icon-color)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Umfang der Verarbeitung
                      </h3>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, 
                        soweit dies zur Bereitstellung einer funktionsfähigen App sowie unserer 
                        Inhalte und Leistungen erforderlich ist. Dabei halten wir uns an das 
                        Prinzip der Datenminimierung.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-10 border-2 border-primary-teal/20 bg-background/50 backdrop-blur-sm h-full">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[var(--icon-color)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Rechtsgrundlage
                      </h3>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Art. 6 Abs. 1 lit. b DSGVO dient uns als Rechtsgrundlage für 
                        Verarbeitungsvorgänge, bei denen wir eine Erfüllung eines Vertrages 
                        vorbereiten oder durchführen. Zusätzlich nutzen wir berechtigte 
                        Interessen nach Art. 6 Abs. 1 lit. f DSGVO.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Datenerhebung und -verwendung */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  4. Datenerhebung und -verwendung in der App
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Die Napolill App ist darauf ausgelegt, deine Privatsphäre zu schützen. 
                  Wir sammeln nur die minimal notwendigen Daten für die Funktionalität der App.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {dataTypes.map((dataType, index) => (
                  <Card key={index} className="p-8 border-2 border-primary-teal/20 hover:border-primary-teal/40 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                          <dataType.icon className="w-8 h-8 text-[var(--icon-color)]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {dataType.category}
                          </h3>
                          <p className="text-lg text-foreground/70 leading-relaxed">
                            {dataType.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-4 border-t border-primary-teal/10">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Zweck</h4>
                          <p className="text-foreground/70 leading-relaxed">{dataType.purpose}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Rechtsgrundlage</h4>
                          <p className="text-foreground/70 leading-relaxed">{dataType.legalBasis}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary-teal" />
                          <h4 className="text-lg font-semibold text-foreground">Speicherdauer:</h4>
                          <span className="text-foreground/70">{dataType.retention}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deine Rechte */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  5. Deine Rechte
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Als Nutzer der Napolill App hast du verschiedene Rechte bezüglich deiner personenbezogenen Daten
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {userRights.map((right, index) => (
                  <Card key={index} className="p-8 border-2 border-accent-rose/20 hover:border-accent-rose/40 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-accent-rose/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <right.icon className="w-8 h-8 text-accent-rose" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-2xl font-bold text-foreground">
                              {right.title}
                            </h3>
                            <span className="text-sm font-medium text-accent-rose bg-accent-rose/10 px-3 py-1 rounded-full">
                              {right.article}
                            </span>
                          </div>
                          <p className="text-lg text-foreground/70 leading-relaxed">
                            {right.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cookies und Tracking */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  6. Cookies und Tracking
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Wir respektieren deine Privatsphäre und verwenden keine Tracking-Technologien
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <Card className="p-12 border-2 border-accent-rose/20 bg-background/50 backdrop-blur-sm">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-accent-rose/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Eye className="w-12 h-12 text-accent-rose" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-6">
                        Keine Tracking-Technologien
                      </h3>
                      <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                        Die Napolill App verwendet keine Tracking-Cookies oder andere 
                        Tracking-Technologien. Wir respektieren deine Privatsphäre und 
                        sammeln keine Daten über deine Aktivitäten außerhalb der App.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                      {[
                        'Keine Werbe-Cookies',
                        'Keine Tracking-Pixel', 
                        'Keine Drittanbieter-Analytics',
                        'Keine Social Media Plugins'
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 text-accent-rose">
                          <CheckCircle className="w-8 h-8" />
                          <span className="text-sm font-medium text-center">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Datensicherheit */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  7. Datensicherheit
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Wir verwenden höchste Sicherheitsstandards zum Schutz deiner Daten
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <Card className="p-12 border-2 border-primary-teal/20 bg-background/50 backdrop-blur-sm">
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-icon-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Shield className="w-12 h-12 text-[var(--icon-color)]" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-6">
                        Umfassende Sicherheitsmaßnahmen
                      </h3>
                      <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                        Wir verwenden geeignete technische und organisatorische 
                        Sicherheitsmaßnahmen, um deine Daten gegen zufällige oder 
                        vorsätzliche Manipulationen, teilweisen oder vollständigen 
                        Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter 
                        zu schützen.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                      {[
                        'End-to-End Verschlüsselung aller Datenübertragungen',
                        'Lokale Speicherung sensibler Daten auf deinem Gerät',
                        'Regelmäßige Sicherheitsupdates und Penetrationstests',
                        'Zugriffskontrolle und Authentifizierung',
                        'Regelmäßige Backups mit Verschlüsselung'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <CheckCircle className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                          <span className="text-lg text-foreground/70 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Aktualität und Änderung dieser Datenschutzerklärung */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                  8. Aktualität und Änderung
                </h2>
                <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2024
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <Card className="p-12 border-2 border-primary-teal/20 bg-background/50 backdrop-blur-sm">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-icon-gradient rounded-xl flex items-center justify-center mx-auto">
                      <FileText className="w-10 h-10 text-[var(--icon-color)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Aktualisierungen der Datenschutzerklärung
                    </h3>
                    <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                      Durch die Weiterentwicklung unserer App und 
                      Angebote oder aufgrund geänderter gesetzlicher beziehungsweise 
                      behördlicher Vorgaben kann es notwendig werden, diese 
                      Datenschutzerklärung zu ändern. Wir informieren dich über 
                      wesentliche Änderungen rechtzeitig.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Fragen zum Datenschutz?
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Wenn du Fragen zu dieser Datenschutzerklärung hast oder deine 
                Datenschutzrechte ausüben möchtest, kontaktiere uns gerne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 border-2 border-primary-teal/20 hover:border-primary-teal/40 transition-colors group">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-icon-gradient rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-[var(--icon-color)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Datenschutz kontaktieren
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Hast du Fragen zu unserer Datenschutzerklärung oder möchtest du 
                    mehr über unsere Datenschutzpraktiken erfahren?
                  </p>
                  <Button size="lg" className="w-full bg-napolill-gradient text-white hover:opacity-90">
                    <Mail className="w-5 h-5 mr-2" />
                    E-Mail senden
                  </Button>
                </div>
              </Card>
              
              <Card className="p-8 border-2 border-accent-rose/20 hover:border-accent-rose/40 transition-colors group">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent-rose/20 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-accent-rose" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Meine Daten anfordern
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Du möchtest wissen, welche Daten wir über dich gespeichert haben? 
                    Fordere eine Kopie deiner Daten an.
                  </p>
                  <Button variant="outline" size="lg" className="w-full border-accent-rose/40 text-accent-rose hover:bg-accent-rose/10">
                    <Download className="w-5 h-5 mr-2" />
                    Daten anfordern
                  </Button>
                </div>
              </Card>
            </div>
            
            <div className="pt-8 border-t border-primary-teal/20">
              <p className="text-foreground/60 text-sm">
                Letzte Aktualisierung: Januar 2024 | 
                <Link href="/terms" className="text-primary-teal hover:underline ml-1">
                  Nutzungsbedingungen
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
