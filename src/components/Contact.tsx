import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { CONTACT_EMAIL, GITHUB_USERNAME, LINKEDIN_URL } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="atmosphere-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">{t('contact.title')} <br /> <span className="gradient-text">{t('contact.titleHighlight')}</span> {t('contact.titleSuffix')}</h2>
        <p className="text-zinc-400 text-lg mb-12">
          {t('contact.subtitle')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={`mailto:${CONTACT_EMAIL}`} 
            className="group flex items-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-2xl hover:bg-white transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            {t('contact.sendEmail')}
            <motion.span 
              animate={{ x: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
          
          <div className="flex items-center gap-4">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="p-4 glass-card hover:border-emerald-500/50 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="p-4 glass-card hover:border-blue-500/50 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
