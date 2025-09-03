import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Starfield from "@/components/three/Starfield";
import TwinkleField from "@/components/effects/TwinkleField";
import DotGrid from "@/components/effects/DotGrid";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F1A] text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
        <DotGrid />
        <TwinkleField />
      </div>
      <Navbar />
      <main className="relative z-10 flex-1 text-white">{children}</main>
      <Footer />
    </div>
  );
}
