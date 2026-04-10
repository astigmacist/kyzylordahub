'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import {
  Trophy,
  CheckCircle2,
  ChevronRight,
  Shield,
  Smartphone,
  MapPin,
  Bell,
  ChevronDown,
} from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

type Tab = 'about' | 'case' | 'register';

const content = {
  kz: {
    badge: 'Жуық арада',
    title: 'Хакатон',
    subtitle: 'ТЖД үшін қоғамдық және өрт қауіпсіздігін арттыруға арналған цифрлық шешімдер',
    scrollHint: 'Төменге жылжу',
    tabs: { about: 'Хакатон туралы', case: 'Кейс', register: 'Тіркелу' },
    about: {
      desc: 'Хакатон — бұл қысқа уақыт ішінде командалар нақты мәселелерді шешуге арналған цифрлық өнімдердің прототиптерін әзірлейтін қарқынды жарыс форматы.\n\nБұл хакатон аясында қатысушылар қоғамдық және өрт қауіпсіздігін арттыруға, сондай-ақ Төтенше жағдайлар департаментінің профилактикалық жұмыстарын цифрландыруға бағытталған инновациялық IT-шешімдерді әзірлейді.\n\nХакатон нәтижесінде командалар өздерінің цифрлық шешімдерінің прототиптерін ұсынып, оларды сарапшылар алдында қорғайды.',
      whoTitle: 'Кімдер қатыса алады',
      who: [
        'backend / frontend әзірлеушілер',
        'мобильді қосымша әзірлеушілер',
        'UX/UI дизайнерлер',
        'аналитиктер',
        'IT мамандығының студенттері',
        'технологиялық жобаларға қызығушылығы бар барлық қатысушылар',
      ],
      prizeTitle: 'Жүлде қоры',
      prize:
        'Хакатонның басты жүлдесі — жеңімпаз команда цифрлық шешімді әзірлеу бойынша келісімшарт жасау мүмкіндігіне ие болады. Бұл қатысушыларға өз идеяларын нақты өнімге айналдырып, оны Төтенше жағдайлар департаментінің жұмысында іске асыруға мүмкіндік береді.',
      formatTitle: 'Хакатон форматы',
      format: [
        'Ұсынылған кейстермен танысады',
        'Цифрлық шешімнің прототипін әзірлейді',
        'Жобаның презентациясын дайындайды',
        'Шешімді сарапшылар алқасы алдында қорғайды',
      ],
    },
    case: {
      label: 'Кейс атауы',
      title:
        'Төтенше жағдайлар департаменті үшін қоғамдық және өрт қауіпсіздігін арттыруға арналған цифрлық шешімдер',
      desc: 'Кейс аясында қатысушылар Төтенше жағдайлар департаментінің жұмысын жеңілдетуге және тұрғындардың қауіпсіздігін арттыруға бағытталған цифрлық шешімдерді ұсынуы тиіс. Негізгі мақсат — профилактикалық жұмыстарды цифрландыру, қауіп-қатерлер туралы ақпарат алмасуды жақсарту және төтенше жағдайлардың алдын алу тиімділігін арттыру.\n\nКомандалар келесі бағыттар бойынша шешімдер ұсына алады:',
      dirs: [
        {
          title: 'Профилактикалық жұмыстарды басқару жүйесі',
          desc: 'ТЖД қызметкерлеріне арналған цифрлық платформа немесе админ-панель. Жүйе карта арқылы қай аймақта профилактика жүргізілгенін немесе жүргізілмегенін көрсетуге, жұмыстарды тіркеуге, жоспарлауға және статистиканы бақылауға мүмкіндік беруі тиіс.',
        },
        {
          title: 'Тұрғындарға арналған мобильді қосымша',
          desc: 'Тұрғындарға төтенше жағдайлар туралы жедел ескертулер алуға, қауіпті жағдайлар туралы хабарлауға және ТЖ кезінде әрекет ету нұсқаулықтарын көруге мүмкіндік беретін қосымша.',
        },
        {
          title: 'Қауіпті жағдайларды картада көрсету жүйесі',
          desc: 'Қала немесе аудан картасында қауіпті аймақтарды (өрт қаупі жоғары аймақтар, су басу қаупі бар жерлер, қауіпті инфрақұрылым нысандары) көрсетуге мүмкіндік беретін интерактивті сервис.',
        },
        {
          title: 'Хабарлау және кері байланыс жүйесі',
          desc: 'Тұрғындардан келетін өтініштерді қабылдап, оларды картада белгілеуге және тиісті қызметтерге жедел жеткізуге арналған жүйе.',
        },
      ],
      footer:
        'Ұсынылған шешімдер пайдаланушыға түсінікті, техникалық тұрғыдан жүзеге асыруға болатын және төтенше жағдайлардың алдын алуға нақты пайда әкелетін болуы тиіс.',
    },
    form: {
      title: 'Тіркелу',
      subtitle: 'Хакатонға қатысу үшін өтінім беріңіз',
      name: 'Аты-жөні',
      namePh: 'Аты-жөніңізді енгізіңіз',
      phone: 'Телефон',
      phonePh: '+7 (___) ___ __ __',
      email: 'Электрондық пошта',
      emailPh: 'email@example.com',
      role: 'Рөл',
      rolePh: 'Рөліңізді таңдаңыз',
      roles: [
        'Backend әзірлеуші',
        'Frontend әзірлеуші',
        'Мобильді әзірлеуші',
        'UX/UI дизайнер',
        'Аналитик',
        'Студент',
        'Басқа',
      ],
      team: 'Команда атауы (міндетті емес)',
      teamPh: 'Команданың атауы',
      submit: 'WhatsApp арқылы тіркелу',
      note: 'WhatsApp ашылып, тіркелу мәліметтері жіберіледі',
      successTitle: 'Өтінім жіберілді!',
      successText: 'Тіркеліміңіз қабылданды. Біз сізбен хабарласамыз.',
      registerBtn: 'Тіркелу',
    },
  },
  ru: {
    badge: 'Скоро',
    title: 'Хакатон',
    subtitle: 'Цифровые решения для повышения общественной и пожарной безопасности для ДЧС',
    scrollHint: 'Прокрутить вниз',
    tabs: { about: 'О хакатоне', case: 'Кейс', register: 'Регистрация' },
    about: {
      desc: 'Хакатон — это интенсивный соревновательный формат, в котором команды разрабатывают прототипы цифровых продуктов для решения реальных задач за короткое время.\n\nВ рамках этого хакатона участники разработают инновационные IT-решения, направленные на повышение общественной и пожарной безопасности, а также цифровизацию профилактической работы Департамента по ЧС.\n\nПо результатам хакатона команды представят прототипы своих цифровых решений и защитят их перед экспертным советом.',
      whoTitle: 'Кто может участвовать',
      who: [
        'Backend / Frontend разработчики',
        'Разработчики мобильных приложений',
        'UX/UI дизайнеры',
        'Аналитики',
        'Студенты IT-специальностей',
        'Все, кто интересуется технологическими проектами',
      ],
      prizeTitle: 'Призовой фонд',
      prize:
        'Главный приз хакатона — команда-победитель получит возможность заключить контракт на разработку цифрового решения. Это позволит участникам превратить свои идеи в реальный продукт и внедрить его в работу Департамента по ЧС.',
      formatTitle: 'Формат хакатона',
      format: [
        'Знакомятся с предложенными кейсами',
        'Разрабатывают прототип цифрового решения',
        'Готовят презентацию проекта',
        'Защищают решение перед экспертным советом',
      ],
    },
    case: {
      label: 'Название кейса',
      title:
        'Цифровые решения для повышения общественной и пожарной безопасности для Департамента по чрезвычайным ситуациям',
      desc: 'В рамках кейса участники должны предложить цифровые решения, направленные на облегчение работы Департамента по ЧС и повышение безопасности населения. Главная цель — цифровизация профилактической работы, улучшение обмена информацией об угрозах и повышение эффективности предотвращения ЧС.\n\nКоманды могут предложить решения по следующим направлениям:',
      dirs: [
        {
          title: 'Система управления профилактической работой',
          desc: 'Цифровая платформа или административная панель для сотрудников ДЧС. Система должна отображать на карте районы охвата профилактикой, регистрировать работы, планировать и отслеживать статистику.',
        },
        {
          title: 'Мобильное приложение для населения',
          desc: 'Приложение, позволяющее населению получать оперативные предупреждения о ЧС, сообщать об опасных ситуациях и просматривать инструкции по действиям при ЧС.',
        },
        {
          title: 'Система отображения опасных зон на карте',
          desc: 'Интерактивный сервис для отображения опасных зон на карте города или района (зоны пожарного риска, угрозы затопления, опасные объекты инфраструктуры).',
        },
        {
          title: 'Система уведомлений и обратной связи',
          desc: 'Система для приема обращений от населения, их обозначения на карте и оперативной передачи соответствующим службам.',
        },
      ],
      footer:
        'Предложенные решения должны быть понятны пользователю, технически реализуемы и приносить реальную пользу в предотвращении чрезвычайных ситуаций.',
    },
    form: {
      title: 'Регистрация',
      subtitle: 'Подайте заявку для участия в хакатоне',
      name: 'ФИО',
      namePh: 'Введите ваше имя',
      phone: 'Телефон',
      phonePh: '+7 (___) ___ __ __',
      email: 'Электронная почта',
      emailPh: 'email@example.com',
      role: 'Роль',
      rolePh: 'Выберите вашу роль',
      roles: [
        'Backend разработчик',
        'Frontend разработчик',
        'Мобильный разработчик',
        'UX/UI дизайнер',
        'Аналитик',
        'Студент',
        'Другое',
      ],
      team: 'Название команды (необязательно)',
      teamPh: 'Название вашей команды',
      submit: 'Зарегистрироваться через WhatsApp',
      note: 'Откроется WhatsApp с данными регистрации',
      successTitle: 'Заявка отправлена!',
      successText: 'Ваша регистрация принята. Мы свяжемся с вами.',
      registerBtn: 'Зарегистрироваться',
    },
  },
};

