import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Studio: ['Programme', 'Ressources', 'Mentors', 'Candidater'],
    Club: ['Avantages', 'Événements', 'Membres', 'Rejoindre'],
    Coworking: ['Espaces', 'Tarifs', 'Réserver', 'Localisation'],
    Entreprise: ['À propos', 'Équipe', 'Carrières', 'Presse'],
  };

  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2D6BFF]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7A00]/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D6BFF] to-[#FF7A00] rounded-xl flex items-center justify-center">
                <span className="text-white" style={{ fontSize: '18px', fontWeight: 700 }}>D</span>
              </div>
              <span className="text-white" style={{ fontSize: '20px', fontWeight: 600 }}>
                Doonya Spaces
              </span>
            </div>

            <p className="text-white/60 mb-6" style={{ fontSize: '15px', lineHeight: 1.7 }}>
              Accélérer l'innovation africaine en mettant en commun ressources, expertise et capital.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-white/70" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/60 hover:text-white transition-colors inline-block"
                      style={{ fontSize: '14px' }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 bg-gradient-to-r from-[#2D6BFF]/10 to-[#FF7A00]/10 border border-white/10 rounded-3xl"
        >
          <div className="max-w-2xl">
            <h3 className="text-white mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>
              Restez informé
            </h3>
            <p className="text-white/60 mb-6" style={{ fontSize: '15px' }}>
              Recevez nos dernières actualités, événements et opportunités.
            </p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#2D6BFF]/50 transition-colors"
                style={{ fontSize: '15px' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#2D6BFF] to-[#FF7A00] text-white rounded-full flex items-center gap-2"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                S'inscrire
                <ArrowUpRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, text: 'contact@doonyaspaces.com' },
            { icon: Phone, text: '+221 XX XXX XX XX' },
            { icon: MapPin, text: 'Dakar, Sénégal' },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl"
              >
                <Icon size={20} className="text-[#FF7A00]" />
                <span className="text-white/70" style={{ fontSize: '14px' }}>
                  {contact.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40" style={{ fontSize: '14px' }}>
              © 2025 Doonya Spaces. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
                Confidentialité
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
                Conditions
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '14px' }}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
