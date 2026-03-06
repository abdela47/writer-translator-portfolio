import Link from "next/link";

const nav = [
  { href: "/publications", label: "Publications" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Shahd Murshed
        </Link>

        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* mobile quick link */}
        <Link
          href="/clips"
          className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50 md:hidden"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}