const dirIcons = [Shield, Smartphone, MapPin, Bell];
const dirColors = ['#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00'];

interface HackathonHeroProps {
  onScrollDown: () => void;
}

export function HackathonHero({ onScrollDown }: HackathonHeroProps) {
  const [tab, setTab] = useState<Tab>('about');
  const [form, setForm] = useState({ name: '', phone: '', email: '', role: '', team: '' });
  const [submitted, setSubmitted] = useState(false);
  const { locale } = useLocale();
  const c = locale === 'kz' ? content.kz : content.ru;

  const inputStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#ffffff',
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const msg = `*${locale === 'kz' ? 'Хакатон тіркеу' : 'Регистрация на хакатон'}*\n\n${c.form.name}: ${form.name}\n${c.form.phone}: ${form.phone}\n${c.form.email}: ${form.email}\n${c.form.role}: ${form.role}\nКоманда: ${form.team || '—'}`;
      window.open(`https://wa.me/77057291207?text=${encodeURIComponent(msg)}`, '_blank');
      setSubmitted(true);
    },
    [locale, c, form]
  );

  return (
    <section
      id="hackathon"
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #060a18 0%, #0d1530 40%, #0a1220 100%)',
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'rgba(45,107,255,0.18)' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'rgba(255,122,0,0.15)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'rgba(45,107,255,0.3)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col pt-24 pb-8 px-6">
        <div className="max-w-[1100px] mx-auto w-full flex-1 flex flex-col">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
              style={{
                background: 'rgba(45,107,255,0.15)',
                color: '#6B9FFF',
                border: '1px solid rgba(45,107,255,0.3)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {c.badge}
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4"
              style={{ color: '#ffffff' }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {c.title}
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {c.subtitle}
            </p>
          </motion.div>

          {/* Card with tabs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex-1 rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
            }}
          >
            {/* Tabs Row */}
            <div
              className="flex gap-1 px-6 pt-5 pb-0 flex-shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              {(['about', 'case', 'register'] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="relative px-5 py-3 text-sm font-medium transition-colors duration-200 rounded-t-xl"
                  style={{
                    color: tab === t ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {c.tabs[t]}
                  {tab === t && (
                    <motion.div
                      layoutId="hackHeroTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #2D6BFF, #FF7A00)' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              <AnimatePresence mode="wait">

                {/* ── About Tab ── */}
                {tab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Description */}
                      <div className="space-y-4">
                        <p
                          className="text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: 'rgba(255,255,255,0.65)' }}
                        >
                          {c.about.desc}
                        </p>

                        {/* Format steps */}
                        <div>
                          <h3 className="font-bold mb-3 text-sm" style={{ color: '#ffffff' }}>
                            {c.about.formatTitle}
                          </h3>
                          <div className="space-y-2.5">
                            {c.about.format.map((s, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div
                                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                                  style={{
                                    background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                                  }}
                                >
                                  {i + 1}
                                </div>
                                <span
                                  className="text-sm"
                                  style={{ color: 'rgba(255,255,255,0.65)' }}
                                >
                                  {s}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className="space-y-4">
                        {/* Who */}
                        <div>
                          <h3 className="font-bold mb-3 text-sm" style={{ color: '#ffffff' }}>
                            {c.about.whoTitle}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {c.about.who.map((w, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
                                style={{
                                  background:
                                    i % 2 === 0
                                      ? 'rgba(45,107,255,0.12)'
                                      : 'rgba(255,122,0,0.12)',
                                  color:
                                    i % 2 === 0 ? '#6B9FFF' : '#FF9A40',
                                  border: `1px solid ${i % 2 === 0 ? 'rgba(45,107,255,0.25)' : 'rgba(255,122,0,0.25)'}`,
                                }}
                              >
                                <CheckCircle2 size={11} />
                                {w}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Prize */}
                        <div
                          className="p-4 rounded-2xl"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(255,184,0,0.08), rgba(255,122,0,0.08))',
                            border: '1px solid rgba(255,184,0,0.2)',
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy size={18} style={{ color: '#FFB800' }} />
                            <h3 className="font-bold text-sm" style={{ color: '#ffffff' }}>
                              {c.about.prizeTitle}
                            </h3>
                          </div>
                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.6)' }}
                          >
                            {c.about.prize}
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setTab('register')}
                      className="w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)' }}
                    >
                      {c.form.registerBtn} <ChevronRight size={18} />
                    </motion.button>
                  </motion.div>
                )}

                {/* ── Case Tab ── */}
                {tab === 'case' && (
                  <motion.div
                    key="case"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest font-semibold mb-2"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                      >
                        {c.case.label}
                      </p>
                      <h3
                        className="text-lg font-extrabold leading-snug"
                        style={{
                          background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {c.case.title}
                      </h3>
                    </div>

                    <p
                      className="text-sm leading-relaxed whitespace-pre-line"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      {c.case.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {c.case.dirs.map((d, i) => {
                        const Icon = dirIcons[i];
                        const col = dirColors[i];
                        return (
                          <div
                            key={i}
                            className="p-4 rounded-2xl"
                            style={{
                              background: `${col}08`,
                              border: `1px solid ${col}25`,
                            }}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: `${col}18` }}
                              >
                                <Icon size={18} style={{ color: col }} />
                              </div>
                              <h4
                                className="text-sm font-bold leading-snug"
                                style={{ color: '#ffffff' }}
                              >
                                {d.title}
                              </h4>
                            </div>
                            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                              {d.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {c.case.footer}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setTab('register')}
                      className="w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)' }}
                    >
                      {c.form.registerBtn} <ChevronRight size={18} />
                    </motion.button>
                  </motion.div>
                )}

                {/* ── Register Tab ── */}
                {tab === 'register' && (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.25 }}
                  >
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                        <div>
                          <h3 className="text-xl font-bold mb-1" style={{ color: '#ffffff' }}>
                            {c.form.title}
                          </h3>
                          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            {c.form.subtitle}
                          </p>
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: 'rgba(255,255,255,0.8)' }}
                          >
                            {c.form.name} *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder={c.form.namePh}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none placeholder:opacity-40"
                            style={inputStyle}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              className="block text-sm font-medium mb-1.5"
                              style={{ color: 'rgba(255,255,255,0.8)' }}
                            >
                              {c.form.phone} *
                            </label>
                            <input
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                              placeholder={c.form.phonePh}
                              className="w-full px-4 py-3 rounded-xl text-sm outline-none placeholder:opacity-40"
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <label
                              className="block text-sm font-medium mb-1.5"
                              style={{ color: 'rgba(255,255,255,0.8)' }}
                            >
                              {c.form.email} *
                            </label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                              placeholder={c.form.emailPh}
                              className="w-full px-4 py-3 rounded-xl text-sm outline-none placeholder:opacity-40"
                              style={inputStyle}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: 'rgba(255,255,255,0.8)' }}
                          >
                            {c.form.role} *
                          </label>
                          <select
                            required
                            value={form.role}
                            onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                            style={{
                              ...inputStyle,
                              color: form.role ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            }}
                          >
                            <option value="" disabled style={{ background: '#0d1530' }}>
                              {c.form.rolePh}
                            </option>
                            {c.form.roles.map((r, i) => (
                              <option key={i} value={r} style={{ background: '#0d1530', color: '#fff' }}>
                                {r}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: 'rgba(255,255,255,0.8)' }}
                          >
                            {c.form.team}
                          </label>
                          <input
                            type="text"
                            value={form.team}
                            onChange={(e) => setForm((p) => ({ ...p, team: e.target.value }))}
                            placeholder={c.form.teamPh}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none placeholder:opacity-40"
                            style={inputStyle}
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 30px rgba(37,211,102,0.3)',
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-3"
                          style={{
                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                            boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
                          }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          {c.form.submit}
                        </motion.button>
                        <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          {c.form.note}
                        </p>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                          style={{ background: 'rgba(37,211,102,0.12)' }}
                        >
                          <CheckCircle2 size={42} style={{ color: '#25D366' }} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#ffffff' }}>
                          {c.form.successTitle}
                        </h3>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                          {c.form.successText}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={onScrollDown}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-6 mx-auto cursor-pointer group"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        <span className="text-xs font-medium tracking-wider uppercase group-hover:opacity-80 transition-opacity">
          {c.scrollHint}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
