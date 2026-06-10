/**
 * prerender.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Post-build static pre-rendering script.
 *
 * Run after `vite build` to produce per-route static HTML files in dist/.
 * Each file contains the fully-rendered React tree + correct <head> tags so
 * search engines get real content without executing JavaScript.
 *
 * Usage (automated via `npm run build`):
 *   node prerender.mjs
 *
 * How it works:
 *   1. Reads the built index.html as a template.
 *   2. Loads the compiled entry-server.js (ESM) from dist/server/.
 *   3. For each route, calls render(url) to get HTML + helmet head tags.
 *   4. Injects content into the template and writes dist/<route>/index.html.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// ─── All routes to pre-render ─────────────────────────────────────────────────
const routes = [
  '/',
  '/about',
  '/management',
  '/contact',
  '/products/edible-salt',
  '/products/industrial-salt',
  '/products/specialty-industrial-salt',
  '/products/salt-tablet',
  '/blog',
  '/blog/how-to-make-salt-in-india',
  '/blog/is-there-tax-on-salt-in-india',
  '/blog/where-is-salt-found-in-india',
  '/blog/does-india-have-salt-mines',
  '/blog/salt-export-from-india-to-which-country',
];

// ─── Load template and server bundle ──────────────────────────────────────────
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

// The server bundle is compiled by `vite build --ssr src/entry-server.tsx`
const serverEntryPath = toAbsolute('dist/server/entry-server.js');
const { render } = await import(pathToFileURL(serverEntryPath).href);

// ─── Render each route ────────────────────────────────────────────────────────
console.log('\n🔨 Pre-rendering routes...\n');

for (const url of routes) {
  let html, helmet;
  try {
    ({ html, helmet } = render(url));
  } catch (err) {
    console.error(`  ✗ Failed to render ${url}:`, err.message);
    continue;
  }

  // Build the <head> injection from collected helmet tags
  const headTags = [
    helmet?.title?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
  ].join('\n    ');

  // Replace the placeholder title with helmet's title, inject body content
  let output = template
    // Remove fallback <title> and <meta name="description"> completely
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta name="description"[^>]*\/>/, '')
    // Inject all Helmet tags (title, meta, link, script) before </head>
    .replace('</head>', `  ${helmet?.title?.toString() ?? ''}\n  ${helmet?.meta?.toString() ?? ''}\n  ${helmet?.link?.toString() ?? ''}\n  ${helmet?.script?.toString() ?? ''}\n</head>`)
    // Inject the rendered HTML into the root div
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  // Determine the output path (/ → dist/index.html, /about → dist/about/index.html)
  const isRoot = url === '/';
  const filePath = isRoot
    ? toAbsolute('dist/index.html')
    : toAbsolute(`dist${url}/index.html`);

  // Create directory if needed
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, output);
  console.log(`  ✓ ${url}  →  dist${isRoot ? '/index.html' : url + '/index.html'}`);
}

console.log('\n✅ Pre-rendering complete.\n');
