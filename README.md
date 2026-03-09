# Lorraine Wambiru — Portfolio

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lenis

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (cursor, page transitions, metadata)
│   ├── page.tsx                ← Main page (assembles all sections)
│   └── projects/[slug]/
│       └── page.tsx            ← Dynamic project detail pages
│
├── components/
│   ├── sections/               ← One file per main page section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── DesignProcess.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── shared/                 ← Global UI (cursor, page transition)
│   │   ├── SoftCursor.tsx
│   │   └── PageTransition.tsx
│   ├── layout/                 ← Layout wrappers if needed
│   └── ui/                     ← Reusable small components (Button, Tag, etc.)
│
├── hooks/
│   ├── useSmoothScroll.ts      ← Lenis smooth scroll
│   └── useCursor.ts            ← Soft cursor behaviour
│
├── lib/
│   ├── utils.ts                ← cn() helper
│   └── projects.ts             ← Project data (edit this to add/update projects)
│
├── styles/
│   └── globals.css             ← Palette variables, fonts, cursor styles
│
└── types/
    └── index.ts                ← TypeScript interfaces (Project, NavItem, etc.)

public/
├── images/
│   ├── projects/               ← Project cover images (named: [slug]-cover.jpg)
│   └── about/                  ← Your photo(s)
└── fonts/                      ← Self-hosted fonts (optional, we use Google Fonts)
```

## Color Palette

| Name    | Hex       | Usage                        |
|---------|-----------|------------------------------|
| Cream   | `#F7F7F2` | Primary text, light surfaces |
| Sage    | `#E4E6C3` | Subtle text, light accents   |
| Moss    | `#899878` | Accent, cursor, highlights   |
| Forest  | `#222725` | Surfaces, cards              |
| Ink     | `#121113` | Background                   |

## Adding a New Project

1. Add an entry to `src/lib/projects.ts`
2. Add cover image to `public/images/projects/[slug]-cover.jpg`
3. Build the detail page content in `src/app/projects/[slug]/page.tsx`

## Section Build Order

- [x] Project scaffold
- [ ] Navbar
- [ ] Hero
- [ ] Projects
- [ ] Design Process
- [ ] About
- [ ] Footer
