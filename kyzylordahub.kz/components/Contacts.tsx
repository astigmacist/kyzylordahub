'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
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
            external: false,
        },
        {
            icon: Mail,
            label: t.contacts.email,
            value: 'kyzylorda_hub@astanahub.com',
            href: 'mailto:kyzylorda_hub@astanahub.com',
            color: '#FF7A00',
            external: false,
        },
        {
            icon: MapPin,
            label: t.contacts.address,
            value: t.contacts.addressValue,
            href: 'https://maps.google.com/?q=Айтеке+би+29а,+Кызылорда',
            color: '#2D6BFF',
            external: true,
        },
        {
            icon: Clock,
            label: t.contacts.schedule,
            value: t.contacts.scheduleValue,
            href: null,
            color: '#FF7A00',
            external: false,
        },
    ];

    return (
        <section
            id="contacts"
            className="relative py-24 px-6 overflow-hidden"
            style={{ background: 'var(--background)' }}
        >
            {/* Background */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-20 blur-3xl"
                style={{
                    background: 'linear-gradient(90deg, rgba(45,107,255,0.5), rgba(255,122,0,0.5))',
                }}
            />

            <div className="relative z-10 max-w-[1440px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >

                    <h2
                        className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
                        style={{ color: 'var(--foreground)' }}
                    >
                        <span className="gradient-text">{t.contacts.title}</span>
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        {t.contacts.subtitle}
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        const Wrapper = item.href ? motion.a : motion.div;
                        const props = item.href
                            ? {
                                href: item.href,
                                target: item.external ? '_blank' : undefined,
                                rel: item.external ? 'noopener noreferrer' : undefined,
                            }
                            : {};

                        return (
                            <Wrapper
                                key={index}
                                {...props}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={item.href ? { y: -4, scale: 1.02 } : {}}
                                className="group p-5 rounded-2xl transition-all flex flex-col gap-3"
                                style={{
                                    background: 'var(--card)',
                                    border: '1px solid var(--card-border)',
                                    cursor: item.href ? 'pointer' : 'default',
                                    textDecoration: 'none',
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${item.color}15` }}
                                    >
                                        <Icon size={18} style={{ color: item.color }} />
                                    </div>
                                    {item.external && (
                                        <ExternalLink
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ color: 'var(--muted-foreground)' }}
                                        />
                                    )}
                                </div>
                                <div>
                                    <p
                                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                                        style={{ color: 'var(--muted-foreground)' }}
                                    >
                                        {item.label}
                                    </p>
                                    <p
                                        className="text-sm font-medium leading-snug"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {[
                        {
                            href: 'https://wa.me/77057291207',
                            label: 'WhatsApp',
                            color: '#25D366',
                            icon: (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            ),
                        },
                        {
                            href: 'https://t.me/kyzylordahub',
                            label: 'Telegram',
                            color: '#0088cc',
                            icon: (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            ),
                        },
                        {
                            href: 'https://www.instagram.com/kyzylordahub/',
                            label: 'Instagram',
                            color: '#E1306C',
                            icon: (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            ),
                        },
                    ].map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                            style={{
                                background: `${social.color}15`,
                                border: `1px solid ${social.color}25`,
                                color: social.color,
                            }}
                        >
                            {social.icon}
                            {social.label}
                        </motion.a>
                    ))}
                </div>

                {/* Google Maps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div
                        className="aspect-[21/9] rounded-3xl overflow-hidden relative"
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1817.1030679522694!2d65.50810182208443!3d44.84150674318463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41f7fdf1f5e71029%3A0xdc2bab55ed655259!2z0YPQu9C40YbQsCDQkNC50YLQtdC60LUg0JHQuCAyOWEsINCa0YvQt9GL0LvQvtGA0LTQsCAxMjAwMTQ!5e0!3m2!1sru!2skz!4v1772100825561!5m2!1sru!2skz"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block' }}
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
