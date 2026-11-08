/**
 * INDICAÇÕES DE PRODUTOS (afiliados)
 *
 * ⚠️ TODO: os itens abaixo são EXEMPLOS. Troque título, motivo e link pelos seus.
 *
 * Para adicionar um produto: copie um item e preencha.
 * - url: seu link de afiliado. Se omitir, usa o link padrão da loja em site.config.ts.
 * - image: caminho dentro de /public (ex.: "/images/produtos/ring-light.jpg") ou URL de
 *   domínio liberado em next.config.mjs. Se omitir, o card mostra um ícone no lugar.
 */

export type Loja = "mercado-livre" | "shopee" | "amazon";

export interface IndicacaoCategoria {
  slug: string;
  nome: string;
  emoji: string;
}

export interface Produto {
  id: string;
  titulo: string;
  categoria: string; // slug de indicacaoCategorias
  loja: Loja;
  motivo: string;
  url?: string;
  image?: string;
}

export const lojaNomes: Record<Loja, string> = {
  "mercado-livre": "Mercado Livre",
  shopee: "Shopee",
  amazon: "Amazon",
};

export const indicacaoCategorias: IndicacaoCategoria[] = [
  { slug: "organizacao", nome: "Organização e escritório", emoji: "🗂️" },
  { slug: "fotos", nome: "Fotos e conteúdo", emoji: "📸" },
  { slug: "envio", nome: "Embalagem e envio", emoji: "📦" },
  { slug: "loja", nome: "Equipamentos de loja", emoji: "🏪" },
];

export const produtos: Produto[] = [
  {
    id: "impressora-termica",
    titulo: "Impressora térmica de etiquetas",
    categoria: "envio",
    loja: "mercado-livre",
    motivo: "Imprime etiqueta de envio e de produto sem gastar tinta. Economiza tempo em cada pedido.",
  },
  {
    id: "balanca-digital",
    titulo: "Balança digital de precisão",
    categoria: "envio",
    loja: "shopee",
    motivo: "Ajuda a pesar encomendas e calcular o frete certo, evitando prejuízo com cobrança a mais.",
  },
  {
    id: "fita-embalagem",
    titulo: "Kit de fita e plástico bolha",
    categoria: "envio",
    loja: "amazon",
    motivo: "Embalagem bem feita reduz troca e devolução, e passa uma imagem mais profissional.",
  },
  {
    id: "ring-light",
    titulo: "Ring light com tripé",
    categoria: "fotos",
    loja: "mercado-livre",
    motivo: "Luz uniforme faz a foto do celular parecer profissional, sem precisar de estúdio.",
  },
  {
    id: "suporte-celular",
    titulo: "Suporte articulado para celular",
    categoria: "fotos",
    loja: "shopee",
    motivo: "Deixa o celular fixo para fotos de produto de cima e para gravar vídeos de forma estável.",
  },
  {
    id: "organizador-mesa",
    titulo: "Organizador de mesa para escritório",
    categoria: "organizacao",
    loja: "amazon",
    motivo: "Mantém notas, contratos e canetas à mão. Um espaço organizado ajuda a trabalhar com mais calma.",
  },
  {
    id: "leitor-codigo",
    titulo: "Leitor de código de barras",
    categoria: "loja",
    loja: "mercado-livre",
    motivo: "Agiliza o caixa e o controle de estoque, principalmente em lojas com muitos itens.",
  },
  {
    id: "bobina-termica",
    titulo: "Bobinas térmicas para maquininha",
    categoria: "loja",
    loja: "shopee",
    motivo: "Item de consumo que acaba no pior momento. Comprar em quantidade costuma sair mais barato.",
  },
];
