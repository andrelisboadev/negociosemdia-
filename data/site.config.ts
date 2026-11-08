/**
 * ARQUIVO ÚNICO DE CONFIGURAÇÃO DO SITE
 * Edite aqui: nome, WhatsApp, redes sociais, categorias e links de afiliado.
 * Itens marcados com "TODO" precisam ser trocados pelos seus dados reais.
 */

export type CategorySlug =
  | "financas"
  | "tributos"
  | "vendas"
  | "marketing"
  | "automacao";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  emoji: string;
}

export const siteConfig = {
  name: "Negócios em Dia",
  tagline: "Dicas práticas para pequenos empreendedores do Brasil",
  description:
    "Conteúdo simples e útil sobre finanças, tributos, vendas, marketing e automação para quem tem um pequeno negócio e quer organizar, vender mais e crescer.",
  // Definido pela variável NEXT_PUBLIC_SITE_URL na Vercel (sem barra no final).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.negociosemdia.com.br").replace(/\/$/, ""),
  locale: "pt_BR",
  language: "pt-BR",

  author: {
    name: "André", // TODO: coloque nome e sobrenome
    role: "Designer gráfico e criador de sistemas para pequenos negócios",
    bio: "Ajudo pequenos empreendedores a organizar o negócio, vender mais e economizar tempo com sistemas e automações simples.",
  },

  contact: {
    // Somente números, com DDI + DDD. TODO: confirme o número que deseja divulgar.
    whatsappNumber: "5591988390894",
    whatsappDisplay: "(91) 98839-0894",
    email: "contato@negociosemdia.com.br", // TODO: troque pelo seu e-mail real
    defaultMessage: "Olá! Vim pelo site Negócios em Dia e quero saber mais.",
  },

  social: {
    instagram: "https://www.instagram.com/negociosemdia", // TODO: confirme o @ real
    // youtube: "",
    // tiktok: "",
  },

  /**
   * Links de afiliado.
   * - maquininhas: um link por maquininha (a chave é o "id" em data/maquininhas.ts)
   * - lojas: link padrão de cada loja, usado quando o produto não tem link próprio
   * Os valores abaixo são páginas oficiais, apenas como exemplo. TODO: troque pelos seus links.
   */
  affiliateLinks: {
    maquininhas: {
      "mercado-pago-point": "https://www.mercadopago.com.br/point",
      infinitepay: "https://www.infinitepay.io/maquininha",
      pagbank: "https://pagseguro.uol.com.br/maquininha",
      sumup: "https://www.sumup.com/pt-br/maquininha-de-cartao/",
      stone: "https://www.stone.com.br/maquininha/",
    } as Record<string, string>,
    lojas: {
      "mercado-livre": "https://www.mercadolivre.com.br",
      shopee: "https://shopee.com.br",
      amazon: "https://www.amazon.com.br",
    } as Record<string, string>,
  },

  categories: [
    {
      slug: "financas",
      name: "Finanças",
      emoji: "💰",
      description: "Fluxo de caixa, preço, lucro e controle do dinheiro do negócio.",
    },
    {
      slug: "tributos",
      name: "Tributos",
      emoji: "🧾",
      description: "MEI, impostos, notas fiscais e obrigações explicados sem complicação.",
    },
    {
      slug: "vendas",
      name: "Vendas",
      emoji: "🛒",
      description: "Atendimento, WhatsApp, pós-venda e como vender mais todo mês.",
    },
    {
      slug: "marketing",
      name: "Marketing",
      emoji: "📣",
      description: "Instagram, Google Meu Negócio e como ser encontrado por clientes.",
    },
    {
      slug: "automacao",
      name: "Automação",
      emoji: "⚙️",
      description: "Sistemas e rotinas automáticas para ganhar tempo e reduzir erros.",
    },
  ] as Category[],

  nav: [
    { label: "Blog", href: "/blog" },
    { label: "Soluções", href: "/solucoes" },
    { label: "Maquininhas", href: "/maquininhas" },
    { label: "Indicações", href: "/indicacoes" },
    { label: "Sobre", href: "/sobre" },
  ],
} as const;

export function getCategory(slug: string): Category | undefined {
  return siteConfig.categories.find((c) => c.slug === slug);
}

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.defaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
