export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F11ac23e87147423b8cbebe0ae1950090?format=webp&width=800"
        alt="Aione logo"
        className="h-8 w-8 rounded-lg object-contain shadow-md"
        width={32}
        height={32}
      />
      <span className="text-lg font-extrabold tracking-tight">Aione</span>
    </div>
  );
}
