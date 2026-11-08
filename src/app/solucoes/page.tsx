import { solucoes } from "@data/solucoes";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SolutionCard } from "@/components/cta/SolutionCard";
import { CtaBox } from "@/components/cta/CtaBox";

export const metadata = buildMetadata({
  title: "Soluções: sistemas e automações para pequenos negócios",
  description:
    "Sistemas simples de estoque, orçamentos, agendamento, catálogo digital e atendimento automático para o seu pequeno negócio ganhar tempo e vender mais.",
  path: "/solucoes",
});

const steps = [
  ["1", "Você conta a sua rotina", "Um papo rápido no WhatsApp para entender como o seu negócio funciona hoje."],
  ["2", "Eu monto a solução", "Sistema ou automação sob medida, simples de usar, sem curso nem manual."],
  ["3", "Você usa e economiza tempo", "Treinamento rápido e suporte para você aproveitar desde o primeiro dia."],
];

export default function SolucoesPage() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ name: "Soluções", href: "/solucoes" }]} />

      <header className="mt-5 max-w-3xl">
        <p className="eyebrow">Sistemas e automações</p>
        <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
          Tire o negócio do caderno e coloque no automático
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">
          Soluções feitas para a realidade de quem tem um pequeno negócio: simples de usar, com preço justo e que
          resolvem uma dor de cada vez.
        </p>
      </header>

      <h2 className="sr-only">Nossas soluções</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solucoes.map((s) => (
          <SolutionCard key={s.id} solucao={s} />
        ))}
      </div>

      <section aria-labelledby="como-funciona" className="mt-16">
        <h2 id="como-funciona" className="text-2xl font-extrabold">
          Como funciona
        </h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {steps.map(([n, title, text]) => (
            <li key={n} className="card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun-400 font-display font-extrabold text-navy-900">
                {n}
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBox
        title="Não achou o que precisa?"
        text="Conte qual é o seu maior gargalo hoje. Se eu puder ajudar, eu monto uma solução para você."
        buttonLabel="Conversar no WhatsApp"
      />
    </div>
  );
}
