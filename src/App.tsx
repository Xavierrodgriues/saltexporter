import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PageLoader } from './components/PageLoader';
import { EntranceAnimation } from './components/EntranceAnimation';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const EdibleSalt = lazy(() => import('./pages/EdibleSalt').then(m => ({ default: m.EdibleSalt })));
const IndustrialSalt = lazy(() => import('./pages/IndustrialSalt').then(m => ({ default: m.IndustrialSalt })));
const SpecialtySalt = lazy(() => import('./pages/SpecialtySalt').then(m => ({ default: m.SpecialtySalt })));
const TabletSalt = lazy(() => import('./pages/TabletSalt').then(m => ({ default: m.TabletSalt })));
const Management = lazy(() => import('./pages/Management').then(m => ({ default: m.Management })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const HowToMakeSalt = lazy(() => import('./pages/blog/HowToMakeSalt').then(m => ({ default: m.HowToMakeSalt })));
const TaxOnSalt = lazy(() => import('./pages/blog/TaxOnSalt').then(m => ({ default: m.TaxOnSalt })));
const WhereSaltFound = lazy(() => import('./pages/blog/WhereSaltFound').then(m => ({ default: m.WhereSaltFound })));
const SaltMinesIndia = lazy(() => import('./pages/blog/SaltMinesIndia').then(m => ({ default: m.SaltMinesIndia })));
const SaltExportCountries = lazy(() => import('./pages/blog/SaltExportCountries').then(m => ({ default: m.SaltExportCountries })));

function App() {
  const [showEntrance, setShowEntrance] = useState(false);
  const [isEntranceExiting, setIsEntranceExiting] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedEntrance');
    if (!hasVisited) {
      setShowEntrance(true);
    }
  }, []);

  const handleEntranceComplete = () => {
    sessionStorage.setItem('hasVisitedEntrance', 'true');
    setShowEntrance(false);
  };

  const handleEntranceExiting = () => {
    setIsEntranceExiting(true);
  };

  const shouldRenderContent = !showEntrance || isEntranceExiting;

  return (
    <BrowserRouter>
      {showEntrance && <EntranceAnimation onExiting={handleEntranceExiting} onComplete={handleEntranceComplete} />}
      {shouldRenderContent && (
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;

