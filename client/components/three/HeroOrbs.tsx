import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function Orbs() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[-1.6, 0.2, 0]}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <MeshDistortMaterial
            color="#5b8cff"
            roughness={0.2}
            metalness={0.1}
            transparent
            opacity={0.9}
            distort={0.35}
            speed={2}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[1.8, -0.4, -0.5]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <MeshDistortMaterial
            color="#b27cff"
            roughness={0.25}
            metalness={0.1}
            transparent
            opacity={0.8}
            distort={0.45}
            speed={1.5}
          />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0.2, 0.9, -0.8]} rotation={[0.4, 0.2, 0]}>
          <torusKnotGeometry args={[0.5, 0.16, 120, 16]} />
          <MeshDistortMaterial
            color="#7aa7ff"
            roughness={0.3}
            metalness={0.15}
            transparent
            opacity={0.7}
            distort={0.2}
            speed={1.2}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroOrbs() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <Orbs />
      </Canvas>
    </div>
  );
}
