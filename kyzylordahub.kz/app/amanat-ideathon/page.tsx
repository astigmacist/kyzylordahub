'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import {
  ArrowLeft, Trophy, Calendar, Clock, MapPin,
  Building2, Heart, Scale, BookOpen, Users,
  CheckCircle2, ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfpKW5fkFWv4WA8i7XzUJPSThq2xVfkLIfowHU_SMq4G_5mAA/viewform?usp=send_form';

const content = {
  kz: {
    back: 'Басты бетке',
    badge: '🚀 17 сәуір · 14:00',
    title: 'AMANAT IDEATHON',
    subtitle: 'Әлеуметтік-инновациялық жобалар хакатоны',
    tagline: 'Сенің идеяң қоғамдағы кедергілерді жоюға қабілетті ме? Олай болса, біз сені күтеміз!',
    about: 'Хакатон туралы',
    aboutText:
      'Барлық мектеп оқушылары мен студенттерді әлеуметтік маңызы бар кейстерді шешуге және өз жобаларын қорғауға шақырамыз. AMANAT IDEATHON — идеялар нақты шешімдерге айналатын платформа.',
    who: 'Кімдер қатыса алады',
    whoItems: ['Мектеп оқушылары', 'Студенттер', 'Колледж түлектері'],
    tracksTitle: ' Хакатонның негізгі бағыттары',
    tracks: [
      { icon: Building2, title: 'PropTech & CityTech', desc: 'Қалалық орта мен тұрғын үй басқаруды цифрландыру.' },
      { icon: Heart, title: 'MedTech', desc: 'Цифрлық денсаулық сақтау және предиктивті аналитика.' },
      { icon: Scale, title: 'LegalTech', desc: 'Құқықтық көмек пен бюрократияны жеңуге арналған сервистер.' },
      { icon: BookOpen, title: 'EdTech', desc: 'Инклюзивті білім беру және цифрлық платформалар.' },
      { icon: Users, title: 'Community Tech', desc: 'Еріктілер қозғалысы мен қайырымдылық трекингі.' },
    ],
    prizeTitle: ' Жүлде қоры мен мүмкіндіктер',
    prize1Title: '1 000 000 теңге',
    prize1Desc: 'Жеңімпаз жобаны кәсіби деңгейде жүзеге асыру үшін келісімшарт.',
    prize2Title: 'ЖОО гранты',
    prize2Desc: 'Мектеп оқушылары мен колледж түлектеріне арналған ерекше мүмкіндік!',
    formatTitle: 'Формат',
    format: ['Дайын жобамен келеді', 'Жобаны сарапшылардың алдында қорғайды', 'Марапатталады 🏆'],
    eventTitle: '📍 Өтетін орны мен уақыты',
    eventDate: '17 сәуір',
    eventTime: '14:00',
    eventPlace: 'Студенттер сарайы, Жахаева к-сі, 11',
    registerBtn: 'Тіркелу',
    registerNote: 'Google Forms арқылы тіркелу',
    countdownLabel: '17 сәуірге дейін қалды',
    countdownExpired: 'Хакатон басталды! 🚀',
    units: ['күн', 'сағат', 'минут', 'секунд'],
  },
  ru: {
    back: 'На главную',
    badge: ' 17 апреля · 14:00',
    title: 'AMANAT IDEATHON',
    subtitle: 'Хакатон социально-инновационных проектов',
    tagline: 'Твоя идея способна устранить барьеры в обществе? Тогда мы ждём тебя!',
    about: 'О хакатоне',
    aboutText:
      'Приглашаем всех школьников и студентов к решению социально значимых кейсов и защите своих проектов. AMANAT IDEATHON — платформа, где идеи превращаются в реальные решения.',
    who: 'Кто может участвовать',
    whoItems: ['Школьники', 'Студенты', 'Выпускники колледжей'],
    tracksTitle: '💡 Основные направления хакатона',
    tracks: [
      { icon: Building2, title: 'PropTech & CityTech', desc: 'Цифровизация городской среды и управления жильём.' },
      { icon: Heart, title: 'MedTech', desc: 'Цифровое здравоохранение и предиктивная аналитика.' },
      { icon: Scale, title: 'LegalTech', desc: 'Сервисы для правовой помощи и преодоления бюрократии.' },
      { icon: BookOpen, title: 'EdTech', desc: 'Инклюзивное образование и цифровые платформы.' },
      { icon: Users, title: 'Community Tech', desc: 'Волонтёрское движение и трекинг благотворительности.' },
    ],
    prizeTitle: ' Призовой фонд и возможности',
    prize1Title: '1 000 000 тенге',
    prize1Desc: 'Контракт на профессиональную реализацию проекта-победителя.',
    prize2Title: 'Грант ВУЗа',
    prize2Desc: 'Особая возможность для школьников и выпускников колледжей!',
    formatTitle: 'Формат',
    format: ['Приходят с готовым проектом', 'Защищают проект перед экспертами', 'Награждаются 🏆'],
    eventTitle: '📍 Место и время проведения',
    eventDate: '17 апреля',
    eventTime: '14:00',
    eventPlace: 'Студенттер сарайы, ул. Жахаева, 11',
    registerBtn: 'Зарегистрироваться',
    registerNote: 'Регистрация через Google Forms',
    countdownLabel: 'До 17 апреля осталось',
    countdownExpired: 'Хакатон начался! 🚀',
    units: ['дней', 'часов', 'минут', 'секунд'],
  },
};

