"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

interface LeadCaptureFormProps {
  /** Identifica a origem do cadastro (ex.: "home", "artigo:fluxo-de-caixa") */
  source?: string;
  buttonLabel?: string;
}

export function LeadCaptureForm({ source = "site", buttonLabel = "Quero receber as dicas" }: LeadCaptureFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          whatsapp: String(data.get("whatsapp") ?? ""),
          consent: data.get("consent") === "on",
          website: String(data.get("website") ?? ""), // campo anti-spam (deve ficar vazio)
          source,
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Não foi possível enviar agora.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Não foi possível enviar agora.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl bg-brand-50 p-5 text-brand-900">
        <p className="font-bold">Tudo certo! 🎉</p>
        <p className="mt-1 text-sm">Recebemos o seu cadastro. Em breve você recebe nossas dicas.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div>
        <label htmlFor={`email-${source}`} className="mb-1 block text-sm font-semibold text-navy-900">
          Seu melhor e-mail
        </label>
        <input
          id={`email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-white px-4 text-base text-navy-900 placeholder:text-slate-400"
        />
      </div>
      <div>
        <label htmlFor={`whats-${source}`} className="mb-1 block text-sm font-semibold text-navy-900">
          WhatsApp <span className="font-normal text-slate-500">(opcional)</span>
        </label>
        <input
          id={`whats-${source}`}
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-white px-4 text-base text-navy-900 placeholder:text-slate-400"
        />
      </div>

      {/* Honeypot anti-spam: invisível para pessoas */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Não preencha este campo
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-5 w-5 shrink-0 rounded border-navy-300 accent-brand-600"
        />
        <span>
          Concordo em receber conteúdos por e-mail/WhatsApp e com a{" "}
          <Link href="/politica-de-privacidade" className="font-semibold text-navy-700 underline underline-offset-2">
            Política de Privacidade
          </Link>
          . Posso cancelar quando quiser.
        </span>
      </label>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-60">
        {status === "loading" ? "Enviando..." : buttonLabel}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
