import { NextResponse } from "next/server";
import type { DashboardMetrics } from "@/modules/protected/dashboard/data/dashboard-types";

export async function GET() {
  const metrics: DashboardMetrics = {
    totalProjects: 3,
    activeDeployments: 2,
    monthlyBandwidth: "1.42 TB",
    uptimePercentage: 99.99,
  };

  return NextResponse.json(metrics);
}
