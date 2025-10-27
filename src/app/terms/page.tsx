'use client';

import { FileText, Scale, CheckCircle, AlertTriangle, Users, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { LegalHeroSection } from '@/components/sections/legal/LegalHeroSection';
import { LegalContentSection } from '@/components/sections/legal/LegalContentSection';

export default function TermsPage() {
  const heroInfo = [
    { icon: CheckCircle, text: 'Kostenlose Nutzung' },
    { icon: Scale, text: 'Transparente Bedingungen' },
    { icon: Shield, text: 'Faire Regelungen' }
  ];

  const contentSections = [
    {
      id: 'geltungsbereich',
      title: '1. Geltungsbereich',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Napolill App und aller damit verbundenen Dienste.</p>
          <div className="bg-secondary-purple/10 p-6 rounded-lg">
            <p className="mb-3"><strong>Anbieter:</strong></p>
            <p>Napolill</p>
            <p>Beispielstraße 123</p>
            <p>12345 Berlin, Deutschland</p>
            <p className="mt-3"><strong>E-Mail:</strong> <a href="mailto:info@napolill.com" className="text-primary-teal hover:underline">info@napolill.com</a></p>
          </div>
          <p className="mt-4">Mit der Installation und Nutzung der App akzeptierst du diese AGB. Wenn du mit den Bedingungen nicht einverstanden bist, darfst du die App nicht nutzen.</p>
        </div>
      )
    },
    {
      id: 'nutzung',
      title: '2. Nutzung der App',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">2.1 Kostenlose Nutzung</h4>
          <p>Die Napolill App ist vollständig kostenlos und ohne versteckte Kosten nutzbar. Es gibt keine In-App-Käufe oder Abonnements.</p>
          
          <h4 className="font-semibold text-lg mt-6">2.2 Nutzerverantwortung</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Du bist für die ordnungsgemäße Nutzung der App verantwortlich</li>
            <li>Die Nutzung erfolgt auf eigene Gefahr</li>
            <li>Du verpflichtest dich, die App nicht missbräuchlich zu verwenden</li>
            <li>Das Reverse Engineering oder die Dekompilierung der App ist untersagt</li>
          </ul>

          <h4 className="font-semibold text-lg mt-6">2.3 Altersbeschränkung</h4>
          <p>Die App ist für Nutzer ab 16 Jahren konzipiert. Für Minderjährige empfehlen wir die Nutzung unter Aufsicht eines Erwachsenen.</p>
        </div>
      )
    },
    {
      id: 'funktionen',
      title: '3. App-Funktionen',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>Die Napolill App bietet folgende Funktionen:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aufnahme und Wiedergabe persönlicher Affirmationen</li>
            <li>Nutzung wissenschaftlich belegter Solfeggio-Frequenzen</li>
            <li>Mood-basierte Themen-Anpassung</li>
            <li>Fortschrittsverfolgung und Badges</li>
            <li>Optionales Cloud-Backup (verschlüsselt)</li>
          </ul>
          <div className="bg-primary-teal/10 p-6 rounded-lg border-l-4 border-primary-teal mt-6">
            <p className="font-semibold mb-2">Funktionsgarantie:</p>
            <p className="text-sm">Wir bemühen uns, die App jederzeit verfügbar zu halten, können jedoch keine 100%ige Verfügbarkeit garantieren. Wartungsarbeiten werden rechtzeitig angekündigt.</p>
          </div>
        </div>
      )
    },
    {
      id: 'haftung',
      title: '4. Haftungsausschluss',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <div className="bg-accent-rose/10 p-6 rounded-lg border-l-4 border-accent-rose">
            <p className="font-semibold text-lg mb-3">Wichtiger Hinweis:</p>
            <p className="mb-2"><strong>Napolill ist kein medizinisches Gerät und ersetzt keine professionelle medizinische oder psychologische Behandlung.</strong></p>
          </div>

          <h4 className="font-semibold text-lg mt-6">4.1 Keine Gesundheitsberatung</h4>
          <p>Die App dient als unterstützendes Wellness-Tool. Bei gesundheitlichen Problemen konsultiere immer einen qualifizierten Arzt oder Therapeuten.</p>

          <h4 className="font-semibold text-lg mt-6">4.2 Haftungsbeschränkung</h4>
          <p>Wir haften nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig.</p>

          <h4 className="font-semibold text-lg mt-6">4.3 Datenverlust</h4>
          <p>Wir empfehlen regelmäßige Backups deiner Daten. Für Datenverluste übernehmen wir keine Haftung, außer bei Vorsatz oder grober Fahrlässigkeit.</p>
        </div>
      )
    },
    {
      id: 'urheberrecht',
      title: '5. Urheberrecht',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>Alle Inhalte der Napolill App (Texte, Bilder, Audio, Code) sind urheberrechtlich geschützt.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Du erhältst ein nicht-exklusives, nicht-übertragbares Nutzungsrecht</li>
            <li>Die kommerzielle Nutzung ohne schriftliche Genehmigung ist untersagt</li>
            <li>Deine selbst erstellten Affirmationen bleiben dein Eigentum</li>
            <li>Solfeggio-Frequenzen dürfen nur im Rahmen der App-Nutzung verwendet werden</li>
          </ul>
        </div>
      )
    },
    {
      id: 'aenderungen',
      title: '6. Änderungen der AGB',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Über wesentliche Änderungen informieren wir dich rechtzeitig:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Per In-App-Benachrichtigung</li>
            <li>Per E-Mail (wenn angegeben)</li>
            <li>Auf der Website</li>
          </ul>
          <p className="mt-4">Die fortgesetzte Nutzung nach Änderungen gilt als Zustimmung zu den neuen AGB. Wenn du nicht einverstanden bist, kannst du die App deinstallieren.</p>
        </div>
      )
    },
    {
      id: 'schlussbestimmungen',
      title: '7. Schlussbestimmungen',
      icon: Scale,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">7.1 Anwendbares Recht</h4>
          <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>

          <h4 className="font-semibold text-lg mt-6">7.2 Gerichtsstand</h4>
          <p>Gerichtsstand ist Berlin, Deutschland (soweit gesetzlich zulässig).</p>

          <h4 className="font-semibold text-lg mt-6">7.3 Salvatorische Klausel</h4>
          <p>Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>

          <h4 className="font-semibold text-lg mt-6">7.4 Kontakt</h4>
          <div className="bg-secondary-purple/10 p-6 rounded-lg mt-4">
            <p>Bei Fragen zu den AGB:</p>
            <p className="mt-2"><strong>E-Mail:</strong> <a href="mailto:legal@napolill.com" className="text-primary-teal hover:underline">legal@napolill.com</a></p>
          </div>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <LegalHeroSection 
        title="Allgemeine Geschäftsbedingungen"
        description="Die Nutzungsbedingungen für die Napolill App - transparent, fair und verständlich."
        infoItems={heroInfo}
      />
      <LegalContentSection 
        sections={contentSections}
        lastUpdated="15. Januar 2024"
      />
    </Layout>
  );
}
