export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] shadow-md"></span>
      <span className="text-lg font-extrabold tracking-tight">Aione</span>
    </div>
  );
}
