# Validation Notes

The completed checks include a clean install, static build, deterministic privacy/contact/navigation checks, CSP and architecture checks, bundle budget, dependency audit, and a local browser smoke pass.

## Browser smoke verification

The rebuilt static guide was served locally at `http://localhost:4176/`. The browser rendered the general-education scope statement, immediate-help route, public preparedness-resource links, factual privacy link, and the privacy-aware Netlify feedback form. The visible form requires a name, email, bounded message, and privacy acknowledgement; it warns against sending sensitive information and states that a submission redirects to a non-promissory confirmation page.

The vanilla navigation controller was exercised directly. Activating the menu set both `aria-expanded` and the navigation state to `true`; a subsequent Escape key event returned both values to `false`.
