import { motion } from 'motion/react';

export const Experience = () => {
  const experiences = [
    {
      company: "Freelance Developer",
      role: "Full Stack Engineer",
      period: "2022 - Present",
      description: "Developing custom solutions for small to medium enterprises, focusing on React, Node.js, and Cloud infrastructure.",
      skills: ["React", "Next.js", "TypeScript", "AWS"]
    },
    {
      company: "Tech Solutions Inc.",
      role: "Frontend Developer",
      period: "2020 - 2022",
      description: "Led the frontend team in rebuilding the core product dashboard, improving performance by 40%.",
      skills: ["Vue.js", "Tailwind CSS", "JavaScript", "Jest"]
    },
    {
      company: "Digital Agency",
      role: "Junior Web Developer",
      period: "2019 - 2020",
      description: "Maintained and updated client websites, ensuring responsive design and cross-browser compatibility.",
      skills: ["HTML/CSS", "PHP", "WordPress", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Journey</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
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
                    <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[10px] text-zinc-500 font-mono">
                      #{skill.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
