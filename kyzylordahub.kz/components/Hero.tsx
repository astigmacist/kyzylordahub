'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo, useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { ChevronRight } from 'lucide-react';
import { HackathonModal } from './HackathonModal';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const { t, locale } = useLocale();
  const [hackathonOpen, setHackathonOpen] = useState(false);

  // Fix: define transforms outside nested render
  const yBlob1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 20 + Math.random() * 70,
        size: 1 + Math.random() * 2,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 4,
        color: i % 3 === 0 ? '#2D6BFF' : i % 3 === 1 ? '#FF7A00' : '#ffffff',
      })),
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Primary Blue Blob */}
        <motion.div
          style={{
            y: yBlob1,
            background: 'radial-gradient(circle, rgba(45,107,255,0.35) 0%, rgba(45,107,255,0) 70%)',
          }}
          className="absolute top-[15%] left-[10%] w-[700px] h-[700px] rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Orange Blob */}
        <motion.div
          style={{
            y: yBlob2,
            background: 'radial-gradient(circle, rgba(255,122,0,0.3) 0%, rgba(255,122,0,0) 70%)',
          }}
          className="absolute top-[30%] right-[5%] w-[600px] h-[600px] rounded-full"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bottom subtle blob */}
        <motion.div
          className="absolute bottom-[-5%] left-[30%] w-[500px] h-[300px] rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            background:
              'radial-gradient(circle, rgba(45,107,255,0.4) 0%, rgba(255,122,0,0.2) 50%, transparent 70%)',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-28"
      >

        {/* Hackathon Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 w-full max-w-2xl"
        >
          <motion.button
            onClick={() => setHackathonOpen(true)}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full group overflow-hidden rounded-2xl px-6 py-4 text-left cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(45,107,255,0.1), rgba(255,122,0,0.08))',
              border: '1px solid rgba(45,107,255,0.3)',
              boxShadow: '0 0 30px rgba(45,107,255,0.08)',
            }}
          >
            {/* Animated shimmer */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(45,107,255,0.06), rgba(255,122,0,0.06))' }}
            />
            <div className="relative z-10 flex items-center gap-4">
              <div className="text-2xl flex-shrink-0">🔥</div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                    style={{ background: 'rgba(45,107,255,0.15)', color: '#2D6BFF', border: '1px solid rgba(45,107,255,0.3)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {locale === 'kz' ? 'Жуық арада' : 'Скоро'}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>Хакатон</span>
                </div>
                <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--foreground)' }}>
                  {locale === 'kz'
                    ? 'ТЖД үшін қоғамдық қауіпсіздікті арттыруға арналған цифрлық шешімдер'
                    : 'Цифровые решения для повышения безопасности для ДЧС'}
                </p>
              </div>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="flex-shrink-0"
                style={{ color: '#2D6BFF' }}
              >
                <ChevronRight size={20} />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-5xl mx-auto mb-6 font-extrabold leading-[1.08] tracking-tight"
          style={{
            fontSize: 'clamp(38px, 7vw, 84px)',
            color: 'var(--foreground)',
          }}
        >
          {t.hero.title1}
          <br />
          <span className="gradient-text">{t.hero.title2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--muted-foreground)',
          }}
        >
          {t.hero.subtitle}
        </motion.p>



        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl"
          style={{
            background: 'var(--card-border)',
            border: '1px solid var(--card-border)',
          }}
        >
          {t.hero.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center justify-center px-8 py-6 transition-all"
              style={{ background: 'var(--background)' }}
            >
              <div
                className="gradient-text font-extrabold mb-1"
                style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hackathon Modal */}
      <HackathonModal isOpen={hackathonOpen} onClose={() => setHackathonOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted-foreground)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-9 rounded-full border-2 flex justify-center pt-1.5"
          style={{ borderColor: 'var(--border)' }}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--muted-foreground)' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
