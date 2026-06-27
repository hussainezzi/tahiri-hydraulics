import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Scroll-driven section reveal
    gsap.utils.toArray('section').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.6,
          scrollTrigger: { trigger: section, start: 'top 90%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // Horizontal scroll line effect on section headers
    gsap.utils.toArray('.red-line').forEach((line) => {
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: line, start: 'top 80%' }
        }
      );
    });
  }, []);

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
