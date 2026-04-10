'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { CheckCircle2, Trophy, Building2, Heart, Scale, BookOpen, Users, ExternalLink, Calendar, Clock, MapPin } from 'lucide-react';

const content = {
    kz: {
        badge: 'Жуық арада · 17 сәуір',
        title: 'AMANAT IDEATHON',
        subtitle: 'Әлеуметтік-инновациялық жобалар хакатоны — сенің идеяң қоғамдағы кедергілерді жоюға қабілетті ме?',
        aboutTitle: 'Хакатон туралы',
        aboutDesc: 'Барлық мектеп оқушылары мен студенттерді әлеуметтік маңызы бар кейстерді шешуге және өз жобаларын қорғауға шақырамыз. AMANAT IDEATHON — идеялар нақты шешімдерге айналатын платформа.',
        whoTitle: 'Кімдер қатыса алады',
        who: ['Мектеп оқушылары', 'Студенттер', 'Колледж түлектері', 'UX/UI дизайнерлер', 'Бағдарламашылар', 'Барлық белсенді'],
        prizeTitle: 'Жүлде қоры',
        prize1: '1 000 000 теңге — жеңімпаз жобаны кәсіби деңгейде жүзеге асыру үшін келісімшарт',
        prize2: 'Жоғары оқу орнының гранты — мектеп оқушылары мен колледж түлектеріне арналған ерекше мүмкіндік!',
        formatTitle: 'Формат',
        format: ['Бағытпен танысады', 'Жобаны дайындайды', 'Презентация жасайды', 'Сарапшы алдында қорғайды'],
        caseTitle: 'Негізгі бағыттар',
        caseName: 'Хакатонның 5 негізгі бағыты',
        caseDesc: 'Қоғамдағы нақты кедергілерді жойуға бағытталған инновациялық цифрлық шешімдер ұсыныңыз. Жобаларыңыз пайдаланушыға түсінікті және техникалық тұрғыдан жүзеге асырылатын болуы тиіс.',
        dirs: [
            { title: 'PropTech & CityTech', desc: 'Қалалық орта мен тұрғын үй басқаруды цифрландыру.' },
            { title: 'MedTech', desc: 'Цифрлық денсаулық сақтау және предиктивті аналитика.' },
            { title: 'LegalTech', desc: 'Құқықтық көмек пен бюрократияны жеңуге арналған сервистер.' },
            { title: 'EdTech', desc: 'Инклюзивті білім беру және цифрлық платформалар.' },
            { title: 'Community Tech', desc: 'Еріктілер қозғалысы мен қайырымдылық трекингі.' },
        ],
        registerBtn: 'Тіркелу',
        registerNote: 'Google Forms арқылы тіркелу',
        caseFooter: 'Шешімдер пайдаланушыға түсінікті, техникалық тұрғыдан жүзеге асыруға болатын болуы тиіс.',
        eventDate: '17 сәуір',
        eventTime: '14:00',
        eventPlace: 'Kyzylorda Hub, Әйтеке би 29а',
    },
    ru: {
        badge: 'Скоро · 17 апреля',
        title: 'AMANAT IDEATHON',
        subtitle: 'Хакатон социально-инновационных проектов — твоя идея способна устранить барьеры в обществе?',
        aboutTitle: 'О хакатоне',
        aboutDesc: 'Приглашаем всех школьников и студентов к решению социально значимых кейсов и защите своих проектов. AMANAT IDEATHON — платформа, где идеи превращаются в реальные решения.',
        whoTitle: 'Кто может участвовать',
        who: ['Школьники', 'Студенты', 'Выпускники колледжей', 'UX/UI дизайнеры', 'Разработчики', 'Все желающие'],
        prizeTitle: 'Призовой фонд',
        prize1: '1 000 000 тенге — контракт на профессиональную реализацию проекта-победителя',
        prize2: 'Грант высшего учебного заведения — особая возможность для школьников и выпускников колледжей!',
        formatTitle: 'Формат',
        format: ['Знакомятся с направлением', 'Готовят проект', 'Делают презентацию', 'Защищают перед экспертами'],
        caseTitle: 'Основные направления',
        caseName: '5 направлений хакатона',
        caseDesc: 'Предложите инновационные цифровые решения для устранения реальных барьеров в обществе. Проекты должны быть понятны пользователю и технически реализуемы.',
        dirs: [
            { title: 'PropTech & CityTech', desc: 'Цифровизация городской среды и управления жильём.' },
            { title: 'MedTech', desc: 'Цифровое здравоохранение и предиктивная аналитика.' },
            { title: 'LegalTech', desc: 'Сервисы для правовой помощи и преодоления бюрократии.' },
            { title: 'EdTech', desc: 'Инклюзивное образование и цифровые платформы.' },
            { title: 'Community Tech', desc: 'Волонтёрское движение и трекинг благотворительности.' },
        ],
        registerBtn: 'Зарегистрироваться',
        registerNote: 'Регистрация через Google Forms',
        caseFooter: 'Решения должны быть понятны пользователю и технически реализуемы.',
        eventDate: '17 апреля',
        eventTime: '14:00',
        eventPlace: 'Kyzylorda Hub, Айтеке би 29а',
    },
};

const dirIcons = [Building2, Heart, Scale, BookOpen, Users];

