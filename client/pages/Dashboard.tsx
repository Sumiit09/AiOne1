import { Plus, Search, Zap, User, Mic, Send } from "lucide-react";
import CleanLogo from "@/components/site/CleanLogo";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  const [model, setModel] = useState("Assistant");
  const models = ["Assistant","GPT-4o","GPT-4","GPT-3.5","Auto","Claude 3.5","Claude 3.7","DeepSeek","Perplexity"];
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
      <div className="ml-14">
        <div className="mx-auto max-w-3xl px-4 pt-10 text-center">
          <div className="inline-flex items-center gap-3">
            <CleanLogo src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F48dc2d1e1a294e36ac04e854e5342cfb?format=webp&width=128" alt="AiOne" className="h-7 w-7 object-contain" threshold={252} />
            <div className="text-3xl md:text-4xl font-semibold tracking-tight">
              <span>Ai</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition" aria-label="Select model">
                    O
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[220px] bg-[#0F1115] text-white border border-white/10">
                  <DropdownMenuLabel>Select model</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
                    {models.map((m) => (
                      <DropdownMenuRadioItem key={m} value={m}>
                        {m}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <span>ne</span>
            </div>
            <span className="text-sm text-white/50">{model}</span>
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
