/**
 * COMPARATIVO DE MAQUININHAS
 *
 * ⚠️ TODO ANTES DE PUBLICAR: os valores abaixo são EXEMPLOS APENAS.
 * Confira cada taxa, prazo e preço no site oficial da operadora e preencha
 * "ultimaConferencia" (AAAA-MM-DD). Enquanto estiver vazio, a data não aparece na página.
 *
 * Para adicionar uma maquininha: copie um item, troque o "id" e adicione o link
 * de afiliado em data/site.config.ts → affiliateLinks.maquininhas[id].
 *
 * Taxas em % (número). Use null quando a taxa não se aplica ou não é informada.
 */

export interface Maquininha {
  id: string;
  nome: string;
  /** Para quem serve (texto curto) */
  paraQuem: string;
  taxaDebito: number | null;
  taxaCredito1x: number | null;
  taxaCredito12x: number | null;
  /** Prazo de recebimento */
  prazo: string;
  /** Mensalidade (texto) */
  mensalidade: string;
  /** Preço da maquininha (texto) */
  preco: string;
  destaque?: string;
  /** AAAA-MM-DD — preencha quando conferir os valores */
  ultimaConferencia?: string;
}

export const maquininhas: Maquininha[] = [
  {
    id: "infinitepay",
    nome: "InfinitePay",
    paraQuem: "Autônomos e lojas pequenas que querem taxa baixa e recebimento rápido.",
    taxaDebito: 1.37,
    taxaCredito1x: 3.15,
    taxaCredito12x: 12.9,
    prazo: "Na hora (com taxa) ou D+1",
    mensalidade: "Sem mensalidade",
    preco: "A partir de R$ 100",
    destaque: "Menor taxa (exemplo)",
  },
  {
    id: "mercado-pago-point",
    nome: "Mercado Pago Point",
    paraQuem: "Quem também vende online ou no Mercado Livre e quer tudo na mesma conta.",
    taxaDebito: 1.99,
    taxaCredito1x: 4.74,
    taxaCredito12x: 14.5,
    prazo: "Na hora (com taxa) ou 14 dias",
    mensalidade: "Sem mensalidade",
    preco: "A partir de R$ 120",
  },
  {
    id: "pagbank",
    nome: "PagBank",
    paraQuem: "Quem já tem conta PagBank e quer centralizar recebimentos e pagamentos.",
    taxaDebito: 1.89,
    taxaCredito1x: 4.39,
    taxaCredito12x: 14.0,
    prazo: "Na hora (com taxa) ou 30 dias",
    mensalidade: "Sem mensalidade",
    preco: "A partir de R$ 120",
  },
  {
    id: "sumup",
    nome: "SumUp",
    paraQuem: "Ambulantes, feirantes e quem vende pouco e quer pagar apenas pelo uso.",
    taxaDebito: 1.9,
    taxaCredito1x: 4.5,
    taxaCredito12x: 13.9,
    prazo: "D+1",
    mensalidade: "Sem mensalidade",
    preco: "A partir de R$ 90",
  },
  {
    id: "stone",
    nome: "Stone",
    paraQuem: "Lojas com volume maior que valorizam suporte e negociação de taxas.",
    taxaDebito: 1.5,
    taxaCredito1x: 3.5,
    taxaCredito12x: 13.0,
    prazo: "D+1",
    mensalidade: "Pode haver aluguel, conforme o plano",
    preco: "Sob consulta",
  },
];
