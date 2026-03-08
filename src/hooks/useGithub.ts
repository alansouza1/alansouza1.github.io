import { useState, useEffect } from 'react';
import { fetchGithubProfile, fetchGithubRepos, type GithubProfile, type GithubRepo } from '../services/github';
import { GITHUB_USERNAME } from '../constants';

export function useGithub() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [profileData, reposData] = await Promise.all([
          fetchGithubProfile(GITHUB_USERNAME),
          fetchGithubRepos(GITHUB_USERNAME)
        ]);
        setProfile(profileData);
        // Ignore the profile README repository
        setRepos(reposData.filter(repo => repo.name !== GITHUB_USERNAME));
        setError(null);
      } catch (err) {
        console.error("Error loading portfolio data:", err);
        setError('Failed to load GitHub data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { profile, repos, loading, error };
}
