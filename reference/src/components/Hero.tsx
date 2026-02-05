import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Globe2, Lightbulb, Users } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0B0B0E] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2D6BFF]/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FF7A00]/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse" />
            <span className="text-white/80" style={{ fontSize: '14px' }}>
              Accélérateur d'innovation africaine
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-6 text-white"
          style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.1 }}
        >
          Accélérer l'innovation
          <br />
          <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
            africaine. Ensemble.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12 text-white/60"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6 }}
        >
          Doonya Spaces réunit talents, capital et expertise pour créer, développer et lancer des
          startups à fort impact depuis l'Afrique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(45, 107, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-[#1455F0] to-[#2D6BFF] text-white rounded-full flex items-center gap-2 transition-all"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Rejoindre le Studio
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(255, 122, 0, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full hover:bg-white/10 transition-all"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Découvrir le Club
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-20 lg:mt-32"
        >
          {[
            { value: '50+', label: 'Startups accompagnées' },
            { value: '500+', label: 'Emplois créés' },
            { value: '€10M+', label: 'Levées de fonds' },
            { value: '12', label: 'Pays couverts' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div
                className="text-white mb-2 bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-white/50" style={{ fontSize: '14px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
