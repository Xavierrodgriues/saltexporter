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
              <Route path="contact" element={<Contact />} />
              <Route path="products/edible-salt" element={<EdibleSalt />} />
              <Route path="products/industrial-salt" element={<IndustrialSalt />} />
              <Route path="products/specialty-industrial-salt" element={<SpecialtySalt />} />
              <Route path="products/salt-tablet" element={<TabletSalt />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;

