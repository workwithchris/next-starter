import type { AuthSession, LoginInput } from "./auth-types";

export async function loginUser(input: LoginInput): Promise<AuthSession> {
  // Simulate network roundtrip or delegate to apiClient.post("/api/auth/login", input)
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    user: {
      id: "usr_202",
      email: input.email,
      name: input.email.split("@")[0],
      role: "admin",
    },
    token: `jwt_sess_${Date.now()}`,
    expiresAt: Date.now() + 86400000,
  };
}
