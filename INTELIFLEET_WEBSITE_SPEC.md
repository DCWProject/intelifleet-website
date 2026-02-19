# InteliFleet.in — Website Build Spec (React)  
**Goal:** Build a premium, enterprise-grade marketing website for **InteliFleet** that visually and structurally matches the look/feel of **sarvam.ai** (clean, modern, typographic, spacious, minimal gradients, strong sections, uppercase nav groups, large hero). :contentReference[oaicite:0]{index=0}

This spec is written for Codex to implement in **ReactJS** with a production-ready structure, responsive design, SEO, and “old company with lots of information” depth (many pages + footer links).

---

## 0) Tech & Implementation Requirements

### Recommended stack (do this)
- **Next.js (React) + App Router** for SEO + fast routing
- **Tailwind CSS** for styling
- **MDX** for blog/docs pages
- **next-sitemap** for sitemap.xml
- **next-seo** (optional) for consistent metadata

### Must-have
- 100% responsive (mobile → desktop)
- Lighthouse-friendly: image optimization, lazy loading, accessible headings
- Clean typography & spacing similar to sarvam.ai sections (big hero, crisp cards, strong whitespace) :contentReference[oaicite:1]{index=1}
- Sticky top nav with uppercase category labels (“PRODUCT”, “SOLUTIONS”, “DEVELOPERS”, “COMPANY”)
- Footer with many columns and deep links similar density (Products / Developers / Company / Legal / Social) :contentReference[oaicite:2]{index=2}

---

## 1) Branding & Theme

### Logo
- Use the attached InteliFleet logo as primary brand mark:
  - Place at: `/public/brand/intelifleet-logo.svg` (preferred SVG)
  - Provide dark & light variants if available:
    - `/public/brand/intelifleet-logo-dark.svg`
    - `/public/brand/intelifleet-logo-light.svg`

### Colors
> Use logo colors as the source of truth. Extract 1 primary + 2 accents from the logo.
Create a token file and avoid random colors.

- `--bg`: near-black / off-white depending on theme
- `--fg`: near-white / near-black
- `--muted`: slate/gray
- `--primary`: from logo
- `--accent1`: from logo
- `--accent2`: from logo
- `--border`: subtle 1px

### Typography (match sarvam.ai-style)
- Primary font: `Inter` (or `Geist Sans` if preferred)
- Headings: same family, heavier weight, tight line-height
- Use **large hero H1** + short subheading + CTA pair (like sarvam.ai hero) :contentReference[oaicite:3]{index=3}
- Add subtle letter-spacing for section labels (e.g., “A I  F O R  A L L” style) on select pages :contentReference[oaicite:4]{index=4}

---

## 2) Site Map (Pages & Routes)

### Top-level routes
1. `/` — Home (Marketing landing)
2. `/product` — Product overview
3. `/product/live-tracking`
4. `/product/fuel-intelligence`
5. `/product/sweeping-intelligence`
6. `/product/driver-intelligence`
7. `/product/maintenance`
8. `/product/security-alerts`
9. `/product/reports-analytics`
10. `/apps` — iOS + Android app pages
11. `/apps/ios`
12. `/apps/android`
13. `/solutions` — Solutions hub
14. `/solutions/individual-owners`
15. `/solutions/logistics-transporters`
16. `/solutions/bus-operators`
17. `/solutions/municipal-sweeping`
18. `/solutions/construction-industrial`
19. `/pricing`
20. `/customers` — Logos + testimonials
21. `/case-studies` (index)
22. `/case-studies/[slug]` (3 sample case studies)
23. `/docs` — Developer docs hub
24. `/docs/getting-started`
25. `/docs/device-integration`
26. `/docs/api-reference`
27. `/docs/webhooks`
28. `/docs/security`
29. `/blog` — Blog index
30. `/blog/[slug]`
31. `/company/about`
32. `/company/team`
33. `/company/careers`
34. `/company/contact`
35. `/company/partners`
36. `/security` — Security overview
37. `/status` — Status (static page + link placeholder)
38. `/legal/terms`
39. `/legal/privacy`
40. `/legal/cookies`
41. `/legal/dpa`
42. `/legal/acceptable-use`
43. `/resources` — Whitepapers, brochures
44. `/resources/brochures`
45. `/resources/faq`
46. `/support` — Support hub
47. `/support/faq`
48. `/support/ticket`
49. `/support/installation`

