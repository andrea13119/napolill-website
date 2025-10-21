'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Layout } from '@/components/Layout';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Napolill App Version 1.1: Neue Features und Verbesserungen',
    excerpt: 'Entdecke die neuen Funktionen der neuesten Napolill App Version, einschließlich verbesserter Solfeggio-Frequenzen und neuer Mood-Themes.',
    content: 'Die neueste Version der Napolill App bringt aufregende neue Features...',
    author: 'Napolill Team',
    date: '2024-01-15',
    category: 'App-Updates',
    readTime: '5 Min',
    image: '/blog/app-update-1.1.jpg',
    tags: ['App-Update', 'Neue Features', 'Verbesserungen']
  },
  {
    id: 2,
    title: 'Die Wissenschaft hinter Solfeggio-Frequenzen: Neue Forschungsergebnisse',
    excerpt: 'Neueste wissenschaftliche Studien bestätigen die Wirkung von Solfeggio-Frequenzen auf das menschliche Gehirn und Wohlbefinden.',
    content: 'Forscher der Universität Oxford haben in einer neuen Studie...',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-10',
    category: 'Wissenschaft',
    readTime: '8 Min',
    image: '/blog/solfeggio-research.jpg',
    tags: ['Wissenschaft', 'Solfeggio-Frequenzen', 'Forschung']
  },
  {
    id: 3,
    title: 'Erfolgsgeschichten: Wie Napolill Nutzern beim Überwinden von Ängsten hilft',
    excerpt: 'Echte Geschichten von Napolill-Nutzern, die ihre Ängste überwunden und ihr Leben transformiert haben.',
    content: 'Maria aus München berichtet über ihre Erfahrungen...',
    author: 'Community Team',
    date: '2024-01-05',
    category: 'Community',
    readTime: '6 Min',
    image: '/blog/success-stories.jpg',
    tags: ['Erfolgsgeschichten', 'Community', 'Transformation']
  },
  {
    id: 4,
    title: 'Affirmationsforschung 2024: Die neuesten Erkenntnisse',
    excerpt: 'Ein Überblick über die wichtigsten Forschungsergebnisse zur Wirkung von Affirmationen auf das Gehirn im Jahr 2024.',
    content: 'Die Affirmationsforschung hat in den letzten Jahren...',
    author: 'Prof. Michael Chen',
    date: '2024-01-01',
    category: 'Wissenschaft',
    readTime: '10 Min',
    image: '/blog/affirmation-research-2024.jpg',
    tags: ['Affirmationen', 'Forschung', 'Neurowissenschaft']
  },
  {
    id: 5,
    title: 'Napolill Community: Unsere ersten 10.000 Nutzer',
    excerpt: 'Ein Meilenstein für Napolill: Wir feiern unsere ersten 10.000 aktiven Nutzer und ihre inspirierenden Geschichten.',
    content: 'Vor einem Jahr haben wir Napolill gestartet...',
    author: 'Napolill Team',
    date: '2023-12-28',
    category: 'Community',
    readTime: '4 Min',
    image: '/blog/community-milestone.jpg',
    tags: ['Community', 'Meilenstein', 'Gratulation']
  },
  {
    id: 6,
    title: 'Schlaf und Gehirn-Reprogrammierung: Die perfekte Kombination',
    excerpt: 'Warum die Kombination aus Schlaf und gezielter Gehirn-Reprogrammierung so effektiv ist und wie Napolill das nutzt.',
    content: 'Schlaf ist nicht nur zur Erholung da...',
    author: 'Dr. Lisa Schmidt',
    date: '2023-12-20',
    category: 'Wissenschaft',
    readTime: '7 Min',
    image: '/blog/sleep-reprogramming.jpg',
    tags: ['Schlaf', 'Gehirn-Reprogrammierung', 'Wissenschaft']
  }
];

const categories = ['Alle', 'App-Updates', 'Wissenschaft', 'Community'];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Alle' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Napolill News
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
              Bleibe auf dem Laufenden mit den neuesten App-Updates, 
              wissenschaftlichen Erkenntnissen und Community-News.
            </p>
            <div className="flex items-center justify-center space-x-8 text-foreground/70 text-sm">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Regelmäßige Updates
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Community Stories
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Wissenschaftliche News
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-primary-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Artikel durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-foreground/50 w-5 h-5" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-napolill-gradient text-white'
                        : 'bg-background border border-primary-teal/20 text-foreground hover:bg-primary-teal/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" hover className="h-full overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-teal to-secondary-purple flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">Blog Image</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent-rose/20 text-accent-rose text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('de-DE')}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-primary-teal/10 text-primary-teal text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button variant="outline" size="sm" className="w-full">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Keine Artikel gefunden
              </h3>
              <p className="text-foreground/60">
                Versuche es mit anderen Suchbegriffen oder Kategorien.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Newsletter abonnieren
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Erhalte die neuesten Updates, wissenschaftlichen Erkenntnisse und 
              Community-News direkt in dein Postfach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-3 bg-background border border-primary-teal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-rose focus:border-transparent text-foreground"
              />
              <Button className="whitespace-nowrap">
                Abonnieren
              </Button>
            </div>

            <p className="text-sm text-foreground/60">
              Keine Spam-E-Mails. Jederzeit abbestellbar. 
              <a href="/privacy" className="text-accent-rose hover:underline ml-1">
                Datenschutz
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
