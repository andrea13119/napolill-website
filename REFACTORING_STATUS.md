# Website Refactoring Status

## Was bereits gemacht wurde ✅

### 1. Ordnerstruktur erstellt

```
src/
├── components/
│   ├── sections/
│   │   ├── home/      ✅ Erstellt
│   │   ├── app/       ✅ Erstellt
│   │   ├── science/   ✅ Erstellt
│   │   ├── faq/       ✅ Erstellt
│   │   ├── support/   ✅ Erstellt
│   │   ├── demo/      ✅ Erstellt
│   │   ├── news/      ✅ Erstellt
│   │   ├── legal/     ✅ Erstellt
│   │   ├── studies/   ✅ Erstellt
│   │   └── shared/   ✅ Erstellt
│   └── layout/        ✅ Erstellt
└── styles/            ✅ Erstellt
```

### 2. Layout-Komponenten migriert

- ✅ `src/components/layout/Navigation.tsx`
- ✅ `src/components/layout/Footer.tsx`
- ✅ `src/components/layout/Layout.tsx`

### 3. Erste Home-Sections erstellt

- ✅ `HeroSection.tsx` - Vollständig
- ✅ `FeaturesSection.tsx` - Vollständig
- ✅ `TestimonialsSection.tsx` - Vollständig

### 4. page.tsx refaktoriert

- ✅ Von 945 Zeilen auf ~40 Zeilen reduziert
- ✅ Verwendet jetzt Section-Komponenten
- ✅ Klare Struktur mit Imports

## Was noch zu tun ist ⏳

### Home-Seite (6 Sections fehlen noch)

1. `FocusSection.tsx` - Focus Enhancement mit Chart (Zeilen 371-448)
2. `ModesSection.tsx` - Horizontal Scroll Videos (Zeilen 450-529)
3. `ProductivitySection.tsx` - Productivity Data Chart (Zeilen 531-583)
4. `SciencePreviewSection.tsx` - Science Preview mit Brain Activity (Zeilen 585-704)
5. `MoodThemesSection.tsx` - Mood-based Themes (Zeilen 706-795)
6. `DownloadSection.tsx` - Download Buttons & Device Mockups (Zeilen 871-941)

### Andere Seiten

- **App-Seite**: 6 Sections erstellen
- **Science-Seite**: 4 Sections erstellen
- **FAQ-Seite**: 2 Sections erstellen
- **Support-Seite**: 3 Sections erstellen
- **Demo-Seite**: 2 Sections erstellen
- **News-Seite**: 2 Sections erstellen
- **Legal-Seiten**: 2 Shared Sections + 3 Seiten
- **Studien-Seiten**: 2 Shared Sections + 3 Seiten

### Style-Konsolidierung

- `src/styles/sections.css` erstellen
- `src/styles/components.css` erstellen
- `src/styles/utilities.css` erstellen
- Theme-Konsistenz sicherstellen

### Cleanup

- Ungenutzten Code entfernen
- Import-Pfade aktualisieren
- Alte Dateien löschen

## Wie weiter machen?

### Schritt 1: Home-Sections vervollständigen

```bash
# Kopiere den Code aus src/app/page.tsx (alten Version)
# In die jeweiligen Section-Dateien einfügen
```

Beispiel für `FocusSection.tsx`:

1. Öffne alte `src/app/page.tsx` (gesichert)
2. Finde den "Focus Enhancement" Code (Zeilen 370-449)
3. Erstelle neue Datei `src/components/sections/home/FocusSection.tsx`
4. Kopiere den Code hinein
5. Exportiere die Funktion `export function FocusSection()`
6. In `src/app/page.tsx` importieren und einfügen

### Schritt 2: Template verwenden

Jede neue Section sollte diese Struktur haben:

```tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function YourSection() {
  return (
    <section className="relative py-32 z-10">
      <div>{/* Content hier */}</div>
    </section>
  );
}
```

### Schritt 3: In page.tsx importieren

```tsx
import { YourSection } from "@/components/sections/home/YourSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <YourSection /> {/* ← Neu hinzufügen */}
      {/* ... weitere Sections */}
    </Layout>
  );
}
```

## Vorteile der neuen Struktur

✅ **Übersichtlich**: Jede Section ist eine eigene Datei
✅ **Wartbar**: Änderungen nur in einer Datei
✅ **Wiederverwendbar**: Sections können auf mehreren Seiten verwendet werden
✅ **Theme-aware**: Einheitliche Styles über CSS-Variablen
✅ **Type-safe**: Props-Interfaces für alle Komponenten
✅ **Flutter-ähnlich**: Gewohnte Struktur für Flutter-Entwickler

## Nächste Aktion

**Empfohlen**: Home-Sections vervollständigen, dann die restlichen Seiten refaktorieren.

Wie möchtest du fortfahren?
