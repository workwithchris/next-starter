import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { TechStackStrip } from "./components/tech-stack-strip";
import { FeaturesGrid } from "./components/features-grid";
import { FormDemo } from "./components/form-demo";
import { ArchitectureViewer } from "./components/architecture-viewer";
import { CtaBand } from "./components/cta-band";
import { Footer } from "./components/footer";
import { StructuredData } from "./components/structured-data";

export function Home() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://next-starter.dev";

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black text-[#171717] dark:text-[#ededed] font-sans antialiased selection:bg-[#0070f3] selection:text-white transition-colors">
      {/* Schema.org JSON-LD Structured Data for Google Rich Snippets */}
      <StructuredData appUrl={appUrl} />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Band with Multi-stop Mesh Gradient */}
        <HeroSection />

        {/* 2. Logo / Tech Stack Strip */}
        <TechStackStrip />

        {/* 3. Hairline Feature Card Grid */}
        <FeaturesGrid />

        {/* 4. Interactive Zod & React Hook Form Sandbox */}
        <FormDemo />

        {/* 5. Enterprise Architecture & File Manifest Explorer */}
        <ArchitectureViewer />

        {/* 6. CTA Band with Black Marketing Pill */}
        <CtaBand />
      </main>

      {/* 7. Structural Footer */}
      <Footer />
    </div>
  );
}

export default Home;
