import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.github.com/users/chamaneth/repos?sort=updated&per_page=100",
    {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json", // include topics
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
  }

  const data = await res.json();

  // Only include repos with topic 'portfolio'
  const projects = data
    .filter((repo: any) => repo.topics && repo.topics.includes("portfolio"))
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      // Assign category based on topics
      category: repo.topics.includes("software-engineering")
        ? "SE"
        : repo.topics.includes("data-engineering")
        ? "DE"
        : "SE", // default to SE if no specific topic
    }));

  return NextResponse.json(projects);
}
