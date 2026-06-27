import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { categories } from '../data/products';
import { ChevronRight, Package, Tag } from 'lucide-react';

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '20px', borderRadius: 12,
        background: hovered ? 'rgba(204,0,0,0.08)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(204,0,0,0.4)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.3s ease', cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 6 }}>{product.name}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {product.sku && (
              <span style={{ fontSize: 11, background: 'rgba(204,0,0,0.15)', color: 'var(--red)', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>
                {product.sku}
              </span>
            )}
            {product.brand && (
              <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', padding: '2px 8px', borderRadius: 4 }}>
                {product.brand}
              </span>
            )}
          </div>
        </div>
        <ChevronRight size={16} color={hovered ? 'var(--red)' : 'rgba(255,255,255,0.2)'} style={{ transition: 'color 0.3s', marginTop: 2, flexShrink: 0 }} />
      </div>
      {(product.pressure || product.temp || product.material || product.use) && (
        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {product.pressure && <Spec label="Pressure" value={product.pressure} />}
          {product.temp && <Spec label="Temp" value={product.temp} />}
          {product.material && <Spec label="Material" value={product.material} />}
          {product.use && <Spec label="Use" value={product.use} />}
        </div>
      )}
    </motion.div>
  );
}

function Spec({ label, value }) {
  return (
    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
      <span style={{ color: 'rgba(255,255,255,0.25)' }}>{label}: </span>{value}
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cat = categories[active];

  return (
    <section id="products" ref={ref} style={{ padding: '120px 2rem', background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.5), transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 16 }}>Our Catalog</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
            237+ Premium Products
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 16, fontSize: 16 }}>Industrial-grade hydraulic solutions for every application</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 32 }}>
          {/* Category sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {categories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '16px 20px',
                  background: active === i ? 'rgba(204,0,0,0.12)' : 'transparent',
                  border: 'none', borderLeft: `3px solid ${active === i ? 'var(--red)' : 'transparent'}`,
                  borderRadius: active === i ? '0 12px 12px 0' : 0,
                  cursor: 'pointer', transition: 'all 0.3s',
                  marginBottom: 4,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: active === i ? '#fff' : 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{c.products.length} products</div>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Products panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div style={{
              padding: '28px', borderRadius: 20,
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              minHeight: 400,
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 28 }}>{cat.icon}</span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#fff' }}>{cat.name}</h3>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{cat.description}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {cat.products.map((p, i) => <ProductCard key={p.sku} product={p} index={i} />)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 64 }}
        >
          <a href="https://wa.me/923312353836?text=Hello, I'd like to inquire about your products." target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--red)', color: '#fff', padding: '16px 40px',
              borderRadius: 12, textDecoration: 'none', fontSize: 15, fontWeight: 700,
              boxShadow: '0 0 40px rgba(204,0,0,0.3)', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 50px rgba(204,0,0,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(204,0,0,0.3)'; }}
          >
            Request Custom Quote via WhatsApp
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #products > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
