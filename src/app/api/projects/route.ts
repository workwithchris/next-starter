import { NextResponse } from "next/server";
import type { Project } from "@/modules/protected/dashboard/data/dashboard-types";

// In-memory project store for dev/demo runtime
let projects: Project[] = [
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

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProject: Project = {
      id: `prj_${Date.now().toString().slice(-4)}`,
      name: body.name,
      description: body.description,
      status: "active",
      tier: body.tier || "starter",
      requestCount: 0,
      lastDeployedAt: "Just now",
    };

    projects = [newProject, ...projects];
    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    projects = projects.filter((p) => p.id !== id);
  }

  return NextResponse.json({ success: true });
}
