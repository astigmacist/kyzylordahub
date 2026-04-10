'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HackathonBannerProps {
    onScrollDown: () => void;
}

export function HackathonBanner({ onScrollDown }: HackathonBannerProps) {
    const { locale } = useLocale();

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'var(--background)' }}
        >
            {/* Background blobs — matching site style */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-[10%] left-[-5%] w-[700px] h-[700px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(45,107,255,0.25) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(255,122,0,0.2) 0%, transparent 70%)' }}
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(45,107,255,0.1) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 py-32 max-w-4xl mx-auto">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8"
                    style={{
                        background: 'rgba(45,107,255,0.1)',
                        border: '1px solid rgba(45,107,255,0.25)',
                        color: '#2D6BFF',
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {locale === 'kz' ? '🚀 17 сәуір · 14:00' : '🚀 17 апреля · 14:00'}
                </motion.div>

                {/* Big title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    className="font-extrabold leading-tight tracking-tight mb-6"
                    style={{ fontSize: 'clamp(42px, 8vw, 96px)', color: 'var(--foreground)' }}
                >
                    <span className="gradient-text">
                        AMANAT
                    </span>
                    {' IDEATHON'}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-2xl mx-auto mb-4 leading-relaxed"
                    style={{ fontSize: 'clamp(16px, 2.2vw, 22px)', color: 'var(--muted-foreground)' }}
                >
                    {locale === 'kz'
                        ? 'Сенің идеяң қоғамдағы кедергілерді жоюға қабілетті ме? Барлық мектеп оқушылары мен студенттерді шақырамыз!'
                        : 'Твоя идея способна устранить барьеры в обществе? Приглашаем школьников и студентов!'}
                </motion.p>

                {/* Organizer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-sm mb-12 font-medium"
                    style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}
                >
                    {locale === 'kz' ? 'Студенттер сарайы · Жахаева к-сі, 11' : 'Студенттер сарайы · ул. Жахаева, 11'}
                </motion.p>

                {/* CTA button — only one */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.85 }}
                    className="flex items-center justify-center mb-16"
                >
                    <Link href="/amanat-ideathon">
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(45,107,255,0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-white font-semibold text-base transition-all cursor-pointer"
                            style={{
                                background: 'linear-gradient(135deg, #2D6BFF, #FF7A00)',
                                boxShadow: '0 4px 24px rgba(45,107,255,0.3)',
                            }}
                        >
                            {locale === 'kz' ? 'Толығырақ' : 'Узнать подробнее'}
                            <ArrowRight size={18} />
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex items-center gap-8 sm:gap-12 flex-wrap justify-center"
                >
                    {[
                        { value: '5', label: locale === 'kz' ? 'Бағыт' : 'Направлений' },
                        { value: '1 000 000 ₸', label: locale === 'kz' ? 'Жүлде қоры' : 'Призовой фонд' },
                        { value: '🎓', label: locale === 'kz' ? 'Грант + Келісімшарт' : 'Грант + Контракт' },
                    ].map((s, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div
                                className="text-2xl font-extrabold mb-1"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {s.value}
                            </div>
                            <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <motion.button
                onClick={onScrollDown}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
                style={{ color: 'var(--muted-foreground)' }}
            >
                <span className="text-xs tracking-widest uppercase group-hover:opacity-80 transition-opacity">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </motion.button>
        </section>
    );
}
