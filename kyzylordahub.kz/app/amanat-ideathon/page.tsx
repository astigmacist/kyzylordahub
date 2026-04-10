'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import {
  ArrowLeft, Trophy, Calendar, Clock, MapPin,
  Building2, Heart, Scale, BookOpen, Users,
  CheckCircle2, ExternalLink, ArrowRight,
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
    tracksTitle: '💡 Хакатонның негізгі бағыттары',
    tracks: [
      { icon: Building2, title: 'PropTech & CityTech', desc: 'Қалалық орта мен тұрғын үй басқаруды цифрландыру.' },
      { icon: Heart, title: 'MedTech', desc: 'Цифрлық денсаулық сақтау және предиктивті аналитика.' },
      { icon: Scale, title: 'LegalTech', desc: 'Құқықтық көмек пен бюрократияны жеңуге арналған сервистер.' },
      { icon: BookOpen, title: 'EdTech', desc: 'Инклюзивті білім беру және цифрлық платформалар.' },
      { icon: Users, title: 'Community Tech', desc: 'Еріктілер қозғалысы мен қайырымдылық трекингі.' },
    ],
    prizeTitle: '🏆 Жүлде қоры мен мүмкіндіктер',
    prize1Title: '1 000 000 теңге',
    prize1Desc: 'Жеңімпаз жобаны кәсіби деңгейде жүзеге асыру үшін келісімшарт.',
    prize2Title: 'ЖОО гранты',
    prize2Desc: 'Мектеп оқушылары мен колледж түлектеріне арналған ерекше мүмкіндік!',
    formatTitle: 'Формат',
    format: ['Жобаны дайындайды', 'Презентация жасайды', 'Сарапшы алдында қорғайды'],
    eventTitle: '📍 Өтетін орны мен уақыты',
    eventDate: '17 сәуір',
    eventTime: '14:00',
    eventPlace: 'Студенттер сарайы, Жахаева к-сі, 11',
    registerBtn: 'Тіркелу',
    registerNote: 'Google Forms арқылы тіркелу',
  },
  ru: {
    back: 'На главную',
    badge: '🚀 17 апреля · 14:00',
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
    prizeTitle: '🏆 Призовой фонд и возможности',
    prize1Title: '1 000 000 тенге',
    prize1Desc: 'Контракт на профессиональную реализацию проекта-победителя.',
    prize2Title: 'Грант ВУЗа',
    prize2Desc: 'Особая возможность для школьников и выпускников колледжей!',
    formatTitle: 'Формат',
    format: ['Готовят проект', 'Делают презентацию', 'Защищают перед экспертами'],
    eventTitle: '📍 Место и время проведения',
    eventDate: '17 апреля',
    eventTime: '14:00',
    eventPlace: 'Студенттер сарайы, ул. Жахаева, 11',
    registerBtn: 'Зарегистрироваться',
    registerNote: 'Регистрация через Google Forms',
  },
};

export default function AmanatIdeathon() {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const c = locale === 'kz' ? content.kz : content.ru;

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

      {/* Minimal top bar — back + lang/theme */}
      <div className="px-6 pt-6 pb-2 flex items-center justify-between">
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

      <main className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1
            className="font-extrabold leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(56px, 10vw, 120px)', color: 'var(--foreground)' }}
          >
            <span className="gradient-text">AMANAT</span>
            <br />
            <span style={{ color: 'var(--foreground)' }}>IDEATHON</span>
          </h1>

          <p className="text-lg font-medium mb-3" style={{ color: 'var(--muted-foreground)' }}>
            {c.subtitle}
          </p>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>
            {c.tagline}
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-12 mt-12 flex-wrap"
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

        {/* Prizes + Format + Who */}
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
          className="relative p-16 rounded-3xl text-center overflow-hidden mb-8"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
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
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--foreground)' }}>
              {locale === 'kz' ? 'Тіркелуге дайынсыз ба?' : 'Готовы зарегистрироваться?'}
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              {locale === 'kz'
                ? '17 сәуір, сағат 14:00. Студенттер сарайы, Жахаева к-сі, 11'
                : '17 апреля, в 14:00. Студенттер сарайы, ул. Жахаева, 11'}
            </p>
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(45,107,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-12 py-5 text-white font-bold rounded-2xl text-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                boxShadow: '0 4px 24px rgba(45,107,255,0.3)',
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
