
# EOTWSG | End of the World Survival Guide

A high-performance, tactical minimalist landing page designed for the launch of Matthew Danielson's comprehensive resilience manual. Built with a focus on psychological impact, security aesthetic, and professional-grade frontend architecture.

## 🛠 Tech Stack
- **Framework**: React 19 (ESM based)
- **Styling**: Tailwind CSS (Utility-first, custom design tokens)
- **Identity**: Netlify Identity (Authentication & Gated Content)
- **Icons**: Custom SVG & FontAwesome simulated via SVG
- **Architecture**: Context-API driven state management

## 🧬 Key Features
1. **Tactical Minimalism Aesthetic**: Slate/Charcoal palette with "Safety Orange" high-contrast CTAs.
2. **3D Interactive Book**: CSS-based 3D transform mockup with glint effects and perspective rotation.
3. **Secure Document Reader**: Chapter 1 preview with a simulated decryption/typing terminal effect.
4. **Gated Intelligence**: Survival checklists require "Session Initiation" (Netlify Identity) to access deep-dive protocols.
5. **Production Readiness**:
   - Zero "God" components; logic is modularized into `context`, `constants`, and `components`.
   - Optimized image handling with high-fidelity asset sourcing.
   - Comprehensive error handling via `ErrorBoundary`.
   - Tactical scroll entrance animations via `IntersectionObserver`.

## 📂 Project Structure
- `/components`: UI modules (Hero, Library, ChapterPreview, etc.)
- `/context`: Global state (AuthContext)
- `/constants`: Centralized asset URLs and checklist data
- `App.tsx`: Orchestration layer
- `index.html`: Entry point with custom tactical noise and scanning line overlays

## 🚀 Netlify Deployment Configuration

Below is the `netlify.toml` configuration for ensuring professional deployment, header security, and routing.

```toml
[build]
  publish = "."

[build.processing]
  [build.processing.css]
    bundle = true
    minify = true
  [build.processing.js]
    bundle = true
    minify = true
  [build.processing.html]
    pretty_urls = true
    minify = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Content-Security-Policy = "frame-ancestors 'none';"
```

---
*Stay Prepared. Build a better boat.*
