'use client';

import { Shield, Lock, Eye, FileText, Edit3, Trash2, Download, Database } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { LegalHeroSection } from '@/components/sections/legal/LegalHeroSection';
import { LegalContentSection } from '@/components/sections/legal/LegalContentSection';

export default function PrivacyPage() {
  const heroInfo = [
    { icon: Shield, text: 'DSGVO-konform' },
    { icon: Lock, text: 'Verschlüsselt' },
    { icon: Eye, text: 'Transparent' }
  ];

  const contentSections = [
    {
      id: 'verantwortlicher',
      title: '1. Verantwortlicher',
      icon: FileText,
      content: (
        <div>
          <p className="mb-4">Verantwortlicher für die Datenverarbeitung gemäß Art. 4 Nr. 7 DSGVO:</p>
          <div className="bg-secondary-purple/10 p-6 rounded-lg">
            <p><strong>Napolill</strong></p>
            <p>Beispielstraße 123</p>
            <p>12345 Berlin, Deutschland</p>
            <p className="mt-4">
              <strong>E-Mail:</strong> <a href="mailto:datenschutz@napolill.com" className="text-primary-teal hover:underline">datenschutz@napolill.com</a>
            </p>
            <p><strong>Telefon:</strong> +49 (0) 30 12345678</p>
          </div>
        </div>
      )
    },
    {
      id: 'grundsaetze',
      title: '2. Datenschutz-Grundsätze',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>Wir setzen höchste Standards für den Schutz deiner Privatsphäre:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary-purple/10 p-6 rounded-lg">
              <div className="flex items-start space-x-3 mb-3">
                <Shield className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Minimale Datensammlung</h4>
                  <p className="text-sm">Wir sammeln nur die Daten, die für die Funktion der App notwendig sind.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary-purple/10 p-6 rounded-lg">
              <div className="flex items-start space-x-3 mb-3">
                <Lock className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">End-to-End Verschlüsselung</h4>
                  <p className="text-sm">Alle deine Daten werden verschlüsselt übertragen und gespeichert.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary-purple/10 p-6 rounded-lg">
              <div className="flex items-start space-x-3 mb-3">
                <Eye className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Keine Überwachung</h4>
                  <p className="text-sm">Wir überwachen oder verfolgen deine Aktivitäten nicht.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary-purple/10 p-6 rounded-lg">
              <div className="flex items-start space-x-3 mb-3">
                <Database className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Lokale Speicherung</h4>
                  <p className="text-sm">Deine Affirmationen werden primär lokal auf deinem Gerät gespeichert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'datensammlung',
      title: '3. Welche Daten wir sammeln',
      icon: Database,
      content: (
        <div className="space-y-4">
          <p>Wir sammeln nur die minimal notwendigen Daten für den Betrieb der App:</p>
          <ul className="space-y-3">
            <li className="bg-secondary-purple/10 p-4 rounded-lg">
              <strong className="text-primary-teal">App-Nutzungsdaten:</strong> Informationen über die Nutzung der App-Features zur Verbesserung der Benutzerfreundlichkeit. Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: Max. 2 Jahre.
            </li>
            <li className="bg-secondary-purple/10 p-4 rounded-lg">
              <strong className="text-primary-teal">Geräteinformationen:</strong> Technische Informationen über dein Gerät (Modell, Betriebssystem) für Kompatibilität und Performance-Optimierung. Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: Max. 1 Jahr.
            </li>
            <li className="bg-secondary-purple/10 p-4 rounded-lg">
              <strong className="text-primary-teal">Fehlerberichte:</strong> Automatisch generierte Berichte bei App-Abstürzen zur Behebung technischer Probleme. Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Speicherdauer: Max. 6 Monate.
            </li>
            <li className="bg-secondary-purple/10 p-4 rounded-lg">
              <strong className="text-primary-teal">Support-Anfragen:</strong> Informationen aus deinen Support-Kontakten zur Bearbeitung deiner Anfragen. Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Speicherdauer: Max. 3 Jahre.
            </li>
          </ul>
          <div className="bg-accent-rose/10 p-6 rounded-lg border-l-4 border-accent-rose mt-6">
            <p className="font-semibold text-lg mb-2">Wichtig:</p>
            <p>Deine Affirmationen und persönlichen Audio-Aufnahmen werden ausschließlich lokal auf deinem Gerät gespeichert und nicht an unsere Server übertragen.</p>
          </div>
        </div>
      )
    },
    {
      id: 'verwendung',
      title: '4. Wie wir deine Daten verwenden',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p>Wir verwenden deine Daten ausschließlich für:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bereitstellung und Verbesserung der App-Funktionen</li>
            <li>Technischen Support und Fehlerbehebung</li>
            <li>Sicherstellung der App-Sicherheit</li>
            <li>Einhaltung gesetzlicher Verpflichtungen</li>
            <li>Anonymisierte Statistiken zur App-Optimierung</li>
          </ul>
          <div className="bg-primary-teal/10 p-6 rounded-lg border-l-4 border-primary-teal mt-6">
            <p className="font-semibold text-lg mb-2">Unsere Verpflichtung:</p>
            <p>Wir verkaufen niemals deine Daten an Dritte und verwenden sie nicht für Werbezwecke. Deine Privatsphäre ist uns heilig.</p>
          </div>
        </div>
      )
    },
    {
      id: 'weitergabe',
      title: '5. Datenweitergabe an Dritte',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>Wir geben deine Daten nur in folgenden Fällen an Dritte weiter:</p>
          <div className="space-y-3">
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Cloud-Backup-Dienste (optional)</h4>
              <p className="text-sm">Wenn du das optionale Cloud-Backup aktivierst, werden deine Daten verschlüsselt an sichere Server übertragen. Du behältst die volle Kontrolle.</p>
            </div>
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Gesetzliche Verpflichtungen</h4>
              <p className="text-sm">Nur wenn wir rechtlich dazu verpflichtet sind (z.B. durch behördliche Anordnung).</p>
            </div>
          </div>
          <p className="mt-4 font-medium">Wir verwenden keine Tracking-Dienste von Drittanbietern und keine Werbenetzwerke.</p>
        </div>
      )
    },
    {
      id: 'rechte',
      title: '6. Deine Rechte',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>Du hast folgende Rechte bezüglich deiner Daten:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-primary-teal" />
                Recht auf Auskunft (Art. 15 DSGVO)
              </h4>
              <p className="text-sm">Erhalte Auskunft über alle von uns verarbeiteten Daten.</p>
            </div>
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Edit3 className="w-4 h-4 mr-2 text-primary-teal" />
                Recht auf Berichtigung (Art. 16 DSGVO)
              </h4>
              <p className="text-sm">Berichtige unrichtige oder vervollständige unvollständige Daten.</p>
            </div>
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Trash2 className="w-4 h-4 mr-2 text-primary-teal" />
                Recht auf Löschung (Art. 17 DSGVO)
              </h4>
              <p className="text-sm">Verlange die vollständige Löschung deiner personenbezogenen Daten.</p>
            </div>
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Download className="w-4 h-4 mr-2 text-primary-teal" />
                Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
              </h4>
              <p className="text-sm">Exportiere deine Daten in einem strukturierten, gängigen Format.</p>
            </div>
          </div>
          <p className="mt-6">Weitere Rechte: Widerspruch gegen Datenverarbeitung (Art. 21 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Beschwerde bei Aufsichtsbehörde (Art. 77 DSGVO).</p>
        </div>
      )
    },
    {
      id: 'sicherheit',
      title: '7. Datensicherheit',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>Wir setzen modernste Sicherheitsmaßnahmen ein:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>End-to-End Verschlüsselung:</strong> Alle Datenübertragungen sind verschlüsselt (TLS 1.3)</li>
            <li><strong>Lokale Speicherung:</strong> Sensible Daten werden primär auf deinem Gerät gespeichert</li>
            <li><strong>Sichere Server:</strong> ISO 27001 zertifizierte Rechenzentren in Deutschland</li>
            <li><strong>Regelmäßige Security-Audits:</strong> Externe Sicherheitsprüfungen</li>
            <li><strong>Datenschutz by Design:</strong> Datenschutz ist von Anfang an integriert</li>
          </ul>
        </div>
      )
    },
    {
      id: 'kontakt',
      title: '8. Kontakt & Anfragen',
      icon: FileText,
      content: (
        <div>
          <p className="mb-4">Für Fragen zum Datenschutz oder zur Ausübung deiner Rechte kontaktiere uns:</p>
          <div className="bg-secondary-purple/10 p-6 rounded-lg">
            <p><strong>Datenschutzbeauftragter:</strong></p>
            <p className="mt-2"><strong>E-Mail:</strong> <a href="mailto:datenschutz@napolill.com" className="text-primary-teal hover:underline">datenschutz@napolill.com</a></p>
            <p><strong>Telefon:</strong> +49 (0) 30 12345678</p>
            <p className="mt-4 text-sm"><strong>Antwortzeit:</strong> Innerhalb von 48 Stunden</p>
          </div>
          <p className="mt-6 text-sm">Bei Beschwerden kannst du dich auch an die zuständige Datenschutz-Aufsichtsbehörde wenden.</p>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <LegalHeroSection 
        title="Datenschutzerklärung"
        description="Dein Datenschutz ist uns wichtig. Hier erfährst du, wie wir deine Daten schützen und verarbeiten."
        infoItems={heroInfo}
      />
      <LegalContentSection 
        sections={contentSections}
        lastUpdated="15. Januar 2024"
      />
    </Layout>
  );
}
