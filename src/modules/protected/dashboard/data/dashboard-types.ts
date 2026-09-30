import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Project name must be at least 2 characters"),
  description: z.string().optional(),
  status: z.enum(["active", "building", "paused", "archived"]),
  tier: z.enum(["starter", "pro", "enterprise"]),
  requestCount: z.number().default(0),
  lastDeployedAt: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const CreateProjectInputSchema = z.object({
  name: z.string().min(2, "Name is required (min 2 chars)"),
  description: z.string().optional(),
  tier: z.enum(["starter", "pro", "enterprise"]),
});

export type CreateProjectInput = z.infer<typeof CreateProjectInputSchema>;

export interface DashboardMetrics {
  totalProjects: number;
  activeDeployments: number;
  monthlyBandwidth: string;
  uptimePercentage: number;
}
