import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean(),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export interface AuthSession {
  user: {
    id: string;
    email: string;
    name: string;
    role: "admin" | "member" | "viewer";
  };
  token: string;
  expiresAt: number;
}
