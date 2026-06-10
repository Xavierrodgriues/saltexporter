/**
 * entry-server.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Server-side rendering entry used ONLY by the prerender build step.
 * The browser never loads this file.
 *
 * It renders the full React tree to an HTML string for a given URL so that
 * the prerender script can inject it into index.html.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Eagerly import all pages — no lazy() during SSR (Suspense + lazy don't work
// with renderToString; we use direct imports here).
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Management } from './pages/Management';
import { EdibleSalt } from './pages/EdibleSalt';
import { IndustrialSalt } from './pages/IndustrialSalt';
import { SpecialtySalt } from './pages/SpecialtySalt';
import { TabletSalt } from './pages/TabletSalt';
import { Blog } from './pages/Blog';
import { HowToMakeSalt } from './pages/blog/HowToMakeSalt';
import { TaxOnSalt } from './pages/blog/TaxOnSalt';
import { WhereSaltFound } from './pages/blog/WhereSaltFound';
import { SaltMinesIndia } from './pages/blog/SaltMinesIndia';
import { SaltExportCountries } from './pages/blog/SaltExportCountries';

export interface RenderResult {
  /** The rendered HTML body (injected into <div id="root">...</div>) */
  html: string;
  /** Helmet-collected head tags (title, meta, link, script) */
  helmet: any;
}

export function render(url: string): RenderResult {
  const helmetContext: any = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="management" element={<Management />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products/edible-salt" element={<EdibleSalt />} />
            <Route path="products/industrial-salt" element={<IndustrialSalt />} />
            <Route path="products/specialty-industrial-salt" element={<SpecialtySalt />} />
            <Route path="products/salt-tablet" element={<TabletSalt />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/how-to-make-salt-in-india" element={<HowToMakeSalt />} />
            <Route path="blog/is-there-tax-on-salt-in-india" element={<TaxOnSalt />} />
            <Route path="blog/where-is-salt-found-in-india" element={<WhereSaltFound />} />
            <Route path="blog/does-india-have-salt-mines" element={<SaltMinesIndia />} />
            <Route path="blog/salt-export-from-india-to-which-country" element={<SaltExportCountries />} />
          </Route>
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
