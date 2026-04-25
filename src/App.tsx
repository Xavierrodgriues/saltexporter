import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { EdibleSalt } from './pages/EdibleSalt';
import { IndustrialSalt } from './pages/IndustrialSalt';
import { SpecialtySalt } from './pages/SpecialtySalt';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/edible-salt" element={<EdibleSalt />} />
          <Route path="products/industrial-salt" element={<IndustrialSalt />} />
          <Route path="products/specialty-industrial-salt" element={<SpecialtySalt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
