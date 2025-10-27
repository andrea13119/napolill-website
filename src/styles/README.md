# Napolill Website - Style System

Zentrale Dokumentation für das Style-System der Napolill Website.

## Datei-Übersicht

### `sections.css`

Section-spezifische Styles für wiederverwendbare Layout-Patterns:

- Hero Sections
- Feature Sections
- Content Sections
- Card Layouts
- CTA Sections
- Responsive Utilities
- Animation Utilities

### `components.css`

UI-Komponenten Styles für wiederverwendbare Elemente:

- Buttons (primary, outline, ghost, 3D)
- Cards (base, glass, hover)
- Inputs & Forms
- Badges & Tags
- Navigation
- Icons
- Tooltips
- Loading States
- Dividers
- Scrollbar

### `utilities.css`

Helper-Klassen für schnelles Styling:

- Spacing (container, padding)
- Flex Utilities
- Text Utilities (sizes, weights, alignment)
- Opacity
- Position & Z-Index
- Background
- Border & Radius
- Shadow
- Transitions
- Hover Effects
- Overflow
- Visibility
- List Styles
- Line Clamp

## CSS-Variablen (aus globals.css)

### Brand Colors

```css
--primary-teal: #5FB4A8
--secondary-purple: #9B7DB5
--accent-rose: #F3A6B7
```

### Theme Colors

```css
--background: (hell/dunkel)
--foreground: (hell/dunkel)
```

### Gradients

```css
--napolill-gradient
--icon-gradient
```

### Verwendung

#### In Section-Komponenten:

```tsx
// Hero Section
<section className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">Titel</h1>
    <p className="hero-description">Beschreibung</p>
  </div>
</section>

// Feature Section
<section className="feature-section">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Features</h2>
      <p className="section-subtitle">Untertitel</p>
    </div>
    <div className="feature-grid card-grid-3">
      {/* Feature Cards */}
    </div>
  </div>
</section>
```

#### Mit UI-Komponenten:

```tsx
// Button
<button className="button-base button-primary modern-button-3d">
  Click Me
</button>

// Card
<div className="card-base card-glass card-hover">
  <div className="card-content">
    {/* Content */}
  </div>
</div>

// Input
<input className="input-base" placeholder="Email" />
```

#### Mit Utilities:

```tsx
// Spacing & Layout
<div className="container p-section">
  <div className="flex-center gap-4">
    {/* Content */}
  </div>
</div>

// Text & Styling
<h1 className="text-4xl font-bold text-center text-gradient">
  Gradient Title
</h1>

// Hover Effects
<div className="hover-lift transition duration-300">
  {/* Lifts on hover */}
</div>
```

## Spacing System

- **Container Max-Widths:**

  - Default: 80rem (1280px)
  - Narrow: 64rem (1024px)
  - Wide: 96rem (1536px)

- **Section Padding:**

  - Default: 5rem (80px)
  - Large: 8rem (128px)
  - Small: 3rem (48px)

- **Gap Sizes:**
  - gap-1: 0.25rem
  - gap-2: 0.5rem
  - gap-3: 0.75rem
  - gap-4: 1rem
  - gap-6: 1.5rem
  - gap-8: 2rem

## Responsive Breakpoints

```css
mobile: max-width 640px
tablet: 641px - 768px
desktop: 769px - 1024px
large: 1025px+
```

## Best Practices

### 1. Verwende CSS-Variablen für Colors

```tsx
// ✅ Gut
style={{ color: 'var(--primary-teal)' }}

// ❌ Schlecht
style={{ color: '#5FB4A8' }}
```

### 2. Nutze vorgefertigte Klassen

```tsx
// ✅ Gut
<div className="container p-section">

// ❌ Schlecht
<div style={{ maxWidth: '80rem', padding: '5rem 0' }}>
```

### 3. Kombiniere Utility-Klassen

```tsx
// ✅ Gut
<button className="button-base button-primary hover-lift transition">

// ❌ Schlecht (zu viele inline Styles)
<button style={{ padding: '...', background: '...', ... }}>
```

### 4. Verwende semantische Klassennamen

```tsx
// ✅ Gut
<section className="hero-section">

// ❌ Schlecht
<section className="section1">
```

## Theme-Kompatibilität

Alle Styles sind Dark/Light-Mode kompatibel:

- Verwende `var(--foreground)` für Text
- Verwende `var(--background)` für Hintergründe
- Opacity-Varianten für semi-transparente Elemente

## Performance

- Alle Animationen nutzen `transform` und `opacity` für GPU-Beschleunigung
- Transitions sind auf 150-700ms limitiert
- Hover-Effekte sind optimiert für 60fps

## Wartung

Bei Änderungen:

1. Prüfe Konsistenz über alle Sections
2. Teste Dark & Light Mode
3. Teste auf allen Breakpoints
4. Update diese Dokumentation

## Kontakt

Bei Fragen zum Style-System: style@napolill.com