// Kazakhstan timezone: UTC+5
const EVENT_DATE = new Date('2026-04-17T14:00:00+05:00');

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });
  useEffect(() => {
    const calc = () => {
      const diff = EVENT_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        expired: false,
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

export default function AmanatIdeathon() {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const c = locale === 'kz' ? content.kz : content.ru;
  const countdown = useCountdown();

  useEffect(() => { setMounted(true); }, []);

  const trackColors = ['#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00', '#2D6BFF'];

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'var(--background)' }}>

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,107,255,0.2) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,122,0,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Top bar */}
      <div className="px-4 sm:px-6 pt-6 pb-2 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ x: -3 }}
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--card-border)',
              color: 'var(--muted-foreground)',
            }}
          >
            <ArrowLeft size={15} />
            {c.back}
          </motion.div>
        </Link>

        <div className="flex items-center gap-2">
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'var(--card)', border: '1px solid var(--card-border)', color: 'var(--muted-foreground)' }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark'
                  ? <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><Moon size={14} /></motion.div>
                  : <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Sun size={14} /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          )}
          <div className="flex items-center gap-0.5 p-1 rounded-full" style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}>
            {(['ru', 'kz'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className="relative px-3 py-1 rounded-full text-xs font-bold transition-all"
                style={{
                  background: locale === lang ? 'linear-gradient(135deg, #2D6BFF, #FF7A00)' : 'transparent',
                  color: locale === lang ? '#fff' : 'var(--muted-foreground)',
                }}
              >
                {lang === 'ru' ? 'РУС' : 'ҚАЗ'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1
            className="font-extrabold leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)', color: 'var(--foreground)' }}
          >
            <span className="gradient-text">AMANAT</span>
            <br />
            <span style={{ color: 'var(--foreground)' }}>IDEATHON</span>
          </h1>

          <p className="text-lg font-medium mb-3" style={{ color: 'var(--muted-foreground)' }}>
            {c.subtitle}
          </p>
          <p className="text-base max-w-2xl mx-auto leading-relaxed px-2" style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>
            {c.tagline}
          </p>

          {/* Hero register button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(45,107,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-2xl text-base transition-all"
              style={{
                background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                boxShadow: '0 4px 20px rgba(45,107,255,0.3)',
              }}
            >
              {c.registerBtn}
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mt-12 flex-wrap"
          >
            {[
              { value: '5', label: locale === 'kz' ? 'Бағыт' : 'Направлений' },
              { value: '1 000 000 ₸', label: locale === 'kz' ? 'Жүлде қоры' : 'Призовой фонд' },
              { value: '🎓', label: locale === 'kz' ? 'Грант + Келісімшарт' : 'Грант + Контракт' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-extrabold" style={{ color: 'var(--foreground)' }}>{s.value}</span>
                <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Event info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { icon: Calendar, label: c.eventDate, color: '#2D6BFF' },
            { icon: Clock, label: c.eventTime, color: '#FF7A00' },
            { icon: MapPin, label: c.eventPlace, color: '#2D6BFF' },
          ].map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-extrabold mb-8 text-center" style={{ color: 'var(--foreground)' }}>
            {c.tracksTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.tracks.map(({ icon: Icon, title, desc }, i) => {
              const col = trackColors[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'var(--card)',
                    border: `1px solid ${col}22`,
                    boxShadow: `0 4px 20px ${col}0A`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${col}12`, border: `1px solid ${col}25` }}>
                    <Icon size={20} style={{ color: col }} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--foreground)' }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Prizes + Format */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">

          {/* Prizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,184,0,0.06), rgba(255,122,0,0.06))',
              border: '1px solid rgba(255,184,0,0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Trophy size={20} style={{ color: '#FFB800' }} />
              <h2 className="text-xl font-extrabold" style={{ color: 'var(--foreground)' }}>{c.prizeTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,184,0,0.08)', border: '1px solid rgba(255,184,0,0.2)' }}>
                <div className="text-3xl mb-3">💰</div>
                <p className="font-bold text-lg mb-1" style={{ color: 'var(--foreground)' }}>{c.prize1Title}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{c.prize1Desc}</p>
              </div>
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(45,107,255,0.08)', border: '1px solid rgba(45,107,255,0.2)' }}>
                <div className="text-3xl mb-3">🎓</div>
                <p className="font-bold text-lg mb-1" style={{ color: 'var(--foreground)' }}>{c.prize2Title}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{c.prize2Desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl"
            style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
          >
            <h2 className="text-lg font-extrabold mb-5" style={{ color: 'var(--foreground)' }}>{c.formatTitle}</h2>
            <div className="flex flex-col gap-3">
              {c.format.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{ background: i % 2 === 0 ? '#2D6BFF' : '#FF7A00' }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm" style={{ color: 'var(--foreground)' }}>{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Who */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl mb-16"
          style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
        >
          <h2 className="text-lg font-extrabold mb-5" style={{ color: 'var(--foreground)' }}>{c.who}</h2>
          <div className="flex flex-wrap gap-3">
            {c.whoItems.map((w, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  background: i % 2 === 0 ? 'rgba(45,107,255,0.08)' : 'rgba(255,122,0,0.08)',
                  color: i % 2 === 0 ? '#2D6BFF' : '#FF7A00',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(45,107,255,0.2)' : 'rgba(255,122,0,0.2)'}`,
                }}
              >
                <CheckCircle2 size={14} />
                {w}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Register CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl text-center overflow-hidden mb-8"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            padding: 'clamp(32px, 6vw, 64px) clamp(16px, 5vw, 64px)',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(45,107,255,0.12) 0%, rgba(255,122,0,0.12) 100%)' }} />
          <motion.div
            className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30"
            animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ background: 'rgba(45,107,255,0.4)' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-30"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ background: 'rgba(255,122,0,0.4)' }}
          />

          <div className="relative z-10">
            {/* Countdown label */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {countdown.expired ? '' : c.countdownLabel}
            </p>

            {/* Countdown */}
            {countdown.expired ? (
              <p className="text-2xl font-extrabold mb-8" style={{ color: 'var(--foreground)' }}>
                {c.countdownExpired}
              </p>
            ) : (
              <div className="mb-8 flex justify-center">
                {/* Dark pill — fixed column widths so it never overflows */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'flex-end',
                    background: 'rgba(18,18,20,0.92)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '20px',
                    padding: '18px 14px',
                  }}
                >
                  {[
                    { value: countdown.days,    label: c.units[0] },
                    { value: countdown.hours,   label: c.units[1] },
                    { value: countdown.minutes, label: c.units[2] },
                    { value: countdown.seconds, label: c.units[3] },
                  ].map(({ value, label }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-end' }}>
                      {/* Number + label */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '64px' }}>
                        <span
                          style={{
                            fontSize: 'clamp(30px, 6vw, 56px)',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '-1px',
                            lineHeight: 1,
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {String(value).padStart(2, '0')}
                        </span>
                        <span
                          style={{
                            marginTop: '6px',
                            fontSize: 'clamp(9px, 1.8vw, 12px)',
                            color: 'rgba(255,255,255,0.38)',
                            fontWeight: 400,
                          }}
                        >
                          {label}
                        </span>
                      </div>
                      {/* Colon separator */}
                      {i < 3 && (
                        <span
                          style={{
                            fontSize: 'clamp(20px, 4vw, 40px)',
                            fontWeight: 700,
                            color: 'rgba(255,255,255,0.22)',
                            lineHeight: 1,
                            paddingBottom: 'clamp(14px, 3vw, 24px)',
                            paddingLeft: '3px',
                            paddingRight: '3px',
                            userSelect: 'none',
                            flexShrink: 0,
                          }}
                        >
                          :
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <p
              className="mb-6 sm:mb-8 px-2"
              style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', color: 'var(--muted-foreground)' }}
            >
              {locale === 'kz'
                ? '17 сәуір, сағат 14:00 · Студенттер сарайы, Жахаева к-сі, 11'
                : '17 апреля, 14:00 · Студенттер сарайы, ул. Жахаева, 11'}
            </p>

            {/* Register button */}
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(45,107,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 text-white font-bold rounded-2xl transition-all"
              style={{
                background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                boxShadow: '0 4px 24px rgba(45,107,255,0.3)',
                padding: 'clamp(14px, 2.5vw, 20px) clamp(28px, 6vw, 48px)',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
              }}
            >
              {c.registerBtn}
              <ExternalLink size={20} />
            </motion.a>
            <p className="mt-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>{c.registerNote}</p>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer
        className="py-6 px-6 text-center text-sm"
        style={{ borderTop: '1px solid var(--border)', color: 'var(--muted-foreground)' }}
      >
        © 2026 Kyzylorda Hub. {locale === 'kz' ? 'Барлық құқықтар қорғалған.' : 'Все права защищены.'}
      </footer>
    </div>
  );
}
