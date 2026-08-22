import { PortfolioClient } from "@/components/PortfolioClient";
import { getFeaturedRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await getFeaturedRepos();
  return <PortfolioClient initialRepos={repos} />;
}