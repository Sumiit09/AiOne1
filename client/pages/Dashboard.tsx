import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bell, Search, Rocket } from "lucide-react";
import ThemeToggle from "@/components/site/ThemeToggle";

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-0px)] bg-white text-slate-900">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <div className="text-lg font-bold">Dashboard</div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:flex items-center rounded-full border border-slate-200 bg-white px-3 h-9 text-slate-700">
              <Search className="h-4 w-4" />
              <input placeholder="Ask Aione anything" className="bg-transparent pl-2 text-sm outline-none placeholder:text-slate-400"/>
            </div>
            <ThemeToggle />
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold grid place-items-center">3</span>
            </button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://i.pravatar.cc/100?img=5" />
              <AvatarFallback>AO</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 bg-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Welcome back, Alex</CardTitle>
            </CardHeader>
            <CardContent>
              Your AI workspace is ready. Start something new or continue where you left off.
              <div className="mt-4"><Button className="rounded-full"><Rocket className="h-4 w-4 mr-2"/>Quick Start</Button></div>
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader><CardTitle>Daily Usage</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-700"><span>Tokens</span><span>12,500 / 50,000</span></div>
                <Progress value={25} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-600">
                <div className="rounded-md border border-slate-200 bg-white p-2"><div className="text-lg font-bold text-slate-900">38m</div><div>Time saved</div></div>
                <div className="rounded-md border border-slate-200 bg-white p-2"><div className="text-lg font-bold text-slate-900">54</div><div>Interactions</div></div>
                <div className="rounded-md border border-slate-200 bg-white p-2"><div className="text-lg font-bold text-slate-900">8</div><div>Workflows</div></div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
