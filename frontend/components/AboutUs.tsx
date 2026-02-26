'use client';

import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Building2, Users } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const featureIcons = [Rocket, GraduationCap, Building2, Users];
const featureColors = ['#2D6BFF', '#FF7A00', '#2D6BFF', '#FF7A00'];

export function AboutUs() {
    const { t } = useLocale();

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
                        {t.about.title}{' '}
                        <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
                            {t.about.titleHighlight}
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
                        {t.about.description}
                    </p>
                </motion.div>

                {/* Video and Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Video */}
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
                            <h3 className="text-3xl font-bold text-foreground mb-4">{t.about.whatWeDo}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{t.about.whatWeDoDesc}</p>
                        </div>

                        <ul className="space-y-4">
                            {t.about.listItems.map((item, i) => (
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
                            <p className="text-foreground font-semibold text-lg">{t.about.badge}</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {t.about.features.map((feature, index) => {
                        const Icon = featureIcons[index];
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
                                <Icon size={48} className="mb-6" style={{ color: featureColors[index] }} />
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
                            {t.about.missionTitle}
                        </h3>
                        <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                            {t.about.missionDesc}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
