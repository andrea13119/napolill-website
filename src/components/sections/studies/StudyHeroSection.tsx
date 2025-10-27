'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Users, Calendar, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface InfoItem {
  icon: LucideIcon;
  text: string;
}

interface StudyHeroSectionProps {
  title: string;
  description: string;
  infoItems: InfoItem[];
  backLink?: string;
}

export function StudyHeroSection({ title, description, infoItems, backLink = '/science' }: StudyHeroSectionProps) {
  return (
    <section className="relative min-h-[50vh] bg-napolill-gradient overflow-hidden flex items-center justify-center pt-32 md:pt-44">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center justify-center min-h-[50vh]"
        >
          <Link href={backLink} className="inline-flex items-center text-foreground/70 hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Science-Seite
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-foreground/70 text-sm">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <item.icon className="w-4 h-4 mr-2" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

