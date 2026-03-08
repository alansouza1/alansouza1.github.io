import { useState, useEffect } from 'react';
import { fetchGithubProfile, fetchGithubRepos, type GithubProfile, type GithubRepo } from './services/github';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// --- Main App ---

export default function App() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileData, reposData] = await Promise.all([
          fetchGithubProfile('alansouza1'),
          fetchGithubRepos('alansouza1')
        ]);
        setProfile(profileData);
        // Ignore the profile README repository (alansouza1)
        setRepos(reposData.filter(repo => repo.name !== 'alansouza1'));
      } catch (error) {
        console.error("Error loading portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
          <p className="text-zinc-500 font-mono text-sm animate-pulse">Initializing portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero profile={profile} />
        <Projects repos={repos} />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

