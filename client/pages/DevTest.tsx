import React from "react";
import { supabase } from "@/lib/supabase";

export default function DevTest() {
  async function handleInsert() {
    const { data, error } = await supabase
      .from("prompts")
      .insert([{ text: "Builder test", created_at: new Date() }]);

    if (error) {
      alert("Insert failed: " + JSON.stringify(error, null, 2));
      console.error("Insert failed:", error);
    } else {
      alert("Insert success!");
      console.log("Inserted data:", data);
    }
  }

  return (
    <section className="container mx-auto min-h-[60vh] grid place-items-center py-16">
      <button
        onClick={handleInsert}
        className="rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Test DB Insert
      </button>
    </section>
  );
}
