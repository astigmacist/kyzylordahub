'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'programs', label: 'Программы' },
    { id: 'club', label: 'Клуб' },
    { id: 'coworking', label: 'Коворкинг' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center gap-3">
              <img
                src="/logo-horizontal.png"
                alt="Kyzylorda Hub"
                className="h-10 w-auto"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-accent transition-all"
              >
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Moon size={20} />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    rotate: theme === 'light' ? 0 : -180,
                    scale: theme === 'light' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Sun size={20} />
                </motion.div>
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-foreground/70 hover:text-foreground py-3 transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
