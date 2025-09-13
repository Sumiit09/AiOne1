import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme:dark");
    const isDark = saved ? saved === "1" : document.documentElement.classList.contains("dark");
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      className="h-9 rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme:dark", next ? "1" : "0");
      }}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
