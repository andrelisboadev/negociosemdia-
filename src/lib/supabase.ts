/**
 * PONTO DE INTEGRAÇÃO COM O SUPABASE (desativado por enquanto)
 *
 * Hoje os leads só são registrados no log do servidor (aparece em Vercel → Logs).
 * Para ativar o Supabase depois:
 *   1. npm i @supabase/supabase-js
 *   2. Crie a tabela "leads" (email text unique, whatsapp text, source text,
 *      consent boolean, created_at timestamptz default now()) com RLS ligado
 *      e política de INSERT apenas via service role.
 *   3. Defina NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY na Vercel.
 *   4. Substitua o corpo de saveLead() pelo insert (exemplo comentado abaixo).
 */

export interface Lead {
  email: string;
  whatsapp: string | null;
  source: string;
  consent: boolean;
  createdAt: string;
}

export async function saveLead(lead: Lead): Promise<void> {
  // import { createClient } from "@supabase/supabase-js";
  // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  // const { error } = await supabase.from("leads").upsert(
  //   { email: lead.email, whatsapp: lead.whatsapp, source: lead.source, consent: lead.consent },
  //   { onConflict: "email" },
  // );
  // if (error) throw error;

  // Por enquanto: registra só dados mínimos no log (sem expor o e-mail completo).
  const [user, domain] = lead.email.split("@");
  console.info("[lead]", { email: `${user.slice(0, 2)}***@${domain}`, hasWhatsapp: Boolean(lead.whatsapp), source: lead.source });
}
