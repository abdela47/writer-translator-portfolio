
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Shahd Murshed</h1>

        <p className="text-lg text-neutral-700">
          Writer · Translator · Cultural Commentary
        </p>

        <p className="text-neutral-600">
          Selected writing, publications, and translations.
        </p>

        <div className="flex justify-center gap-6 pt-6">
          <a
            href="/clips"
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-neutral-800"
          >
            View Publications
          </a>

          <a
            href="/about"
            className="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white"
          >
            About
          </a>
        </div>
      </div>
    </main>
  );
}