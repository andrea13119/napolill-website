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
    <footer className="border-t border-accent-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-40" style={{paddingBottom: '200px'}}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4 text-center md:text-left">
            <div className="mb-6">
              <h2 className="font-bold text-2xl text-foreground mb-2">Napolill</h2>
              <p className="text-foreground/80 text-sm mb-4">REPROGRAM-BRAIN</p>
              <p className="text-foreground/90 text-sm leading-relaxed">
                Die innovative App für Affirmationen und Gehirn-Reprogrammierung mit wissenschaftlichen Solfeggio-Frequenzen.
              </p>
            </div>
          </div>

          {/* App */}
          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="col-span-1">
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
                  <item.icon className="w-5 h-5 text-foreground hover:text-accent-rose transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-accent-rose/20 text-center pb-16">
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
