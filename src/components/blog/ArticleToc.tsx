import type { Heading } from "@/lib/posts";

export function ArticleToc({ headings }: { headings: Heading[] }) {
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Índice do artigo" className="card p-5">
      <p className="font-display text-base font-bold text-navy-900">Neste artigo</p>
      <ol className="mt-3 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4" : undefined}>
            <a href={`#${h.id}`} className="text-slate-600 hover:text-navy-700 hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
