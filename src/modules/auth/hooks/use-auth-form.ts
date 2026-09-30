"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "@/core/i18n/routing";
import { useAuthStore } from "@/core/store";
import { toast } from "sonner";
import { LoginSchema, type LoginInput } from "../data/auth-types";

export function useAuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid credentials. Please verify email and password.");
        return;
      }

      setAuth(
        {
          id: "usr_101",
          email: data.email,
          name: data.email.split("@")[0],
          role: "admin",
        },
        "authjs.session-token"
      );

      toast.success("Welcome back! Authentication successful.");
      router.push("/dashboard");
      router.refresh();
    } catch {
      toast.error("Failed to authenticate. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
