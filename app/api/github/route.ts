import { NextResponse } from "next/server";
import { getGithubContributions } from "@/lib/github";

export async function GET() {
  const calendar = await getGithubContributions();
  return NextResponse.json(calendar || { totalContributions: 0, weeks: [] }, { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } });
}