export function StructuredData({ appUrl }: { appUrl: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${appUrl}/#website`,
        url: appUrl,
        name: "next-starter",
        description:
          "Enterprise Next.js 16 production starter template & CLI with React 19, Tailwind CSS v4, Base UI, Auth.js, and next-intl.",
        inLanguage: ["en", "es", "fr", "de", "ja"],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${appUrl}/#software`,
        name: "create-starter-next",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "All",
        description:
          "High-performance CLI and starter blueprint for Next.js 16, React 19, Tailwind CSS v4, and Auth.js v5.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Person",
          name: "workwithchris",
          url: "https://github.com/workwithchris",
        },
        featureList: [
          "Next.js 16 App Router with Turbopack",
          "React 19 with React Compiler",
          "Tailwind CSS v4 & Vercel Geist Design System",
          "Auth.js v5 with OAuth and Credentials",
          "5-Locale internationalization with next-intl",
          "TanStack Query v5 server cache",
          "Zod schema validation and React Hook Form",
          "Enterprise network client with SSE and WebSockets",
          "Vitest unit testing suite",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
