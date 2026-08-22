export type Repo = {
  name: string; description: string; url: string; stars: number; forks: number; language: string | null; updatedAt: string; topics: string[];
};

const featured = [
  { name: "Data-Leakage-Detection-System", description: "LeakShield — enterprise ML pipeline auditing with six statistical detectors, a pipeline auditor, framework knowledge bases, and a React dashboard.", url: "https://github.com/Sukumar-Elley/Data-Leakage-Detection-System", stars: 0, forks: 0, language: "Python", updatedAt: "", topics: ["FastAPI", "React", "PyTorch", "MLflow"] },
  { name: "Event-driven-agentic-platform-", description: "Production AI platform combining a custom Rust Raft broker, Python agents, multimodal processing, observability, chaos engineering, and Kubernetes.", url: "https://github.com/Sukumar-Elley/Event-driven-agentic-platform-", stars: 0, forks: 0, language: "Rust", updatedAt: "", topics: ["Rust", "Python", "RAG", "Kubernetes"] },
  { name: "ecommerce-retention", description: "RetentionAI — advanced retention platform with uplift ML, BERT4Rec, SHAP, RL pricing, multi-agent RAG, FastAPI, React and MLOps.", url: "https://github.com/Sukumar-Elley/ecommerce-retention", stars: 0, forks: 0, language: "Python", updatedAt: "", topics: ["XGBoost", "PyTorch", "RAG", "MLOps"] }
];

export async function getFeaturedRepos(): Promise<Repo[]> {
  try {
    const response = await fetch("https://api.github.com/users/Sukumar-Elley/repos?per_page=100&sort=updated", { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) return featured;
    const data = await response.json();
    return featured.map((item) => {
      const live = data.find((repo: any) => repo.name === item.name);
      return live ? { ...item, description: live.description || item.description, url: live.html_url, stars: live.stargazers_count, forks: live.forks_count, language: live.language || item.language, updatedAt: live.updated_at, topics: live.topics || item.topics } : item;
    });
  } catch { return featured; }
}

export async function getGithubContributions() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;
  const query = `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{contributionCount date}}}}}}`;
  const response = await fetch("https://api.github.com/graphql", { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ query, variables: { login: "Sukumar-Elley" } }), next: { revalidate: 3600 } });
  if (!response.ok) return null;
  const json = await response.json();
  return json.data?.user?.contributionsCollection?.contributionCalendar ?? null;
}