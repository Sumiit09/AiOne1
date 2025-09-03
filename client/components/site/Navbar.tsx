import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/about" className={({isActive})=>`hover:text-foreground/80 ${isActive?"text-foreground":"text-foreground/60"}`}>About</NavLink>
          <NavLink to="/blog" className={({isActive})=>`hover:text-foreground/80 ${isActive?"text-foreground":"text-foreground/60"}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:text-foreground/80 ${isActive?"text-foreground":"text-foreground/60"}`}>Contact</NavLink>
          <NavLink to="/privacy" className={({isActive})=>`hover:text-foreground/80 ${isActive?"text-foreground":"text-foreground/60"}`}>Privacy</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl transition-shadow">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
