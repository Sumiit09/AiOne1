import { useEffect, useState } from "react";

export default function CleanLogo({
  src,
  alt,
  className,
  threshold = 245,
}: {
  src: string;
  alt: string;
  className?: string;
  threshold?: number; // 0-255, remove pixels lighter than this
}) {
  const [out, setOut] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];
          // if pixel is near white, make it transparent
          if (r >= threshold && g >= threshold && b >= threshold) {
            d[i + 3] = 0;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        const url = canvas.toDataURL("image/png");
        if (!cancelled) setOut(url);
      } catch {
        if (!cancelled) setOut(src); // fallback
      }
    };
    img.onerror = () => setOut(src);
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  return (
    <img src={out ?? src} alt={alt} className={className} width={32} height={32} />
  );
}
