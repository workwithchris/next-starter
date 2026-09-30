import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { TechStackStrip } from "./components/tech-stack-strip";
import { FeaturesGrid } from "./components/features-grid";
import { FormDemo } from "./components/form-demo";
import { ArchitectureViewer } from "./components/architecture-viewer";
import { VercelTriad } from "./components/vercel-triad";
import { CtaBand } from "./components/cta-band";
import { Footer } from "./components/footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black text-[#171717] dark:text-[#ededed] font-sans antialiased selection:bg-[#0070f3] selection:text-white transition-colors">
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

        {/* 6. Vercel Triad Highlight (Develop, Preview, Ship) */}
        <VercelTriad />

        {/* 7. CTA Band with Black Marketing Pill */}
        <CtaBand />
      </main>

      {/* 8. Structural Footer */}
      <Footer />
    </div>
  );
}

export default Home;
