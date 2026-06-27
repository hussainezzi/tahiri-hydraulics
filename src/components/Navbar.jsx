import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = ['Home', 'About', 'Products', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(204,0,0,0.2)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => scrollTo('home')}>
          <div style={{
            width: 42, height: 42, background: 'var(--red)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#fff',
            boxShadow: '0 0 20px rgba(204,0,0,0.5)',
          }}>TH</div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, letterSpacing: 1, color: '#fff' }}>TAHIRI</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2 }}>HYDRAULICS</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-main)', fontSize: 14, fontWeight: 500,
                cursor: 'pointer', letterSpacing: 0.5, transition: 'color 0.2s',
                padding: '4px 0',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >{link}</button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="tel:+923312353836"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--red)', color: '#fff', padding: '10px 20px',
              borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 600,
              boxShadow: '0 0 20px rgba(204,0,0,0.3)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Phone size={14} /> Call Now
          </a>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }} className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(10,10,10,0.98)', padding: '1rem 2rem 2rem', borderTop: '1px solid rgba(204,0,0,0.2)' }}
          >
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', color: '#fff', padding: '14px 0', fontSize: 16, cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >{link}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
