import { describe, expect, it } from "vitest";
import { createProject, deleteProject, fetchDashboardMetrics, fetchProjects } from "../data/dashboard-api";

describe("Dashboard Data API", () => {
  it("fetches dashboard metrics summary", async () => {
    const metrics = await fetchDashboardMetrics();
    expect(metrics.uptimePercentage).toBe(99.99);
    expect(metrics.totalProjects).toBeGreaterThanOrEqual(1);
    expect(typeof metrics.monthlyBandwidth).toBe("string");
  });

  it("fetches projects list", async () => {
    const projects = await fetchProjects();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("creates and deletes project", async () => {
    const newProject = await createProject({
      name: "edge-service-test",
      description: "Testing API",
      tier: "pro",
    });

    expect(newProject.id).toBeDefined();
    expect(newProject.name).toBe("edge-service-test");

    const deleted = await deleteProject(newProject.id);
    expect(deleted).toBe(true);
  });
});
