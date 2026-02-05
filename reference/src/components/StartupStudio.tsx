import { motion, useScroll, useTransform } from 'motion/react';
import { Lightbulb, Rocket, TrendingUp, Users, Code, Database, Shield, DollarSign } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StartupStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const timeline = [
    {
      phase: 'Idéation',
      icon: Lightbulb,
      description: 'Validation du concept, étude de marché, design thinking',
      duration: '4-6 semaines',
      color: '#2D6BFF',
    },
    {
      phase: 'Incubation',
      icon: Code,
      description: 'MVP, équipe fondatrice, business model, premiers utilisateurs',
      duration: '3-6 mois',
      color: '#FF7A00',
    },
    {
      phase: 'Accélération',
      icon: Rocket,
      description: 'Croissance, levée de fonds, scaling, expansion régionale',
      duration: '6-12 mois',
      color: '#2D6BFF',
    },
  ];

  const resources = [
    { icon: Code, title: 'UX/UI Design', description: 'Équipe design dédiée' },
    { icon: Database, title: 'Infrastructure Cloud', description: 'AWS, Azure, GCP' },
    { icon: TrendingUp, title: 'Data Analytics', description: 'Outils BI et analytics' },
    { icon: Shield, title: 'Legal & Compliance', description: 'Support juridique' },
    { icon: DollarSign, title: 'Finance & Admin', description: 'Comptabilité et gestion' },
    { icon: Users, title: 'Fundraising', description: 'Accès aux investisseurs' },
  ];

  return (
    <div
      ref={containerRef}
      id="studio"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#2D6BFF]/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-[#2D6BFF]/10 backdrop-blur-sm border border-[#2D6BFF]/20 rounded-full"
          >
            <span className="text-[#2D6BFF]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Startup Studio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.2 }}
          >
            Du concept au marché,{' '}
            <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
              plus vite
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/60"
            style={{ fontSize: '18px', lineHeight: 1.7 }}
          >
            Notre méthodologie éprouvée transforme les idées prometteuses en startups rentables
            grâce à un accompagnement intensif et des ressources de classe mondiale.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2D6BFF] via-[#FF7A00] to-[#2D6BFF] opacity-20" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden">
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Phase number */}
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                            border: `2px solid ${item.color}50`,
                          }}
                        >
                          <Icon size={24} style={{ color: item.color }} />
                        </div>
                        <div
                          className="text-white/30"
                          style={{ fontSize: '48px', fontWeight: 700 }}
                        >
                          0{index + 1}
                        </div>
                      </div>

                      <h3 className="mb-3 text-white" style={{ fontSize: '24px', fontWeight: 600 }}>
                        {item.phase}
                      </h3>
                      <p className="mb-4 text-white/60" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                        {item.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-white/5 rounded-full">
                        <span className="text-white/50" style={{ fontSize: '13px' }}>
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Resources */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-12 text-center"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700 }}
          >
            Ressources à disposition
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl hover:border-white/10 transition-all cursor-pointer"
                >
                  <Icon size={28} className="text-[#FF7A00] mb-4" />
                  <h4 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    {resource.title}
                  </h4>
                  <p className="text-white/50" style={{ fontSize: '14px' }}>
                    {resource.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(45, 107, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#1455F0] to-[#2D6BFF] text-white rounded-full"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            Candidater maintenant
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
