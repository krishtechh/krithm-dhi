# Krithim Dhi — AI & ML Society Website

## Original Problem Statement
Premium, futuristic, highly interactive single-page website for Krithim Dhi, the AI/ML department society of Dr. Akhilesh Das Gupta Institute of Professional Studies (ADGIPS). Apple-level minimalism + Awwwards interaction design + glassmorphism + cinematic scrolling. Deep black theme, electric violet/cyan/magenta accents, huge typography, custom cursor, cinematic loader, GSAP + Lenis scroll experience. Two signature interactions: scroll-stacked event cards and pinned horizontal-scroll team section. All content data-driven with clearly marked placeholders — no fabricated names, dates, achievements, or links.

## User Decisions
- Frontend-only build (contact form is a front-end demo with success toast — no backend)
- JavaScript (not TypeScript), matching the React template
- Abstract placeholder imagery for events; gradient monogram tiles for team portraits (no fake faces)

## Architecture
- React 19 + Tailwind CSS + GSAP (ScrollTrigger) + Lenis smooth scroll + sonner toasts + lucide-react icons
- Fonts: Cabinet Grotesk (display), Outfit (body), JetBrains Mono (labels)
- Component structure: src/components/{Loader, CustomCursor, BackgroundFX, Navbar, SectionCounter, Hero, VisionMission, Community, WhatWeDo, Achievements, IndustryConnect, Events, Team, Contact, Footer, Reveal}.jsx
- All content centralized in src/data/content.js (NAV_LINKS, STATS, TOPICS, WHAT_WE_DO, ACHIEVEMENTS, INDUSTRY, EVENTS, TEAM, CONTACT_CARDS) — editable without touching animation logic

## Implemented (July 2026)
- Cinematic loader: percentage counter, "INITIALIZING INTELLIGENCE..." → "WELCOME TO KRITHIM DHI", gradient progress line, slide-away reveal
- Custom cursor: glowing dot + lagging blur ring, expands on interactive elements, "VIEW"/"SCROLL" labels, disabled on touch devices
- Floating pill glass navbar with section-aware active glow indicator; full-screen glass mobile menu
- Hero: interactive particle-network canvas reacting to mouse, huge stacked KRITHIM DHI heading, dual CTAs, "SCROLL TO EXPLORE" arrow
- Vision/Mission glass panels with word-mask heading reveals
- Community: count-up stats (10+/50+/20+/15+), floating topic chips (AI, ML, GEN AI, DATA, RESEARCH, ROBOTICS, VISION, NLP)
- What We Do: 6 glass cards with icons, numbers, hover lift + gradient glow
- Achievements: trophy-wall cards with oversized index numerals, placeholder content
- Industry Connect: 6 glass cards + infinite placeholder logo marquee (no invented logos)
- Events: GSAP sticky stacked-card scroll (scale/rotate/dim previous, image parallax, 01/06 side counter)
- Team: pinned horizontal-scroll of 10 premium position cards (President → Media & Outreach Lead), monogram placeholders
- Contact: glass query form with success toast; alternate contact cards with placeholders
- Footer: oversized wordmark, socials placeholder icons, pulsing "System Online" dot
- Side section counter (01/08) tracking scroll position; Lenis smooth scrolling; reduced-motion support; data-testids throughout

## Verified
- Desktop: hero, community stats, events stack (card 04/06 sharp mid-scroll), pinned team horizontal scroll, contact section
- Mobile (390px): hero layout, full-screen menu open/close, contact form submit → success toast

## Backlog / Next Tasks
- P0: Replace placeholders with real content — team names/photos, event titles/dates/images, achievements, social links, society email
- P1: Wire contact form to a real backend (save queries to MongoDB) or email service (Resend)
- P1: Real event detail view/modal when clicking an event card
- P2: Blog/updates section, gallery lightbox, SEO/meta OG tags, custom favicon
