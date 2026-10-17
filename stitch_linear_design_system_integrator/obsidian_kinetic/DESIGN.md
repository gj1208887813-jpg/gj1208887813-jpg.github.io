---
name: Obsidian Kinetic
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e1e3'
  on-surface-variant: '#c6c5d5'
  inverse-surface: '#e5e1e3'
  inverse-on-surface: '#313032'
  outline: '#908f9e'
  outline-variant: '#454652'
  surface-tint: '#bdc2ff'
  primary: '#bdc2ff'
  on-primary: '#121f8b'
  primary-container: '#5e6ad2'
  on-primary-container: '#fdfaff'
  inverse-primary: '#4854bb'
  secondary: '#ffafd5'
  on-secondary: '#620042'
  secondary-container: '#880a5e'
  on-secondary-container: '#ff92ca'
  tertiary: '#d4bbff'
  on-tertiary: '#3f0c84'
  tertiary-container: '#855ecd'
  on-tertiary-container: '#fffafb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000965'
  on-primary-fixed-variant: '#2e3aa2'
  secondary-fixed: '#ffd8e8'
  secondary-fixed-dim: '#ffafd5'
  on-secondary-fixed: '#3d0027'
  on-secondary-fixed-variant: '#880a5e'
  tertiary-fixed: '#ebdcff'
  tertiary-fixed-dim: '#d4bbff'
  on-tertiary-fixed: '#260059'
  on-tertiary-fixed-variant: '#562d9b'
  background: '#131315'
  on-background: '#e5e1e3'
  surface-variant: '#353436'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-code:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-nav:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-lg: 1.5rem
  margin: 1.5rem
  margin-lg: 3rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system targets an ultra-modern, engineering-driven personal portfolio aesthetic reminiscent of high-end developer tooling and futuristic digital interfaces. The visual tone is atmospheric, precise, restrained, and unmistakably modern. 

### Visual Pillars
- **Dark Elegance & Atmospheric Depth**: Built over an abyss of near-black hues (`#050506`), layered with low-opacity indigo, violet, and soft pink volumetric glows.
- **Precision Craftsmanship**: Utilitarian micro-typography, precise hairline borders, and razor-sharp alignment juxtaposed against organic radial ambient lighting.
- **Asymmetric Modernism**: Asymmetric bento grids and architectural folder tabs that provide structured modularity while feeling fluid, cinematic, and responsive.
- **Tactile Interactivity**: Surfaces respond with cursor spotlights, hairline border illumination, dynamic scale micro-transitions, and muted glass refraction.

## Colors

The palette establishes high chromatic tension between an ultra-dark field and subtle, luminous light sources.

### Color Tokens & Roles
- **Canvas Base (`#020203` to `#050506`)**: The zero-level ground plane absorbing ambient glare.
- **Surface Elevation (`#0D0D11`, `#14151B`, `#1C1D26`)**: Monochromatic obsidian tones used for resting and elevated container cards.
- **Primary Accent (`#5E6AD2`)**: A calibrated electric indigo used for key actions, brand anchor moments, focus states, and foundational gradients.
- **Secondary & Tertiary Glows (`#EC65B1`, `#8A63D2`)**: Aurora magenta and atmospheric violet, deployed exclusively within radial gradient masks, spotlight fills, and soft state indicators.
- **Border Gradients (`rgba(255, 255, 255, 0.06)` to `rgba(94, 106, 210, 0.35)`)**: Subdued resting hairlines that reactively shift toward indigo on hover.
- **Text Tiers**:
  - Primary: `#F7F8F8` (High-contrast, crisp white)
  - Secondary: `#8A8F98` (Muted silver-grey)
  - Tertiary / Sub-label: `#525866` (Deep slate)

## Typography

The typographic hierarchy pairs Geist’s cold, engineered geometric precision for titles and micro-metadata with Inter’s readable cadence for body text. 

Tight negative tracking is enforced on all headlines (`-0.015em` to `-0.035em`) to evoke density and editorial discipline. Code snippets, tags, and categorical badges utilize Geist in uppercase or normalized monospace cadence with loosened tracking (`0.04em`) to establish visual separation between content and system data.

## Layout & Spacing

The structural layout utilizes a strict 12-column asymmetric bento grid capped at a maximum width of `1280px`. 

