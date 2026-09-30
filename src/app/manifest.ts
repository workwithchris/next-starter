import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js Production Starter Template",
    short_name: "Next Starter",
    description:
      "Enterprise-ready Next.js 16 starter template with React 19, Tailwind CSS v4, Base UI, and next-intl.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
