export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const endpoints = {
  projects: "/api/projects",
  metrics: "/api/dashboard/metrics",
  authLogin: "/api/auth/login",
} as const;