> Add canonical URLs and metadata for each route.

---

## 3) Global Navigation (Header)

Sticky top nav with this structure (uppercase category labels):

- **PRODUCT**
  - Product Overview
  - Live Tracking
  - Fuel Intelligence
  - Sweeping Intelligence
  - Driver Intelligence
  - Maintenance
  - Security & Alerts
  - Reports & Analytics

- **SOLUTIONS**
  - Individual Owners
  - Logistics & Transport
  - Bus Operators
  - Municipal Sweeping
  - Construction & Industrial

- **DEVELOPERS**
  - Docs
  - API Reference
  - Webhooks
  - Device Integration
  - SDKs (placeholder)

- **COMPANY**
  - About
  - Customers
  - Case Studies
  - Blog
  - Careers
  - Contact

Right side CTA buttons:
- Primary: **Get a Demo**
- Secondary: **View Pricing**

Mobile:
- Hamburger menu
- Full-screen sheet with same groups and links

---

## 4) Homepage Content (/) — Section-by-Section (Detailed)

### 4.1 Hero (above the fold)
**Headline (H1):**
> **Real-time Fleet Intelligence for every vehicle.**

**Subheadline:**
> GPS tracking, fuel intelligence, activity verification (including sweeping/cleaning), alerts, and analytics — powered by telemetry + sensors.

**CTAs:**
- Primary: **Book a Demo**
- Secondary: **Explore the Product**

**Hero visual (right side):**
- A premium UI mock illustration (no real data):
  - Fleet map with vehicles
  - Fuel graph + “sudden drop” alert card
  - Sweeping “Cleaning ON/OFF” timeline
  - KPI strip: uptime, vehicles tracked, alerts resolved

### 4.2 “Trusted by” logo strip
- 10–15 placeholder partner/customer logos (grayscale)

### 4.3 Three pillars (like sarvam.ai “Powering…” cards)
Card 1: **Universal by design**  
Card 2: **Sensor-first intelligence**  
Card 3: **Built for reliability**

(Use icon + headline + 2-line copy) :contentReference[oaicite:5]{index=5}

### 4.4 Product Modules (grid)
Show a 2x3 or 3x2 grid with links:
- Live Tracking
- Fuel Intelligence
- Sweeping Intelligence
- Driver Intelligence
- Maintenance
- Security & Alerts
- Reports & Analytics

Each card:
- short description
- “Learn more →”

### 4.5 “See it in action” interactive area
Tabbed showcase:
- **Fuel Theft Detection**
- **Route Playback**
- **Sweeping Verification**
- **Idle Misuse**
- **Geofencing**
- **Driver Score**

Each tab updates:
- short copy
- mock screenshot panel

### 4.6 Deployment Options
Three cards (similar to sarvam.ai “Built to run anywhere…”) :contentReference[oaicite:6]{index=6}
- **Cloud**
- **Private Cloud / VPC**
- **On-Premise**

### 4.7 Mobile Apps section
Two tiles with store badges:
- **iOS App**
- **Android App**
Include bullet highlights:
- Live tracking
- Alerts
- Trip history
- Driver tools (optional)
Add placeholder links for:
- Apple App Store URL
- Google Play URL

### 4.8 Security & Compliance
Badges + bullets:
- Encryption in transit & at rest
- Role-based access control
- Audit logs
- Data retention policies
- Optional on-prem / air-gapped

### 4.9 Testimonials / Case study highlight
- 1–2 testimonials with name, role, company
- “Read case study →”
(Keep text short and strong; no long paragraphs)

