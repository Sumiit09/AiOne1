import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import { AdditiveBlending, Group, SRGBColorSpace, TextureLoader } from "three";

function Sun() {
  return (
    <group>
      <mesh position={[0, -0.1, -0.6]}>
        <sphereGeometry args={[0.6, 48, 48]} />
        <meshStandardMaterial color="#9ad6ff" roughness={1} metalness={0} emissive="#9ad6ff" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, -0.1, -0.7]}> 
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#6ad1ff" transparent opacity={0.08} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Planet({ url, radius, size, speed, phase = 0, opacity = 0.22 }: { url: string; radius: number; size: number; speed: number; phase?: number; opacity?: number; }) {
  const group = useRef<Group>(null);
  const tex = useLoader(TextureLoader, url);
  tex.colorSpace = SRGBColorSpace;
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    if (group.current) group.current.rotation.y = t;
  });
  return (
    <group ref={group}>
      <group position={[radius, 0, -0.6]}>
        <Billboard>
          <mesh>
            <planeGeometry args={[size, size]} />
            <meshBasicMaterial map={tex} transparent opacity={opacity} depthWrite={false} />
          </mesh>
        </Billboard>
      </group>
    </group>
  );
}

function Orbits() {
  return (
    <group>
      {/* subtle orbit rings */}
      {[1.6, 2.2, 2.8, 3.4].map((r, i) => (
        <mesh key={i} position={[0, -0.1, -0.7]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r - 0.002, r + 0.002, 128]} />
          <meshBasicMaterial color="#7be9d8" transparent opacity={0.06} blending={AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

export default function SolarSystem() {
  // Simple Icons SVG textures (transparent) in white
  const logos = {
    openai: "https://cdn.simpleicons.org/openai/ffffff",
    anthropic: "https://cdn.simpleicons.org/anthropic/ffffff",
    google: "https://cdn.simpleicons.org/google/ffffff",
    mistral: "https://cdn.simpleicons.org/mistral/ffffff",
    perplexity: "https://cdn.simpleicons.org/perplexity/ffffff",
    meta: "https://cdn.simpleicons.org/meta/ffffff",
    cohere: "https://cdn.simpleicons.org/cohere/ffffff",
  } as const;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block motion-reduce:hidden">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 2, 6]} intensity={0.6} color="#cfe9ff" />
        <Sun />
        <Orbits />
        <Planet url={logos.openai} radius={1.6} size={0.42} speed={0.25} phase={0} />
        <Planet url={logos.anthropic} radius={2.2} size={0.38} speed={0.2} phase={0.6} />
        <Planet url={logos.google} radius={2.8} size={0.36} speed={0.16} phase={1.4} />
        <Planet url={logos.mistral} radius={3.4} size={0.34} speed={0.13} phase={2.2} />
        <Planet url={logos.perplexity} radius={2.5} size={0.32} speed={0.18} phase={3.0} opacity={0.18} />
        <Planet url={logos.meta} radius={3.0} size={0.30} speed={0.15} phase={3.7} opacity={0.18} />
        <Planet url={logos.cohere} radius={1.9} size={0.28} speed={0.22} phase={4.4} opacity={0.18} />
      </Canvas>
    </div>
  );
}
