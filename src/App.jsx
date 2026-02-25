import './index.css';
import { useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      style={{
        background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
        boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
        border: '1px solid rgba(59,130,246,0.3)',
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="17" height="17">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen font-inter" style={{ background: '#060D1F' }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <About />
          <Services />
          <WhyUs />
          <Team />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
