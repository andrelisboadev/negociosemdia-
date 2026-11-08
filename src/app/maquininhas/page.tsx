import { maquininhas } from "@data/maquininhas";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MaquininhasTable } from "@/components/commerce/MaquininhasTable";
import { AffiliateNotice } from "@/components/commerce/AffiliateNotice";
import { CtaBox } from "@/components/cta/CtaBox";

export const metadata = buildMetadata({
  title: "Melhores maquininhas de cartão para pequenos negócios: comparativo",
  description:
    "Compare taxas de débito e crédito, prazo de recebimento e para quem cada maquininha serve. Escolha a melhor para o seu pequeno negócio.",
  path: "/maquininhas",
});

const tips = [
  ["Olhe o seu mix de vendas", "Se você vende mais no débito ou no crédito à vista, a taxa desses itens pesa mais do que a de 12x."],
  ["Considere o prazo", "Receber na hora costuma ter taxa extra. Veja se o seu caixa precisa disso ou se D+1 já resolve."],
  ["Cuidado com mensalidade", "Algumas maquininhas têm aluguel ou mensalidade. Para vender pouco, sem mensalidade costuma compensar."],
  ["Negocie com volume", "Quem vende mais consegue taxa menor. Peça proposta e compare antes de fechar."],
];

export default function MaquininhasPage() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ name: "Maquininhas", href: "/maquininhas" }]} />

      <header className="mt-5 max-w-3xl">
        <p className="eyebrow">Comparativo</p>
        <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">Qual maquininha escolher para o seu negócio?</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">
          Compare as principais opções em taxas, prazo de recebimento e perfil de uso. A melhor maquininha é a que
          combina com o seu jeito de vender.
        </p>
      </header>

      <AffiliateNotice className="mt-6" />

      <section aria-labelledby="comparativo" className="mt-8">
        <h2 id="comparativo" className="sr-only">
          Tabela comparativa
        </h2>
        <MaquininhasTable items={maquininhas} />
        <p className="mt-3 text-sm text-slate-500">
          As taxas variam conforme plano, volume de vendas e promoções, e podem mudar a qualquer momento. Confirme
          sempre no site oficial da operadora antes de contratar.
        </p>
      </section>

      <section aria-labelledby="como-escolher" className="mt-14">
        <h2 id="como-escolher" className="text-2xl font-extrabold">
          Como escolher em 4 passos
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {tips.map(([title, text]) => (
            <li key={title} className="card p-5">
              <h3 className="text-base font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBox
        title="Quer ajuda para escolher?"
        text="Me conte quanto você vende por mês e como os clientes pagam. Eu ajudo a escolher a opção que mais combina."
        buttonLabel="Pedir ajuda no WhatsApp"
        message="Olá! Vim pelo Negócios em Dia e quero ajuda para escolher uma maquininha."
      />
    </div>
  );
}
