import { SidebarProvider, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarInset, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Bot, Workflow, CreditCard, Settings, HelpCircle, Bell, Search, PlusCircle, MessageSquarePlus, Rocket, Sparkles, ChevronRight, LogOut, Gauge, Cpu, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import ThemeToggle from "@/components/site/ThemeToggle";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [model, setModel] = useState("GPT-4o");
  const favorites = ["GPT-4o", "Claude", "Gemini", "Mistral"];

  const quickCards = useMemo(() => ([
    { icon: MessageSquarePlus, title: "Start New Chat", gradient: "from-cyan-400/40 to-blue-500/40" },
    { icon: Workflow, title: "Create Workflow", gradient: "from-violet-400/40 to-fuchsia-500/40" },
    { icon: Bot, title: "Explore AI Models", gradient: "from-indigo-400/40 to-purple-500/40" },
    { icon: Activity, title: "Recent Activity", gradient: "from-emerald-400/40 to-teal-500/40" },
  ]), []);

  return (
    <SidebarProvider>
      <div className="min-h-[calc(100vh-80px)]">
        <Sidebar collapsible="icon" variant="floating">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1">
              <Sparkles className="h-4 w-4 text-[hsl(var(--brand-end))]" />
              <span className="font-semibold">AiOne</span>
            </div>
            <SidebarInput placeholder="Ask Aione anything" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link to="#">
                        <Home />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Cpu />
                      <span>AI Models</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Workflow />
                      <span>Workflows</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <CreditCard />
                      <span>Usage & Billing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <HelpCircle />
                      <span>Support</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarSeparator />
          <SidebarFooter>
            <div className="px-2">
              <Button variant="outline" className="w-full justify-start"><LogOut className="h-4 w-4 mr-2"/>Log out</Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3 md:px-6 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="-ml-1" />
            <div className="relative ml-auto flex items-center gap-2">
              <div className="hidden md:flex items-center rounded-full border border-white/10 bg-white/5 px-3 h-9">
                <Search className="h-4 w-4 opacity-70" />
                <input placeholder="Ask Aione anything" className="bg-transparent pl-2 text-sm outline-none placeholder:text-white/60"/>
              </div>
              <ThemeToggle />
              <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-[hsl(var(--brand-end))] text-[10px] font-bold grid place-items-center">3</span>
              </button>
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                <AvatarFallback>AO</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-6">
            <div className="lg:col-span-8 space-y-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Welcome back, Alex</span>
                    <Button className="rounded-full"><PlusCircle className="h-4 w-4 mr-2"/>New</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-white/80">Your AI workspace is ready. Continue where you left off or start something new.</div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickCards.map((c) => (
                  <button key={c.title} className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-left hover:translate-y-[-2px] transition-all shadow-sm`}> 
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${c.gradient} opacity-30`} />
                    <div className="relative z-10 flex items-start gap-3">
                      <c.icon className="h-5 w-5 mt-0.5"/>
                      <div className="font-medium leading-tight">{c.title}</div>
                    </div>
                    <ChevronRight className="relative z-10 mt-6 h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform"/>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle>Active AI Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center justify-between"><span className="flex items-center gap-2"><Bot className="h-4 w-4"/> GPT-4o · Product brief</span><span className="text-white/60">3m ago</span></li>
                      <li className="flex items-center justify-between"><span className="flex items-center gap-2"><Bot className="h-4 w-4"/> Claude · Contract review</span><span className="text-white/60">10m ago</span></li>
                      <li className="flex items-center justify-between"><span className="flex items-center gap-2"><Bot className="h-4 w-4"/> Gemini · Code refactor</span><span className="text-white/60">25m ago</span></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle>Workflow Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm"><span>Marketing pipeline</span><span>72%</span></div>
                        <Progress value={72} />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm"><span>Bug triage</span><span>38%</span></div>
                        <Progress value={38} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-16 h-max">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                    <AvatarFallback>AO</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">Alex Morgan</div>
                    <div className="text-xs text-white/60">Pro plan</div>
                  </div>
                  <Button className="rounded-full">Upgrade</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader><CardTitle>Daily Usage</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm"><span>Tokens</span><span>12,500 / 50,000</span></div>
                    <Progress value={25} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs text-white/70">
                    <div className="rounded-md border border-white/10 bg-white/5 p-2"><div className="text-lg font-bold">38m</div><div>Time saved</div></div>
                    <div className="rounded-md border border-white/10 bg-white/5 p-2"><div className="text-lg font-bold">54</div><div>Interactions</div></div>
                    <div className="rounded-md border border-white/10 bg-white/5 p-2"><div className="text-lg font-bold">8</div><div>Workflows</div></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader><CardTitle>Favorite Models</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {favorites.map((m) => (
                    <button key={m} onClick={() => setModel(m)} className={`rounded-full border px-3 py-1 text-sm ${model===m?"bg-primary text-primary-foreground border-transparent":"bg-white/5 border-white/10"}`}>{m}</button>
                  ))}
                </CardContent>
              </Card>

              <Button variant="outline" className="w-full rounded-full py-6 text-base"><Rocket className="h-4 w-4 mr-2"/>Quick Start</Button>
            </aside>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