export function Hackathon() {
    const { locale } = useLocale();
    const c = locale === 'kz' ? content.kz : content.ru;

    return (
        <section
            id="hackathon"
            className="py-24 px-6"
            style={{ background: 'var(--background)' }}
        >
            <div className="max-w-[1440px] mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                        style={{ background: 'rgba(45,107,255,0.08)', color: '#2D6BFF', border: '1px solid rgba(45,107,255,0.2)' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {c.badge}
                    </div>
                    <h2
                        className="font-extrabold tracking-tight mb-4"
                        style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--foreground)' }}
                    >
                        🔥 <span className="gradient-text">{c.title}</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                        {c.subtitle}
                    </p>
                </motion.div>

                {/* Top grid: Prize (big) + About/Who/Date (right) */}
                <div className="grid lg:grid-cols-3 gap-5 mb-5">

                    {/* Prize block — big left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 p-7 rounded-3xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,184,0,0.06), rgba(255,122,0,0.06))',
                            border: '1px solid rgba(255,184,0,0.2)',
                        }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Trophy size={20} style={{ color: '#FFB800' }} />
                            <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                                {c.prizeTitle}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-start gap-3 p-5 rounded-2xl" style={{ background: 'rgba(255,184,0,0.07)', border: '1px solid rgba(255,184,0,0.15)' }}>
                                <span className="text-2xl leading-none">💰</span>
                                <div>
                                    <p className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>1 000 000 ₸</p>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{c.prize1}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-5 rounded-2xl" style={{ background: 'rgba(45,107,255,0.07)', border: '1px solid rgba(45,107,255,0.15)' }}>
                                <span className="text-2xl leading-none">🎓</span>
                                <div>
                                    <p className="font-bold text-base mb-1" style={{ color: 'var(--foreground)' }}>{locale === 'kz' ? 'ЖОО гранты' : 'Грант ВУЗа'}</p>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{c.prize2}</p>
                                </div>
                            </div>
                        </div>

                        {/* Format steps inside prize block */}
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--muted-foreground)' }}>
                            {c.formatTitle}
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {c.format.map((step, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                                    style={{ background: 'var(--background)', border: '1px solid var(--card-border)' }}
                                >
                                    <div
                                        className="w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black text-white flex-shrink-0"
                                        style={{ background: i % 2 === 0 ? '#2D6BFF' : '#FF7A00' }}
                                    >
                                        {i + 1}
                                    </div>
                                    <span className="text-sm" style={{ color: 'var(--foreground)' }}>{step}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* About + Who + Date stacked */}
                    <div className="flex flex-col gap-5">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-7 rounded-3xl"
                            style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
                        >
                            <h3 className="text-base font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                                {c.aboutTitle}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                                {c.aboutDesc}
                            </p>
                        </motion.div>

                        {/* Who */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-7 rounded-3xl flex-1"
                            style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
                        >
                            <h3 className="text-base font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                                {c.whoTitle}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {c.who.map((w, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-medium"
                                        style={{
                                            background: i % 2 === 0 ? 'rgba(45,107,255,0.08)' : 'rgba(255,122,0,0.08)',
                                            color: i % 2 === 0 ? '#2D6BFF' : '#FF7A00',
                                            border: `1px solid ${i % 2 === 0 ? 'rgba(45,107,255,0.2)' : 'rgba(255,122,0,0.2)'}`,
                                        }}
                                    >
                                        <CheckCircle2 size={10} />
                                        {w}
                                    </span>
                                ))}
                            </div>
                        </motion.div>


                        {/* Date/Time/Place */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-6 rounded-3xl"
                            style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(45,107,255,0.1)' }}>
                                        <Calendar size={16} style={{ color: '#2D6BFF' }} />
                                    </div>
                                    <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{c.eventDate}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,122,0,0.1)' }}>
                                        <Clock size={16} style={{ color: '#FF7A00' }} />
                                    </div>
                                    <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{c.eventTime}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(45,107,255,0.1)' }}>
                                        <MapPin size={16} style={{ color: '#2D6BFF' }} />
                                    </div>
                                    <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{c.eventPlace}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Case block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-7 rounded-3xl mb-5"
                    style={{ background: 'var(--card)', border: '1px solid var(--card-border)' }}
                >
                    <div className="mb-5">
                        <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold mb-2"
                            style={{ background: 'rgba(45,107,255,0.1)', color: '#2D6BFF' }}>
                            {c.caseTitle}
                        </div>
                        <h3
                            className="text-lg font-bold mb-2"
                            style={{ color: 'var(--foreground)' }}
                        >
                            {c.caseName}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            {c.caseDesc}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
                        {c.dirs.map((d, i) => {
                            const Icon = dirIcons[i];
                            const isBlue = i % 2 === 0;
                            const col = isBlue ? '#2D6BFF' : '#FF7A00';
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className="p-5 rounded-2xl"
                                    style={{
                                        background: 'var(--background)',
                                        border: `1px solid ${col}22`,
                                        boxShadow: `0 4px 20px ${col}0A`,
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                                        style={{ background: `${col}12`, border: `1px solid ${col}25` }}
                                    >
                                        <Icon size={20} style={{ color: col }} />
                                    </div>
                                    <h4 className="text-sm font-bold mb-2 leading-snug" style={{ color: 'var(--foreground)' }}>
                                        {d.title}
                                    </h4>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                                        {d.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <p className="mt-5 text-xs italic" style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}>
                        {c.caseFooter}
                    </p>
                </motion.div>

                {/* Register CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfpKW5fkFWv4WA8i7XzUJPSThq2xVfkLIfowHU_SMq4G_5mAA/viewform?usp=send_form"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(45,107,255,0.4)' }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-3 px-10 py-4 text-white font-semibold rounded-2xl text-base transition-all"
                        style={{
                            background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                            boxShadow: '0 4px 24px rgba(45,107,255,0.3)',
                        }}
                    >
                        {c.registerBtn}
                        <ExternalLink size={18} />
                    </motion.a>
                    <p className="mt-3 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                        {c.registerNote}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
