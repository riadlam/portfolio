# Mizan Chambers — Dubai Law Firm

A premium bilingual (EN/AR) law firm website built with React, Vite, TypeScript, Framer Motion, and React Router.

## Brand

**Mizan Chambers / ميزان للشؤون القانونية** — DIFC Dubai  
Identity: *Quiet authority* · Newsreader serif + Sora body · Navy / Ivory / Copper palette

## Tech Stack

- React 19 + TypeScript
- Vite 8
- React Router DOM 7
- Framer Motion 12
- IBM Plex Sans Arabic / Newsreader / Sora (Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — asymmetric hero, principles bands, practice accordion, trust strip, CTA |
| `/about` | About — story + pull quote, values, partner team cards |
| `/practice` | Practice — sticky desktop index + panel; mobile accordion |
| `/contact` | Contact — left rail details, form with copper focus, office image |

## Features

- Bilingual EN / AR with RTL support via `LanguageProvider`
- Animated language toggle with Framer Motion `layoutId` spring underline
- Top-curtain mobile menu (slides down from navbar)
- Ken-burns hero image, staggered Reveal animations
- Accordion height animations, page transitions with AnimatePresence
- Copper offset frame on trust strip image

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
