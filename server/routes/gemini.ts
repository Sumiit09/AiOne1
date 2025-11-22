import type { RequestHandler } from "express";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequestBody {
  model: string;
  messages: ChatMessage[];
}

interface GeminiPart {
  text: string;
}

interface GeminiContent {
  role: "user" | "model";
  parts: GeminiPart[];
}

function toGeminiContents(messages: ChatMessage[]): {
  contents: GeminiContent[];
  systemInstruction?: { parts: GeminiPart[] };
} {
  const contents: GeminiContent[] = [];
  const systemParts: GeminiPart[] = [];

  for (const m of messages) {
    if (m.role === "system") {
      systemParts.push({ text: m.content });
      continue;
    }
    contents.push({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    });
  }

  const result: { contents: GeminiContent[]; systemInstruction?: { parts: GeminiPart[] } } = {
    contents,
  };
  if (systemParts.length > 0) {
    result.systemInstruction = { parts: systemParts };
  }
  return result;
}

export const handleGeminiChat: RequestHandler = async (req, res) => {
  try {
    const auth = req.header("authorization") || req.header("Authorization");
    let apiKey = auth && auth.startsWith("Bearer ") ? auth.slice("Bearer ".length).trim() : "";
    if (!apiKey) {
      apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || "";
    }
    if (!apiKey) {
      return res.status(401).json({ error: "Missing API key. Provide Authorization: Bearer <GEMINI_API_KEY> or set GEMINI_API_KEY in server env." });
    }

    const { model, messages } = req.body as ChatRequestBody;
    if (!model || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid body. Provide { model, messages[] }" });
    }

    const { contents, systemInstruction } = toGeminiContents(messages);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const genBody: Record<string, unknown> = {
      contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    };
    if (systemInstruction) genBody.systemInstruction = systemInstruction;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(genBody),
    });

    let data: any;
    try {
      data = await resp.json();
    } catch {
      const text = await resp.text();
      return res.status(502).json({ error: "Gemini API error", details: text });
    }

    if (!resp.ok) {
      return res.status(502).json({ error: "Gemini API error", details: data });
    }
    const text = data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).join("") ?? "";

    return res.status(200).json({ reply: text, raw: data });
  } catch (e: any) {
    return res.status(500).json({ error: "Internal server error", message: e?.message || String(e) });
  }
};
