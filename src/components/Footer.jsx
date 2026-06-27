import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid rgba(204,0,0,0.15)', padding: '60px 2rem 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, background: 'var(--red)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#fff' }}>TH</div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#fff' }}>TAHIRI HYDRAULIC</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: 2 }}>PIPE WORKS</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 320 }}>
              Karachi's premier destination for high-pressure hydraulic solutions.
              Authorized Caterpillar & Parker dealers since 1986.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <a href="tel:+923312353836" style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(204,0,0,0.15)', border: '1px solid rgba(204,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--red)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(204,0,0,0.15)'}
              ><Phone size={16} /></a>
              <a href="https://wa.me/923312353836" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#25D366'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.1)'}
              ><MessageCircle size={16} /></a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</div>
            {['Home', 'About', 'Products', 'Certifications', 'Contact'].map(link => (
              <button key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                style={{ display: 'block', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: 14, cursor: 'pointer', padding: '6px 0', transition: 'color 0.2s', textAlign: 'left' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{link}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 20 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:+923312353836" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              ><Phone size={14} />0331 2353836</a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-muted)', fontSize: 14 }}>
                <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />KMC Work Area, Karachi
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>© {new Date().getFullYear()} Tahiri Hydraulic Pipe Works. All rights reserved.</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>KMC Work Area, Karachi, Pakistan</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
