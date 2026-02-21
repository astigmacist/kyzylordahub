'use client';

import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Building2, Users } from 'lucide-react';

export function AboutUs() {
    const features = [
        {
            title: 'Развиваем стартапы',
            description: 'Мы помогаем начинающим предпринимателям пройти путь от простой идеи до готового продукта и первых продаж. Предоставляем бесплатные консультации, место для работы и помогаем привлечь инвестиции.',
            icon: Rocket,
            color: '#2D6BFF',
        },
        {
            title: 'Обучаем технологиям',
            description: 'Организуем курсы и мастер-классы по IT и искусственному интеллекту для студентов, госслужащих и предпринимателей.',
            icon: GraduationCap,
            color: '#FF7A00',
        },
        {
            title: 'Цифровизируем бизнес',
            description: 'Помогаем местным предприятиям и государственным органам внедрять современные цифровые решения и находить квалифицированных IT-специалистов.',
            icon: Building2,
            color: '#2D6BFF',
        },
        {
            title: 'Объединяем сообщество',
            description: 'Наша площадка — это место встречи разработчиков, инвесторов и экспертов для обмена опытом и создания совместных проектов.',
            icon: Users,
            color: '#FF7A00',
        },
    ];

    return (
        <section id="about" className="py-16 px-6 bg-background transition-colors duration-300">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        О <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">нас</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
                        Kyzylorda Hub — региональный ІТ хаб, филиал Astana Hub в Кызылординской области,
                        который является главным центром притяжения инноваций и технологий в нашем регионе.
                        Мы создаем экосистему, где идеи превращаются в реальный бизнес.
                    </p>
                </motion.div>

                {/* Video and Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Video — portrait/phone format */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden border border-border bg-black shadow-2xl">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                preload="metadata"
                            >
                                <source src="/КызылОрдаХаб_2.mp4" type="video/mp4" />
                                Ваш браузер не поддерживает воспроизведение видео.
                            </video>
                        </div>
                    </motion.div>

                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 pt-2"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-4">Чем мы занимаемся</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Мы создаем условия для роста и развития инновационных проектов, объединяя ресурсы,
                                знания и людей для достижения общих целей.
                            </p>
                        </div>

                        {/* Feature list */}
                        <ul className="space-y-4">
                            {[
                                'Поддержка стартапов на каждом этапе',
                                'Обучение IT и предпринимательству',
                                'Цифровизация бизнеса и госсектора',
                                'Сообщество инноваторов региона',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground/80">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#2D6BFF] to-[#FF7A00] flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-[#2D6BFF]/20 to-[#FF7A00]/20 backdrop-blur-sm border border-border rounded-full"
                        >
                            <p className="text-foreground font-semibold text-lg">
                                Join the Unicorn game 🦄
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="p-8 bg-card backdrop-blur-sm border border-border rounded-3xl hover:bg-accent transition-all"
                            >
                                <Icon size={48} className="mb-6" style={{ color: feature.color }} />
                                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mission Statement at Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="p-12 bg-gradient-to-br from-[#2D6BFF]/10 to-[#FF7A00]/10 backdrop-blur-sm border border-border rounded-3xl">
                        <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Наша миссия
                        </h3>
                        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                            Сделать технологии доступными для каждого
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
