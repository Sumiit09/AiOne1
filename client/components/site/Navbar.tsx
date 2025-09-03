import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0F1A] text-slate-200 border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-white/90 text-white/70">Features</a>
          <a href="#pricing" className="hover:text-white/90 text-white/70">Pricing</a>
          <a href="#reviews" className="hover:text-white/90 text-white/70">Reviews</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex border-white/20 bg-transparent text-white hover:bg-white/10">Login</Button>
          <Button className="hidden sm:inline-flex bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl transition-shadow">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
