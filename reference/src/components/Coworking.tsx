import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Wifi, Coffee, Presentation, Clock, CreditCard } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      description: 'Espaces collaboratifs avec connexion haut débit',
      features: ['WiFi 1Gb/s', 'Café illimité', 'Imprimantes'],
    },
    {
      icon: Coffee,
      title: 'Bureaux privés',
      description: 'Bureaux fermés pour équipes de 2 à 10 personnes',
      features: ['Meublé', 'Sécurisé 24/7', 'Nettoyage'],
    },
    {
      icon: Presentation,
      title: 'Salles de réunion',
      description: 'Espaces équipés pour vos réunions et présentations',
      features: ['Écran 4K', 'Visioconférence', 'Paperboard'],
    },
  ];

  const plans = [
    {
      name: 'Pass Jour',
      price: '€15',
      period: 'jour',
      features: ['Accès open space', 'WiFi haut débit', 'Café & thé', '1h salle réunion'],
      color: '#2D6BFF',
    },
    {
      name: 'Mensuel',
      price: '€150',
      period: 'mois',
      features: ['Accès 24/7', 'Bureau dédié', 'Café illimité', '10h salle réunion', 'Adresse postale'],
      color: '#FF7A00',
      popular: true,
    },
    {
      name: 'Équipe',
      price: '€500',
      period: 'mois',
      features: ['Bureau privé (5 pers)', 'Accès 24/7', 'Services premium', 'Salles illimitées', 'Support IT'],
      color: '#2D6BFF',
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
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#2D6BFF]/10 backdrop-blur-sm border border-[#2D6BFF]/20 rounded-full">
              <span className="text-[#2D6BFF]" style={{ fontSize: '14px', fontWeight: 600 }}>
                Espace Coworking
              </span>
            </div>

            <h2
              className="text-white mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.2 }}
            >
              Votre bureau,{' '}
              <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
                redéfini
              </span>
            </h2>

            <p
              className="text-white/60 mb-8"
              style={{ fontSize: '18px', lineHeight: 1.7 }}
            >
              Des espaces modernes et inspirants conçus pour stimuler votre créativité et
              productivité. Rejoignez une communauté dynamique d'entrepreneurs et d'innovateurs.
            </p>

            <div className="flex items-center gap-4 text-white/50">
              <MapPin size={20} />
              <span style={{ fontSize: '16px' }}>Dakar, Casablanca, Lagos, Nairobi</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450"
                alt="Espace coworking moderne"
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
              <div className="text-white" style={{ fontSize: '32px', fontWeight: 700 }}>
                24/7
              </div>
              <div className="text-white/80" style={{ fontSize: '14px' }}>
                Accès illimité
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
            className="text-white mb-12 text-center"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700 }}
          >
            Espaces & Services
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
                  <h4 className="text-white mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>
                    {space.title}
                  </h4>
                  <p className="text-white/60 mb-6" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                    {space.description}
                  </p>
                  <ul className="space-y-2">
                    {space.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/50" style={{ fontSize: '14px' }}>
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

        {/* Pricing Plans */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-12 text-center"
            style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700 }}
          >
            Tarifs & Plans
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: plan.popular ? 1.05 : 1.03 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#FF7A00]/10 to-transparent border-[#FF7A00]/30'
                    : 'bg-white/[0.02] backdrop-blur-sm border-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FF7A00] to-[#FF8C32] rounded-full">
                    <span className="text-white" style={{ fontSize: '12px', fontWeight: 600 }}>
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-white mb-4" style={{ fontSize: '24px', fontWeight: 600 }}>
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className="text-white"
                      style={{ fontSize: '48px', fontWeight: 700 }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-white/50">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${plan.color}20` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: plan.color }}
                        />
                      </div>
                      <span className="text-white/70" style={{ fontSize: '15px' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF7A00] to-[#FF8C32] text-white'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  } transition-all`}
                  style={{ fontSize: '16px', fontWeight: 600 }}
                >
                  Réserver
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-white/[0.02] border border-white/5 rounded-3xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock size={32} className="text-[#2D6BFF] mx-auto mb-3" />
              <h5 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                Horaires flexibles
              </h5>
              <p className="text-white/50" style={{ fontSize: '14px' }}>
                Accès 24h/24, 7j/7 selon votre formule
              </p>
            </div>
            <div>
              <MapPin size={32} className="text-[#FF7A00] mx-auto mb-3" />
              <h5 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                Localisation premium
              </h5>
              <p className="text-white/50" style={{ fontSize: '14px' }}>
                Quartiers d'affaires, transports à proximité
              </p>
            </div>
            <div>
              <CreditCard size={32} className="text-[#2D6BFF] mx-auto mb-3" />
              <h5 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                Paiement simple
              </h5>
              <p className="text-white/50" style={{ fontSize: '14px' }}>
                Carte bancaire, virement, Mobile Money
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
