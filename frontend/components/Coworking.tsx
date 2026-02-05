'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Wifi, Coffee, Presentation, Clock } from 'lucide-react';
import { useRef } from 'react';

export function Coworking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const spaces = [
    {
      icon: Wifi,
      title: 'Open Space',
      description: 'Совместные пространства с высокоскоростным интернетом',
      features: ['WiFi 1Gb/s', 'Кофе без ограничений', 'Принтеры'],
    },
    {
      icon: Coffee,
      title: 'Частные офисы',
      description: 'Закрытые офисы для команд от 2 до 10 человек',
      features: ['Меблированные', 'Безопасность 24/7', 'Уборка'],
    },
    {
      icon: Presentation,
      title: 'Переговорные',
      description: 'Оборудованные помещения для встреч и презентаций',
      features: ['Экран 4K', 'Видеоконференция', 'Флипчарт'],
    },
  ];


  return (
    <div
      ref={containerRef}
      id="coworking"
      className="relative py-32 px-6 bg-gradient-to-b from-[#0B0B0E] to-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-[#2D6BFF]/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with placeholder for image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#2D6BFF]/10 backdrop-blur-sm border border-[#2D6BFF]/20 rounded-full">
              <span className="text-[#2D6BFF] text-sm font-semibold">
                Коворкинг пространство
              </span>
            </div>

            <h2
              className="text-white mb-6 font-bold leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              Ваш офис,{' '}
              <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
                переосмыслен
              </span>
            </h2>

            <p
              className="text-white/60 mb-8 text-lg leading-relaxed"
            >
              Современные и вдохновляющие пространства, созданные для стимулирования вашего творчества и
              продуктивности. Присоединяйтесь к динамичному сообществу предпринимателей и инноваторов.
            </p>

            <div className="flex items-center gap-4 text-white/50">
              <MapPin size={20} />
              <span>г. Кызылорда, Казахстан</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450" 
                alt="Kyzylorda Hub Coworking Space" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 p-6 bg-gradient-to-br from-[#FF7A00] to-[#FF8C32] rounded-2xl shadow-2xl"
            >
              <div className="text-white text-3xl font-bold">
                24/7
              </div>
              <div className="text-white/80 text-sm">
                Безлимитный доступ
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Spaces & Services */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-12 text-center font-bold"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}
          >
            Пространства и услуги
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {spaces.map((space, index) => {
              const Icon = space.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group p-8 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl hover:border-white/10 transition-all"
                >
                  <Icon size={40} className="text-[#2D6BFF] mb-6" />
                  <h4 className="text-white mb-3 text-2xl font-semibold">
                    {space.title}
                  </h4>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {space.description}
                  </p>
                  <ul className="space-y-2">
                    {space.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FF7A00] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>


        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-white/[0.02] border border-white/5 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <Clock size={32} className="text-[#2D6BFF] mx-auto mb-3" />
              <h5 className="text-white mb-2 text-lg font-semibold">
                Гибкий график
              </h5>
              <p className="text-white/50 text-sm">
                Доступ 24/7 для всех участников
              </p>
            </div>
            <div>
              <MapPin size={32} className="text-[#FF7A00] mx-auto mb-3" />
              <h5 className="text-white mb-2 text-lg font-semibold">
                Премиум локация
              </h5>
              <p className="text-white/50 text-sm">
                Центр города, транспорт рядом
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
