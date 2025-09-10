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
          const a = d[i + 3];

          // Luminance and saturation based heuristic helps remove JPEG white halos
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b; // 0..255
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const sat = max === 0 ? 0 : (max - min) / max; // 0..1

          const nearWhite = r >= threshold && g >= threshold && b >= threshold;
          const veryLightLowSat = lum > 240 && sat < 0.12;

          if (nearWhite || veryLightLowSat) {
            d[i + 3] = 0; // fully transparent
            continue;
          }

          // Optional feathering for pixels close to threshold to soften edges
          const avg = (r + g + b) / 3;
          if (avg > threshold - 10 && avg < threshold) {
            const factor = Math.max(0, Math.min(1, (threshold - avg) / 10));
            d[i + 3] = Math.round(a * factor);
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

  return <img src={out ?? src} alt={alt} className={className} width={32} height={32} />;
}
