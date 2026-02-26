'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocale } from '@/contexts/LocaleContext';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'programs', label: t.nav.programs },
    { id: 'club', label: t.nav.club },
    { id: 'coworking', label: t.nav.coworking },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          isScrolled
            ? {
              background: 'rgba(11,11,14,0.8)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }
            : { background: 'transparent' }
        }
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                src="/logo-horizontal.png"
                alt="Kyzylorda Hub"
                className="h-9 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="relative text-sm font-medium transition-colors duration-300 py-1"
                  style={{
                    color: activeSection === item.id ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #2D6BFF, #FF7A00)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Phone */}
              <motion.a
                href="tel:+77057291207"
                title="+7 705 729 12 07"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--muted-foreground)',
                }}
              >
                <Phone size={15} />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/77057291207"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(37,211,102,0.3)' }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(37,211,102,0.12)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  color: '#25D366',
                }}
              >
                <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.a>

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-9 h-9 rounded-full flex items-center justify-center overflow-hidden transition-all"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--muted-foreground)',
                  }}
                  title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
                >
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0, scale: 0 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={15} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0, scale: 0 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={15} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}

              {/* Language Switcher */}
              <div
                className="flex items-center gap-0.5 p-1 rounded-full"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--card-border)',
                }}
              >
                {(['ru', 'kz'] as const).map((lang) => (
                  <motion.button
                    key={lang}
                    onClick={() => setLocale(lang)}
                    whileTap={{ scale: 0.92 }}
                    className="relative px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                    style={{
                      color: locale === lang ? '#ffffff' : 'var(--muted-foreground)',
                    }}
                  >
                    {locale === lang && (
                      <motion.span
                        layoutId="langActiveBg"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{lang === 'ru' ? 'РУС' : 'ҚАЗ'}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-xl transition-all"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                color: 'var(--foreground)',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 mx-4 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(11,11,14,0.95)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-5 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color: activeSection === item.id ? 'var(--foreground)' : 'var(--muted-foreground)',
                    background: activeSection === item.id ? 'var(--accent)' : 'transparent',
                  }}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="h-px my-3" style={{ background: 'var(--border)' }} />

              {/* Mobile Lang + Theme */}
              <div className="flex items-center justify-between px-1 pt-1 pb-2">
                <div className="flex items-center gap-2">
                  {(['ru', 'kz'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLocale(lang)}
                      className="px-4 py-2 rounded-xl text-xs font-bold transition-all"
                      style={{
                        background:
                          locale === lang
                            ? 'linear-gradient(135deg, #2D6BFF, #FF7A00)'
                            : 'var(--card)',
                        border: '1px solid var(--card-border)',
                        color: locale === lang ? '#fff' : 'var(--muted-foreground)',
                      }}
                    >
                      {lang === 'ru' ? 'РУС' : 'ҚАЗ'}
                    </button>
                  ))}
                </div>
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                    {theme === 'dark' ? 'Тёмная' : 'Светлая'}
                  </button>
                )}
              </div>

              {/* Mobile Contact */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+77057291207"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  <Phone size={15} />
                  Позвонить
                </a>
                <a
                  href="https://wa.me/77057291207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ background: '#25D366' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
