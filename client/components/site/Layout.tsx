import { PropsWithChildren, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Starfield from "@/components/three/Starfield";
import TwinkleField from "@/components/effects/TwinkleField";
import DotGrid from "@/components/effects/DotGrid";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: PropsWithChildren) {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace('#', ''));
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F1A] text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ WebkitMaskImage: "linear-gradient(to bottom, transparent 0, transparent 64px, black 120px, black 100%)", maskImage: "linear-gradient(to bottom, transparent 0, transparent 64px, black 120px, black 100%)" }}>
        <Starfield />
        <DotGrid />
        <TwinkleField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1 text-white">{children}</main>
      <Footer />
    </div>
  );
}
