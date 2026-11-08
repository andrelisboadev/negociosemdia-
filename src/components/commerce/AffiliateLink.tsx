import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AffiliateLinkProps {
  href: string;
  children: ReactNode;
  /** "button" = botão de destaque; "text" = link dentro do texto */
  variant?: "button" | "text";
  className?: string;
}

/**
 * Único ponto de saída para links de afiliado.
 * Sempre aplica rel="sponsored nofollow noopener" e target="_blank".
 */
export function AffiliateLink({ href, children, variant = "text", className }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={cn(
        variant === "button"
          ? "btn-primary w-full text-center"
          : "font-semibold text-navy-600 underline decoration-2 underline-offset-4 hover:text-brand-700",
        className,
      )}
    >
      {children}
      {variant === "text" && <span className="ml-1 text-xs text-slate-500">(link de afiliado)</span>}
    </a>
  );
}
