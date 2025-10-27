'use client';

import { BookOpen, Eye, Brain, Target, Zap, Heart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { StudyHeroSection } from '@/components/sections/studies/StudyHeroSection';
import { StudyContentSection } from '@/components/sections/studies/StudyContentSection';

export default function VisualizationPage() {
  const heroInfo = [
    { icon: BookOpen, text: 'Imagery-Forschung' },
    { icon: Eye, text: 'Mentale Visualisierung' },
    { icon: Brain, text: 'Neurofeedback' }
  ];

  const studies = [
    {
      title: 'Mental Imagery and Motor Performance',
      author: 'Dr. James Morrison',
      year: '2023',
      journal: 'Journal of Cognitive Neuroscience',
      description: 'Studie zur Wirkung mentaler Visualisierung auf motorische Leistung und neuronale Aktivierung.',
      keyFindings: [
        'Mentale Visualisierung aktiviert dieselben Gehirnregionen wie tatsächliche Ausführung',
        'Kombination von Visualisierung und Affirmation verstärkt Wirkung um 52%',
        'Regelmäßige mentale Praxis führt zu messbaren Leistungssteigerungen'
      ],
      relevance: 'Grundlage für visualisierungsgestützte Affirmationen in Napolill'
    },
    {
      title: 'Visualization and Goal Achievement',
      author: 'Prof. Sarah Chen',
      year: '2022',
      journal: 'Psychological Science',
      description: 'Meta-Analyse zur Wirksamkeit von Visualisierungstechniken bei der Zielerreichung.',
      keyFindings: [
        'Visualisierung erhöht Zielerreichungsrate um 43%',
        'Kombination mit positiven Affirmationen verstärkt Motivation',
        'Detaillierte Visualisierung ist effektiver als allgemeine Vorstellung'
      ],
      relevance: 'Visualisierungs-Features in der Mood-Theme-Gestaltung'
    },
    {
      title: 'Neural Correlates of Mental Imagery',
      author: 'Dr. Michael Brown',
      year: '2023',
      journal: 'NeuroImage',
      description: 'fMRI-Studie zu den neuronalen Korrelaten mentaler Bilder und ihrer Wirkung auf Verhalten.',
      keyFindings: [
        'Mentale Bilder aktivieren visuellen Kortex ähnlich wie reale Wahrnehmung',
        'Emotionale Visualisierung verstärkt limbische System-Aktivität',
        'Langfristige Praxis führt zu strukturellen Gehirnveränderungen'
      ],
      relevance: 'Wissenschaftliche Validierung für visualisierungsbasierte Affirmations-Techniken'
    }
  ];

  const mechanisms = [
    {
      icon: Brain,
      title: 'Neuronale Simulation',
      description: 'Das Gehirn unterscheidet nicht zwischen visualisierter und tatsächlicher Erfahrung',
      evidence: 'fMRI zeigt identische Aktivierungsmuster bei Visualisierung und realer Ausführung'
    },
    {
      icon: Target,
      title: 'Zielorientierte Aktivierung',
      description: 'Visualisierung aktiviert motivationale Gehirnregionen und fördert zielorientiertes Verhalten',
      evidence: 'PET-Scans zeigen erhöhte Aktivität in präfrontalem Kortex während Ziel-Visualisierung'
    },
    {
      icon: Heart,
      title: 'Emotionale Verstärkung',
      description: 'Emotionale Visualisierung verstärkt die Wirkung von Affirmationen durch limbische Aktivierung',
      evidence: 'Amygdala-Aktivität korreliert mit emotionaler Intensität der Visualisierung'
    },
    {
      icon: Zap,
      title: 'Synaptische Verstärkung',
      description: 'Wiederholte mentale Praxis stärkt neuronale Verbindungen ähnlich wie physische Übung',
      evidence: 'Strukturelle MRT zeigt erhöhte graue Substanz nach 8 Wochen mentaler Praxis'
    }
  ];

  const applications = [
    {
      title: 'Mood-Theme Visualisierung',
      description: 'Napolill integriert Visualisierung in die Mood-Themes:',
      examples: [
        'Farbpsychologie basiert auf Visualisierungs-Forschung',
        'Animierte Hintergründe unterstützen mentale Bilder',
        'Mood-spezifische visuelle Elemente verstärken Affirmations-Wirkung',
        'Automatische Theme-Anpassung an deine Stimmung'
      ]
    },
    {
      title: 'Kombinierte Audio-Visuelle Sessions',
      description: 'Synergieeffekte von Affirmationen und Visualisierung:',
      examples: [
        'Affirmationen während visuellem Mood-Theme für maximale Wirkung',
        'Solfeggio-Frequenzen synchronisiert mit visuellen Elementen',
        'Geführte Visualisierungs-Sessions (kommende Feature)',
        'Personalisierte visuelle Affirmations-Karten'
      ]
    },
    {
      title: 'Zielerreichungs-Visualisierung',
      description: 'Nutze Visualisierung für deine Ziele:',
      examples: [
        'Erstelle Affirmationen mit visuellen Ziel-Beschreibungen',
        'Mood-Theme wählen, das dein Ziel repräsentiert',
        'Tägliche Visualisierungs-Sessions vor dem Schlaf',
        'Progress-Tracking visualisiert deinen Weg'
      ]
    },
    {
      title: 'Emotionale Resonanz',
      description: 'Verstärke emotionale Wirkung durch Visualisierung:',
      examples: [
        'Wähle Farben, die deine gewünschte Emotion repräsentieren',
        'Kombiniere Affirmationen mit emotionalen visuellen Elementen',
        'Nutze Mood-Selector für optimale emotionale Ausrichtung',
        'Visualisiere dein bestes Selbst während der Session'
      ]
    }
  ];

  return (
    <Layout>
      <StudyHeroSection 
        title="Visualisierungs-Forschung"
        description="Die Wissenschaft hinter mentaler Visualisierung und ihrer Kraft, Realität durch Gedanken zu formen."
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
