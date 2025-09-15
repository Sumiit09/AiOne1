import { Plus, Search, Zap, User, Mic, Send } from "lucide-react";
import CleanLogo from "@/components/site/CleanLogo";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[#0F1115] text-slate-200">
      {/* Left icon rail */}
      <aside className="fixed left-0 top-0 z-20 h-screen w-14 border-r border-white/5 bg-[#0F1115]/80 backdrop-blur">
        <div className="flex h-full flex-col items-center gap-2 py-4">
          <div className="mb-4">
            <CleanLogo src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F48dc2d1e1a294e36ac04e854e5342cfb?format=webp&width=128" alt="AiOne" className="h-8 w-8 object-contain" threshold={252} />
          </div>
          <nav className="mt-2 flex flex-col gap-3">
            {[Plus, Search, Zap, User].map((Icon, i) => (
              <button key={i} className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/10 hover:text-white transition">
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </nav>
          <div className="mt-auto pb-4 text-[10px] text-white/40">v1.0</div>
        </div>
      </aside>


      {/* Bottom chat input */}
      <div className="fixed inset-x-0 bottom-8 z-30 ml-14">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2 p-2">
              <button className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/10"><Plus className="h-4 w-4" /></button>
              <input
                placeholder="Ask me anything..."
                className="flex-1 rounded-xl bg-transparent px-2 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <button className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/10"><Mic className="h-4 w-4" /></button>
                <button className="grid size-8 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"><Send className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
