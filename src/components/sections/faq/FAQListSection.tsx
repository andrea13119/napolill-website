'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    id: 'allgemein',
    name: 'Allgemein',
    icon: '🤔'
  },
  {
    id: 'app',
    name: 'App-spezifisch',
    icon: '📱'
  },
  {
    id: 'wissenschaft',
    name: 'Wissenschaftlich',
    icon: '🔬'
  },
  {
    id: 'rechtlich',
    name: 'Rechtlich',
    icon: '⚖️'
  }
];

const faqData = [
  {
    id: 1,
    category: 'allgemein',
    question: 'Was ist Napolill und wie funktioniert es?',
    answer: 'Napolill ist eine innovative App für Gehirn-Reprogrammierung, die Affirmationen mit wissenschaftlich belegten Solfeggio-Frequenzen kombiniert. Die App hilft dir dabei, negative Denkmuster zu überwinden und positive Veränderungen in deinem Leben zu bewirken. Du kannst deine eigenen Affirmationen aufnehmen, verschiedene Solfeggio-Frequenzen nutzen und deine Fortschritte verfolgen.'
  },
  {
    id: 2,
    category: 'allgemein',
    question: 'Ist Napolill wissenschaftlich fundiert?',
    answer: 'Ja, Napolill basiert auf aktueller Forschung zu Affirmationen, Solfeggio-Frequenzen und Gehirn-Reprogrammierung. Wir haben unsere Methoden auf Basis von Studien aus der Neurowissenschaft, Psychologie und Schlafforschung entwickelt. Alle verwendeten Frequenzen und Techniken sind wissenschaftlich validiert.'
  },
  {
    id: 3,
    category: 'allgemein',
    question: 'Wie lange dauert es, bis ich Ergebnisse sehe?',
    answer: 'Die meisten Nutzer berichten von ersten positiven Veränderungen nach 1-2 Wochen regelmäßiger Nutzung. Für signifikante und dauerhafte Veränderungen empfehlen wir eine kontinuierliche Nutzung über mindestens 4-8 Wochen. Die Geschwindigkeit der Ergebnisse hängt von verschiedenen Faktoren ab, einschließlich der Regelmäßigkeit der Nutzung und der persönlichen Offenheit für Veränderung.'
  },
  {
    id: 4,
    category: 'allgemein',
    question: 'Kann Napolill bei psychischen Problemen helfen?',
    answer: 'Napolill kann als unterstützendes Tool bei verschiedenen Herausforderungen helfen, ersetzt aber keine professionelle psychologische oder medizinische Behandlung. Bei schwerwiegenden psychischen Problemen solltest du immer einen qualifizierten Therapeuten oder Arzt konsultieren. Napolill eignet sich besonders gut für die Stärkung des Selbstwertgefühls, die Bewältigung von Stress und die Entwicklung positiver Denkmuster.'
  },
  {
    id: 5,
    category: 'app',
    question: 'Wie funktioniert die Aufnahme von Affirmationen?',
    answer: 'Die Affirmations-Aufnahme in Napolill ist sehr einfach: Tippe auf das Mikrofon-Symbol, spreche deine Affirmation laut und deutlich aus, und die App nimmt sie automatisch auf. Du kannst die Aufnahme anschließend anhören und bei Bedarf erneut aufnehmen. Die App unterstützt verschiedene Audio-Qualitäten und optimiert die Aufnahme automatisch für die beste Wiedergabequalität.'
  },
  {
    id: 6,
    category: 'app',
    question: 'Was sind Solfeggio-Frequenzen und wie wähle ich die richtige aus?',
    answer: 'Solfeggio-Frequenzen sind spezifische Tonfrequenzen, die nachweislich positive Auswirkungen auf Gehirn und Körper haben. Napolill bietet 9 verschiedene Frequenzen (174Hz bis 963Hz), die jeweils für unterschiedliche Zwecke optimiert sind. Die App hilft dir bei der Auswahl durch Mood-basierte Empfehlungen. Du kannst auch experimentieren und herausfinden, welche Frequenzen für dich am besten funktionieren.'
  },
  {
    id: 7,
    category: 'app',
    question: 'Wie funktioniert die Endlosschleife über Nacht?',
    answer: 'Die Endlosschleife-Funktion ermöglicht es dir, deine Affirmationen und Frequenzen während des Schlafs zu hören. Die App passt die Lautstärke automatisch an, um deinen Schlaf nicht zu stören, und nutzt wissenschaftliche Erkenntnisse über Schlaf-Konsolidierung. Du kannst die Funktion für 5, 10 Minuten oder die ganze Nacht aktivieren. Die App stoppt automatisch, wenn sie einen Alarm erkennt.'
  },
  {
    id: 8,
    category: 'app',
    question: 'Wie funktioniert das Badge-System?',
    answer: 'Das Badge-System motiviert dich durch verschiedene Achievements. Du erhältst Badges für regelmäßige Nutzung, das Erreichen von Streaks, das Ausprobieren neuer Features und persönliche Meilensteine. Jedes Badge hat eine spezielle Bedeutung und hilft dir dabei, deine Fortschritte zu verfolgen und motiviert zu bleiben.'
  },
  {
    id: 9,
    category: 'app',
    question: 'Kann ich die App offline nutzen?',
    answer: 'Ja, Napolill funktioniert vollständig offline. Alle Grundfunktionen wie Affirmations-Aufnahme, Frequenz-Wiedergabe und Fortschrittsverfolgung sind ohne Internetverbindung verfügbar. Die Cloud-Synchronisation erfolgt automatisch, sobald eine Internetverbindung verfügbar ist.'
  },
  {
    id: 10,
    category: 'app',
    question: 'Wie sicher sind meine Daten?',
    answer: 'Datenschutz und Sicherheit haben für uns höchste Priorität. Alle deine Daten werden lokal auf deinem Gerät gespeichert und optional in der Cloud verschlüsselt. Wir verwenden End-to-End-Verschlüsselung und sammeln keine persönlichen Daten. Du kannst jederzeit alle deine Daten löschen oder exportieren.'
  },
  {
    id: 11,
    category: 'wissenschaft',
    question: 'Was sagt die Wissenschaft über Solfeggio-Frequenzen?',
    answer: 'Die Wissenschaft hat die Wirkung von Solfeggio-Frequenzen in verschiedenen Studien untersucht. Forschungsergebnisse zeigen, dass bestimmte Frequenzen positive Auswirkungen auf Gehirnwellen, Stressreduktion und emotionales Wohlbefinden haben können. Napolill verwendet nur Frequenzen, die wissenschaftlich validiert sind und nachweislich positive Effekte haben.'
  },
  {
    id: 12,
    category: 'wissenschaft',
    question: 'Wie funktioniert Gehirn-Reprogrammierung?',
    answer: 'Gehirn-Reprogrammierung basiert auf der Neuroplastizität - der Fähigkeit des Gehirns, sich zu verändern und neue Verbindungen zu bilden. Durch wiederholte positive Affirmationen und gezielte Frequenz-Stimulation können neue neuronale Pfade entstehen, die positive Denkmuster und Verhaltensweisen fördern. Dies geschieht durch die Kombination von bewusster Wiederholung und unbewusster Verarbeitung.'
  },
  {
    id: 13,
    category: 'wissenschaft',
    question: 'Warum ist Schlaf für die Gehirn-Reprogrammierung wichtig?',
    answer: 'Während des Schlafs konsolidiert das Gehirn Erinnerungen und festigt neue neuronale Verbindungen. Die verschiedenen Schlafphasen (REM, Tiefschlaf) spielen eine wichtige Rolle bei der Verarbeitung und Integration neuer Informationen. Napolill nutzt diese Erkenntnisse durch die Endlosschleife-Funktion, die während des Schlafs positive Affirmationen und Frequenzen präsentiert.'
  },
  {
    id: 14,
    category: 'wissenschaft',
    question: 'Gibt es Studien, die die Wirksamkeit von Affirmationen belegen?',
    answer: 'Ja, zahlreiche Studien haben die positive Wirkung von Affirmationen auf das Gehirn und Verhalten nachgewiesen. Forschungsergebnisse zeigen, dass Selbstaffirmationen Stress reduzieren, das Selbstwertgefühl stärken und positive Verhaltensänderungen fördern können. Diese Effekte sind besonders stark, wenn die Affirmationen persönlich relevant sind und regelmäßig wiederholt werden.'
  },
  {
    id: 15,
    category: 'rechtlich',
    question: 'Wie werden meine persönlichen Daten geschützt?',
    answer: 'Wir nehmen Datenschutz sehr ernst und halten uns strikt an die DSGVO. Alle deine Daten werden verschlüsselt gespeichert und übertragen. Wir sammeln keine persönlichen Informationen ohne deine ausdrückliche Zustimmung und geben deine Daten niemals an Dritte weiter. Du hast jederzeit das Recht, deine Daten einzusehen, zu korrigieren oder zu löschen.'
  },
  {
    id: 16,
    category: 'rechtlich',
    question: 'Ist Napolill eine medizinische Behandlung?',
    answer: 'Nein, Napolill ist kein medizinisches Gerät oder Medikament und ersetzt keine professionelle medizinische oder psychologische Behandlung. Die App ist als unterstützendes Wellness-Tool konzipiert. Bei gesundheitlichen Problemen solltest du immer einen qualifizierten Arzt oder Therapeuten konsultieren.'
  },
  {
    id: 17,
    category: 'rechtlich',
    question: 'Kann ich Napolill in jedem Land nutzen?',
    answer: 'Napolill ist derzeit in den meisten Ländern verfügbar, wo die App Stores (Google Play, Apple App Store) zugänglich sind. Wir respektieren die lokalen Gesetze und Vorschriften jedes Landes. Falls du Fragen zur Verfügbarkeit in deinem Land hast, kontaktiere uns gerne über support@napolill.com.'
  },
  {
    id: 18,
    category: 'rechtlich',
    question: 'Welche Altersbeschränkungen gibt es?',
    answer: 'Napolill ist für Nutzer ab 16 Jahren konzipiert. Für Minderjährige empfehlen wir die Nutzung unter Aufsicht eines Erwachsenen. Die App enthält keine unangemessenen Inhalte, aber die Konzepte der Gehirn-Reprogrammierung erfordern ein gewisses Maß an Reife und Verständnis.'
  },
  {
    id: 19,
    category: 'rechtlich',
    question: 'Wie kann ich meine Daten exportieren oder löschen?',
    answer: 'Du kannst deine Daten jederzeit in den App-Einstellungen exportieren oder vollständig löschen. Für Datenexport wähle "Daten exportieren" in den Einstellungen. Für die vollständige Löschung wähle "Account löschen". Nach der Löschung können deine Daten nicht wiederhergestellt werden.'
  },
  {
    id: 20,
    category: 'allgemein',
    question: 'Wie kann ich mit dem Napolill-Team in Kontakt treten?',
    answer: 'Du kannst uns auf verschiedene Weise erreichen: Per E-Mail an support@napolill.com für technische Fragen, feedback@napolill.com für Anregungen und Verbesserungsvorschläge, oder über die In-App-Support-Funktion. Wir antworten normalerweise innerhalb von 24 Stunden auf alle Anfragen.'
  }
];

export function FAQListSection() {
  const [selectedCategory, setSelectedCategory] = useState('allgemein');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'allgemein' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Durchsuche die FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-secondary-purple/10 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-teal"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-napolill-gradient text-foreground'
                  : 'bg-secondary-purple/10 text-foreground/70 hover:bg-secondary-purple/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-secondary-purple/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary-purple/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-primary-teal flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-foreground/60 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(faq.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-foreground/60">
              Keine Fragen gefunden. Versuche es mit einem anderen Suchbegriff oder wähle eine andere Kategorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

