import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { canUseWebGL } from "@/lib/webgl-utils";
import { CanvasErrorBoundary } from "@/components/CanvasErrorBoundary";

function StarfieldContent() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
      <Stars
        radius={80}
        depth={40}
        count={1200}
        factor={4}
        saturation={0}
        fade
        speed={0.6}
      />
    </Canvas>
  );
}

function StarfieldFallback() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black/60" />
  );
}

export default function Starfield() {
  const hasWebGL = canUseWebGL();

  if (!hasWebGL) {
    return <StarfieldFallback />;
  }

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <CanvasErrorBoundary fallback={<StarfieldFallback />}>
        <StarfieldContent />
      </CanvasErrorBoundary>
    </div>
  );
}
