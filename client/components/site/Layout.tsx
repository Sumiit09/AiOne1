import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Starfield from "@/components/three/Starfield";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F1A] text-foreground relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Starfield />
      </div>
      <Navbar />
      <main className="flex-1 text-white">{children}</main>
      <Footer />
    </div>
  );
}
