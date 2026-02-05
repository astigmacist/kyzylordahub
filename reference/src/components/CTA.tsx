import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <div className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D6BFF]/20 via-[#FF7A00]/20 to-[#2D6BFF]/20 rounded-full blur-[120px]" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1 }}
          className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-[#2D6BFF] to-[#FF7A00] rounded-2xl"
        >
          <Sparkles size={40} className="text-white" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white mb-6"
          style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.1 }}
        >
          Construisons l'avenir{' '}
          <span className="bg-gradient-to-r from-[#2D6BFF] via-[#FF7A00] to-[#2D6BFF] bg-clip-text text-transparent">
            depuis l'Afrique
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/60 mb-12 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.7 }}
        >
          Rejoignez la prochaine génération d'entrepreneurs africains qui transforment le continent
          avec des solutions innovantes et à fort impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(45, 107, 255, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-[#1455F0] to-[#2D6BFF] text-white rounded-full flex items-center gap-3 transition-all"
            style={{ fontSize: '18px', fontWeight: 600 }}
          >
            Démarrer mon projet
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(255, 122, 0, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-full hover:bg-white/10 transition-all"
            style={{ fontSize: '18px', fontWeight: 600 }}
          >
            Planifier une visite
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'Taux de satisfaction' },
              { value: '3x', label: 'Croissance moyenne' },
              { value: '€50M+', label: 'Fonds levés' },
              { value: '2000+', label: 'Entrepreneurs' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="text-white mb-2 bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent"
                  style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50" style={{ fontSize: '14px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
