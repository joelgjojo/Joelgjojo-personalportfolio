# Joel G Jojo — Portfolio v2

Real redesign built on real content (your existing project assets, bio, VYQO link) — no filler/placeholder text.

## Run locally
npm install
npm run dev

## Deploy
Push this folder to a GitHub repo and import it in Vercel (same as your current site), or run:
npx vercel

## What to swap in before shipping
- All project images currently reuse assets from your live site's /assets folder via direct URL (works fine, but ideally move them into /public/assets in THIS project so you're not dependent on the old deployment staying up).
- The "VYQO DSGN" project card (Work section, #04) currently uses your Kerala photography shots as filler images since there's no dedicated screenshot of VYQO yet — swap in real VYQO DSGN screenshots when you have them.
- Skill %s in the terminal (About section) are placeholders (web_development at 40%) — adjust to reflect where you actually are.
- Contact section links to LinkedIn/Instagram/GitHub from your old site — verify these are current.

## Structure
- src/components/HeroSection.tsx — name + tagline
- src/components/MarqueeSection.tsx — scrolling image strip
- src/components/AboutSection.tsx — bio + terminal signature element
- src/components/Terminal.tsx — the "installing skills" animation (this is the site's signature element — ties to your Linux/terminal aesthetic from the old site, and is what honestly signals "learning web dev" instead of overclaiming)
- src/components/ServicesSection.tsx — skills list with core/in-training tags
- src/components/ProjectsSection.tsx — sticky-stacking project cards
- src/components/ContactSection.tsx — closing CTA + socials
