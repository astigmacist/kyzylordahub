'use client';

import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Building2, Users, CheckCircle2 } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const featureIcons = [Rocket, GraduationCap, Building2, Users];
const featureGradients = [
    'linear-gradient(135deg, rgba(45,107,255,0.15), rgba(45,107,255,0.05))',
    'linear-gradient(135deg, rgba(255,122,0,0.15), rgba(255,122,0,0.05))',
    'linear-gradient(135deg, rgba(45,107,255,0.15), rgba(45,107,255,0.05))',
    'linear-gradient(135deg, rgba(255,122,0,0.15), rgba(255,122,0,0.05))',
];
const featureColors = ['#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00'];

export function AboutUs() {
    const { t } = useLocale();

    return (
        <section
            id="about"
            className="relative py-24 px-6 overflow-hidden"
            style={{ background: 'var(--background)' }}
        >
            {/* Subtle background accent */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 70%)',
                }}
            />

            <div className="relative z-10 max-w-[1440px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >

                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight"
                        style={{ color: 'var(--foreground)' }}
                    >
                        {t.about.title}{' '}
                        <span className="gradient-text">{t.about.titleHighlight}</span>
                    </h2>
                    <p
                        className="text-lg max-w-4xl mx-auto leading-relaxed"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        {t.about.description}
                    </p>
                </motion.div>

                {/* Video + Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Stats Banner */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-[520px]">
                            {/* Glow behind video */}
                            <div
                                className="absolute inset-[-20px] rounded-[40px] opacity-50 blur-2xl pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(45,107,255,0.35), rgba(255,122,0,0.25))',
                                }}
                            />
                            {/* Video frame */}
                            <div
                                className="relative rounded-3xl overflow-hidden shadow-2xl"
                                style={{
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    aspectRatio: '9/16',
                                    maxHeight: '520px',
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    playsInline
                                    controls
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/kyzylorda-hub.mp4" type="video/mp4" />
                                </video>
                                {/* Subtle overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
                                    }}
                                />
                                {/* Logo badge over video */}
                                <div
                                    className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl"
                                    style={{
                                        background: 'rgba(0,0,0,0.55)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                >
                                    <img src="/logo-horizontal.png" alt="Kyzylorda Hub" className="h-5 w-auto" />
                                </div>
                            </div>


                        </div>
                    </motion.div>

                    {/* Mission Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3
                                className="text-3xl font-bold mb-4"
                                style={{ color: 'var(--foreground)' }}
                            >
                                {t.about.whatWeDo}
                            </h3>
                            <p
                                className="text-lg leading-relaxed"
                                style={{ color: 'var(--muted-foreground)' }}
                            >
                                {t.about.whatWeDoDesc}
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {t.about.listItems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-3"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    <CheckCircle2
                                        size={20}
                                        className="flex-shrink-0 mt-0.5"
                                        style={{ color: i % 2 === 0 ? '#2D6BFF' : '#FF7A00' }}
                                    />
                                    <span className="text-base">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Badge */}
                        <motion.div
                            whileHover={{ scale: 1.04, rotate: -1 }}
                            className="inline-block"
                        >
                            <div
                                className="px-7 py-4 rounded-2xl font-semibold text-base"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(45,107,255,0.12), rgba(255,122,0,0.12))',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: 'var(--foreground)',
                                }}
                            >
                                {t.about.badge}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.about.features.map((feature, index) => {
                        const Icon = featureIcons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="p-8 rounded-3xl transition-all group cursor-default"
                                style={{
                                    background: featureGradients[index],
                                    border: '1px solid rgba(255,255,255,0.07)',
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                                    style={{
                                        background: `${featureColors[index]}20`,
                                        border: `1px solid ${featureColors[index]}30`,
                                    }}
                                >
                                    <Icon size={28} style={{ color: featureColors[index] }} />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-3"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}
