import React from "react";
import { supabase } from "@/lib/supabase";

export default function DevTest() {
  async function handleInsert() {
    try {
      const { error } = await supabase
        .from("queries")
        .insert([{ user_id: "test_user", prompt: "Hello", response: "World" }]);

      if (error) throw error;
      alert("✅ Data inserted successfully");
    } catch (err) {
      console.error("Supabase insert error:", err);
      alert("❌ Failed to insert. Check console.");
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
