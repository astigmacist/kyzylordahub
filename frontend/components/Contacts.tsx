'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export function Contacts() {
    const { t } = useLocale();

    const contactInfo = [
        {
            icon: Phone,
            label: t.contacts.phone,
            value: '+7 705 729 12 07',
            href: 'tel:+77057291207',
            color: '#2D6BFF',
        },
        {
            icon: Mail,
            label: t.contacts.email,
            value: 'kyzylorda_hub@astanahub.com',
            href: 'mailto:kyzylorda_hub@astanahub.com',
            color: '#FF7A00',
        },
        {
            icon: MapPin,
            label: t.contacts.address,
            value: t.contacts.addressValue,
            href: 'https://maps.google.com/?q=Айтеке+би+29а,+Кызылорда',
            color: '#2D6BFF',
        },
        {
            icon: Clock,
            label: t.contacts.schedule,
            value: t.contacts.scheduleValue,
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
                            {t.contacts.title}
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.contacts.subtitle}</p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        const isLink = !!item.href;
                        const Component = isLink ? 'a' : 'div';
                        const linkProps = isLink
                            ? {
                                href: item.href,
                                target: item.label === t.contacts.address ? '_blank' : undefined,
                                rel: item.label === t.contacts.address ? 'noopener noreferrer' : undefined,
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
                                        <h3 className="text-xs font-semibold text-muted-foreground">{item.label}</h3>
                                    </div>
                                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                                </Component>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Google Maps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-border bg-card relative">
                        <div className="absolute inset-0 bg-background/40 pointer-events-none z-10 mix-blend-multiply dark:mix-blend-normal dark:bg-background/30" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1817.1030679522694!2d65.50810182208443!3d44.84150674318463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41f7fdf1f5e71029%3A0xdc2bab55ed655259!2z0YPQu9C40YbQsCDQkNC50YLQtdC60LUg0JHQuCAyOWEsINCa0YvQt9GL0LvQvtGA0LTQsCAxMjAwMTQ!5e0!3m2!1sru!2skz!4v1772100825561!5m2!1sru!2skz"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kyzylorda Hub Location"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
