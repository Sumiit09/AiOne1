import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Html } from "@react-three/drei";
import { Group, SRGBColorSpace, Texture, TextureLoader } from "three";
import CleanLogo from "@/components/site/CleanLogo";


function Planet({ url, radius, size, speed, phase = 0, opacity = 0.16, color = "#ffffff" }: { url: string; radius: number; size: number; speed: number; phase?: number; opacity?: number; color?: string; }) {
  const group = useRef<Group>(null);
  const [tex, setTex] = useState<Texture | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    setTex(null);
    setFailed(false);
    const loader = new TextureLoader();
    (loader as any).crossOrigin = "anonymous";
    loader.load(
      url,
      (t) => {
        if (!mounted) return;
        t.colorSpace = SRGBColorSpace;
        setTex(t);
      },
      undefined,
      () => {
        if (!mounted) return;
        setFailed(true);
      }
    );
    return () => {
      mounted = false;
    };
  }, [url]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    if (group.current) group.current.rotation.z = t; // screen-space circular path
  });

  return (
    <group ref={group} position={[0, 0, -0.6]}>
      <group position={[radius, 0, 0]}>
        <Billboard>
          {tex && !failed ? (
            <mesh>
              <planeGeometry args={[size, size]} />
              <meshBasicMaterial map={tex} color={color} transparent opacity={opacity} depthWrite={false} />
            </mesh>
          ) : (
            <mesh>
              <circleGeometry args={[size * 0.5, 48]} />
              <meshBasicMaterial color={color} transparent opacity={opacity * 0.75} depthWrite={false} />
            </mesh>
          )}
        </Billboard>
      </group>
    </group>
  );
}

function CenterLabel() {
  return (
    <group>
      <Html position={[0, -0.1, -0.6]} center>
        <div className="pointer-events-none select-none">
          <div className="flex flex-col items-center gap-1 scale-[1.1] md:scale-[1.25]">
            <CleanLogo src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F48dc2d1e1a294e36ac04e854e5342cfb?format=webp&width=256" alt="AiOne logo" className="h-10 w-10 object-contain" threshold={252} />
            <span className="text-white font-extrabold tracking-tight text-lg">AiOne</span>
          </div>
        </div>
      </Html>
    </group>
  );
}


export default function SolarSystem() {
  // Simple Icons SVG textures (transparent) in white
  const logos = {
    openai: "https://cdn.simpleicons.org/openai/ffffff",
    anthropic: "https://cdn.simpleicons.org/anthropic/ffffff",
    google: "https://cdn.simpleicons.org/google/ffffff",
    mistral: "https://cdn.simpleicons.org/mistral-ai/ffffff",
    perplexity: "https://cdn.simpleicons.org/perplexity/ffffff",
    meta: "https://cdn.simpleicons.org/meta/ffffff",
    cohere: "https://cdn.simpleicons.org/cohere/ffffff",
  } as const;

  const brandColors: Record<keyof typeof logos, string> = {
    openai: "#412991",
    anthropic: "#000000",
    google: "#4285F4",
    mistral: "#FF7A00",
    perplexity: "#1B63FF",
    meta: "#0866FF",
    cohere: "#FFC300",
  };

  const keys = Object.keys(logos) as (keyof typeof logos)[];
  const radius = 2.2;
  const speed = 0.18;

  return (
    <div className="relative w-full h-48 md:h-56 pointer-events-none hidden md:block motion-reduce:hidden">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 2, 6]} intensity={0.55} color="#cfe9ff" />
        <CenterLabel />
        {keys.map((k, i) => (
          <Planet
            key={k}
            url={logos[k]}
            radius={radius}
            size={0.34}
            speed={speed}
            phase={(i / keys.length) * Math.PI * 2}
            opacity={0.16}
            color={brandColors[k]}
          />
        ))}
      </Canvas>
    </div>
  );
}
