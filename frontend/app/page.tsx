'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Club } from '@/components/Club';
import { Coworking } from '@/components/Coworking';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';
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
        <section id="programs" className="py-32 px-6 bg-background transition-colors duration-300">
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
        <section className="py-32 px-6 bg-background transition-colors duration-300">
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
            </motion.div>
          </div>
        </section>

        {/* Contacts Section */}
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />

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
