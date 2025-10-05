import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Msg {
  role: "user" | "assistant" | "system";
  content: string;
}

const MODELS = [
  { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  { id: "gemini-1.5-flash-8b", label: "Gemini 1.5 Flash 8B" },
  { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
];

const STORAGE_KEY = "gemini_api_key";
const MODEL_KEY = "gemini_model";

export default function Chat() {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState(MODELS[0].id);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || "";
    if (saved) setApiKey(saved);
    const savedModel = localStorage.getItem(MODEL_KEY) || MODELS[0].id;
    setModel(savedModel);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  const canChat = useMemo(() => apiKey.trim().length > 0, [apiKey]);

  function saveKey() {
    localStorage.setItem(STORAGE_KEY, apiKey.trim());
  }

  async function send() {
    const text = input.trim();
    if (!text || !canChat) return;
    setInput("");
    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setSending(true);
    try {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      const key = apiKey.trim();
      if (key) headers.Authorization = `Bearer ${key}`;
      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers,
        body: JSON.stringify({ model, messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }
      const reply = (data?.reply as string) || "";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${e?.message || String(e)}` },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="container mx-auto max-w-3xl py-8 space-y-6">
      <div className="rounded-lg border p-4 space-y-3">
        <h2 className="text-lg font-semibold">Gemini settings</h2>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] items-center">
          <Input
            type="password"
            placeholder="Paste your Google Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={saveKey} variant="secondary">Save key</Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] items-center">
          <Select value={model} onValueChange={(v) => { setModel(v); localStorage.setItem(MODEL_KEY, v); }}>
            <SelectTrigger>
              <SelectValue placeholder="Select Gemini model" />
            </SelectTrigger>
            <SelectContent>
              {MODELS.map((m) => (
                <SelectItem key={m.id} value={m.id}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="text-sm text-muted-foreground">{canChat ? "Ready" : "Add API key to enable chat"}</div>
        </div>
      </div>

      <div className="rounded-lg border p-4 h-[50vh] overflow-auto" ref={scrollRef}>
        <div className="space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <div className={`inline-block rounded-md px-3 py-2 ${m.role === "user" ? "bg-blue-600 text-white" : "bg-muted"}`}>
                <pre className="whitespace-pre-wrap text-sm font-sans">{m.content}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border p-3 grid gap-3 sm:grid-cols-[1fr_auto] items-start">
        <Textarea
          placeholder={canChat ? "Type your message..." : "Enter API key above to chat"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          disabled={!canChat || sending}
        />
        <Button onClick={send} disabled={!canChat || sending}>Send</Button>
      </div>
    </section>
  );
}
