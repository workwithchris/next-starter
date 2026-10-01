"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Check,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Send,
  Terminal,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Strict Zod Validation Schema showcasing production form handling
const projectFormSchema = z.object({
  projectName: z
    .string()
    .min(3, "Project name must be at least 3 characters")
    .max(30, "Project name cannot exceed 30 characters")
    .regex(
      /^[a-z0-9-]+$/,
      "Must be lowercase alphanumeric and hyphens only (kebab-case)",
    ),
  ownerEmail: z.string().email("Please enter a valid developer email address"),
  frameworkRole: z.enum(
    ["frontend-only", "fullstack-nest", "fullstack-next", "api-gateway"],
    {
      message: "Please select an architecture mode",
    },
  ),
  environment: z.enum(["preview", "staging", "production"]),
  enableTurbopack: z.boolean(),
  notes: z.string().max(100, "Notes cannot exceed 100 characters").optional(),
});

type ProjectFormData = z.infer<typeof projectFormSchema>;

export function FormDemo() {
  const t = useTranslations("FormDemo");
  const [submittedData, setSubmittedData] = useState<ProjectFormData | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    mode: "onChange",
    defaultValues: {
      projectName: "next-production-app",
      ownerEmail: "lead-developer@acme.dev",
      frameworkRole: "fullstack-next",
      environment: "production",
      enableTurbopack: true,
      notes: "High concurrency template deployment",
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    // Simulate instantaneous client-side schema processing & server action dispatch
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmittedData(data);
    setIsSubmitting(false);
  };

  const handlePrefillError = () => {
    setValue("projectName", "Invalid Name with Spaces & Upper!", {
      shouldValidate: true,
    });
    setValue("ownerEmail", "not-an-email", { shouldValidate: true });
  };

  const handleReset = () => {
    reset({
      projectName: "my-cloud-app",
      ownerEmail: "alex@engineering.io",
      frameworkRole: "fullstack-next",
      environment: "preview",
      enableTurbopack: true,
      notes: "",
    });
    setSubmittedData(null);
  };

  return (
    <section
      id="form-demo"
      className="py-20 border-t border-border bg-card transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-mono text-primary mb-3">
            <Sparkles className="h-3 w-3" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Dual Panel Grid: Form on Left, Validated Schema State on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Form */}
          <div className="lg:col-span-7 rounded-xl border border-border bg-background/50 p-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
              <div>
                <span className="text-sm font-semibold text-foreground">
                  Project Configuration Schema
                </span>
                <p className="text-xs text-muted-foreground">
                  Evaluated instantaneously on change
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrefillError}
                  className="rounded-[6px] border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-destructive hover:border-destructive/40 transition-colors cursor-pointer"
                  title="Simulate invalid input to trigger Zod errors"
                >
                  Trigger Errors
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-[6px] border border-border bg-card p-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Reset form"
                  aria-label="Reset form fields"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Project Name */}
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Project Slug{" "}
                  <span className="text-muted-foreground font-normal font-mono">
                    (kebab-case)
                  </span>
                </label>
                <input
                  {...register("projectName")}
                  type="text"
                  placeholder="e.g. acme-web-platform"
                  className={`w-full rounded-[6px] border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors ${
                    errors.projectName
                      ? "border-destructive focus:ring-1 focus:ring-destructive"
                      : "border-input focus:border-ring focus:ring-1 focus:ring-ring"
                  }`}
                />
                {errors.projectName && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{errors.projectName.message}</span>
                  </p>
                )}
              </div>

              {/* Developer Email */}
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  Lead Developer Email
                </label>
                <input
                  {...register("ownerEmail")}
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full rounded-[6px] border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors ${
                    errors.ownerEmail
                      ? "border-destructive focus:ring-1 focus:ring-destructive"
                      : "border-input focus:border-ring focus:ring-1 focus:ring-ring"
                  }`}
                />
                {errors.ownerEmail && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{errors.ownerEmail.message}</span>
                  </p>
                )}
              </div>

              {/* Architecture & Role Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    Architecture Mode
                  </label>
                  <select
                    {...register("frameworkRole")}
                    className="w-full rounded-[6px] border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors"
                  >
                    <option value="fullstack-next">
                      Next.js 16 Fullstack (App Router)
                    </option>
                    <option value="fullstack-nest">
                      Next.js Frontend + NestJS Backend
                    </option>
                    <option value="frontend-only">
                      Standalone Web Application
                    </option>
                    <option value="api-gateway">
                      Edge API Microservice Gateway
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    Target Environment
                  </label>
                  <select
                    {...register("environment")}
                    className="w-full rounded-[6px] border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors"
                  >
                    <option value="preview">Preview (Staging URL)</option>
                    <option value="staging">
                      Staging (Integration Pipeline)
                    </option>
                    <option value="production">
                      Production (Global Edge CDN)
                    </option>
                  </select>
                </div>
              </div>

              {/* Turbopack Checkbox */}
              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs text-foreground cursor-pointer select-none">
                  <input
                    {...register("enableTurbopack")}
                    type="checkbox"
                    className="h-4 w-4 rounded border-input text-primary focus:ring-0 cursor-pointer"
                  />
                  <span>Enable Next.js 16 Turbopack compiler acceleration</span>
                </label>
              </div>

              {/* Submit Button (button-primary-sm 6px square) */}
              <div className="pt-3 flex items-center justify-between">
                <div className="text-xs text-muted-foreground font-mono">
                  Schema status:{" "}
                  {isValid ? (
                    <span className="text-[#10b981] font-medium">Valid ✓</span>
                  ) : (
                    <span className="text-[#ee0000] font-medium">
                      Errors detected
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-[6px] bg-primary text-primary-foreground px-4 py-2 text-xs font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
                >
                  {isSubmitting ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Send className="h-3.5 w-3.5" />
                  )}
                  <span>Validate & Dispatch</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Panel: Live JSON Schema / Parse Output */}
          <div className="lg:col-span-5 rounded-xl border border-border bg-card p-6 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-xs font-medium text-foreground">
                  Type-Safe JSON Payload
                </span>
              </div>
              <span className="font-mono text-[10px] rounded bg-background border border-border px-1.5 py-0.5 text-muted-foreground">
                z.infer&lt;typeof schema&gt;
              </span>
            </div>

            {submittedData ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#10b981] font-medium">
                  <Check className="h-4 w-4" />
                  <span>Validation passed • Payload coerced & parsed</span>
                </div>
                <pre className="p-3.5 rounded-lg border border-border bg-background font-mono text-[11px] text-foreground overflow-x-auto leading-relaxed">
                  {JSON.stringify(submittedData, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
                  <Send className="h-4 w-4" />
                </div>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Submit the form on the left or edit any input to inspect
                  parsed schema attributes in real time.
                </p>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Hook Form Resolver:</span>
                <span className="font-mono text-[11px] text-foreground">
                  @hookform/resolvers/zod
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Validation Mode:</span>
                <span className="font-mono text-[11px] text-foreground">
                  onChange (Instant)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
