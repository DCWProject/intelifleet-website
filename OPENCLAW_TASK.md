# OpenClaw Build Task — InteliFleet Website (ReactJS)

## Project
- Product: InteliFleet
- Domain: https://intelifleet.in
- Framework: **ReactJS (Vite)**
- Styling: Tailwind CSS
- Routing: react-router-dom
- NOT Next.js

## Objective
Build a **large, enterprise-grade marketing website** (many pages) in the **visual style of https://www.sarvam.ai**, using InteliFleet brand colors and logos.

The website must look like a **mature, established company** with deep navigation, detailed pages, and a rich footer.

---

## Tech Stack (MANDATORY)
- Vite + React
- Tailwind CSS
- react-router-dom
- No Next.js
- No SSR required
- Fully responsive (mobile → desktop)

---

## Brand Assets
Use logos from:
- /public/brand/intelifleet-favicon.png
- /public/brand/intelifleet-light.png
- /public/brand/intelifleet-dark.png

### Brand Colors (tokens)
- Primary Teal: #01F7CB
- Deep Navy: #1A3258
- Accent Lime: #76FE2A
- Gray: #9C9C9C
- White: #FFFFFF
- Black: #000000

Create Tailwind theme tokens accordingly.

---

## Pages to Build (ALL REQUIRED)

### Core
- /
- /product
- /pricing
- /apps
- /apps/ios
- /apps/android

### Product Modules
- /product/live-tracking
- /product/fuel-intelligence
- /product/sweeping-intelligence
- /product/driver-intelligence
- /product/maintenance
- /product/security-alerts
- /product/reports-analytics

### Solutions
- /solutions
- /solutions/individual-owners
- /solutions/logistics-transporters
- /solutions/bus-operators
- /solutions/municipal-sweeping
- /solutions/construction-industrial

### Company
- /company/about
- /company/customers
- /company/case-studies
- /company/careers
- /company/contact

### Developers
- /docs
- /docs/getting-started
- /docs/api-reference
- /docs/device-integration

### Legal / Support
- /support
- /support/faq
- /legal/terms
- /legal/privacy

---

## UI Requirements
- Sticky top navbar with grouped dropdown menus:
  - PRODUCT | SOLUTIONS | DEVELOPERS | COMPANY
- Large hero sections (sarvam.ai style)
- Clean typography, large spacing, minimal gradients
- Rich footer with 5–6 columns and many links
- CTA buttons: "Get a Demo", "View Pricing"

---

## Images & Visuals
- Generate **premium hero illustrations**
- Generate **product module UI mock images**
- Generate **icons and diagrams**
- Store all images in /public/images
- Use Nano Banana Pro (or equivalent) style prompts:
  - Clean, enterprise SaaS
  - No people
  - No real data
  - Dark + light compatible

---

## Acceptance Checklist (Self-test before commit)
- All routes load without errors
- Mobile responsive (320px+)
- Navbar + footer visible on all pages
- No placeholder lorem text on homepage
- Build passes: npm run build
- No broken internal links

---

## Output
- Commit code regularly
- Push to main branch
- If uncertain, leave TODO comments

EOF
