import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Terminal } from 'lucide-react';
import { cn } from '../utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-emerald-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
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
