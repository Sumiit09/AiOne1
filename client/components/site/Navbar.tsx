import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`${scrolled ? "bg-[#0B0F1A]/80 border-white/10 backdrop-blur" : "bg-transparent border-transparent"} sticky top-0 z-40 w-full text-white transition-colors`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/about" className="hover:text-white/90 text-white/80">About</Link>
            <a href="#features" className="hover:text-white/90 text-white/80">Features</a>
            <a href="#pricing" className="hover:text-white/90 text-white/80">Pricing</a>
            <a href="#reviews" className="hover:text-white/90 text-white/80">Reviews</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:inline-flex"><Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">Login</Button></Link>
            <Link to="/login" className="hidden sm:inline-flex"><Button className="bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl transition-shadow">Get Started</Button></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
