import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black">

          <h1 className="max-w-xs text-3xl font-semibold leading-8 tracking-tight text-black text-center dark:text-zinc-50">
            Hello Pantheon!
          </h1>
          <h2 className="max-w-xs text-2xl font-semibold leading-6 tracking-tight text-black text-center dark:text-zinc-50">
            This is a Next.js app deployed on Pantheon.
          </h2>
          <h3 className="max-w-xs text-8xl font-semibold leading-26 tracking-tight text-black text-center dark:text-zinc-50">
            🤘🤘🤘
          </h3>
      </main>
    </div>
  );
}
