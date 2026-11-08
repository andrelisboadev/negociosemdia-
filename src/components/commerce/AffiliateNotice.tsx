import Link from "next/link";
import { cn } from "@/lib/utils";

interface AffiliateNoticeProps {
  /** "box" = aviso destacado (artigos/páginas); "inline" = linha curta (rodapé) */
  variant?: "box" | "inline";
  className?: string;
}

export function AffiliateNotice({ variant = "box", className }: AffiliateNoticeProps) {
  if (variant === "inline") {
    return (
      <p className={cn("text-sm text-navy-200", className)}>
        Este site contém links de afiliado: se você comprar por eles, podemos receber uma comissão, sem custo extra
        para você.{" "}
        <Link href="/aviso-de-afiliados" className="font-semibold text-white underline underline-offset-4">
          Saiba mais
        </Link>
        .
      </p>
    );
  }

  return (
    <aside
      role="note"
      className={cn(
        "rounded-xl border border-sun-300 bg-sun-50 p-4 text-sm leading-relaxed text-navy-900",
        className,
      )}
    >
      <strong className="font-semibold">Aviso de afiliados:</strong> esta página contém links de afiliado. Se você
      comprar ou contratar por eles, podemos receber uma comissão, sem custo extra para você. Só indicamos o que faz
      sentido para pequenos negócios.{" "}
      <Link href="/aviso-de-afiliados" className="font-semibold underline underline-offset-4">
        Entenda como funciona
      </Link>
      .
    </aside>
  );
}
