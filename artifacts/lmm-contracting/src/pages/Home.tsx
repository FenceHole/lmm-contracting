import { PromoBanner } from "@/components/PromoBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Investors } from "@/components/Investors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <PromoBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Services />
        <Portfolio />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
