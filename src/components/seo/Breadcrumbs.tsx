import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  name: string;
  href: string;
}

/** Trilha de navegação visível + dados estruturados BreadcrumbList. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Início", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.href),
          })),
        }}
      />
      <nav aria-label="Você está aqui" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-medium text-navy-800">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="hover:text-navy-700 hover:underline">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
