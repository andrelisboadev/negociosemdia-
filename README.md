# Negócios em Dia

Site/blog em Next.js (App Router) + TypeScript + Tailwind, com artigos em MDX. Sem CMS e sem banco de dados por enquanto.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # teste antes de publicar
```

## Antes de publicar (TODO)

Abra `data/site.config.ts` e troque: **nome completo do autor, e-mail, @ do Instagram e links de afiliado**.
Em `data/maquininhas.ts` e `data/indicacoes.ts` os valores e produtos são **exemplos**: confira taxas no site de cada operadora, troque os produtos pelos seus e preencha `ultimaConferencia`.

## Onde editar cada coisa

| O que | Arquivo |
|---|---|
| Nome do site, WhatsApp, redes, categorias, links de afiliado | `data/site.config.ts` |
| Soluções (cards de sistemas) | `data/solucoes.ts` |
| Maquininhas (tabela) | `data/maquininhas.ts` |
| Produtos de indicação | `data/indicacoes.ts` |
| Artigos | `content/posts/*.mdx` |

## Adicionar um artigo

Crie `content/posts/meu-artigo.mdx` (o nome do arquivo vira a URL `/blog/meu-artigo`):

```mdx
---
title: "Título do artigo"
description: "Resumo de 1 ou 2 frases (aparece no Google)."
category: financas        # financas | tributos | vendas | marketing | automacao
kind: educativo           # educativo | solucao | indicacao (só para organizar o mix 80/15/5)
date: "2026-11-10"
updated: "2026-11-10"     # exibido como "Atualizado em"
author: "Seu Nome"
tags: ["mei", "impostos"]
hasAffiliate: false       # true = mostra o Aviso de Afiliados no topo do artigo
sources:                  # use em artigos de tributos (Receita Federal, Sebrae, gov.br)
  - label: "Portal do Empreendedor"
    url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"
cta:                      # CTA do fim do artigo
  solution: estoque       # id em data/solucoes.ts (estoque, orcamentos, agendamento, catalogo, atendimento-ia)
  title: "Texto opcional"
  text: "Texto opcional"
---

## Primeiro título

Texto em Markdown. O índice, o tempo de leitura e os dados estruturados são gerados sozinhos.
```

Componentes disponíveis dentro do artigo:

- `<Callout title="Dica">texto</Callout>` caixa de destaque
- `<CtaBox solution="catalogo" />` CTA no meio do texto
- `<AffiliateLink href="https://...">texto</AffiliateLink>` link de afiliado (já com `rel="sponsored nofollow noopener"` e `target="_blank"`). Se usar, ponha `hasAffiliate: true` no frontmatter.

Em artigos de tributos, sempre preencha `updated` e `sources`: o site exibe "Atualizado em" e "Fontes oficiais".

## Adicionar um produto (Indicações)

Em `data/indicacoes.ts`, copie um item da lista `produtos`:

```ts
{
  id: "meu-produto",
  titulo: "Nome do produto",
  categoria: "fotos",            // organizacao | fotos | envio | loja
  loja: "mercado-livre",         // mercado-livre | shopee | amazon
  motivo: "Por que você indica.",
  url: "https://seu-link-de-afiliado",
  image: "/images/produtos/meu-produto.jpg", // opcional (arquivo em /public)
}
```

Imagem de outro domínio: libere o domínio em `next.config.mjs` (`images.remotePatterns`).

## Adicionar uma maquininha

1. Em `data/maquininhas.ts`, copie um item (mude o `id`, taxas, prazo, "para quem serve").
2. Em `data/site.config.ts`, em `affiliateLinks.maquininhas`, adicione `"seu-id": "https://seu-link-de-afiliado"`.

## Publicar na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório (a Vercel detecta o Next.js sozinha).
3. Em **Settings → Environment Variables**, crie `NEXT_PUBLIC_SITE_URL` com o endereço final (ex.: `https://www.seudominio.com.br`, sem barra no final).
4. **Deploy**. Depois, em **Settings → Domains**, conecte o seu domínio.
5. No Google Search Console, envie o `https://seudominio/sitemap.xml`.

## Ativar o Supabase depois (newsletter/leads)

O formulário já envia para `/api/lead`, que hoje só registra no log (Vercel → Logs). O passo a passo para gravar no Supabase está comentado em `src/lib/supabase.ts`.
