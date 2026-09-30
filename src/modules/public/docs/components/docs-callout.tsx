import { ReactNode } from "react";
import { Info, Lightbulb, AlertTriangle, ShieldAlert } from "lucide-react";

interface DocsCalloutProps {
  type?: "note" | "tip" | "important" | "warning";
  title?: string;
  children: ReactNode;
}

export function DocsCallout({
  type = "note",
  title,
  children,
}: DocsCalloutProps) {
  const configs = {
    note: {
      icon: Info,
      border: "border-blue-200 dark:border-blue-900/50",
      bg: "bg-blue-50/50 dark:bg-blue-950/20",
      text: "text-blue-900 dark:text-blue-200",
      iconColor: "text-[#0070f3]",
      defaultTitle: "Note",
    },
    tip: {
      icon: Lightbulb,
      border: "border-emerald-200 dark:border-emerald-900/50",
      bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
      text: "text-emerald-900 dark:text-emerald-200",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      defaultTitle: "Pro Tip",
    },
    important: {
      icon: AlertTriangle,
      border: "border-amber-200 dark:border-amber-900/50",
      bg: "bg-amber-50/50 dark:bg-amber-950/20",
      text: "text-amber-900 dark:text-amber-200",
      iconColor: "text-amber-600 dark:text-amber-400",
      defaultTitle: "Important",
    },
    warning: {
      icon: ShieldAlert,
      border: "border-red-200 dark:border-red-900/50",
      bg: "bg-red-50/50 dark:bg-red-950/20",
      text: "text-red-900 dark:text-red-200",
      iconColor: "text-red-600 dark:text-red-400",
      defaultTitle: "Warning",
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div
      className={`my-5 rounded-xl border p-4 text-xs leading-relaxed ${config.border} ${config.bg} ${config.text}`}
    >
      <div className="flex items-start gap-2.5">
        <Icon className={`h-4 w-4 shrink-0 mt-0.5 ${config.iconColor}`} />
        <div className="space-y-1">
          <p className="font-semibold text-xs text-[#171717] dark:text-white">
            {title || config.defaultTitle}
          </p>
          <div className="text-[#4d4d4d] dark:text-[#a1a1a1] space-y-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
