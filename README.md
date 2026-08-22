# EOTWSG

EOTWSG is a **general educational** household-preparedness guide built with HTML5, Tailwind CSS, and vanilla JavaScript. It links readers to current public resources rather than presenting unsupported or individualized safety claims.

## Scope and editorial approach

The guide is not emergency, medical, legal, or professional advice. It directs readers to local authorities for immediate emergencies and to public resources such as [Ready.gov](https://www.ready.gov/), the [American Red Cross](https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html), and the [CDC Emergency Preparedness and Response](https://www.cdc.gov/Emergency/index.html) pages for current planning and health guidance.

## Privacy and contact

The public guide has no analytics, session replay, browser identity, or site-issued tracking cookies. The optional Netlify contact form collects only name, email, message, and the consent selection submitted by a reader. Do not submit credentials, payment information, medical information, or other sensitive personal data. The complete notice is at `/privacy.html`.

## Local development

```bash
npm ci --ignore-scripts
npm run check
PORT=4176 npm run dev
```

The local preview serves the generated `dist/` directory. It does not emulate Netlify Forms submission processing.

## Deployment

Netlify is the supported target. `netlify.toml` sets the static build/publish path and restrictive response headers. Before enabling the contact form, the project owner should review the Netlify Form retention and access configuration and establish a documented process for privacy/deletion requests.

## Quality controls

`npm run check` compiles the local Tailwind/vanilla static build, executes deterministic trust/privacy/accessibility tests, checks for prohibited runtime artifacts and weak CSP directives, and enforces an 180,000-byte CSS/JavaScript budget. `npm run audit:prod` fails on high or critical production dependency advisories. GitHub Actions repeats these checks after clean installation.
