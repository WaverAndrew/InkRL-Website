# inkRL - Learning pages

A production-ready Next.js marketing site with elegant scrolling animations, built with a minimalist monochrome "ink" aesthetic.

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom monochrome palette
- **Fonts**: DM Mono (headlines) + Inter (body)
- **Motion**: Framer Motion, Lenis (smooth scroll), GSAP ScrollTrigger
- **Deployment**: Ready for Vercel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts
  page.tsx            # Main landing page
  team/page.tsx       # Team page
  api/subscribe/     # Demo subscription API
  globals.css         # Global styles + CSS variables

components/
  Header.tsx          # Sticky navigation
  Footer.tsx          # Footer with contact info
  Hero.tsx            # Hero section with parallax
  ProblemSection.tsx  # Problem metrics & A/B limits
  SolutionSection.tsx # Solution cards with rotation
  HowItWorks.tsx      # Timeline with GSAP animations
  MarketNow.tsx       # Market opportunity
  EdgeContinuum.tsx   # Horizontal scroll comparison
  TeamGrid.tsx        # Team member cards
  ProgressBar.tsx     # Scroll progress indicator
  InkLogo.tsx         # SVG logo component
  InkUnderline.tsx    # Animated underline component
  Section.tsx         # Reusable section wrapper

lib/
  scroll.ts           # Lenis + GSAP ScrollTrigger setup
```

## Features

- ✅ Smooth scrolling with Lenis
- ✅ Scroll-triggered animations (Framer Motion + GSAP)
- ✅ Parallax effects
- ✅ Animated counters
- ✅ Timeline with stroke animations
- ✅ Horizontal scroll continuum
- ✅ Responsive design
- ✅ Accessibility (focus states, reduced motion)
- ✅ SEO optimized (Open Graph, metadata)

## Color Palette

- **Ink**: `#111` (primary text)
- **Paper**: `#FAFAF7` (background)
- **Muted Gray**: `#4B4B4B` (secondary text)
- **Accent Yellow**: `#F5E6A3` (highlights)
- **Accent Blue**: `#B8D4E3` (highlights)

## Customization

### Update Team Avatars

Place team member photos in `public/avatars/`:
- `andrea.jpg`
- `vittorio.jpg`
- `filippo.jpg`

### Modify Content

Edit component files in `components/` to update copy and sections.

### Adjust Animations

- Framer Motion animations: Edit component files
- GSAP ScrollTrigger: Modify `lib/scroll.ts` and component effects

## Performance

- Lighthouse score target: 95+
- Tree-shaken GSAP
- Optimized fonts (Next.js font optimization)
- Lazy-loaded images
- Respects `prefers-reduced-motion`

## License

MIT

