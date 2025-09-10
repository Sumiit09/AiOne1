import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { AdditiveBlending, BackSide, Group } from "three";

function Moon() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.06;
  });
  return (
    <group ref={group}>
      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Moon */}
        <mesh position={[1.4, -0.2, -0.2]}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <meshStandardMaterial color="#e9edf7" roughness={0.95} metalness={0.02} emissive="#ffffff" emissiveIntensity={0.06} />
        </mesh>
        {/* Soft halo */}
        <mesh position={[1.4, -0.2, -0.25]}>
          <sphereGeometry args={[1.7, 32, 32]} />
          <meshBasicMaterial color="#9ec3ff" transparent opacity={0.12} blending={AdditiveBlending} depthWrite={false} side={BackSide} />
        </mesh>
      </Float>
      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[-4, 2, 4]} intensity={0.9} color={"#dfe7ff"} />
      <directionalLight position={[2, -1, -2]} intensity={0.25} color={"#9ab8ff"} />
    </group>
  );
}

export default function HeroMoon() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block motion-reduce:hidden">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <Moon />
      </Canvas>
    </div>
  );
}
