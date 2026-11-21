import { Header } from "@/components/ew/header";
import { HeroSlider } from "@/components/ew/hero-slider";
import { About, Programs, Values, News, GetInvolved, StayConnected } from "@/components/ew/sections";
import { Footer } from "@/components/ew/footer";
import { WaveDivider } from "@/components/ew/svg-accents";

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
        <div className="bg-brand-deep"><WaveDivider color="var(--color-sand-warm)" /></div>
        <About />
        <div className="bg-sand-warm"><WaveDivider color="white" /></div>
        <Programs />
        <div className="bg-white"><WaveDivider color="var(--color-brand-deep)" /></div>
        <Values />
        <div className="bg-brand-deep"><WaveDivider color="var(--color-sand-warm)" /></div>
        <News />
        <div className="bg-sand-warm"><WaveDivider color="white" /></div>
        <GetInvolved />
        <div className="bg-white"><WaveDivider color="var(--color-brand-navy)" /></div>
        <StayConnected />
      </main>
      <Footer />
    </div>
  );
}
