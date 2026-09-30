import { apiClient } from "@/core/network";
import { endpoints } from "@/core/constants/endpoints";
import type { CreateProjectInput, DashboardMetrics, Project } from "./dashboard-types";

// In-memory mock seed for local runtime / test fallback
let MOCK_PROJECTS: Project[] = [
  {
    id: "prj_01",
    name: "e-commerce-storefront",
    description: "Global multi-currency checkout & catalog",
    status: "active",
    tier: "pro",
    requestCount: 1420500,
    lastDeployedAt: "2 mins ago",
  },
  {
    id: "prj_02",
    name: "auth-gateway-edge",
    description: "Low-latency JWT verification middleware",
    status: "active",
    tier: "enterprise",
    requestCount: 8940200,
    lastDeployedAt: "1 hour ago",
  },
  {
    id: "prj_03",
    name: "analytics-worker",
    description: "Clickhouse event ingestion consumer",
    status: "building",
    tier: "starter",
    requestCount: 34000,
    lastDeployedAt: "Just now",
  },
];

export async function fetchDashboardMetrics(): Promise<DashboardMetrics> {
  try {
    const res = await apiClient.get<DashboardMetrics>(endpoints.metrics, { timeoutMs: 2000 });
    return res.data;
  } catch {
    return {
      totalProjects: MOCK_PROJECTS.length,
      activeDeployments: MOCK_PROJECTS.filter((p) => p.status === "active").length,
      monthlyBandwidth: "1.42 TB",
      uptimePercentage: 99.99,
    };
  }
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await apiClient.get<Project[]>(endpoints.projects, { timeoutMs: 2000 });
    return res.data;
  } catch {
    return [...MOCK_PROJECTS];
  }
}

export async function createProject(input: CreateProjectInput): Promise<Project> {
  try {
    const res = await apiClient.post<Project>(endpoints.projects, input);
    return res.data;
  } catch {
    const newProject: Project = {
      id: `prj_${Date.now().toString().slice(-4)}`,
      name: input.name,
      description: input.description,
      status: "active",
      tier: input.tier || "starter",
      requestCount: 0,
      lastDeployedAt: "Just now",
    };
    MOCK_PROJECTS = [newProject, ...MOCK_PROJECTS];
    return newProject;
  }
}

export async function deleteProject(id: string): Promise<boolean> {
  try {
    await apiClient.delete(`${endpoints.projects}?id=${id}`);
    return true;
  } catch {
    MOCK_PROJECTS = MOCK_PROJECTS.filter((p) => p.id !== id);
    return true;
  }
}
