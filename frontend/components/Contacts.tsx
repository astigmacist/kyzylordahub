'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contacts() {
    const contactInfo = [
        {
            icon: Phone,
            label: 'Телефон',
            value: '+7 705 729 12 07',
            href: 'tel:+77057291207',
            color: '#2D6BFF',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'kyzylorda_hub@astanahub.com',
            href: 'mailto:kyzylorda_hub@astanahub.com',
            color: '#FF7A00',
        },
        {
            icon: MapPin,
            label: 'Адрес',
            value: 'г. Кызылорда, Айтеке би 29а',
            href: 'https://maps.google.com/?q=Айтеке+би+29а,+Кызылорда',
            color: '#2D6BFF',
        },
        {
            icon: Clock,
            label: 'График работы',
            value: 'Пн-Сб, 9:00-20:00',
            color: '#FF7A00',
        },
    ];

    return (
        <section id="contacts" className="py-32 px-6 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        <span className="bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] bg-clip-text text-transparent">
                            Контакты
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Свяжитесь с нами или приходите в наш офис
                    </p>
                </motion.div>

                {/* Contact Information Cards - Horizontal Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        const isLink = !!item.href;
                        const Component = isLink ? 'a' : 'div';
                        const linkProps = isLink
                            ? {
                                href: item.href,
                                target: item.label === 'Адрес' ? '_blank' : undefined,
                                rel: item.label === 'Адрес' ? 'noopener noreferrer' : undefined,
                            }
                            : {};

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={isLink ? { scale: 1.02, y: -2 } : {}}
                                className="w-full"
                            >
                                <Component
                                    {...linkProps}
                                    className={`group p-4 bg-card backdrop-blur-sm border border-border rounded-2xl transition-all h-full flex flex-col ${isLink ? 'cursor-pointer hover:border-border/60' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${item.color}20` }}
                                        >
                                            <Icon size={20} style={{ color: item.color }} />
                                        </div>
                                        <h3 className="text-xs font-semibold text-muted-foreground">
                                            {item.label}
                                        </h3>
                                    </div>
                                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                                </Component>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Google Maps - Full Width (with dark theme) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-border bg-card relative">
                        {/* Dark overlay to darken the map */}
                        <div className="absolute inset-0 bg-background/40 pointer-events-none z-10 mix-blend-multiply dark:mix-blend-normal dark:bg-background/30" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.5!2d65.509297!3d44.852704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDUxJzA5LjciTiA2NcKwMzAnMzMuNCJF!5e0!3m2!1sru!2skz!4v1234567890&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9ca5b3&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Kyzylorda Hub Location"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
