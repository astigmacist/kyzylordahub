'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Wifi, Coffee, Presentation, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

const HUB_PHOTOS = [
  '/hub-photos/IMG_3182.jpg.jpeg',
  '/hub-photos/IMG_3183.jpg.jpeg',
  '/hub-photos/IMG_3184.jpg.jpeg',
  '/hub-photos/IMG_3185.jpg.jpeg',
  '/hub-photos/IMG_3189.jpg.jpeg',
  '/hub-photos/IMG_3190.jpg.jpeg',
  '/hub-photos/IMG_3191.jpg.jpeg',
  '/hub-photos/IMG_3193.jpg.jpeg',
  '/hub-photos/IMG_3195.jpg.jpeg',
  '/hub-photos/IMG_3197.jpg.jpeg',
  '/hub-photos/IMG_3198.jpg.jpeg',
  '/hub-photos/IMG_3199.jpg.jpeg',
  '/hub-photos/IMG_3200.jpg.jpeg',
  '/hub-photos/5325879921328908793 (2) — копия.jpg.jpeg',
];

const spaceIcons = [Wifi, Coffee, Presentation];
const spaceColors = ['#2D6BFF', '#FF7A00', '#2D6BFF'];

export function Coworking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const [current, setCurrent] = useState(0);
  const total = HUB_PHOTOS.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { t } = useLocale();

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3500);
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total);
    startTimer();
  };

  const next = () => {
    setCurrent((c) => (c + 1) % total);
    startTimer();
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  };

  return (
    <div
      ref={containerRef}
      id="coworking"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Background blob */}
      <motion.div
        style={{
          y: bgY,
          background: 'radial-gradient(circle, rgba(45,107,255,0.07) 0%, transparent 70%)',
        }}
        className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2
              className="font-extrabold tracking-tight mb-5 leading-tight"
              style={{
                fontSize: 'clamp(30px, 4.5vw, 52px)',
                color: 'var(--foreground)',
              }}
            >
              <span className="gradient-text">{t.coworking.title}</span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-7"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {t.coworking.description}
            </p>
            <div
              className="flex items-center gap-3 text-base font-medium"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(45,107,255,0.12)', color: '#2D6BFF' }}
              >
                <MapPin size={18} />
              </div>
              {t.coworking.address}
            </div>
          </motion.div>

          {/* Photo Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute inset-[-1px] rounded-3xl opacity-50 blur-xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(45,107,255,0.3), rgba(255,122,0,0.2))',
              }}
            />
            <div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden select-none"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
              }}
            >
              <motion.img
                key={current}
                src={HUB_PHOTOS[current]}
                alt={`Kyzylorda Hub фото ${current + 1}`}
                className="w-full h-full object-cover"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ cursor: 'grab' }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%), linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%)',
                }}
              />

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <ChevronRight size={20} />
              </button>

              {/* Counter */}
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-medium"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {current + 1} / {total}
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {HUB_PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); startTimer(); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? '20px' : '6px',
                      height: '6px',
                      background: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Spaces & Services */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-center mb-10 tracking-tight"
            style={{
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              color: 'var(--foreground)',
            }}
          >
            {t.coworking.spacesTitle}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-5">
            {t.coworking.spaces.map((space, index) => {
              const Icon = spaceIcons[index];
              const color = spaceColors[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-3xl transition-all cursor-default"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {space.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {space.description}
                  </p>
                  <ul className="space-y-2">
                    {space.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-sm"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
        >
          <div
            className="flex items-center gap-5 p-6 rounded-2xl"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--card-border)',
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(45,107,255,0.12)', color: '#2D6BFF' }}
            >
              <Clock size={22} />
            </div>
            <div>
              <h5 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                {t.coworking.schedule}
              </h5>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {t.coworking.scheduleValue}
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-5 p-6 rounded-2xl"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--card-border)',
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,122,0,0.12)', color: '#FF7A00' }}
            >
              <MapPin size={22} />
            </div>
            <div>
              <h5 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                {t.coworking.location}
              </h5>
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {t.coworking.locationValue}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
