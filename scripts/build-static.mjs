import { cp, mkdir } from 'node:fs/promises';
await mkdir('dist/assets', { recursive: true });
for (const file of ['index.html','privacy.html','disclaimer.html','thank-you.html','favicon.svg','site.webmanifest','robots.txt']) await cp(file, `dist/${file}`);
