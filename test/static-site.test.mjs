import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
const html=await readFile('index.html','utf8'),app=await readFile('assets/app.js','utf8'),config=await readFile('netlify.toml','utf8');
test('contact form has a real Netlify path, minimization, and consent',()=>{assert.match(html,/data-netlify="true"/);assert.match(html,/maxlength="2000"/);assert.match(html,/privacy-consent/);assert.match(html,/action="\/thank-you\.html"/)});
test('navigation controller exposes ARIA state and Escape behavior',()=>{assert.match(html,/aria-controls="site-nav"/);assert.match(app,/aria-expanded/);assert.match(app,/event\.key==='Escape'/)});
test('deployment policy has no wildcard executable sources or eval allowance',()=>{assert.doesNotMatch(config,/unsafe-eval|script-src \*/);assert.match(config,/frame-ancestors 'none'/);assert.match(config,/Permissions-Policy/)});
