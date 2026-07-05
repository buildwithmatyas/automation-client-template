import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-6">
      
      <main className="max-w-2xl w-full text-center flex flex-col gap-6">

        <h1 className="text-4xl font-bold text-black dark:text-white">
          AI Automation Systems for Small Businesses
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          I help businesses capture leads, automate workflows, and connect AI tools to their daily operations.
        </p>

        <p className="text-zinc-500">
          Fill the form below to get started
        </p>

        <LeadForm />

      </main>
    </div>
  );
}