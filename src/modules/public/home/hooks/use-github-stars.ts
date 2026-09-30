"use client";

import { useQuery } from "@tanstack/react-query";

interface GitHubRepoInfo {
  stargazers_count: number;
}

export function useGitHubStars(repo = "workwithchris/next-starter") {
  return useQuery({
    queryKey: ["github-stars", repo],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      if (!res.ok) throw new Error("Failed to fetch GitHub stars");
      const data: GitHubRepoInfo = await res.json();
      return data.stargazers_count;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes cache
    gcTime: 1000 * 60 * 60,
    retry: 1,
  });
}
