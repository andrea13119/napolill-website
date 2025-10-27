'use client';

import { Shield, AlertTriangle, Heart, Brain, Volume2, Moon, CheckCircle, XCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { LegalHeroSection } from '@/components/sections/legal/LegalHeroSection';
import { LegalContentSection } from '@/components/sections/legal/LegalContentSection';

export default function SafetyPage() {
  const heroInfo = [
    { icon: Shield, text: 'Sichere Nutzung' },
    { icon: Heart, text: 'Wohlbefinden' },
    { icon: Brain, text: 'Mentale Gesundheit' }
  ];

  const contentSections = [
    {
      id: 'allgemein',
      title: '1. Allgemeine Sicherheitshinweise',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="bg-accent-rose/10 p-6 rounded-lg border-l-4 border-accent-rose mb-6">
            <p className="font-semibold text-lg mb-2 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Wichtiger Hinweis
            </p>
            <p><strong>Napolill ersetzt keine professionelle medizinische oder psychologische Behandlung.</strong> Bei schwerwiegenden psychischen oder physischen Problemen konsultiere immer einen qualifizierten Arzt oder Therapeuten.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-primary-teal/10 p-4 rounded-lg flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Persönliche Grenzen respektieren</h4>
                <p className="text-sm">Höre auf deinen Körper und deine Intuition. Wenn du dich unwohl fühlst, pausiere oder stoppe die Nutzung der App.</p>
              </div>
            </div>

            <div className="bg-primary-teal/10 p-4 rounded-lg flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Regelmäßige Pausen</h4>
                <p className="text-sm">Mache regelmäßige Pausen zwischen den Sessions. Übermäßige Nutzung kann kontraproduktiv sein.</p>
              </div>
            </div>

            <div className="bg-primary-teal/10 p-4 rounded-lg flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Realistische Erwartungen</h4>
                <p className="text-sm">Gehirn-Reprogrammierung ist ein Prozess, der Zeit braucht. Erwarte keine sofortigen Wunderheilungen.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'audio',
      title: '2. Audio & Frequenzen',
      icon: Volume2,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg flex items-center">
            <Volume2 className="w-5 h-5 mr-2 text-primary-teal" />
            Richtige Lautstärke
          </h4>
          <div className="space-y-3">
            <div className="bg-secondary-purple/10 p-4 rounded-lg flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary-teal flex-shrink-0 mt-1" />
              <p className="text-sm"><strong>Empfohlene Lautstärke:</strong> 30-50% der maximalen Gerätelautstärke. Die Frequenzen sollten angenehm und entspannend klingen.</p>
            </div>

            <div className="bg-accent-rose/10 p-4 rounded-lg flex items-start space-x-3 border-l-4 border-accent-rose">
              <XCircle className="w-5 h-5 text-accent-rose flex-shrink-0 mt-1" />
              <p className="text-sm"><strong>Vermeide:</strong> Zu hohe Lautstärken können das Gehör schädigen. Wenn die Frequenzen unangenehm sind, reduziere die Lautstärke sofort.</p>
            </div>
          </div>

          <h4 className="font-semibold text-lg mt-6 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-primary-teal" />
            Solfeggio-Frequenzen
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nutze Frequenzen nicht während des Autofahrens oder bei Tätigkeiten, die volle Konzentration erfordern</li>
            <li>Bei Epilepsie oder neurologischen Erkrankungen: Konsultiere vor der Nutzung einen Arzt</li>
            <li>Schwangere sollten vor der Nutzung ihren Arzt konsultieren</li>
            <li>Bei Unwohlsein, Kopfschmerzen oder Schwindel: Nutzung sofort beenden</li>
          </ul>
        </div>
      )
    },
    {
      id: 'schlaf',
      title: '3. Schlaf & Endlosschleife',
      icon: Moon,
      content: (
        <div className="space-y-4">
          <p>Die Endlosschleife-Funktion für Schlaf sollte verantwortungsvoll genutzt werden:</p>

          <div className="bg-primary-teal/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary-teal" />
              Empfohlene Nutzung
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Verwende eine niedrige Lautstärke (20-30%)</li>
              <li>• Stelle sicher, dass das Gerät sicher platziert ist</li>
              <li>• Verwende Timer-Funktionen zur automatischen Abschaltung</li>
              <li>• Achte auf gute Schlafhygiene (dunkler Raum, angenehme Temperatur)</li>
            </ul>
          </div>

          <div className="bg-accent-rose/10 p-6 rounded-lg border-l-4 border-accent-rose">
            <h4 className="font-semibold mb-3 flex items-center">
              <XCircle className="w-5 h-5 mr-2 text-accent-rose" />
              Vorsichtsmaßnahmen
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Bei Schlafstörungen: Konsultiere einen Arzt, bevor du die Endlosschleife nutzt</li>
              <li>• Verwende keine Kopfhörer über Nacht (Verletzungsgefahr)</li>
              <li>• Stelle sicher, dass Notfall-Alarme (Feuer, Rauch) hörbar bleiben</li>
              <li>• Die App ersetzt keine Behandlung von Schlafstörungen</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'emotional',
      title: '4. Emotionale Sicherheit',
      icon: Heart,
      content: (
        <div className="space-y-4">
          <p>Affirmationen und Gehirn-Reprogrammierung können intensive emotionale Reaktionen auslösen:</p>

          <div className="space-y-3">
            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Umgang mit intensiven Emotionen</h4>
              <p className="text-sm">Es ist normal, dass während der Nutzung Emotionen hochkommen. Dies ist Teil des Prozesses. Wenn Emotionen überwältigend werden:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li>Pausiere die Session</li>
                <li>Atme tief durch</li>
                <li>Sprich mit einer Vertrauensperson</li>
                <li>Bei anhaltenden Problemen: Suche professionelle Hilfe</li>
              </ul>
            </div>

            <div className="bg-secondary-purple/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Positive Affirmationen wählen</h4>
              <p className="text-sm">Formuliere Affirmationen immer positiv und realistisch. Vermeide negative oder selbstkritische Aussagen. Bei Unsicherheit: Nutze unsere Vorlagen oder kontaktiere unseren Support.</p>
            </div>
          </div>

          <div className="bg-accent-rose/10 p-6 rounded-lg border-l-4 border-accent-rose mt-6">
            <p className="font-semibold mb-2">Wann du professionelle Hilfe suchen solltest:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Bei suizidalen Gedanken oder Selbstverletzungstendenzen</li>
              <li>Bei schweren Depressionen oder Angstzuständen</li>
              <li>Bei Trauma-Reaktionen</li>
              <li>Bei psychotischen Symptomen</li>
            </ul>
            <p className="mt-4 text-sm"><strong>Telefonseelsorge Deutschland:</strong> 0800 111 0 111 oder 0800 111 0 222 (24/7 kostenlos)</p>
          </div>
        </div>
      )
    },
    {
      id: 'technisch',
      title: '5. Technische Sicherheit',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Gerätesicherheit</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Halte die App immer auf dem neuesten Stand</li>
            <li>Installiere die App nur aus offiziellen App Stores (Google Play, Apple App Store)</li>
            <li>Verwende sichere Passwörter für Cloud-Backups</li>
            <li>Teile deine persönlichen Daten nicht mit Dritten</li>
          </ul>

          <h4 className="font-semibold text-lg mt-6">Datenschutz</h4>
          <p>Deine Affirmationen und Aufnahmen werden lokal auf deinem Gerät gespeichert. Lösche die App nur, wenn du deine Daten nicht mehr benötigst oder ein Backup erstellt hast.</p>

          <div className="bg-primary-teal/10 p-6 rounded-lg mt-6">
            <h4 className="font-semibold mb-2">Probleme melden</h4>
            <p className="text-sm">Bei technischen Problemen oder Sicherheitsbedenken:</p>
            <p className="mt-2 text-sm"><strong>E-Mail:</strong> <a href="mailto:support@napolill.com" className="text-primary-teal hover:underline">support@napolill.com</a></p>
            <p className="text-sm"><strong>Antwortzeit:</strong> Innerhalb von 24 Stunden</p>
          </div>
        </div>
      )
    },
    {
      id: 'notfall',
      title: '6. Notfall-Kontakte',
      icon: AlertTriangle,
      content: (
        <div>
          <p className="mb-6">Wenn du in einer Krise bist, zögere nicht, professionelle Hilfe zu suchen:</p>
          
          <div className="space-y-4">
            <div className="bg-accent-rose/10 p-6 rounded-lg border-l-4 border-accent-rose">
              <h4 className="font-semibold text-lg mb-3">Akute Notfälle</h4>
              <p className="mb-2"><strong>Notruf:</strong> 112 (Polizei/Rettungsdienst)</p>
              <p><strong>Ärztlicher Bereitschaftsdienst:</strong> 116 117</p>
            </div>

            <div className="bg-secondary-purple/10 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Telefonseelsorge (24/7, kostenlos, anonym)</h4>
              <p className="mb-1"><strong>0800 111 0 111</strong></p>
              <p className="mb-1"><strong>0800 111 0 222</strong></p>
              <p className="text-sm mt-2">Online-Beratung: <a href="https://www.telefonseelsorge.de" className="text-primary-teal hover:underline" target="_blank" rel="noopener noreferrer">www.telefonseelsorge.de</a></p>
            </div>

            <div className="bg-secondary-purple/10 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Weitere Hilfsangebote</h4>
              <p className="mb-2"><strong>Nummer gegen Kummer:</strong> 116 111 (für Kinder/Jugendliche)</p>
              <p className="mb-2"><strong>Elterntelefon:</strong> 0800 111 0 550</p>
              <p><strong>Hilfetelefon Gewalt gegen Frauen:</strong> 0800 116 016</p>
            </div>
          </div>

          <p className="mt-6 text-sm font-medium">Deine mentale Gesundheit ist wichtig. Es ist ein Zeichen von Stärke, Hilfe zu suchen.</p>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <LegalHeroSection 
        title="Sicherheitshinweise"
        description="Wichtige Informationen zur sicheren und verantwortungsvollen Nutzung der Napolill App."
        infoItems={heroInfo}
      />
      <LegalContentSection 
        sections={contentSections}
        lastUpdated="15. Januar 2024"
      />
    </Layout>
  );
}
