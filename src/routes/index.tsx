import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-neutral-950 to-stone-900">
      {/* Soft accent glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-rose-500/15 blur-3xl" />

      <main className="relative px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-red-300/80 uppercase">
          Welcome
        </p>
        <h1 className="bg-gradient-to-r from-red-200 via-white to-rose-300 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
          Hello, World!
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-stone-400">
          Your brand-new app is up and running. This is where something great begins.
        </p>
      </main>
    </div>
  );
}
