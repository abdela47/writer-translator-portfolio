import Link from "next/link";
import { getPublications } from "@/lib/getPublications";

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <main className="h-full overflow-y-auto bg-neutral-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl leading-[1.02] tracking-tight text-neutral-900">
              Publications
            </h1>
          </div>

          <Link
            href="/"
            className="text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
          >
            Back home
          </Link>
        </div>

        <div className="mt-16">
          {publications.length === 0 ? (
            <div className="text-neutral-700">
              No publications yet. Add markdown files in{" "}
              <code className="rounded bg-neutral-200 px-2 py-1 text-sm">
                src/content/publications
              </code>
              .
            </div>
          ) : (
            <div className="space-y-12">
              {publications.map((p, index) => (
                <div key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <h2 className="text-[2rem] leading-[1.15] tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600">
                      {p.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
                      <span>{p.publication}</span>
                      <span className="text-neutral-300">•</span>
                      <span>{p.date}</span>
                    </div>

                    {p.excerpt ? (
                      <p className="mt-4 max-w-[62ch] text-[1.08rem] leading-8 text-neutral-700">
                        {p.excerpt}
                      </p>
                    ) : null}

                    {p.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs uppercase tracking-[0.18em] text-neutral-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </a>

                  {index !== publications.length - 1 ? (
                    <div className="mt-10 h-px w-full bg-neutral-200/70" />
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}