import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Starfield() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
        <Stars
          radius={80}
          depth={40}
          count={3500}
          factor={4}
          saturation={0}
          fade
          speed={0.6}
        />
      </Canvas>
    </div>
  );
}
