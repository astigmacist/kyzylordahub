'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, MessageCircle, Award, Users, Star } from 'lucide-react';
import { useRef, useState, useMemo } from 'react';

export function Club() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: 'Персональное менторство',
      description: 'Доступ к опытным менторам в вашей отрасли',
      color: '#2D6BFF',
    },
    {
      icon: Award,
      title: 'Эксклюзивные предложения',
      description: 'Скидки на инструменты и сервисы для бизнеса',
      color: '#FF7A00',
    },
    {
      icon: MessageCircle,
      title: 'Воркшопы и мастер-классы',
      description: 'Обучение с международными экспертами',
      color: '#2D6BFF',
    },
    {
      icon: Star,
      title: 'Медиа-присутствие',
      description: 'Возможности для PR и продвижения',
      color: '#FF7A00',
    },
  ];

  // Network constellation data - generate once on client side
  const networkNodes = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 6,
    })),
    []
  );

  return (
    <div
      ref={containerRef}
      id="club"
      className="relative py-32 px-6 bg-gradient-to-b from-black to-[#0B0B0E] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-[#FF7A00]/10 backdrop-blur-sm border border-[#FF7A00]/20 rounded-full"
          >
            <span className="text-[#FF7A00] text-sm font-semibold">
              Клуб предпринимателей
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white mb-6 font-bold leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Сила{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#2D6BFF] bg-clip-text text-transparent">
              сообщества
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed"
          >
            Присоединяйтесь к сети амбициозных предпринимателей, которые делятся знаниями, возможностями
            и ресурсами для совместного роста.
          </motion.p>
        </div>

        {/* Interactive Network Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] mb-24 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden"
        >
          <div className="absolute inset-0">
            <svg className="w-full h-full">
              {/* Connection lines */}
              {networkNodes.map((node, i) =>
                networkNodes.slice(i + 1).map((otherNode, j) => {
                  const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                  if (distance < 30) {
                    return (
                      <motion.line
                        key={`${i}-${j}`}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${otherNode.x}%`}
                        y2={`${otherNode.y}%`}
                        stroke="rgba(255, 122, 0, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: Math.random() * 0.5 }}
                      />
                    );
                  }
                  return null;
                })
              )}

              {/* Nodes */}
              {networkNodes.map((node, i) => (
                <motion.circle
                  key={i}
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={node.size}
                  fill={hoveredNode === i ? '#FF7A00' : '#2D6BFF'}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.5 }}
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(45, 107, 255, 0.5))' }}
                />
              ))}
            </svg>
          </div>

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Network size={64} className="text-white/20 mx-auto mb-4" />
              <p className="text-white/40">
                Сеть из 100+ предпринимателей
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group p-6 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${benefit.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <Icon size={32} style={{ color: benefit.color }} className="mb-4" />
                  <h4 className="text-white mb-2 text-lg font-semibold">
                    {benefit.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
              boxShadow: '0 0 40px rgba(255, 122, 0, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#FF7A00] to-[#FF8C32] text-white rounded-full font-semibold"
          >
            Присоединиться к клубу
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