### 4.10 Blog/Updates strip
Show 3 latest posts cards:
- “Introducing InteliFleet Fuel Intelligence”
- “How to detect fuel theft with sensors”
- “Sweeping analytics: proving cleaning happened”

### 4.11 Final CTA
> **Bring certainty to fleet operations.**
Buttons: **Talk to Sales** / **Get Started**

---

## 5) Product Pages (Deep Feature Copy for Developers & Buyers)

> Each product page must have:
- Hero + short summary
- “How it works” (step-by-step)
- Feature list (detailed)
- Sample events/data model (developer-friendly)
- Screenshots (mock)
- CTA

### 5.1 `/product/live-tracking`
Include:
- Real-time GPS (MQTT/HTTP ingestion)
- Route playback
- Geofencing
- Speed & idle
- Engine ON/OFF

Developer section:
- Data fields: `vehicle_id, lat, lng, speed, heading, ts, ignition`
- Event types: `location.ping, ignition.on, ignition.off, geofence.enter, geofence.exit`

### 5.2 `/product/fuel-intelligence`
Include:
- Fuel level timeline
- Refuel detection
- Theft detection (drop rules)
- Mileage & km/l
- Fleet benchmarking

Developer section:
- Fields: `fuel_liters, fuel_raw, sensor_type, calibration_profile`
- Events: `fuel.refuel, fuel.drop_suspected, fuel.theft_alert`

### 5.3 `/product/sweeping-intelligence`
Include:
- Cleaning ON/OFF sensor integration
- “Moving vs cleaning” verification
- Area coverage
- Missed zones
- Cleaning efficiency score

Developer section:
- Fields: `cleaning_state, pto_state, broom_state, gps_segment_id`
- Events: `cleaning.started, cleaning.stopped, coverage.missed_zone`

### 5.4 `/product/driver-intelligence`
Include:
- Driver assignment
- Behavior scoring (overspeed, idle misuse, harsh events)
- Driver-wise efficiency

### 5.5 `/product/maintenance`
Include:
- Service schedules (km/engine hours/time)
- Maintenance logs
- Alerts

### 5.6 `/product/security-alerts`
Include:
- Unauthorized ignition
- Off-hours movement
- Geo-lock
- Escalation rules
- Multi-channel notifications

### 5.7 `/product/reports-analytics`
Include:
- MIS reports
- Utilization
- Custom filters
- Exports

---

## 6) Solutions Pages (Industry/Persona Storytelling)

Each solutions page must have:
- Pain points
- How InteliFleet solves
- Recommended modules
- Example KPIs
- CTA

### Examples
- `/solutions/individual-owners`: theft alerts, docs vault, maintenance reminders
- `/solutions/logistics-transporters`: utilization, route compliance, driver score
- `/solutions/municipal-sweeping`: cleaning verification, coverage, missed zones

---

## 7) Apps Pages (iOS + Android)

### `/apps`
- Compare iOS vs Android features
- Store badges
- Screenshots (mock)
- FAQ: permissions, background location, battery optimization

### `/apps/ios`
- iOS requirements: iOS version support, location permissions
- “Live Activities” (optional) + push alerts

### `/apps/android`
- Android requirements: battery optimization guidance
- Foreground service explanation
- Push alerts + background tracking reliability

---

## 8) Pricing Page (`/pricing`)

Create 3 tiers + enterprise:
- **Basic** (GPS, trips, basic alerts)
- **Pro** (fuel intelligence, advanced alerts, exports)
- **Business** (multi-tenant, roles, advanced reports)
- **Enterprise/Municipal** (sweeping intelligence, on-prem, SLAs)

Add:
- “Hardware & Sensors” add-on section (priced separately)
- FAQ accordion

---

## 9) Developers & Docs (`/docs`)

Docs hub cards:
- Getting started
- Device integration
- API reference
- Webhooks
- Security

### `/docs/device-integration`
Include:
- Supported protocols: MQTT/HTTP
- Authentication: device token + tenant binding
- Retry strategy
- Offline buffering guidance