### Layout Model
- **Hero & Bento Hierarchy**: Grid items span non-uniform columns (e.g., 8/4, 7/5, 4/4/4, or 12 full-width horizontal breaks) to accommodate mixed content types like live terminals, interactive canvases, and project metrics.
- **Folder Tabs Structure**: Project collections mimic file directories and layered folders. Top headers have inset tab boundaries with 1px horizontal division lines spanning across grid columns.
- **Breakpoints**:
  - `Desktop (> 1024px)`: Full 12-column bento grid, `1.5rem` gutters, outer section margin of `3rem`.
  - `Tablet (768px - 1023px)`: 6-column reflow, `1.25rem` gutters, outer margin of `2rem`. Complex bento blocks collapse to 3-column splits.
  - `Mobile (< 767px)`: Single-column linear stack, `1rem` gutters, outer margin of `1.25rem`. Folder tabs transition into horizontally scrollable pill bars.

## Elevation & Depth

Visual depth is achieved through stacked translucent planes, multi-stop outer shadows, and cursor-driven luminous highlights rather than heavy opaque fills.

### Layering Engine
1. **Background Horizon**: Radial spotlight fields (`radial-gradient(circle at 50% -20%, rgba(94, 106, 210, 0.15), transparent 70%)`).
2. **Glass Container Layer**: Background `#0B0C10` with `backdrop-filter: blur(16px)` and subtle internal lighting (`inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`).
3. **Hairline Perimeters**: `1px solid rgba(255, 255, 255, 0.06)`, switching dynamically on cursor proximity or focus to `rgba(94, 106, 210, 0.4)`.
4. **Multi-layer Shadow Stacks**:
   - Floating elements apply dual ambient drops: `0 4px 20px -2px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(94, 106, 210, 0.12)`.
   - Modals and contextual popovers utilize an outer atmospheric ring: `0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.08)`.

## Shapes

The design uses a controlled roundedness scale (`0.5rem` to `1rem`) that maintains architectural rigor while remaining soft to the eye.

- **Primary Cards & Bento Cells**: Default `12px` (`rounded-lg`), delivering structural geometry without harsh terminal corners.
- **Nested Inner Elements & Inputs**: Scaled down to `8px` (`rounded-md`) to ensure consistent concentric radii within parent containers.
- **Folder Tabs & Badges**: Tab shoulders use `8px` top curvature with flush flat bottoms. Status indicators and interactive tag pills use full-round radius (`9999px`).

## Components

### Buttons
- **Primary Action**: Solid obsidian core with an animated gradient border or subtle top-edge highlight (`linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)`). Accent variant features full indigo fill (`#5E6AD2`) with an ambient hover glow (`box-shadow: 0 0 24px rgba(94, 106, 210, 0.45)`).
- **Secondary / Ghost**: Pure transparent fill, hairline border `rgba(255, 255, 255, 0.08)`, text color `#8A8F98`. Hover triggers color change to `#F7F8F8` and background fill `rgba(255, 255, 255, 0.04)`.
- **Keyboard Shortcut Affordance**: Buttons may include an inline terminal badge (e.g., `⌘K`) in muted monospace typography.

### Bento Project Cards
- Constructed with an outer hairline border, internal gradient bleed, and an active spotlight that tracks mouse movement across the card surface.
- Inner elements showcase rich content hierarchy: an upper utility bar featuring project status badges, followed by bold display typography, high-resolution media previews, and interactive footer links with slide-in arrow icons.

### Folder Tabs & File Navigation
- Distinct segmented navigation mimicking an IDE or filesystem tab bar.
- Selected tabs possess an elevated obsidian surface, hairline top border in primary indigo (`#5E6AD2`), and a subtle internal gradient highlighting the active workspace.
- Inactive tabs blend into the background with muted typography, illuminating only on pointer hover.

### Inputs & Search Bars
- Glass background (`rgba(13, 13, 17, 0.75)`), hairline perimeter `rgba(255, 255, 255, 0.08)`.
- Active state introduces an indigo rim focus (`rgba(94, 106, 210, 0.6)`) alongside a soft radial back-glow. Placeholder text sits in `#525866`.

### Chips & Status Badges
- Compact height (`24px`), fully rounded (`9999px`) or clipped (`4px`), featuring an active ping dot (pulsing indicator for "Available for projects" or "v2.4 Live").
- Background rendered in deep translucent tones (`rgba(94, 106, 210, 0.08)`) bound with subtle matching borders (`rgba(94, 106, 210, 0.2)`).