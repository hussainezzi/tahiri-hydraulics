import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

const info = [
  { icon: <Phone size={20} />, label: 'Phone', value: '0331 2353836', href: 'tel:+923312353836' },
  { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: '+92 331 2353836', href: 'https://wa.me/923312353836' },
  { icon: <MapPin size={20} />, label: 'Address', value: 'KMC Work Area, Karachi', href: 'https://maps.google.com/?q=Tahiri+Hydraulic+Pipe+Works+Karachi' },
  { icon: <Clock size={20} />, label: 'Hours', value: 'Mon–Sat: 10:30 AM – 7:00 PM', href: null },
];

export default function Contact() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 2rem', background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.5), transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
            Contact <span style={{ color: 'var(--red)' }}>Us</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 16, fontSize: 16, maxWidth: 500, margin: '16px auto 0' }}>
            Need hydraulic solutions? Our team is ready to help you find the perfect fit.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <ContactItem item={item} />
                    </a>
                  ) : (
                    <ContactItem item={item} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="tel:+923312353836"
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: 'var(--red)', color: '#fff', padding: '14px 24px', borderRadius: 12,
                  textDecoration: 'none', fontWeight: 700, fontSize: 14,
                  boxShadow: '0 0 30px rgba(204,0,0,0.3)', transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/923312353836?text=Hello, I need hydraulic solutions." target="_blank" rel="noopener noreferrer"
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: '#25D366', color: '#fff', padding: '14px 24px', borderRadius: 12,
                  textDecoration: 'none', fontWeight: 700, fontSize: 14,
                  boxShadow: '0 0 30px rgba(37,211,102,0.3)', transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(204,0,0,0.2)', aspectRatio: '1' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231949.81866700037!2d66.99342!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sTahiri%20Hydraulic%20Pipe%20Works!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(1) hue-rotate(180deg)' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Tahiri Hydraulics Location"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactItem({ item }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', borderRadius: 14,
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
      transition: 'all 0.3s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(204,0,0,0.3)'; e.currentTarget.style.background = 'rgba(204,0,0,0.05)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(204,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--red)', flexShrink: 0 }}>
        {item.icon}
      </div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
        <div style={{ fontSize: 15, color: '#fff', fontWeight: 500 }}>{item.value}</div>
      </div>
    </div>
  );
}
