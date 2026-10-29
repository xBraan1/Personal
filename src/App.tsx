import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Insights from './pages/Insights';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="services" element={<Services />} />
          <Route path="experience" element={<Experience />} />
          <Route path="work" element={<Work />} />
          <Route path="skills" element={<Skills />} />
          <Route path="insights" element={<Insights />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
