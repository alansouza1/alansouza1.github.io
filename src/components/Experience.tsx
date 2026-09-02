import React from 'react';
import { motion } from 'motion/react';
import { PROFESSIONAL_EXPERIENCE, EDUCATION } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

interface TimelineEntry {
  roleKey: string;
  period: string;
  skills: string[];
  company?: string;
  institution?: string;
}

interface TimelineItemProps {
  key?: React.Key;
  item: TimelineEntry;
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const { t } = useLanguage();
  const role = t(`${item.roleKey}.role`);
  const description = t(`${item.roleKey}.description`);
  const label = item.company || item.institution;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 border-l border-zinc-800 pb-8 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
      
      <div className="glass-card p-6 hover:bg-zinc-800/50 transition-colors">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-100">{role}</h3>
            <p className="text-emerald-400 font-medium">{label}</p>
          </div>
          <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full font-medium">
            {item.period}
          </span>
        </div>
        
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {item.skills.map(skill => (
            <span key={skill} className="text-[10px] text-zinc-500 font-mono">
              #{skill.toLowerCase().replace(/\s+/g, '-')}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Professional Experience */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('experience.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8 mb-20">
          {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
            <TimelineItem key={index} item={exp} index={index} />
          ))}
        </div>

        {/* Education */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('education.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {EDUCATION.map((edu, index) => (
            <TimelineItem key={index} item={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
