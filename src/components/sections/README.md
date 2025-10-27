# Napolill Website - Section Components

Flutter-ähnliche Section-Struktur für maximale Wartbarkeit und Wiederverwendbarkeit.

## Übersicht

Jede Seite (`page.tsx`) ist in kleine, wiederverwendbare Section-Komponenten aufgeteilt. Jede Section ist eine eigene Datei und erfüllt einen spezifischen Zweck.

## Ordner-Struktur

```
src/components/sections/
├── home/          # Home-Seite (9 Sections)
├── app/           # App-Seite (6 Sections)
├── science/       # Science-Seite (4 Sections)
├── faq/           # FAQ-Seite (2 Sections)
├── support/       # Support-Seite (3 Sections)
├── demo/          # Demo-Seite (2 Sections)
├── news/          # News-Seite (2 Sections)
├── legal/         # Privacy/Terms/Safety (2 Shared Sections)
├── studies/       # Studien-Seiten (2 Shared Sections)
└── shared/        # Wiederverwendbare Sections (FAQ, CTA, etc.)
```

## Section-Typen

### 1. Hero Sections

Erste Section auf jeder Seite - Titel, Beschreibung, Navigation.

**Beispiel:**

```tsx
// src/components/sections/home/HeroSection.tsx
export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Titel</h1>
        <p className="hero-description">Beschreibung</p>
      </div>
    </section>
  );
}
```

### 2. Content Sections

Hauptinhalt - Features, Listen, Grids.

**Beispiel:**

```tsx
// src/components/sections/home/FeaturesSection.tsx
export function FeaturesSection() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Features</h2>
        </div>
        <div className="feature-grid card-grid-3">{/* Features */}</div>
      </div>
    </section>
  );
}
```

### 3. Interactive Sections

Mit State-Management (useState, etc.).

**Beispiel:**

```tsx
// src/components/sections/faq/FAQListSection.tsx
export function FAQListSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  // State Logic...

  return (
    <section className="content-section">{/* Interactive Content */}</section>
  );
}
```

### 4. Shared Sections

Wiederverwendbar mit Props.

**Beispiel:**

```tsx
// src/components/sections/legal/LegalHeroSection.tsx
interface LegalHeroSectionProps {
  title: string;
  description: string;
  infoItems: InfoItem[];
}

export function LegalHeroSection({
  title,
  description,
  infoItems,
}: LegalHeroSectionProps) {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      <p>{description}</p>
      {/* Render infoItems */}
    </section>
  );
}
```

## Verwendung in page.tsx

### Vor dem Refactoring:

```tsx
// src/app/page.tsx - 945 Zeilen ❌
export default function Home() {
  return <Layout>{/* 945 Zeilen Code... */}</Layout>;
}
```

### Nach dem Refactoring:

```tsx
// src/app/page.tsx - 33 Zeilen ✅
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { FeaturesSection } from "@/components/sections/home/FeaturesSection";
// ... weitere Imports

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FocusSection />
      <ModesSection />
      <ProductivitySection />
      <SciencePreviewSection />
      <MoodThemesSection />
      <DownloadSection />
    </Layout>
  );
}
```

## Benennungskonventionen

### Dateinamen

- **PascalCase:** `HeroSection.tsx`, `FAQListSection.tsx`
- **Suffix "Section":** Alle Sections enden mit `Section`
- **Deskriptiv:** Name beschreibt den Zweck

### Komponenten-Namen

```tsx
// ✅ Gut
export function HeroSection() {}
export function FAQListSection() {}

// ❌ Schlecht
export function Hero() {}
export function FAQ() {}
```

### Props-Interfaces

```tsx
// Für Shared Sections mit Props
interface SectionNameProps {
  title: string;
  // ... weitere Props
}
```

## Props & State

### Wann Props verwenden?

- Section soll wiederverwendbar sein
- Inhalt kommt von außen
- Beispiel: Legal/Study Sections

