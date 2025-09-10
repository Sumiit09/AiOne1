import { useEffect, useMemo, useState } from "react";

interface Star {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function TwinkleField({ count = 260 }: { count?: number }) {
  const [vw, setVw] = useState(0);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const stars = useMemo<Star[]>(() => {
    const rng = (seed: number) => {
      let t = seed;
      return () => (t = (t * 1664525 + 1013904223) % 4294967296) / 4294967296;
    };
    const rand = rng(1337);
    return Array.from({ length: count }).map(() => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 1 + Math.floor(rand() * 2),
      delay: rand() * 4,
      duration: 1.8 + rand() * 2.2,
    }));
  }, [count, vw]);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-sm bg-[#4FF3D3] mix-blend-screen shadow-[0_0_8px_1px_rgba(79,243,211,0.55)] animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
