import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Terminal } from 'lucide-react';
import { cn } from '../utils';
import { useLanguage } from '../i18n/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-mono tracking-tighter flex items-center gap-2"
        >
          <Terminal className="w-6 h-6 text-emerald-500" />
          <span>ALAN.SOUZA</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            className="px-2 py-1 text-xs font-mono text-zinc-400 hover:text-emerald-400 bg-zinc-900/50 border border-zinc-800 rounded-lg transition-colors"
            title={locale === 'en' ? 'Mudar para Português' : 'Switch to English'}
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
          <a href="https://github.com/alansouza1" target="_blank" rel="noreferrer" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/alansouza1/" target="_blank" rel="noreferrer" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
