"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "@/core/i18n/routing";
import { useAuthStore } from "@/core/store";
import { toast } from "sonner";
import { LoginSchema, type LoginInput } from "../data/auth-types";
import { loginUser } from "../data/auth-api";

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
      const session = await loginUser(data);
      setAuth(session.user, session.token);
      toast.success("Welcome back! Authentication successful.");
      router.push("/dashboard");
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
