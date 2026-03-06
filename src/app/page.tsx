import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-full bg-neutral-100">
      {/* Container */}
      <section className="grid h-full w-full md:grid-cols-2 bg-white">
        {/* LEFT: Cover */}
        <div className="relative h-full min-h-[560px] overflow-hidden">
          <div className="absolute inset-0 hero-zoom">
            <Image
              src="/cover.jpeg"
              alt="Cover"
              fill
              priority
              className="object-cover object-[0%_25%]"
            />
          </div>

          {/* soft overlay like the template */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Cover text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

            <h1 className="mt-3 max-w-md text-5xl leading-[1.02] tracking-tight">
              Selected writing, translations, and published work
            </h1>

            <p className="mt-3 max-w-md text-sm text-white/85">
              Cultural commentary, literature, film, and contemporary art.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/publications"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                View Publications
              </Link>
              <Link
                href="/writing"
                className="rounded-lg border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Read Writing
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT: Reading pane */}
        <article className="h-full overflow-y-auto px-12 py-14">
          <div className="mx-auto max-w-[58ch]">
            <div className="text-right text-sm text-neutral-500">
              <span className="tracking-[0.2em] uppercase">Writer · Translator</span>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Selected Work
              </p>

              <h2 className="mt-4 text-5xl leading-[1.02] tracking-tight text-neutral-900">
                Writing, translation, and published work gathered into one continuous archive.
              </h2>

              <p className="mt-10 text-[1.35rem] leading-8 text-neutral-700">
                <span className="float-left mr-4 mt-1 text-[5.5rem] leading-[0.85] font-medium text-neutral-900">
                  T
                </span>
                his website brings together published articles, essays, translations,
                and selected work in a form that feels less like a directory and more
                like a body of writing. The aim is clarity, rhythm, and continuity.
              </p>

              <p className="mt-10 text-[1.15rem] leading-8 text-neutral-700">
                Rather than separating everything into boxes and categories too early,
                the archive is meant to read like an unfolding page: publications,
                research, and editorial work arranged with the same care as the writing itself.
              </p>

              <blockquote className="mt-12 border-l border-neutral-300 pl-6 text-[1.7rem] italic leading-[1.7] text-neutral-800">
                A writer’s portfolio should feel like reading, not filing.
              </blockquote>

              <h3 className="mt-16 text-2xl leading-tight text-neutral-900">
                Publications
              </h3>

              <p className="mt-5 text-[1.1rem] leading-8 text-neutral-700">
                Published work will live in the{" "}
                <Link className="underline underline-offset-4" href="/publications">
                  Publications
                </Link>{" "}
                section, where articles, essays, interviews, and linked pieces can be
                browsed in one place.
              </p>

              <h3 className="mt-16 text-2xl leading-tight text-neutral-900">
                Writing
              </h3>

              <p className="mt-5 text-[1.1rem] leading-8 text-neutral-700">
                Original writing hosted directly on the site will appear under{" "}
                <Link className="underline underline-offset-4" href="/writing">
                  Writing
                </Link>
                , allowing longer-form work to sit beside published pieces without
                losing the feeling of a unified archive.
              </p>

              <h3 className="mt-16 text-2xl leading-tight text-neutral-900">
                Translation
              </h3>

              <p className="mt-5 text-[1.1rem] leading-8 text-neutral-700">
                Translation work can be presented alongside published writing, whether
                as essays, excerpts, linked publications, or selected projects. The
                structure is meant to remain flexible while still feeling coherent.
              </p>

              <div className="mt-14 h-px w-full bg-neutral-200" />

              <p className="mt-8 text-base leading-8 text-neutral-500">
                Over time, this page can evolve into a living editorial archive: less a
                homepage in the conventional sense, and more an opening spread.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}