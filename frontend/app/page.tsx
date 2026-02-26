'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { ArrowUp, Rocket, Users, Briefcase, Coins, GraduationCap, Network } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Club } from '@/components/Club';
import { Coworking } from '@/components/Coworking';
import { Contacts } from '@/components/Contacts';

const programIcons = [Rocket, Users, Briefcase, Coins, GraduationCap, Network, Rocket, Coins];
const programColors = ['#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'programs', 'club', 'coworking', 'contacts'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      const offset = 88;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      className="relative overflow-x-hidden transition-colors duration-300"
      style={{ background: 'var(--background)' }}
    >
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <div id="home">
          <Hero />
        </div>

        {/* About Us */}
        <AboutUs />

        {/* Programs Section */}
        <section
          id="programs"
          className="py-24 px-6"
          style={{ background: 'var(--background)' }}
        >
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >

              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                {t.programs.title}{' '}
                <span className="gradient-text">{t.programs.titleHighlight}</span>
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {t.programs.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.programs.items.map((program, index) => {
                const Icon = programIcons[index];
                const color = programColors[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-6 rounded-2xl transition-all group cursor-default"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--card-border)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{
                        background: `${color}18`,
                        border: `1px solid ${color}28`,
                      }}
                    >
                      <Icon size={24} style={{ color }} />
                    </div>
                    <h3
                      className="text-base font-bold mb-2"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {program.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {program.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Club */}
        <Club />

        {/* Coworking */}
        <Coworking />

        {/* CTA Section */}
        <section className="py-24 px-6" style={{ background: 'var(--background)' }}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-16 rounded-3xl text-center overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Animated gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(45,107,255,0.12) 0%, rgba(255,122,0,0.12) 100%)',
                }}
              />
              <motion.div
                className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ background: 'rgba(45,107,255,0.4)' }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-30"
                animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ background: 'rgba(255,122,0,0.4)' }}
              />

              <div className="relative z-10">
                <h2
                  className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5"
                  style={{ color: 'var(--foreground)' }}
                >
                  {t.cta.title}
                </h2>
                <p
                  className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {t.cta.subtitle}
                </p>
                <motion.a
                  href="https://wa.me/77057291207"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(37,211,102,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-4 text-white font-semibold rounded-2xl text-lg transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 24px rgba(37,211,102,0.3)',
                  }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {t.cta.btn}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contacts */}
        <Contacts />
      </main>

      {/* Footer */}
      <footer
        className="py-8 px-6"
        style={{
          borderTop: '1px solid var(--border)',
          background: 'var(--background)',
        }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="/logo-horizontal.png" alt="Kyzylorda Hub" className="h-7 w-auto opacity-70" />
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              {t.footer.rights}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(45,107,255,0.6)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
              boxShadow: '0 4px 20px rgba(45,107,255,0.4)',
            }}
            title="Наверх"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
