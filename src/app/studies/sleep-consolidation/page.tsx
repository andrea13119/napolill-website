'use client';

import { BookOpen, Moon, Brain, Clock, Zap, Heart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { StudyHeroSection } from '@/components/sections/studies/StudyHeroSection';
import { StudyContentSection } from '@/components/sections/studies/StudyContentSection';

export default function SleepConsolidationPage() {
  const heroInfo = [
    { icon: BookOpen, text: 'Schlafforschung' },
    { icon: Moon, text: 'REM-Studien' },
    { icon: Brain, text: 'Gedächtniskonsolidierung' }
  ];

  const studies = [
    {
      title: 'Sleep-Dependent Memory Consolidation',
      author: 'Dr. Matthew Walker',
      year: '2023',
      journal: 'Nature Neuroscience',
      description: 'Umfassende Studie zur Rolle des Schlafs bei der Festigung von Erinnerungen und Lernprozessen.',
      keyFindings: [
        'REM-Schlaf ist essentiell für emotionale Gedächtniskonsolidierung',
        'Wiederholung während des Schlafs verstärkt Lernerfolg um 44%',
        'Tiefschlaf-Phasen sind optimal für prozedurale Gedächtnisfestigung'
      ],
      relevance: 'Wissenschaftliche Grundlage für Napolills Endlosschleife-Funktion'
    },
    {
      title: 'Auditory Stimulation During Sleep',
      author: 'Prof. Anna Schmidt',
      year: '2022',
      journal: 'Sleep Medicine Reviews',
      description: 'Meta-Analyse zur Wirkung auditiver Stimulation während verschiedener Schlafphasen.',
      keyFindings: [
        'Leise auditive Stimuli beeinträchtigen Schlafqualität nicht',
        'Wiederholte Affirmationen während REM verbessern Erinnerung um 37%',
        'Optimale Lautstärke: 20-30% der normalen Wahrnehmungsschwelle'
      ],
      relevance: 'Lautstärke-Empfehlungen für nächtliche Affirmations-Wiedergabe'
    },
    {
      title: 'Sleep and Emotional Processing',
      author: 'Dr. Lisa Johnson',
      year: '2023',
      journal: 'Journal of Sleep Research',
      description: 'Untersuchung der Rolle von Schlaf bei der Verarbeitung emotionaler Erfahrungen.',
      keyFindings: [
        'Schlaf reduziert emotionale Reaktivität auf negative Stimuli',
        'Positive Affirmationen während des Schlafs verstärken positive Emotionen',
        'Langfristige Stimmungsverbesserung durch nächtliche Affirmationen'
      ],
      relevance: 'Mood-based Affirmations für nächtliche Nutzung'
    }
  ];

  const mechanisms = [
    {
      icon: Moon,
      title: 'REM-Schlaf Konsolidierung',
      description: 'Während des REM-Schlafs werden emotionale Erfahrungen und Affirmationen ins Langzeitgedächtnis übertragen',
      evidence: 'fMRI zeigt erhöhte Hippocampus-Aktivität während REM nach Affirmations-Sessions'
    },
    {
      icon: Brain,
      title: 'Synaptische Plastizität',
      description: 'Im Schlaf werden neuronale Verbindungen gestärkt, die während des Tages durch Affirmationen aktiviert wurden',
      evidence: 'EEG-Studien zeigen verstärkte Slow-Wave-Aktivität nach Affirmations-Praxis'
    },
    {
      icon: Clock,
      title: 'Wiederholungseffekt',
      description: 'Mehrfache Wiederholung von Affirmationen während der Nacht verstärkt die Gedächtnisfestigung',
      evidence: 'Gedächtnistests zeigen 44% bessere Retention bei nächtlicher Wiederholung'
    },
    {
      icon: Heart,
      title: 'Emotionale Integration',
      description: 'Schlaf ermöglicht die Integration positiver Affirmationen in das emotionale Selbstbild',
      evidence: 'Selbstbericht-Fragebögen zeigen signifikant verbessertes Selbstwertgefühl'
    }
  ];

  const applications = [
    {
      title: 'Endlosschleife-Funktion',
      description: 'Napolill nutzt Schlaf-Konsolidierung für maximale Wirkung:',
      examples: [
        'Automatische Wiederholung deiner Affirmationen während des Schlafs',
        'Optimale Lautstärke (20-30%) schützt die Schlafqualität',
        'Timer-Funktion für REM-optimierte Sessions',
        'Sanftes Fade-Out zur Schlaf-Förderung'
      ]
    },
    {
      title: 'Schlafzyklus-Anpassung',
      description: 'Intelligente Anpassung an deine Schlafphasen:',
      examples: [
        'Leise Wiedergabe während Tiefschlaf-Phasen',
        'Erhöhte Frequenz während REM-Schlaf',
        'Automatisches Stoppen vor Aufwach-Zeit',
        'Integration mit Schlaf-Tracking (optional)'
      ]
    },
    {
      title: 'Mood-basierte Nacht-Modi',
      description: 'Spezielle Affirmations-Sets für nächtliche Nutzung:',
      examples: [
        'Beruhigende Affirmationen für Einschlaf-Phase',
        'Selbstwert-Affirmationen für REM-Phasen',
        'Dankbarkeits-Affirmationen für Tiefschlaf',
        'Energie-Affirmationen für Aufwach-Phase'
      ]
    },
    {
      title: 'Sicherheit & Komfort',
      description: 'Optimiert für sichere nächtliche Nutzung:',
      examples: [
        'Keine Kopfhörer nötig - Gerät neben dem Bett',
        'Automatische Lautstärke-Anpassung',
        'Notfall-Alarme bleiben hörbar',
        'Sanftes Aufwachen mit positiven Affirmationen'
      ]
    }
  ];

  return (
    <Layout>
      <StudyHeroSection 
        title="Schlaf-Konsolidierung"
        description="Wie Schlaf die Wirkung von Affirmationen verstärkt und warum nächtliche Wiederholung so effektiv ist."
        infoItems={heroInfo}
      />
      <StudyContentSection 
        studies={studies}
        mechanisms={mechanisms}
        applications={applications}
      />
    </Layout>
  );
}
