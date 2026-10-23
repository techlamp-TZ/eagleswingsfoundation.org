import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Family Residences & Essential Enterprises | Empowering Lives",
  description:
    "FREE (Family Residences and Essential Enterprises, Inc.) supports more than 5,500 individuals with intellectual/developmental disabilities, mental illness, and traumatic brain injury. Founded in 1977, headquartered in Old Bethpage, NY.",
  keywords: [
    "FREE",
    "Family Residences and Essential Enterprises",
    "disability services",
    "OPWDD",
    "OMH",
    "TBI",
    "behavioral health",
    "Old Bethpage",
    "developmental disabilities",
    "community services",
  ],
  authors: [{ name: "Family Residences and Essential Enterprises, Inc." }],
  openGraph: {
    title: "Family Residences & Essential Enterprises | Empowering Lives",
    description:
      "Helping individuals of all abilities reach their full potential and thrive in their communities since 1977.",
    siteName: "FREE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Residences & Essential Enterprises",
    description:
      "Helping individuals of all abilities reach their full potential and thrive in their communities since 1977.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
