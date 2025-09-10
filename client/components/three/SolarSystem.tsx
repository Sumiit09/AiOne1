import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Html } from "@react-three/drei";
import { AdditiveBlending, Group, SRGBColorSpace, Texture, TextureLoader } from "three";
import CleanLogo from "@/components/site/CleanLogo";


function Planet({ url, radius, size, speed, phase = 0, opacity = 0.6 }: { url: string; radius: number; size: number; speed: number; phase?: number; opacity?: number; }) {
  const group = useRef<Group>(null);
  const [tex, setTex] = useState<Texture | null>(null);
  const [aspect, setAspect] = useState(1);
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
        const img: any = t.image as HTMLImageElement | HTMLCanvasElement;
        if (img && (img as HTMLImageElement).width) {
          setAspect((img as HTMLImageElement).width / (img as HTMLImageElement).height || 1);
        } else {
          setAspect(1);
        }
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
              <planeGeometry args={[size * aspect, size]} />
              <meshBasicMaterial map={tex} transparent opacity={opacity} depthWrite={false} blending={AdditiveBlending} />
            </mesh>
          ) : (
            <mesh>
              <circleGeometry args={[size * 0.5, 48]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={opacity} depthWrite={false} />
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
    chatgpt: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F34fe699879554fb18441f2acd2a76d8f?format=webp&width=800",
    meta: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F87bc619e8b0342ed98d39248290cd3f8?format=webp&width=800",
    grok: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2Fa42a6a7abf654084853ee868703d390c?format=webp&width=800",
    perplexity: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F5594ddc449394fc29f89497d6108ff38?format=webp&width=800",
    gemini: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2Fb4cfebee4d174f30958fb52ffc9e8cda?format=webp&width=800",
    deepseek: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F155e3342d99c45f6b0708d4d86279a05?format=webp&width=800",
    claude: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F9e9ce3aa293948fd9cbcdca5ff2f75b5?format=webp&width=800",
  } as const;

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
            opacity={0.6}
          />
        ))}
      </Canvas>
    </div>
  );
}
