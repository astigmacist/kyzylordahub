'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-background border-t border-border py-20 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/kyzylorda-hub-logo.png" 
                alt="Kyzylorda Hub" 
                className={`h-12 w-auto ${theme === 'dark' ? 'invert brightness-110' : ''}`}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Развиваем IT-экосистему Кызылординской области.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Навигация</h3>
            <ul className="space-y-3">
              {['О нас', 'Программы', 'Стартапы', 'Мероприятия', 'Новости'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Программы</h3>
            <ul className="space-y-3">
              {['Акселерация', 'Менторство', 'Коворкинг', 'Инвестиции', 'Обучение'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>г. Кызылорда, Казахстан</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:contact@kyzylordahub.kz" className="hover:text-foreground transition-colors">
                  contact@kyzylordahub.kz
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+77051234567" className="hover:text-foreground transition-colors">
                  +7 (705) 123-45-67
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {['Telegram', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(45, 107, 255, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-card hover:bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-border"
                  title={social}
                >
                  <span className="text-xs font-semibold">
                    {social.charAt(0)}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Kyzylorda Hub. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
