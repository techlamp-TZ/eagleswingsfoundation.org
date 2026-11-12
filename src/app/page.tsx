import { Header } from "@/components/ew/header";
import { HeroSlider } from "@/components/ew/hero-slider";
import { About, Programs, Values, News, GetInvolved, StayConnected } from "@/components/ew/sections";
import { Footer } from "@/components/ew/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <HeroSlider />
        <About />
        <Programs />
        <Values />
        <News />
        <GetInvolved />
        <StayConnected />
      </main>
      <Footer />
    </div>
  );
}
