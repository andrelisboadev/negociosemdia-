import type { ReactNode, ComponentPropsWithoutRef } from "react";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { slugify } from "@/lib/utils";
import { CtaBox } from "@/components/cta/CtaBox";
import { AffiliateLink } from "@/components/commerce/AffiliateLink";
import { AffiliateNotice } from "@/components/commerce/AffiliateNotice";

function textFrom(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textFrom).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textFrom((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function H2({ children }: ComponentPropsWithoutRef<"h2">) {
  return <h2 id={slugify(textFrom(children))}>{children}</h2>;
}

function H3({ children }: ComponentPropsWithoutRef<"h3">) {
  return <h3 id={slugify(textFrom(children))}>{children}</h3>;
}

function A({ href = "#", children, ...rest }: ComponentPropsWithoutRef<"a">) {
  const external = /^https?:\/\//.test(href);
  if (external) {
    // Links externos comuns (não afiliados): abrem em nova aba sem passar autoridade desnecessária
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

function Table({ children }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-navy-100">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm [&_td]:border-t [&_td]:border-navy-100 [&_td]:px-4 [&_td]:py-3 [&_th]:bg-navy-50 [&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-navy-900">
        {children}
      </table>
    </div>
  );
}

function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 text-slate-800">
      {title && <p className="mb-1 font-display font-bold text-brand-900">{title}</p>}
      <div className="space-y-2 text-[0.97rem] leading-relaxed">{children}</div>
    </div>
  );
}

export const mdxComponents: MDXRemoteProps["components"] = {
  h2: H2,
  h3: H3,
  a: A,
  table: Table,
  Callout,
  CtaBox,
  AffiliateLink,
  AffiliateNotice,
};
