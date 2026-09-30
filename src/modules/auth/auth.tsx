"use client";

import { AuthCard } from "./components/auth-card";

export function AuthModule() {
  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center py-12">
      <AuthCard />
    </div>
  );
}
