/**
 * SOLUÇÕES (sistemas e automações)
 * Para adicionar: copie um item, mude o "id" e preencha os campos.
 * O "id" é usado nos CTAs dos artigos (campo cta.solution no frontmatter).
 */

export interface Solucao {
  id: string;
  nome: string;
  emoji: string;
  dor: string;
  solucao: string;
  beneficio: string;
  /** Mensagem pré-preenchida do WhatsApp */
  mensagem: string;
  categorias: string[];
}

export const solucoes: Solucao[] = [
  {
    id: "estoque",
    nome: "Controle de estoque e vendas",
    emoji: "📦",
    dor: "Você não sabe ao certo o que tem na prateleira, o que está acabando e quanto lucrou no mês.",
    solucao:
      "Sistema simples para registrar entradas, saídas e vendas, com alerta de produto acabando e relatório de lucro.",
    beneficio: "Menos perda de venda por falta de produto e mais clareza sobre o seu lucro.",
    mensagem: "Olá! Vim pelo Negócios em Dia e quero saber mais sobre o sistema de controle de estoque e vendas.",
    categorias: ["Finanças", "Vendas"],
  },
  {
    id: "orcamentos",
    nome: "Orçamentos em PDF e WhatsApp",
    emoji: "📝",
    dor: "Montar orçamento à mão demora, gera erro de conta e o cliente some antes de responder.",
    solucao:
      "Calculadora que monta o orçamento, gera um PDF com a sua marca e envia o link pelo WhatsApp em poucos cliques.",
    beneficio: "Orçamento profissional em minutos e mais chance de fechar a venda.",
    mensagem: "Olá! Vim pelo Negócios em Dia e quero saber mais sobre o sistema de orçamentos.",
    categorias: ["Vendas", "Automação"],
  },
  {
    id: "agendamento",
    nome: "Agendamento com lembrete no WhatsApp",
    emoji: "📅",
    dor: "Clientes esquecem o horário, faltam sem avisar e a sua agenda fica cheia de buracos.",
    solucao:
      "Agenda online com confirmação e lembrete automático por WhatsApp, e o cliente remarca sozinho.",
    beneficio: "Menos faltas, agenda mais cheia e menos tempo respondendo mensagem.",
    mensagem: "Olá! Vim pelo Negócios em Dia e quero saber mais sobre o sistema de agendamento.",
    categorias: ["Automação", "Vendas"],
  },
  {
    id: "catalogo",
    nome: "Catálogo digital com pedido no WhatsApp",
    emoji: "📲",
    dor: "Você manda foto e preço um por um no WhatsApp e perde vendas por demorar a responder.",
    solucao:
      "Catálogo online com seus produtos e preços, e um botão que já envia o pedido pronto para o seu WhatsApp.",
    beneficio: "Cliente escolhe sozinho, você só confirma. Atendimento mais rápido e vitrine sempre atualizada.",
    mensagem: "Olá! Vim pelo Negócios em Dia e quero saber mais sobre o catálogo digital.",
    categorias: ["Vendas", "Marketing"],
  },
  {
    id: "atendimento-ia",
    nome: "Atendimento automático com IA",
    emoji: "🤖",
    dor: "As mesmas perguntas (preço, horário, endereço) tomam o seu dia e as mensagens da noite ficam sem resposta.",
    solucao:
      "Assistente no WhatsApp que responde dúvidas frequentes, coleta dados do cliente e chama você só quando precisa.",
    beneficio: "Atendimento 24 horas sem contratar ninguém e mais tempo para o que importa.",
    mensagem: "Olá! Vim pelo Negócios em Dia e quero saber mais sobre o atendimento automático com IA.",
    categorias: ["Automação", "Vendas"],
  },
];

export function getSolucao(id?: string): Solucao | undefined {
  return solucoes.find((s) => s.id === id);
}
