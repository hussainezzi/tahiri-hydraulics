import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

function StatCard({ value, label, index }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{
        flex: '1 1 180px', padding: '32px 24px', borderRadius: 16,
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(204,0,0,0.2)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(204,0,0,0.08), transparent 70%)' }} />
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 700, color: 'var(--red)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8, letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef();
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} style={{ padding: '120px 2rem', background: 'var(--gray-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,0,0,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 16 }}>About Us</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: 24 }}>
                38 Years of Industrial<br />
                <span style={{ color: 'var(--red)' }}>Excellence</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                Tahiri Hydraulic Pipe Works is your premier destination for high-pressure hydraulic solutions in Karachi.
                Specializing in a comprehensive range of quality piping, we supply everything from S.S. steam flexible and
                rubber hose pipes to M.S. brake and A/C pipes.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
                As authorized dealers of <strong style={{ color: '#fff' }}>Caterpillar</strong> and <strong style={{ color: '#fff' }}>Parker</strong> hoses,
                we also provide a wide variety of hydraulic crimping fittings with hydraulic pressing/crimping including
                Yutong original fittings.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {['KMC Work Area, Karachi', '0331 2353836'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - 3D styled visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(204,0,0,0.15), rgba(10,10,10,0.8))',
              border: '1px solid rgba(204,0,0,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Animated rings */}
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  position: 'absolute',
                  width: `${i * 30}%`, height: `${i * 30}%`,
                  borderRadius: '50%',
                  border: `1px solid rgba(204,0,0,${0.4 - i * 0.1})`,
                  animation: `spin ${3 + i}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
                }} />
              ))}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 80, fontWeight: 700, color: 'var(--red)', lineHeight: 1 }}>38</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>Years of Trust</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 80 }}>
          {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          #about > div > div:first-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
