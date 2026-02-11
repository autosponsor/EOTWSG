# EOTWSG Copilot Instructions

## Project Overview
This is a React 19 landing page for "End of the World Survival Guide" - a tactical minimalist web app with authentication-gated content. Built with Vite, uses Netlify Identity for auth, and features 3D CSS book animations and chapter previews.

## Architecture
- **Modular Components**: All UI in `/components` (e.g., `Hero.tsx`, `Library.tsx`). No monolithic components - logic split into `context`, `constants`, `components`.
- **State Management**: Context-API only (`AuthContext.tsx` for Netlify Identity).
- **Data Flow**: Static data in `/constants/survivalData.ts` (e.g., `CHECKLISTS` array). Auth state flows from `AuthProvider` to components via `useAuth` hook.
- **Error Handling**: Wrapped in `ErrorBoundary.tsx` for production resilience.

## Styling
- **Tailwind via CDN**: Loaded from `https://cdn.tailwindcss.com` in `index.html`. Use utility classes like `bg-slate-950`, `text-orange-500`.
- **Custom CSS**: Inline in `index.html` `<style>` for fonts (Oswald/Inter), noise overlay, scanline animation.
- **Theme**: Tactical minimalism - slate/charcoal backgrounds, safety orange (#f97316) accents. Selection color: `selection:bg-orange-500`.
- **Animations**: `IntersectionObserver` for scroll-triggered fades (e.g., in `Hero.tsx`).

## Authentication
- **Netlify Identity**: Widget loaded in `index.html`, managed in `AuthContext.tsx`.
- **Usage**: `useAuth()` returns `{ user, login, logout, isLoaded }`. Call `login()` to open modal; check `user` for access.
- **Gated Content**: Components like `Library.tsx` check `if (!user) login()` before allowing access.

## Data Management
- **Constants**: Centralized in `/constants/survivalData.ts` - `ASSETS` object for image URLs, `CHECKLISTS` array for survival protocols.
- **No API**: Static data only; "downloads" simulated with `alert()` or `console.log`.

## Development Workflow
- **Build**: `npm run build` (Vite) outputs to `dist/`.
- **Dev Server**: `npm run dev` runs on port 3000.
- **TypeScript**: Strict checking via `npx tsc --noEmit` in CI.
- **Deployment**: Netlify with `netlify.toml` config - SPA redirects, security headers, CSP allowing CDNs.

## Key Patterns
- **IntersectionObserver**: For entrance animations - observe `sectionRef.current`, set `isVisible` on intersect.
- **Form Handling**: Netlify forms simulated (e.g., email signup in `Hero.tsx`).
- **Modal State**: Managed in `App.tsx` with `ModalType` union for legal modals.
- **Asset URLs**: Long Google Photos links in `ASSETS` - use as-is for images.

## Conventions
- **Naming**: PascalCase for components, UPPER_SNAKE for constants.
- **Imports**: Relative paths (e.g., `../context/AuthContext`).
- **Colors**: `slate-950` for dark bg, `orange-500` for CTAs.
- **Fonts**: Oswald for headings, Inter for body.</content>
<parameter name="filePath">/workspaces/EOTWSG/.github/copilot-instructions.md