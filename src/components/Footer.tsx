import { useLanguage } from '../i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Alan Souza. {t('footer.builtWith')}
        </div>
        <div className="flex items-center gap-8 text-xs font-bold text-zinc-600 uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-400 transition-colors">{t('footer.backToTop')}</a>
          <a href="https://github.com/alansouza1" className="hover:text-zinc-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/alansouza1/" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
