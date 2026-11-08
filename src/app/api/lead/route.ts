import { NextResponse } from "next/server";
import { saveLead, type Lead } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  // Honeypot: robôs preenchem, pessoas não. Responde "ok" sem salvar.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 254);
  const whatsapp = String(body.whatsapp ?? "").replace(/\D/g, "").slice(0, 15);
  const source = String(body.source ?? "site").slice(0, 80);
  const consent = body.consent === true;

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Informe um e-mail válido." }, { status: 400 });
  }
  if (whatsapp && whatsapp.length < 10) {
    return NextResponse.json({ ok: false, error: "WhatsApp inválido. Use DDD + número." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "É preciso concordar com a Política de Privacidade." }, { status: 400 });
  }

  const lead: Lead = { email, whatsapp: whatsapp || null, source, consent, createdAt: new Date().toISOString() };

  try {
    await saveLead(lead);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] falha ao salvar", error);
    return NextResponse.json({ ok: false, error: "Não foi possível salvar agora. Tente novamente." }, { status: 500 });
  }
}