```tsx
interface StudyHeroSectionProps {
  title: string;
  description: string;
  infoItems: InfoItem[];
}

export function StudyHeroSection(props: StudyHeroSectionProps) {
  // ...
}
```

### Wann State verwenden?

- Interaktive Funktionalität
- User-Input
- Beispiel: FAQ, Demo, Support

```tsx
export function FAQListSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  // ...
}
```

## Styling

### CSS-Klassen verwenden

```tsx
// ✅ Gut - Nutze vorgefertigte Klassen
<section className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">Titel</h1>
  </div>
</section>

// ❌ Schlecht - Inline Styles
<section style={{ minHeight: '50vh', display: 'flex' }}>
```

### Tailwind nutzen

```tsx
// Für Fine-Tuning zusätzlich zu CSS-Klassen
<div className="hero-section flex items-center justify-center">
```

### Theme-aware Colors

```tsx
// ✅ Gut - CSS-Variablen
<p style={{ color: 'var(--foreground)' }}>Text</p>

// ❌ Schlecht - Hardcoded
<p style={{ color: '#FFFFFF' }}>Text</p>
```

## Animations

### Framer Motion verwenden

```tsx
import { motion } from "framer-motion";

export function FeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="feature-section"
    >
      {/* Content */}
    </motion.section>
  );
}
```

## Neue Section erstellen

### 1. Datei erstellen

```bash
src/components/sections/[ordner]/[Name]Section.tsx
```

### 2. Template verwenden

```tsx
"use client";

import { motion } from "framer-motion";
// Weitere Imports...

export function YourSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Section Title</h2>
          <p className="section-subtitle">Description</p>
        </motion.div>

        {/* Section Content */}
      </div>
    </section>
  );
}
```

### 3. In page.tsx importieren

```tsx
import { YourSection } from "@/components/sections/[ordner]/YourSection";

export default function Page() {
  return (
    <Layout>
      <YourSection />
    </Layout>
  );
}
```

## Best Practices

### ✅ Do's

- Eine Section = Eine Aufgabe
- Sections sind wiederverwendbar
- Props für Shared Sections
- CSS-Klassen nutzen
- Theme-aware Colors
- Framer Motion für Animationen
- Responsive Design beachten

### ❌ Don'ts

- Keine 500+ Zeilen Sections
- Keine Inline Styles (außer theme-aware)
- Keine hardcoded Colors
- Keine duplicate Code
- Keine verschachtelten Sections

## Wartung

### Section ändern

1. Finde die richtige Section-Datei
2. Ändere nur diese Datei
3. Teste die Änderung
4. Prüfe Dark/Light Mode

### Section löschen

1. Entferne Import aus page.tsx
2. Entferne die Section-Datei
3. Prüfe auf Abhängigkeiten

### Section duplizieren

1. Kopiere Section-Datei
2. Benenne um (deskriptiv)
3. Passe Inhalt an
4. Importiere in page.tsx

## Vorteile dieser Struktur

✅ **Flutter-ähnlich:** Vertraute Struktur für Flutter-Entwickler

✅ **Übersichtlich:** ~25-30 Zeilen pro page.tsx

✅ **Wartbar:** Eine Section = Eine Datei

✅ **Wiederverwendbar:** Shared Sections mit Props

✅ **Keine Konflikte:** Isolierte Sections

✅ **Schnelle Änderungen:** Finde Section → Ändere → Fertig

✅ **Type-Safe:** TypeScript Props

✅ **Performance:** Code-Splitting möglich

## Beispiele

### Home-Seite

- **Vorher:** 945 Zeilen
- **Nachher:** 33 Zeilen (9 Sections)
- **Reduktion:** 96%

### Science-Seite

- **Vorher:** 430 Zeilen
- **Nachher:** 14 Zeilen (4 Sections)
- **Reduktion:** 97%

### Legal-Seiten (3 Seiten)

- **Vorher:** 1900 Zeilen total
- **Nachher:** 630 Zeilen total (2 Shared Sections)
- **Reduktion:** 67%

## Kontakt

Bei Fragen zur Section-Struktur: dev@napolill.com
