"use client";

import dynamic from "next/dynamic";

// The inner pages read window/location directly, so they render in the browser only.
const LegacyApp = dynamic(() => import("@/legacy/LegacyApp.jsx"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-background" aria-busy="true" />,
});

export default function LegacyClient() {
  return <LegacyApp />;
}
