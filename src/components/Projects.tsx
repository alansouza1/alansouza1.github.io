import { motion } from 'motion/react';
import { Code2, Github, ExternalLink } from 'lucide-react';
import { type GithubRepo } from '../services/github';
import { useLanguage } from '../i18n/LanguageContext';

export const Projects = ({ repos }: { repos: GithubRepo[] }) => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
            <p className="text-zinc-400 max-w-md">
              {t('projects.subtitle')}
            </p>
          </div>
          <a 
            href="https://github.com/alansouza1" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            {t('projects.seeAll')} <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-6 flex flex-col h-full hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-800 rounded-xl group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">{repo.language}</span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {repo.name.replace(/-/g, ' ')}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3">
                {repo.description || t('projects.noDescription')}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {repo.topics?.slice(0, 3).map(topic => (
                  <span key={topic} className="px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] rounded-md uppercase font-bold tracking-wider">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
