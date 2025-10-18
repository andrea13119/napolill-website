import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const footerNavigation = {
  app: [
    { name: 'Features', href: '/app' },
    { name: 'Download', href: '/app#download' },
    { name: 'Solfeggio-Frequenzen', href: '/app#frequencies' },
    { name: 'Mood-Themes', href: '/app#themes' },
  ],
  wissenschaft: [
    { name: 'Studien', href: '/science' },
    { name: 'Affirmationsforschung', href: '/science#research' },
    { name: 'Gehirn-Reprogrammierung', href: '/science#brain' },
    { name: 'Visualisierung', href: '/studies/visualization' },
    { name: 'Selbstaffirmation', href: '/studies/self-affirmation' },
    { name: 'Schlaf-Konsolidierung', href: '/studies/sleep-consolidation' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
    { name: 'News', href: '/news' },
    { name: 'Community', href: '/news' },
  ],
  rechtliches: [
    { name: 'Datenschutz', href: '/privacy' },
    { name: 'AGB', href: '/terms' },
    { name: 'Sicherheitshinweise', href: '/safety' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-secondary-purple border-t border-accent-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/images/icons/logo_napolill.png" 
                  alt="Napolill Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl text-text-light">Napolill</span>
            </Link>
            <p className="text-text-light/80 text-sm mb-4">
              REPROGRAM-BRAIN
            </p>
            <p className="text-text-light/60 text-sm">
              Die innovative App für Affirmationen und Gehirn-Reprogrammierung mit wissenschaftlichen Solfeggio-Frequenzen.
            </p>
          </div>

          {/* App */}
          <div>
            <h3 className="text-text-light font-semibold mb-4">App</h3>
            <ul className="space-y-2">
              {footerNavigation.app.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-light/70 hover:text-accent-rose transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wissenschaft */}
          <div>
            <h3 className="text-text-light font-semibold mb-4">Wissenschaft</h3>
            <ul className="space-y-2">
              {footerNavigation.wissenschaft.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-light/70 hover:text-accent-rose transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-text-light font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-light/70 hover:text-accent-rose transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-text-light font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              {footerNavigation.rechtliches.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-light/70 hover:text-accent-rose transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="mt-8 pt-8 border-t border-accent-rose/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-text-light/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@napolill.com</span>
              </div>
              <div className="flex items-center space-x-2 text-text-light/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+43 123 456 789</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-2 glass hover:glass-dark rounded-lg transition-all hover:scale-110"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-text-light hover:text-accent-rose transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-accent-rose/20 text-center">
          <p className="text-text-light/60 text-sm">
            © 2024 Napolill. Alle Rechte vorbehalten. | 
            <Link href="/privacy" className="hover:text-accent-rose transition-colors ml-1">
              Datenschutz
            </Link>
            {' | '}
            <Link href="/terms" className="hover:text-accent-rose transition-colors">
              AGB
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
