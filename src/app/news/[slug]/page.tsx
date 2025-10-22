'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/Layout';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// In einer echten App würden diese Daten aus einer CMS oder API kommen
const blogPosts = {
  'napolill-app-version-1-1': {
    id: 1,
    title: 'Napolill App Version 1.1: Neue Features und Verbesserungen',
    excerpt: 'Entdecke die neuen Funktionen der neuesten Napolill App Version, einschließlich verbesserter Solfeggio-Frequenzen und neuer Mood-Themes.',
    content: `
# Napolill App Version 1.1: Neue Features und Verbesserungen

Wir freuen uns, die Veröffentlichung der Napolill App Version 1.1 anzukündigen! Diese neue Version bringt aufregende neue Features und Verbesserungen, die deine Gehirn-Reprogrammierung noch effektiver machen.

## 🆕 Neue Features

### Verbesserte Solfeggio-Frequenzen
- **Neue Frequenz-Kalibrierung**: Alle 9 Solfeggio-Frequenzen wurden wissenschaftlich neu kalibriert
- **Adaptive Lautstärke**: Automatische Anpassung der Lautstärke basierend auf der Umgebung
- **Frequenz-Mischung**: Möglichkeit, mehrere Frequenzen gleichzeitig zu verwenden

### Erweiterte Mood-Themes
- **Neues "Neutral"-Theme**: Für entspannte, ausgewogene Sessions
- **Verbesserte Farbpaletten**: Alle Themes haben neue, wissenschaftlich optimierte Farben
- **Automatische Theme-Erkennung**: Die App erkennt deine Stimmung und schlägt passende Themes vor

### Fortschrittsverfolgung 2.0
- **Detaillierte Statistiken**: Neue Insights zu deinen Fortschritten
- **Wöchentliche Zusammenfassungen**: Automatische Berichte über deine Aktivitäten
- **Neue Badges**: 15 zusätzliche Achievement-Badges

## 🔧 Verbesserungen

### Performance-Optimierungen
- **50% schnellere App-Startzeit**: Die App startet jetzt deutlich schneller
- **Reduzierter Batterieverbrauch**: Optimierte Algorithmen für längere Nutzung
- **Verbesserte Stabilität**: Weniger Abstürze und Bugs

### Benutzerfreundlichkeit
- **Neues Onboarding**: Verbesserte Einführung für neue Nutzer
- **Intuitive Navigation**: Überarbeitetes Menü-Design
- **Accessibility-Features**: Bessere Unterstützung für Nutzer mit Behinderungen

## 📱 Technische Details

### Neue Technologien
- **Machine Learning Integration**: KI-basierte Empfehlungen für Affirmationen
- **Advanced Audio Processing**: Verbesserte Audio-Qualität und -Verarbeitung
- **Cloud-Sync Verbesserungen**: Schnellere und zuverlässigere Synchronisation

### Sicherheit und Datenschutz
- **End-to-End Verschlüsselung**: Alle Daten werden jetzt verschlüsselt übertragen
- **Erweiterte Privatsphäre-Einstellungen**: Mehr Kontrolle über deine Daten
- **DSGVO-Konformität**: Vollständige Einhaltung der europäischen Datenschutz-Grundverordnung

## 🚀 Wie du die Updates erhältst

### Automatische Updates
Die meisten Nutzer erhalten das Update automatisch über den App Store oder Google Play Store.

### Manuelle Installation
1. Öffne den App Store (iOS) oder Google Play Store (Android)
2. Suche nach "Napolill"
3. Tippe auf "Aktualisieren"

### Systemanforderungen
- **iOS**: Version 14.0 oder höher
- **Android**: Version 8.0 (API Level 26) oder höher
- **Speicher**: Mindestens 100 MB freier Speicherplatz

## 💡 Pro-Tipps für die neue Version

### Optimale Nutzung der neuen Features
1. **Teste die neuen Mood-Themes**: Probiere alle 6 Themes aus, um das passende für dich zu finden
2. **Nutze die Fortschrittsverfolgung**: Schaue dir regelmäßig deine Statistiken an
3. **Experimentiere mit Frequenz-Mischungen**: Kombiniere verschiedene Solfeggio-Frequenzen

### Häufige Fragen

**F: Sind meine Affirmationen nach dem Update noch da?**
A: Ja, alle deine Daten werden automatisch migriert und bleiben erhalten.

**F: Funktioniert die App auch offline?**
A: Ja, alle Grundfunktionen funktionieren auch ohne Internetverbindung.

**F: Kann ich die App auf mehreren Geräten nutzen?**
A: Ja, mit der neuen Cloud-Sync-Funktion kannst du deine Daten zwischen Geräten synchronisieren.

## 🎉 Was kommt als nächstes?

Wir arbeiten bereits an Version 1.2, die folgende Features bringen wird:
- **Social Features**: Verbindung mit anderen Napolill-Nutzern
- **Erweiterte Analytics**: Noch detailliertere Fortschritts-Insights
- **Neue Solfeggio-Frequenzen**: Zusätzliche wissenschaftlich validierte Frequenzen

## 📞 Feedback und Support

Dein Feedback ist uns wichtig! Wenn du Fragen hast oder Probleme mit der neuen Version erlebst:

- **E-Mail**: support@napolill.com
- **In-App Support**: Nutze die neue Support-Funktion in der App
- **Community Forum**: Tausche dich mit anderen Nutzern aus

---

Vielen Dank für dein Vertrauen in Napolill. Wir hoffen, dass dir die neuen Features gefallen und deine Gehirn-Reprogrammierung noch effektiver wird!

*Das Napolill Team*
    `,
    author: 'Napolill Team',
    date: '2024-01-15',
    category: 'App-Updates',
    readTime: '5 Min',
    image: '/blog/app-update-1.1.jpg',
    tags: ['App-Update', 'Neue Features', 'Verbesserungen']
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center justify-center min-h-[50vh]"
          >
            <Link href="/news" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu den News
            </Link>
            
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-foreground text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} Lesezeit
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Article Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary-teal to-secondary-purple rounded-xl flex items-center justify-center mb-8">
              <div className="text-center text-white">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg opacity-75">Artikel Bild</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return <br key={index} />;
                
                // Handle markdown headers
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.substring(2)}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.substring(3)}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
                      {paragraph.substring(4)}
                    </h3>
                  );
                }
                
                // Handle list items
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-foreground/70 mb-1">
                      {paragraph.substring(2)}
                    </li>
                  );
                }
                
                // Handle bold text
                if (paragraph.includes('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={index} className="text-foreground/70 leading-relaxed mb-4">
                      {parts.map((part, partIndex) => 
                        partIndex % 2 === 1 ? (
                          <strong key={partIndex} className="font-semibold text-foreground">{part}</strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p key={index} className="text-foreground/70 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-secondary-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Teile diesen Artikel
            </h3>
            <div className="flex justify-center space-x-4">
              <Button size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Weitere Artikel
            </h2>
            <p className="text-xl text-foreground/70">
              Entdecke mehr interessante Artikel aus dem Napolill Blog.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for related articles */}
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <p className="text-foreground/60">
                Weitere Artikel werden hier angezeigt
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
