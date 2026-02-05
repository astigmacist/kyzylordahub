import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Amina Diallo',
      role: 'CEO, PayFlow Africa',
      image: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba',
      quote: "Doonya Spaces a transformé notre vision en réalité. L'accompagnement personnalisé et l'accès aux ressources nous ont permis de lever 2M€ en série A.",
      rating: 5,
    },
    {
      name: 'Kwame Osei',
      role: 'Founder, AgriConnect',
      image: 'https://images.unsplash.com/photo-1702468049239-49fd1cf99d20',
      quote: "Le réseau et le mentorat du Club ont ouvert des portes incroyables. Nous avons multiplié notre chiffre d'affaires par 5 en 18 mois.",
      rating: 5,
    },
    {
      name: 'Zara Mensah',
      role: 'CPO, HealthHub',
      image: 'https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06',
      quote: "L'environnement créatif du coworking stimule notre innovation quotidienne. L'équipe Doonya est toujours là pour nous soutenir.",
      rating: 5,
    },
  ];

  return (
    <div className="relative py-32 px-6 bg-gradient-to-b from-black to-[#0B0B0E] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-[#FF7A00]/10 backdrop-blur-sm border border-[#FF7A00]/20 rounded-full"
          >
            <span className="text-[#FF7A00]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Témoignages
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700 }}
          >
            Ils ont accéléré avec nous
          </motion.h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative p-12 lg:p-16 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden"
          >
            {/* Quote icon */}
            <Quote size={64} className="absolute top-8 right-8 text-[#FF7A00]/20" />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#FF7A00] fill-[#FF7A00]" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-white/90 mb-8"
                style={{ fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: 1.7 }}
              >
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D6BFF] to-[#FF7A00] p-0.5">
                  <div className="w-full h-full rounded-full bg-black" />
                </div>
                <div>
                  <div className="text-white mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-white/60" style={{ fontSize: '14px' }}>
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="pointer-events-auto w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="pointer-events-auto w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
