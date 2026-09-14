import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Trade from '@/pages/Trade';
import Media from '@/pages/Media';
import WomenLeadership from '@/pages/WomenLeadership';
import Contact from '@/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/media" element={<Media />} />
          <Route path="/women-leadership" element={<WomenLeadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
