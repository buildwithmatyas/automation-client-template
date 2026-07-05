import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-6">
      
      <main className="max-w-3xl w-full text-center flex flex-col gap-8">

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
          AI Automation Systems that bring you more leads & save hours of work
        </h1>

        {/* SUBHEAD */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          I help small businesses automate lead capture, follow-ups, and workflows using AI + modern web systems.
        </p>

        {/* VALUE POINTS */}
        <div className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-300">
          <p>⚡ Capture leads automatically from your website</p>
          <p>🤖 AI-powered follow-up responses</p>
          <p>📊 Organized CRM in Google Sheets / Notion</p>
        </div>

        {/* CTA TEXT */}
        <p className="text-zinc-500">
          Fill out the form below and I’ll show you how this could work for your business
        </p>

        {/* FORM */}
        <div className="flex justify-center">
          <LeadForm />
        </div>

      </main>
    </div>
  );
}