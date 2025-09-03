import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-foreground/70 max-w-sm">Aione unifies GPT, Claude, Gemini, Mistral and more into one affordable, seamless interface.</p>
          </div>
          <div className="md:justify-self-center">
            <nav className="grid gap-2 text-sm">
              <Link className="hover:text-foreground/80 text-foreground/60" to="/about">About</Link>
              <Link className="hover:text-foreground/80 text-foreground/60" to="/blog">Blog</Link>
              <Link className="hover:text-foreground/80 text-foreground/60" to="/contact">Contact</Link>
              <Link className="hover:text-foreground/80 text-foreground/60" to="/privacy">Privacy</Link>
            </nav>
          </div>
          <div className="md:justify-self-end flex gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-muted text-foreground/80 hover:text-white hover:shadow-xl transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-[hsl(var(--brand-start))] hover:to-[hsl(var(--brand-end))]"><Twitter className="h-5 w-5"/></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-muted text-foreground/80 hover:text-white hover:shadow-xl transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-[hsl(var(--brand-start))] hover:to-[hsl(var(--brand-end))]"><Github className="h-5 w-5"/></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-muted text-foreground/80 hover:text-white hover:shadow-xl transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-[hsl(var(--brand-start))] hover:to-[hsl(var(--brand-end))]"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-foreground/60">© {new Date().getFullYear()} Aione. All rights reserved.</div>
      </div>
    </footer>
  );
}
