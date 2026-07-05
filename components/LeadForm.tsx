"use client";

export default function LeadForm() {
  return (
    <form className="flex flex-col gap-3 mt-6">
      <input className="border p-2" placeholder="Name" />
      <input className="border p-2" placeholder="Email" />
      <textarea className="border p-2" placeholder="Message" />
      <button className="bg-black text-white p-2">
        Send
      </button>
    </form>
  );
}