### `/docs/api-reference`
- REST endpoints (placeholder)
- Auth model
- Pagination
- Rate limits

### `/docs/webhooks`
- `alert.created`
- `trip.started`
- `trip.ended`
- `fuel.theft_alert`
- `geofence.enter/exit`

---

## 10) Blog (`/blog`)
- Sarvam-like simple, clean blog layout with date, category, read time :contentReference[oaicite:7]{index=7}
- Use MDX posts stored under `/content/blog/*.mdx`

---

## 11) Company Pages
- `/company/about`: mission, principles, how we build
- `/company/team`: leadership + advisory (placeholders)
- `/company/careers`: roles + culture
- `/company/contact`: form + locations + email

---

## 12) Footer (Very rich, many links)

Design a dense footer like sarvam.ai with multiple columns :contentReference[oaicite:8]{index=8}

### Column: Products
- Live Tracking
- Fuel Intelligence
- Sweeping Intelligence
- Driver Intelligence
- Maintenance
- Security & Alerts
- Reports & Analytics

### Column: Solutions
- Individual Owners
- Logistics & Transport
- Bus Operators
- Municipal Sweeping
- Construction & Industrial

### Column: Developers
- Docs
- API Reference
- Webhooks
- Device Integration
- SDKs (placeholder)
- Status

### Column: Company
- About
- Customers
- Case Studies
- Blog
- Careers
- Partners
- Contact

### Column: Legal
- Terms
- Privacy
- Cookies
- DPA
- Acceptable Use

### Column: Social
- LinkedIn
- X/Twitter
- YouTube
- GitHub (if any)
- Email newsletter (form)

Footer bottom:
- `© {year} InteliFleet. All rights reserved.`
- “Built in India” line (optional)
- Address block (placeholder)

---

## 13) UI Components (Build once, reuse)
- `Navbar`, `Footer`
- `HeroSplit`
- `LogoStrip`
- `FeatureGrid`
- `TabbedShowcase`
- `ThreeUpCards`
- `Testimonial`
- `CaseStudyCard`
- `CTASection`
- `FAQAccordion`
- `BadgeRow`

---

## 14) Responsiveness Rules (Must follow)
- Container max width: `max-w-6xl` / `max-w-7xl`
- Padding: `px-4 sm:px-6 lg:px-8`
- Hero:
  - mobile: stacked (text then visual)
  - desktop: split 50/50
- Grids:
  - mobile: 1 col
  - tablet: 2 col
  - desktop: 3–4 col
- Footer:
  - mobile: accordion or 2-column
  - desktop: 5–6 columns

---

## 15) SEO & Performance
- OpenGraph + Twitter cards on all pages
- JSON-LD organization schema
- sitemap.xml + robots.txt
- Use `next/image` for images
- Prefer SVG illustrations

---

## 16) Content Notes (Important)
- Avoid real customer logos unless provided
- No sensitive data in screenshots; use mock UI text
- Maintain consistent voice: confident, simple, enterprise-grade

---

## 17) Deliverables Checklist (for Codex)
- [ ] Next.js app scaffold + Tailwind
- [ ] Theme tokens + font setup
- [ ] All routes created with layout
- [ ] Reusable components
- [ ] MDX blog + docs
- [ ] Footer rich link structure
- [ ] Responsive tested (320px → 1440px)
- [ ] Lighthouse baseline pass

---

## 18) Sample Copy Blocks (Ready to paste)

### Tagline options
- **“Real-time fleet intelligence. Proven work. Zero guesswork.”**
- **“Track location, fuel, and actual activity — live.”**

### Homepage security line
- **Enterprise-grade security, built in from day one.**

### Sweeping USP line
- **Don’t just track movement. Verify cleaning happened.**

---

## 19) Visual Style Checklist (Match sarvam.ai feel)
- Lots of whitespace
- Big typography hero
- Subtle borders, soft shadows
- Minimal gradients used sparingly
- Clean iconography
- Strong section rhythm: headline → short copy → card grid :contentReference[oaicite:9]{index=9}

---

# End of Spec
