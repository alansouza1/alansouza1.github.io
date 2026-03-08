import { motion } from 'motion/react';
import { Mail, Code2, Github } from 'lucide-react';
import { type GithubProfile } from '../services/github';

export const Hero = ({ profile }: { profile: GithubProfile | null }) => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="atmosphere-glow top-1/4 -left-20 w-96 h-96" />
      <div className="atmosphere-glow bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
            Building digital <br />
            <span className="gradient-text">experiences</span> that matter.
          </h1>
          
          <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
            {profile?.bio || "Full-stack developer passionate about creating clean, efficient, and user-centric applications. Specializing in modern web technologies and cloud architecture."}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a 
              href="mailto:alansouza4001@gmail.com" 
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-bold rounded-xl transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
            <img 
              src={profile?.avatar_url || "https://picsum.photos/seed/alan/800/800"} 
              alt="Alan Souza" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating stats */}
          <div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-4 animate-bounce-slow">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Experience</div>
              <div className="text-lg font-bold">4+ Years</div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-4 animate-bounce-slow delay-700">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Repos</div>
              <div className="text-lg font-bold">{profile?.public_repos || 0}+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
