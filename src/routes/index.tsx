import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900">
      {/* Soft accent glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <main className="relative px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-indigo-300/80 uppercase">
          Welcome
        </p>
        <h1 className="bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
          Hello, World!
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-slate-400">
          Your brand-new app is up and running. This is where something great begins.
        </p>
      </main>
    </div>
  );
}
