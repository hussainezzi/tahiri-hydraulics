import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import HeroScene from './HeroScene';

export default function Hero() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current?.querySelectorAll('.char'), {
      y: 100, opacity: 0, stagger: 0.03, duration: 0.8, ease: 'power3.out', delay: 0.3,
    });
  }, []);

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--black)' }}>
      {/* 3D Canvas Background */}
      <HeroScene />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 70%)' }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.1,
        backgroundImage: 'linear-gradient(rgba(204,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(204,0,0,0.15)', border: '1px solid rgba(204,0,0,0.4)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'var(--red)', textTransform: 'uppercase' }}>Karachi's Premier Hydraulic Supplier</span>
          </div>
        </motion.div>

        <div ref={titleRef}>
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(48px, 8vw, 110px)',
            fontWeight: 700, lineHeight: 0.95, letterSpacing: -2, margin: '0 0 24px',
            color: '#fff',
          }}>
            <span className="char" style={{ display: 'block' }}>TAHIRI</span>
            <span className="char" style={{ display: 'block', color: 'var(--red)', WebkitTextStroke: '2px var(--red)', WebkitTextFillColor: 'transparent' }}>HYDRAULIC</span>
            <span className="char" style={{ display: 'block' }}>PIPE WORKS</span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.7, marginBottom: 48 }}
        >
          Your premier destination for high-pressure hydraulic solutions in Karachi.
          Authorized dealers of <strong style={{ color: '#fff' }}>Caterpillar</strong> and <strong style={{ color: '#fff' }}>Parker</strong> hoses since 1986.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <a href="#products"
            onClick={e => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--red)', color: '#fff', padding: '16px 36px',
              borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700,
              letterSpacing: 0.5, boxShadow: '0 0 40px rgba(204,0,0,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 50px rgba(204,0,0,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(204,0,0,0.4)'; }}
          >
            Browse Catalog
          </a>
          <a href="https://wa.me/923312353836" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff', padding: '16px 36px',
              borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff'; }}
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 10, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={28} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
