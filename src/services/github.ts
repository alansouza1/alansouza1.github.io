export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export async function fetchGithubProfile(username: string): Promise<GithubProfile> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error('Failed to fetch GitHub profile');
  return response.json();
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
  if (!response.ok) throw new Error('Failed to fetch GitHub repositories');
  return response.json();
}

export async function fetchPinnedRepos(username: string): Promise<GithubRepo[]> {
  try {
    // Using a community API that extracts pinned repositories from GitHub profiles
    const response = await fetch(`https://github-pinned-repositories.vercel.app/api/pinned?username=${username}`);
    if (!response.ok) throw new Error('Failed to fetch pinned repositories');
    const pinnedData = await response.json();
    
    // Map the pinned data to our GithubRepo interface
    return pinnedData.map((item: any, index: number) => ({
      id: index,
      name: item.repo,
      description: item.description,
      html_url: item.link,
      stargazers_count: parseInt(item.stars) || 0,
      language: item.language,
      topics: [] // Pinned API doesn't usually return topics
    }));
  } catch (error) {
    console.error("Pinned API Error:", error);
    throw error;
  }
}
