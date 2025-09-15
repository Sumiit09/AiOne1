import { useEffect, useRef, useState } from "react";
import { Home, Compass, Settings as SettingsIcon, ChevronDown, MessageSquareText, Zap, Bot } from "lucide-react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState("ChatGPT");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const models = ["ChatGPT", "Gemini", "Grok", "DeepSeek", "Perplexity"];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif' }}>
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-end">
          <div className="rounded-full bg-white shadow-sm px-4 py-1 text-sm text-slate-600">
            Welcome, user!
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 grid grid-cols-12 gap-6 py-6">
        {/* Left Sidebar */}
        <aside className="col-span-3 md:col-span-2 xl:col-span-2">
          <div className="sticky top-16">
            {/* Logo with model selector on the 'O' */}
            <div ref={dropdownRef} className="relative mb-6 select-none">
              <div className="flex items-center gap-1 text-2xl font-extrabold text-[#1E2A78]">
                <span>Ai</span>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="group relative isolate inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  aria-haspopup="listbox"
                  aria-expanded={open}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1E2A78] to-[#7B4DFF] opacity-10 group-hover:opacity-20 transition" />
                  <span className="relative text-[#1E2A78]">O</span>
                  <ChevronDown className={`absolute -right-5 h-4 w-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                <span>ne</span>
              </div>
              {open && (
                <div className="absolute left-0 mt-3 w-48 rounded-xl border border-slate-200 bg-white shadow-xl p-1 animate-in fade-in zoom-in-95" role="listbox">
                  {models.map((m) => (
                    <button
                      key={m}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-slate-100 ${model===m?'bg-slate-100 font-medium':''}`}
                      onClick={() => { setModel(m); setOpen(false); }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
              <div className="mt-2 text-xs text-slate-500">Model: {model}</div>
            </div>

            {/* Nav icons */}
            <nav className="flex flex-col gap-2">
              {[{icon:Home,label:'Home'},{icon:Compass,label:'Explore'},{icon:SettingsIcon,label:'Settings'}].map(({icon:Icon,label})=> (
                <button key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#1E2A78]/10 to-[#7B4DFF]/10 text-[#1E2A78]"><Icon className="h-4 w-4"/></span>
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="col-span-9 md:col-span-10 xl:col-span-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_6px_30px_rgba(30,42,120,0.06)]">
            <div className="text-slate-500 text-sm">Workspace</div>
            <div className="mt-2 h-[60vh] rounded-xl bg-slate-50/80 border border-slate-200" />
          </div>
        </main>
      </div>

      {/* Bottom Toolbar */}
      <div className="fixed inset-x-0 bottom-4 z-30">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 shadow-[0_10px_40px_rgba(123,77,255,0.15)] backdrop-blur">
            {[{icon:MessageSquareText,label:'Aione Prompt'},{icon:Zap,label:'Auto AI'},{icon:Bot,label:'Aione Agents'}].map(({icon:Icon,label})=> (
              <button key={label} className="group flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition relative">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1E2A78]/0 via-[#7B4DFF]/0 to-[#1E2A78]/0 opacity-0 group-hover:opacity-20 group-hover:from-[#1E2A78]/10 group-hover:to-[#7B4DFF]/10 transition" />
                <span className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#1E2A78] to-[#7B4DFF] text-white shadow-md group-hover:shadow-lg transition-transform group-hover:-translate-y-0.5"><Icon className="h-4 w-4"/></span>
                <span className="relative font-medium text-slate-700">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
