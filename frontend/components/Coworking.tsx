'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Wifi, Coffee, Presentation, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';

const HUB_PHOTOS = [
  '/hub photos/IMG_3182.jpg.jpeg',
  '/hub photos/IMG_3183.jpg.jpeg',
  '/hub photos/IMG_3184.jpg.jpeg',
  '/hub photos/IMG_3185.jpg.jpeg',
  '/hub photos/IMG_3189.jpg.jpeg',
  '/hub photos/IMG_3190.jpg.jpeg',
  '/hub photos/IMG_3191.jpg.jpeg',
  '/hub photos/IMG_3193.jpg.jpeg',
  '/hub photos/IMG_3195.jpg.jpeg',
  '/hub photos/IMG_3197.jpg.jpeg',
  '/hub photos/IMG_3198.jpg.jpeg',
  '/hub photos/IMG_3199.jpg.jpeg',
  '/hub photos/IMG_3200.jpg.jpeg',
  '/hub photos/5325879921328908793 (2) — копия.jpg.jpeg',
];

export function Coworking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [current, setCurrent] = useState(0);
  const total = HUB_PHOTOS.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3000);
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const prev = () => { setCurrent((c) => (c - 1 + total) % total); startTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % total); startTimer(); };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  const spaces = [
    {
      icon: Wifi,
      title: 'Open Space',
      description: 'Совместные пространства с высокоскоростным интернетом',
      features: ['WiFi 500 Мб/сек', 'Кофе без ограничений', 'Принтеры'],
    },
    {
      icon: Coffee,
      title: 'Рабочие кабинеты',
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
      className="relative py-16 px-6 bg-background overflow-hidden transition-colors duration-300"
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
              className="text-foreground mb-6 font-bold leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
                Коворкинг Kyzylorda Hub
              </span>
            </h2>

            <p
              className="text-muted-foreground mb-8 text-lg leading-relaxed"
            >
              Современные и вдохновляющие пространства, созданные для стимулирования вашего творчества и
              продуктивности. Присоединяйтесь к динамичному сообществу предпринимателей и инноваторов.
            </p>

            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPin size={20} />
              <span>г.Кызылорда, Айтеке би 29а</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Slider */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border relative select-none">
              <motion.img
                key={current}
                src={HUB_PHOTOS[current]}
                alt={`Kyzylorda Hub фото ${current + 1}`}
                className="w-full h-full object-cover"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                style={{ cursor: 'grab' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>

              {/* Counter */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                {current + 1} / {total}
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {HUB_PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${i === current
                      ? 'w-5 h-2 bg-white'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Spaces & Services */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground mb-12 text-center font-bold"
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
                  className="group p-8 bg-card backdrop-blur-sm border border-border rounded-3xl hover:border-border transition-all"
                >
                  <Icon size={40} className="text-[#2D6BFF] mb-6" />
                  <h4 className="text-foreground mb-3 text-2xl font-semibold">
                    {space.title}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {space.description}
                  </p>
                  <ul className="space-y-2">
                    {space.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
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
          className="mt-20 p-8 bg-card border border-border rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <Clock size={32} className="text-[#2D6BFF] mx-auto mb-3" />
              <h5 className="text-foreground mb-2 text-lg font-semibold">
                График работы
              </h5>
              <p className="text-muted-foreground text-sm">
                Пн-Сб с 9:00-20:00
              </p>
            </div>
            <div>
              <MapPin size={32} className="text-[#FF7A00] mx-auto mb-3" />
              <h5 className="text-foreground mb-2 text-lg font-semibold">
                Премиум локация
              </h5>
              <p className="text-muted-foreground text-sm">
                Центр города, транспорт рядом
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
