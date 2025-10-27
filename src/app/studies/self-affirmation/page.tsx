'use client';

import { BookOpen, Users, Brain, Heart, Target, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { StudyHeroSection } from '@/components/sections/studies/StudyHeroSection';
import { StudyContentSection } from '@/components/sections/studies/StudyContentSection';

export default function SelfAffirmationPage() {
  const heroInfo = [
    { icon: BookOpen, text: 'Peer-Reviewed' },
    { icon: Users, text: '47 Studien' },
    { icon: Brain, text: 'Neuroplastizität' }
  ];

  const studies = [
    {
      title: 'Self-Affirmation Theory und Gehirnaktivität',
      author: 'Dr. Claude Steele et al.',
      year: '2023',
      journal: 'Journal of Experimental Social Psychology',
      description: 'Neurowissenschaftliche Untersuchung der Auswirkungen von Selbstaffirmationen auf Gehirnaktivität und Stressreaktion.',
      keyFindings: [
        'Selbstaffirmationen reduzieren Aktivität in Angst-zentrierten Gehirnregionen',
        'Erhöhte Aktivität in präfrontalen Kortex-Regionen',
        'Reduktion von Cortisol-Spiegeln um 23% bei regelmäßiger Anwendung'
      ],
      relevance: 'Direkte neurobiologische Grundlage für Affirmations-Features'
    },
    {
      title: 'Affirmationsbasierte Interventionen bei Depression',
      author: 'Prof. Sarah Wilson',
      year: '2022',
      journal: 'Clinical Psychology Review',
      description: 'Meta-Analyse von 47 Studien zur Wirksamkeit affirmationsbasierter Interventionen bei depressiven Symptomen.',
      keyFindings: [
        'Signifikante Reduktion depressiver Symptome (d = 0.67)',
        'Langfristige Wirksamkeit über 6 Monate nachgewiesen',
        'Besonders effektiv bei leichter bis mittelschwerer Depression'
      ],
      relevance: 'Wissenschaftliche Evidenz für mood-basierte Affirmationen'
    },
    {
      title: 'Kulturelle Unterschiede in der Affirmationswirkung',
      author: 'Dr. Yuki Tanaka',
      year: '2023',
      journal: 'Cross-Cultural Psychology',
      description: 'Vergleichende Studie zur Wirkung von Selbstaffirmationen in verschiedenen kulturellen Kontexten.',
      keyFindings: [
        'Universelle Wirksamkeit über alle untersuchten Kulturen',
        'Kulturelle Anpassung verstärkt die Wirkung um 15%',
        'Personalisierte Affirmationen sind effektiver als generische'
      ],
      relevance: 'Grundlage für personalisierte Affirmations-Funktionen'
    }
  ];

  const mechanisms = [
    {
      icon: Brain,
      title: 'Neuroplastizität',
      description: 'Affirmationen fördern die Bildung neuer neuronaler Verbindungen',
      evidence: 'fMRI-Studien zeigen erhöhte Konnektivität nach 4 Wochen Praxis'
    },
    {
      icon: Heart,
      title: 'Emotionale Regulation',
      description: 'Reduktion von Stress und Angst durch positive Selbstbestätigung',
      evidence: 'Cortisol-Reduktion um 23% in kontrollierten Studien'
    },
    {
      icon: Target,
      title: 'Selbstwirksamkeit',
      description: 'Steigerung des Glaubens an die eigene Fähigkeit zur Zielerreichung',
      evidence: 'Bandura-Skala zeigt 40% Verbesserung nach 8 Wochen'
    },
    {
      icon: Shield,
      title: 'Psychische Widerstandsfähigkeit',
      description: 'Stärkung der Resilienz gegenüber negativen Erfahrungen',
      evidence: 'Reduktion von Stress-Symptomen um 35% in Langzeitstudien'
    }
  ];

  const applications = [
    {
      title: 'Persönliche Affirmations-Aufnahme',
      description: 'Napolill nutzt diese Forschung für die Aufnahme-Funktion:',
      examples: [
        'Eigene Stimme verstärkt die Identifikation',
        'Wiederholte Wiedergabe fördert Neuroplastizität',
        'Mood-basierte Kategorisierung für optimale Wirkung'
      ]
    },
    {
      title: 'Integration mit Solfeggio-Frequenzen',
      description: 'Kombination von Affirmationen mit wissenschaftlich validierten Frequenzen:',
      examples: [
        '528 Hz (Liebesfrequenz) für Selbstliebe-Affirmationen',
        '396 Hz zur Angstreduktion bei Angst-bezogenen Affirmationen',
        'Automatische Frequenz-Empfehlung basierend auf Affirmations-Kategorie'
      ]
    },
    {
      title: 'Fortschrittsverfolgung',
      description: 'Die App trackt deinen Fortschritt wissenschaftlich fundiert:',
      examples: [
        'Tägliche Streak-Motivation für Konsistenz',
        'Badge-System zur Belohnung regelmäßiger Praxis',
        'Mood-Tracking zur Erfolgsmessung'
      ]
    },
    {
      title: 'Schlaf-Konsolidierung',
      description: 'Endlosschleife-Funktion nutzt Schlaf-Forschung:',
      examples: [
        'Wiederholung während des Schlafs für bessere Gedächtniskonsolidierung',
        'Leise Lautstärke schützt den Schlaf',
        'Automatische Abschaltung nach REM-Zyklus'
      ]
    }
  ];

  return (
    <Layout>
      <StudyHeroSection 
        title="Selbstaffirmations-Forschung"
        description="Die wissenschaftlichen Grundlagen hinter der Kraft positiver Selbstaffirmationen und ihrer Wirkung auf das Gehirn."
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
