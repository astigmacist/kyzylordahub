'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Club } from '@/components/Club';
import { Coworking } from '@/components/Coworking';
import { Contacts } from '@/components/Contacts';
import { ArrowUp, Rocket, Users, Briefcase, Coins, GraduationCap, Network } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = ['home', 'programs', 'club', 'coworking', 'startups', 'events'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: section === 'home' ? 0 : elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative bg-background overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero />
        </div>

        {/* About Us Section */}
        <AboutUs />

        {/* Programs Section */}
        <section id="programs" className="py-16 px-6 bg-background transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Наши <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">Программы</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Комплексная поддержка стартапов на всех этапах развития
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Инкубация',
                  description: 'Комплексная программа поддержки стартапов на ранних стадиях развития',
                  icon: Rocket,
                  color: '#2D6BFF',
                },
                {
                  title: 'Менторство',
                  description: 'Персональное сопровождение опытными предпринимателями и специалистами',
                  icon: Users,
                  color: '#FF7A00',
                },
                {
                  title: 'Коворкинг',
                  description: 'Современное рабочее пространство для команд и индивидуальных работников',
                  icon: Briefcase,
                  color: '#2D6BFF',
                },
                {
                  title: 'Инвестиции',
                  description: 'Помощь в привлечении финансирования и связь с инвесторами',
                  icon: Coins,
                  color: '#FF7A00',
                },
                {
                  title: 'Обучение',
                  description: 'Курсы, воркшопы и мастер-классы по развитию IT-навыков',
                  icon: GraduationCap,
                  color: '#2D6BFF',
                },
                {
                  title: 'Networking',
                  description: 'Доступ к сообществу предпринимателей, инвесторов и партнеров',
                  icon: Network,
                  color: '#FF7A00',
                },
                {
                  title: 'Хакатоны',
                  description: 'Организация и проведение хакатонов для разработчиков и инноваторов',
                  icon: Rocket,
                  color: '#2D6BFF',
                },
                {
                  title: 'Налоговые преференции',
                  description: 'Консультации и помощь в получении налоговых льгот для IT-компаний',
                  icon: Coins,
                  color: '#FF7A00',
                },
              ].map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="p-6 bg-card backdrop-blur-sm border border-border rounded-3xl hover:bg-accent transition-all cursor-pointer"
                  >
                    <Icon size={36} className="mb-4" style={{ color: program.color }} />
                    <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Club Section */}
        <Club />

        {/* Coworking Section */}
        <Coworking />

        {/* CTA Section */}
        <section className="py-16 px-6 bg-background transition-colors duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 bg-gradient-to-br from-[#2D6BFF]/20 to-[#FF7A00]/20 backdrop-blur-sm border border-border rounded-3xl"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Готовы начать?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к Kyzylorda Hub и станьте частью растущей IT-экосистемы региона
              </p>
              <motion.a
                href="https://wa.me/77057291207"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,211,102,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold rounded-2xl transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Получить консультацию
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Contacts Section */}
        <Contacts />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border py-6 px-6 bg-background">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 30px rgba(45, 107, 255, 0.5)',
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#2D6BFF] to-[#FF7A00] rounded-full flex items-center justify-center text-white shadow-2xl"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
