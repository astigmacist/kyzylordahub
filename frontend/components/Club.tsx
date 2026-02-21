'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Club() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={containerRef}
      id="club"
      className="relative py-16 px-6 bg-background overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section heading — Наш комьюнити */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наш <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">комьюнити</span>
          </h2>
          <p className="text-muted-foreground text-lg">Присоединяйтесь к нашему сообществу в мессенджерах</p>
        </motion.div>

        {/* Main Community Cards - WhatsApp & Telegram */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group p-8 bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 backdrop-blur-sm border border-[#25D366]/30 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Kyzylorda Hub Community</h3>
                  <p className="text-sm text-muted-foreground">в WhatsApp</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">Присоединяйтесь к нашему сообществу в WhatsApp</p>
              <motion.a
                href="https://chat.whatsapp.com/F84l7qcGFbWKDoQMTjY9zw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-xl font-semibold transition-colors"
              >
                Вступить
              </motion.a>
            </div>
          </motion.div>

          {/* Telegram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group p-8 bg-gradient-to-br from-[#0088cc]/10 to-[#0088cc]/5 backdrop-blur-sm border border-[#0088cc]/30 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#0088cc] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Kyzylorda Hub Community</h3>
                  <p className="text-sm text-muted-foreground">в Telegram</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">Присоединяйтесь к нашему сообществу в Telegram</p>
              <motion.a
                href="https://t.me/kyzylordahub"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088cc] hover:bg-[#0077bb] text-white rounded-xl font-semibold transition-colors"
              >
                Вступить
              </motion.a>
            </div>
          </motion.div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              title: 'Startup Hustlers',
              description: 'Клуб основателей стартапов',
              color: '#2D6BFF',
              link: 'https://chat.whatsapp.com/BvikJKw3xIZ6HvnLrxp0vC',
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              )
            },
            {
              title: 'CodeForces',
              description: 'Клуб программирования',
              color: '#FF7A00',
              link: 'https://chat.whatsapp.com/KylGmsTOXWELAXOxqyNa1S',
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              )
            },
            {
              title: 'TechQyzdar',
              description: 'Клуб девушек в IT',
              color: '#E91E63',
              link: 'https://chat.whatsapp.com/H7Y0jO6TC7Q7UiRzmHoJCP',
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              )
            },
            {
              title: 'Hub Speaking Club',
              description: 'Разговорный клуб английского языка',
              color: '#00BCD4',
              link: 'https://chat.whatsapp.com/L3xp2JcswbA3vsF7QgWX9t',
              icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )
            }
          ].map((club, index) => (
            <motion.a
              key={index}
              href={club.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-6 bg-card backdrop-blur-sm border border-border rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${club.color}15, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                <div className="mb-4" style={{ color: club.color }}>
                  {club.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{club.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{club.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 text-white rounded-lg font-semibold text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${club.color}, ${club.color}CC)`
                  }}
                >
                  Вступить
                </motion.button>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
}
