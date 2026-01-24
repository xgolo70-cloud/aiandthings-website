# AI and Things - Design System

The visual identity of **ai and things** is defined as the **"Technical Elegance"** aesthetic. It blends the structural precision of modern technology with the soulful elegance of high-end editorial and gallery design.

## 1. Visual Philosophy

- **Artistic Precision**: Combining bold, modern sans-serif typography with classic, italicized serif.
- **Cinematic Atmosphere**: Use of deep dark backgrounds, electric blue glows, and ambient blurs.
- **Tactile Interaction**: Premium micro-animations like magnetic buttons and smooth scroll reveal effects.
- **Grain & Texture**: Subtle use of film grain overlays on cards to evoke a sense of physical craftsmanship.

## 2. Design Tokens

### Colors

Defined in `src/app/globals.css`:

- **Neutrals**:
  - `background`: `#ffffff` (Light) | `neutral-950` (Dark)
  - `foreground`: `#171717` (Light) | `white` (Dark)
- **Accent Palette (Electric Blue)**:
  - `accent-50`: `#eff6ff` (Ambient blurs)
  - `accent-100`: `#dbeafe` (Background accents)
  - `accent-200`: `#bfdbfe` (Selection color / Light highlights)
  - `accent-300`: `#93c5fd` (Secondary states)
  - `accent-400`: `#60a5fa` (Secondary CTA states)
  - `accent-500`: `#3b82f6` (Primary text highlights / Icons)

### Typography

- **Sans-Serif (Structural)**: `Inter` / `Outfit` - Used for primary body text, navigation, and modern headings.
- **Serif (Editorial)**: `EB Garamond` - Used for emphasis, italicized headers, and quotes.
- **Mixed Type Pattern**: Combine `Sans Bold` + `Serif Italic` for high-impact headlines (e.g., "Masterful *Products.*").

## 3. Interaction Components

### Magnetic Effect (`src/components/ui/Magnetic.tsx`)

Applied to primary buttons and navigation links. It creates a subtle attraction as the cursor approaches, making the UI feel responsive and premium.

### Reveal Animation (`src/components/ui/Reveal.tsx`)

A standard fade-and-lift motion for all content chunks to ensure a smooth, orchestrated page entrance.

### Custom Cursor (`src/components/ui/CustomCursor.tsx`)

A minimal dot/ring cursor that follows the user, occasionally interacting with elements to enhance the "digital artisan" feel.

## 4. Layout Standards

- **Section Spacing**: Standard vertical padding is `py-24` to `py-32`.
- **Card Design**: 
  - Border: `border-neutral-100`.
  - Hover: `hover:border-accent-200` with a subtle blue background glow (`bg-accent-50/5`).
  - Corner Radius: Minimal (`rounded-sm` or `rounded-none`) to maintain a "gallery frame" look.
- **Section Dividers**: Subtle `border-t border-neutral-100` or a complete background shift to `neutral-950`.

---

### Created for ai and things - Last Updated: January 2026
