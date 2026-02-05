import { motion, useScroll, useTransform } from 'motion/react';
import { Handshake, Search, Shield } from 'lucide-react';
import { useRef } from 'react';

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  const visionItems = [
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Mettre en commun ressources et expertise pour accélérer la croissance',
      color: '#2D6BFF',
    },
    {
      icon: Shield,
      title: 'Accompagnement',
      description: 'Sécuriser le parcours entrepreneurial avec un soutien sur-mesure',
      color: '#FF7A00',
    },
    {
      icon: Search,
      title: 'Innovation',
      description: 'Identifier et développer les solutions qui transforment l\'Afrique',
      color: '#2D6BFF',
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative py-32 px-6 bg-gradient-to-b from-[#0B0B0E] to-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2D6BFF] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7A00] rounded-full blur-[150px]" />
      </div>

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <span className="text-[#FF7A00]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Notre vision commune
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.2 }}
          >
            Construire l'écosystème de demain
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/60"
            style={{ fontSize: '18px', lineHeight: 1.7 }}
          >
            Notre approche holistique combine mentorat stratégique, ressources techniques et accès
            au capital pour transformer les idées audacieuses en entreprises florissantes.
          </motion.p>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {visionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="group relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <Icon size={32} style={{ color: item.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-3 text-white" style={{ fontSize: '24px', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                    {item.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="mt-6 h-1 rounded-full"
                    style={{ backgroundColor: `${item.color}30` }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
