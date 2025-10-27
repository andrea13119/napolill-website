'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const blogPosts = [
  {
    id: 1,
    title: 'Napolill App Version 1.1: Neue Features und Verbesserungen',
    excerpt: 'Entdecke die neuen Funktionen der neuesten Napolill App Version, einschließlich verbesserter Solfeggio-Frequenzen und neuer Mood-Themes.',
    author: 'Napolill Team',
    date: '2024-01-15',
    category: 'App-Updates',
    readTime: '5 Min',
    tags: ['App-Update', 'Neue Features', 'Verbesserungen']
  },
  {
    id: 2,
    title: 'Die Wissenschaft hinter Solfeggio-Frequenzen: Neue Forschungsergebnisse',
    excerpt: 'Neueste wissenschaftliche Studien bestätigen die Wirkung von Solfeggio-Frequenzen auf das menschliche Gehirn und Wohlbefinden.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-10',
    category: 'Wissenschaft',
    readTime: '8 Min',
    tags: ['Wissenschaft', 'Solfeggio-Frequenzen', 'Forschung']
  },
  {
    id: 3,
    title: 'Erfolgsgeschichten: Wie Napolill Nutzern beim Überwinden von Ängsten hilft',
    excerpt: 'Echte Geschichten von Napolill-Nutzern, die ihre Ängste überwunden und ihr Leben transformiert haben.',
    author: 'Community Team',
    date: '2024-01-05',
    category: 'Community',
    readTime: '6 Min',
    tags: ['Erfolgsgeschichten', 'Community', 'Transformation']
  },
  {
    id: 4,
    title: 'Affirmationsforschung 2024: Die neuesten Erkenntnisse',
    excerpt: 'Ein Überblick über die wichtigsten Forschungsergebnisse zur Wirkung von Affirmationen auf das Gehirn im Jahr 2024.',
    author: 'Prof. Michael Chen',
    date: '2024-01-01',
    category: 'Wissenschaft',
    readTime: '10 Min',
    tags: ['Affirmationen', 'Forschung', 'Neurowissenschaft']
  },
  {
    id: 5,
    title: 'Napolill Community: Unsere ersten 10.000 Nutzer',
    excerpt: 'Ein Meilenstein für Napolill: Wir feiern unsere ersten 10.000 aktiven Nutzer und ihre inspirierenden Geschichten.',
    author: 'Napolill Team',
    date: '2023-12-28',
    category: 'Community',
    readTime: '4 Min',
    tags: ['Community', 'Meilenstein', 'Gratulation']
  },
  {
    id: 6,
    title: 'Schlaf und Gehirn-Reprogrammierung: Die perfekte Kombination',
    excerpt: 'Warum die Kombination aus Schlaf und gezielter Gehirn-Reprogrammierung so effektiv ist und wie Napolill das nutzt.',
    author: 'Dr. Lisa Schmidt',
    date: '2023-12-20',
    category: 'Wissenschaft',
    readTime: '7 Min',
    tags: ['Schlaf', 'Gehirn-Reprogrammierung', 'Wissenschaft']
  }
];

interface NewsFeedSectionProps {
  selectedCategory: string;
  searchTerm: string;
}

export function NewsFeedSection({ selectedCategory, searchTerm }: NewsFeedSectionProps) {
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Alle' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-primary-teal/10 text-primary-teal text-xs rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/60">•</span>
                      <span className="text-xs text-foreground/60">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('de-DE')}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary-purple/10 text-foreground/60 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" className="w-full mt-auto">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-foreground/60">
              Keine Artikel gefunden. Versuche es mit einem anderen Suchbegriff oder wähle eine andere Kategorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

