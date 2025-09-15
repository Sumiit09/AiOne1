import { Plus, Search, Zap, User, Mic, Send } from "lucide-react";
import CleanLogo from "@/components/site/CleanLogo";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  const [model, setModel] = useState("Assistant");
  const models: { label: string; icon?: string }[] = [
    { label: "Assistant" },
    { label: "GPT-4o", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F34fe699879554fb18441f2acd2a76d8f?format=webp&width=128" },
    { label: "GPT-4", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F34fe699879554fb18441f2acd2a76d8f?format=webp&width=128" },
    { label: "GPT-3.5", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F34fe699879554fb18441f2acd2a76d8f?format=webp&width=128" },
    { label: "Auto" },
    { label: "Claude 3.5", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F9e9ce3aa293948fd9cbcdca5ff2f75b5?format=webp&width=128" },
    { label: "Claude 3.7", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F9e9ce3aa293948fd9cbcdca5ff2f75b5?format=webp&width=128" },
    { label: "DeepSeek", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F155e3342d99c45f6b0708d4d86279a05?format=webp&width=128" },
    { label: "Perplexity", icon: "https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F5594ddc449394fc29f89497d6108ff38?format=webp&width=128" },
  ];
  return (
    <div className="relative min-h-screen bg-[#0F1115] text-slate-200">
      {/* Left icon rail */}
      <aside className="fixed left-0 top-0 z-20 h-screen w-14 border-r border-white/5 bg-[#0F1115]/80 backdrop-blur">
        <div className="flex h-full flex-col items-center py-4">
          <div className="mb-4">
            <CleanLogo src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F48dc2d1e1a294e36ac04e854e5342cfb?format=webp&width=128" alt="AiOne" className="h-8 w-8 object-contain" threshold={252} />
          </div>
          <div className="flex-1 flex items-center">
            <nav className="flex flex-col gap-3">
            {[Plus, Search, Zap, User].map((Icon, i) => (
              <button key={i} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/10 hover:text-white transition">
                <Icon className="h-4 w-4" />
              </button>
            ))}
            </nav>
          </div>
          <div className="mt-auto pb-4 text-[10px] text-white/40">v1.0</div>
        </div>
      </aside>


      {/* Title and model selector */}
      <div className="fixed left-14 top-6 z-30">
        <div className="pl-3">
          <div className="inline-flex items-center gap-0">
            <div className="text-[24px] leading-[24px] font-semibold tracking-tight">
              <span>Ai</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={`inline-flex items-center justify-center text-white/90 transition leading-[24px] ${models.find(m => m.label === model)?.icon ? 'mx-0.5' : ''}`} aria-label="Select model">
                    {models.find(m => m.label === model)?.icon ? (
                      <img src={models.find(m => m.label === model)!.icon!} alt="" className="h-3.5 w-3.5 object-contain" />
                    ) : (
                      <span className="font-semibold text-[24px] leading-[24px]">O</span>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" sideOffset={8} collisionPadding={24} className="min-w-[240px] bg-[#0F1115] text-white border border-white/10 rounded-xl shadow-xl">
                  <DropdownMenuLabel>Select model</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
                    {models.map((m) => (
                      <DropdownMenuRadioItem key={m.label} value={m.label}>
                        {m.icon ? (
                          <img src={m.icon} alt="" className="mr-2 inline-block h-4 w-4 object-contain" />
                        ) : (
                          <span className="mr-2 inline-block h-3.5 w-3.5 rounded-full bg-white/60" />
                        )}
                        {m.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <span>ne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom chat input */}
      <div className="fixed inset-x-0 bottom-16 z-30 ml-14">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2 p-2">
              <button className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/10"><Plus className="h-4 w-4" /></button>
              <input
                placeholder="Ask me anything..."
                className="flex-1 rounded-2xl bg-transparent px-3 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <button className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/10"><Mic className="h-4 w-4" /></button>
                <button className="grid size-8 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"><Send className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
