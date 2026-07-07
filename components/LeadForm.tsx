"use client";

import { useState } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("https://buildwithmatyas.app.n8n.cloud/webhook/97142f29-b2b4-4cfd-aba1-1c65fc9ca874", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    alert("Sent!");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
      <input
        className="border p-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        className="border p-2"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="bg-black text-white p-2">
        Send
      </button>
    </form>
  );
}