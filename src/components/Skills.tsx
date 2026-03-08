import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Arsenal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:border-emerald-500/30 hover:text-emerald-400 transition-all cursor-default"
                  >
                    {skill}
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
