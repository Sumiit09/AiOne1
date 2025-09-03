export default function DotGrid() {
  return (
    <div
      className="absolute inset-0 -z-10 pointer-events-none opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(rgba(79,243,211,0.5) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1) 60%)",
      }}
    />
  );
}
