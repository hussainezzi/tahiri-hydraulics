import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/products';
import { Shield, Award, CheckCircle } from 'lucide-react';

const brands = [
  { name: 'Caterpillar', role: 'Authorized Dealer', color: '#FFCD11' },
  { name: 'Parker', role: 'Authorized Dealer', color: '#FF6B00' },
  { name: 'Yutong', role: 'Original Fittings', color: '#1E90FF' },
  { name: 'Karcher', role: 'Compatible Pipes', color: '#00A651' },
];

export default function Certifications() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" ref={ref} style={{ padding: '120px 2rem', background: 'var(--gray-dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: -200, left: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,0,0,0.05), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 16 }}>Quality Assured</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
            Certifications &<br /><span style={{ color: 'var(--red)' }}>Authorizations</span>
          </h2>
        </motion.div>

        {/* Certifications grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 80 }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{
                padding: '16px 28px', borderRadius: 50,
                background: 'rgba(204,0,0,0.08)', border: '1px solid rgba(204,0,0,0.25)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}
            >
              <CheckCircle size={14} color="var(--red)" />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>{cert}</span>
            </motion.div>
          ))}
        </div>

        {/* Authorized brands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', letterSpacing: 2, textTransform: 'uppercase' }}>Authorized Partners</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                style={{
                  padding: '32px 24px', borderRadius: 16, textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = b.color; e.currentTarget.style.background = `${b.color}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${b.color}20`, border: `2px solid ${b.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Award size={24} color={b.color} />
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{b.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase' }}>{b.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
