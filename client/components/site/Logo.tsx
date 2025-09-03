export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F48dc2d1e1a294e36ac04e854e5342cfb?format=webp&width=128"
        alt="AiOne logo"
        className="h-8 w-8 object-contain mix-blend-multiply [image-rendering:crisp-edges]"
        width={32}
        height={32}
      />
      <span className="text-lg font-extrabold tracking-tight">AiOne</span>
    </div>
  );
}
