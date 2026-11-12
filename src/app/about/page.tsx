import type { Metadata } from "next";
import { Header } from "@/components/ew/header";
import { Footer } from "@/components/ew/footer";
import { AboutPage } from "@/components/ew/about-page";

export const metadata: Metadata = {
  title: "About | Eagle's Wings Foundation Tanzania",
  description:
    "Eagle's Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve the lives of people with disabilities and challenges, particularly children and older people.",
};

export default function About() {
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
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
