import { Header } from "@/components/free/header";
import { HeroSlider } from "@/components/free/hero-slider";
import { AboutSection } from "@/components/free/about-section";
import { ProgramsServices } from "@/components/free/programs-services";
import { CoreValuesSection } from "@/components/free/core-values";
import { NewsEvents } from "@/components/free/news-events";
import { GetInvolved } from "@/components/free/get-involved";
import { Newsletter } from "@/components/free/newsletter";
import { Footer } from "@/components/free/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <AboutSection />
        <ProgramsServices />
        <CoreValuesSection />
        <NewsEvents />
        <GetInvolved />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
