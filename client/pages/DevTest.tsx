import React from "react";

export default function DevTest() {
  async function handleInsert() {
    try {
      const url = import.meta.env.VITE_SUPABASE_URL;
      const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!url || !anon) {
        console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env vars");
        alert("Supabase env variables are missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
        return;
      }

      const res = await fetch(`${url}/rest/v1/queries`, {
        method: "POST",
        headers: {
          "apikey": anon,
          "Authorization": `Bearer ${anon}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation",
        },
        body: JSON.stringify([
          {
            user_id: "test_user",
            prompt: "Hello",
            response: "World",
          },
        ]),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      alert("✅ Data inserted successfully");
    } catch (err) {
      console.error("Supabase insert error:", err);
    }
  }

  return (
    <section className="container mx-auto py-16">
      <button
        onClick={handleInsert}
        className="rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Test DB Insert
      </button>
    </section>
  );
}
