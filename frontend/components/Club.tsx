'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

const clubColors = ['#2D6BFF', '#FF7A00', '#E91E63', '#00BCD4'];
const clubIcons = [
  (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  ),
];

const clubLinks = [
  'https://chat.whatsapp.com/BvikJKw3xIZ6HvnLrxp0vC',
  'https://chat.whatsapp.com/KylGmsTOXWELAXOxqyNa1S',
  'https://chat.whatsapp.com/H7Y0jO6TC7Q7UiRzmHoJCP',
  'https://chat.whatsapp.com/L3xp2JcswbA3vsF7QgWX9t',
];

export function Club() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const { t } = useLocale();

  return (
    <div
      ref={containerRef}
      id="club"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Animated background blob */}
      <motion.div
        style={{
          y: bgY,
          background: 'radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)',
        }}
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >

          <h2
            className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            {t.club.title}{' '}
            <span className="gradient-text">{t.club.titleHighlight}</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
            {t.club.subtitle}
          </p>
        </motion.div>

        {/* Messenger Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="relative group p-8 rounded-3xl overflow-hidden transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(37,211,102,0.08), rgba(18,140,126,0.06))',
              border: '1px solid rgba(37,211,102,0.2)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.05), transparent)',
              }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                    {t.club.whatsappName}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#25D366' }}>
                    {t.club.whatsappSub}
                  </p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {t.club.whatsappDesc}
              </p>
              <motion.a
                href="https://chat.whatsapp.com/F84l7qcGFbWKDoQMTjY9zw"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold transition-all self-start"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.25)',
                }}
              >
                {t.club.joinBtn} →
              </motion.a>
            </div>
          </motion.div>

          {/* Telegram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative group p-8 rounded-3xl overflow-hidden transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(0,136,204,0.08), rgba(0,136,204,0.04))',
              border: '1px solid rgba(0,136,204,0.2)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(0,136,204,0.05), transparent)',
              }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #0088cc, #005f8e)' }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                    {t.club.telegramName}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: '#0088cc' }}>
                    {t.club.telegramSub}
                  </p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {t.club.telegramDesc}
              </p>
              <motion.a
                href="https://t.me/kyzylordahub"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(0,136,204,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold transition-all self-start"
                style={{
                  background: 'linear-gradient(135deg, #0088cc, #005f8e)',
                  boxShadow: '0 4px 16px rgba(0,136,204,0.25)',
                }}
              >
                {t.club.joinBtn} →
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Club Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.club.clubs.map((club, index) => (
            <motion.a
              key={index}
              href={clubLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="relative group p-6 rounded-2xl overflow-hidden cursor-pointer transition-all"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${clubColors[index]}18, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{
                    background: `${clubColors[index]}15`,
                    color: clubColors[index],
                    border: `1px solid ${clubColors[index]}25`,
                  }}
                >
                  {clubIcons[index]}
                </div>
                <h4
                  className="text-base font-bold mb-1.5"
                  style={{ color: 'var(--foreground)' }}
                >
                  {club.title}
                </h4>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {club.description}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${clubColors[index]}, ${clubColors[index]}CC)`,
                  }}
                >
                  {t.club.joinBtn}
                  <span>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
