import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Publication = {
  slug: string;
  title: string;
  publication: string;
  date: string; // YYYY-MM-DD
  url: string;
  excerpt?: string;
  tags?: string[];
};

const publicationsDir = path.join(
  process.cwd(),
  "src",
  "content",
  "publications"
);

export function getPublications(): Publication[] {
  if (!fs.existsSync(publicationsDir)) return [];

  const files = fs
    .readdirSync(publicationsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const items = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, "");
    const raw = fs.readFileSync(path.join(publicationsDir, filename), "utf8");
    const { data } = matter(raw);

    const title = String(data.title ?? "");
    const publication = String(data.publication ?? "");
    const date = String(data.date ?? "");
    const url = String(data.url ?? "");
    const excerpt = data.excerpt ? String(data.excerpt) : undefined;
    const tags = Array.isArray(data.tags) ? data.tags.map(String) : undefined;

    return { slug, title, publication, date, url, excerpt, tags };
  });

  // newest first
  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return items;
}