import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Página não encontrada</h1>
      <p className="mx-auto mt-3 max-w-md text-slate-600">
        O endereço pode ter mudado ou não existir mais. Que tal ver os artigos mais recentes?
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/blog" className="btn-primary">Ir para o blog</Link>
        <Link href="/" className="btn-secondary">Voltar ao início</Link>
      </div>
    </div>
  );
}
