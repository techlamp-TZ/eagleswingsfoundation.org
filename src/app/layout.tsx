import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Eagle's Wings Foundation Tanzania supports people with disabilities, older people, families and caregivers in Tegeta, Dar es Salaam through awareness, education, life skills and caregiver training.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eagleswingsfoundation.org"),
  title: "Eagle's Wings Foundation Tanzania | Every person deserves a place to belong",
  description,
  icons: { icon: "/favicon-48.png", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Eagle's Wings Foundation Tanzania",
    description,
    siteName: "Eagle's Wings Foundation Tanzania",
    images: ["/photos/hero.webp"],
    type: "website",
    locale: "en_TZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle's Wings Foundation Tanzania",
    description,
    images: ["/photos/hero.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#061f3f",
};

// Structured data so search engines can show the Foundation correctly.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Eagle's Wings Foundation Tanzania",
  alternateName: "Eagle's Wings",
  url: "https://eagleswingsfoundation.org",
  logo: "https://eagleswingsfoundation.org/eagles-wings-foundation-logo.png",
  description,
  email: "info@eagleswingsfoundation.org",
  telephone: "+255 749 044 723",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tegeta",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  sameAs: ["https://instagram.com/eaglewings.tz"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
