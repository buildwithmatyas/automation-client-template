"use client";

import { useState } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("https://buildwithmatyas.app.n8n.cloud/webhook/a53a4430-1f6e-4083-b423-31aab2dfe391", {
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