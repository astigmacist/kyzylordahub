'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Club } from '@/components/Club';
import { Coworking } from '@/components/Coworking';
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
    <div className="relative bg-[#0B0B0E] overflow-x-hidden">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero />
        </div>

        {/* Programs Section */}
        <section id="programs" className="py-32 px-6 bg-[#0B0B0E]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Наши <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">Программы</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Комплексная поддержка стартапов на всех этапах развития
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Акселерация',
                  description: 'Интенсивная программа развития вашего стартапа с менторами и экспертами',
                  icon: Rocket,
                },
                {
                  title: 'Менторство',
                  description: 'Персональное сопровождение опытными предпринимателями и специалистами',
                  icon: Users,
                },
                {
                  title: 'Коворкинг',
                  description: 'Современное рабочее пространство для команд и индивидуальных работников',
                  icon: Briefcase,
                },
                {
                  title: 'Инвестиции',
                  description: 'Помощь в привлечении финансирования и связь с инвесторами',
                  icon: Coins,
                },
                {
                  title: 'Обучение',
                  description: 'Курсы, воркшопы и мастер-классы по развитию IT-навыков',
                  icon: GraduationCap,
                },
                {
                  title: 'Networking',
                  description: 'Доступ к сообществу предпринимателей, инвесторов и партнеров',
                  icon: Network,
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
                    className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2D6BFF]/20 to-[#FF7A00]/20 flex items-center justify-center">
                      <Icon size={32} className="text-[#2D6BFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-white/60 leading-relaxed">{program.description}</p>
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
        <section className="py-32 px-6 bg-gradient-to-b from-[#0B0B0E] to-[#0B0B0E]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 bg-gradient-to-br from-[#2D6BFF]/20 to-[#FF7A00]/20 backdrop-blur-sm border border-white/10 rounded-3xl"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Готовы начать?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к Kyzylorda Hub и станьте частью растущей IT-экосистемы региона
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(45, 107, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#1455F0] to-[#2D6BFF] text-white rounded-full font-semibold"
                >
                  Подать заявку
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full hover:bg-white/10 transition-all font-semibold"
                >
                  Связаться с нами
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
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
