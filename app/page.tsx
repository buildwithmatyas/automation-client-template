import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
          className="dark:invert"
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-black dark:text-white"
            >
              Learning
            </a>{" "}
            center.
          </p>

        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 text-white transition-colors hover:bg-zinc-800 md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
              className="dark:invert"
            />
            Deploy Now
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-black dark:border-white px-5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>

        </div>

      </main>
    </div>
  );
}