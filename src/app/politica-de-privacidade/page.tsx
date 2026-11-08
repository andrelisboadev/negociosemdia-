import { siteConfig } from "@data/site.config";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Como o Negócios em Dia coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  path: "/politica-de-privacidade",
});

export default function PrivacidadePage() {
  const email = siteConfig.contact.email;

  return (
    <div className="container-page max-w-3xl py-10">
      <Breadcrumbs items={[{ name: "Política de Privacidade", href: "/politica-de-privacidade" }]} />

      <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-slate-500">Última atualização: novembro de 2026</p>

      <div className="prose prose-slate mt-6 max-w-none">
        <p>
          Esta Política explica como o <strong>{siteConfig.name}</strong> ({siteConfig.url}) trata dados pessoais de
          quem visita o site, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
        </p>

        <h2>1. Quem é o controlador</h2>
        <p>
          O responsável pelo tratamento dos dados é {siteConfig.author.name}, titular do {siteConfig.name}. Contato do
          encarregado/responsável: <a href={`mailto:${email}`}>{email}</a>.
        </p>

        <h2>2. Quais dados coletamos</h2>
        <ul>
          <li>
            <strong>Dados que você informa:</strong> e-mail e, se quiser, número de WhatsApp, ao se cadastrar para
            receber conteúdos.
          </li>
          <li>
            <strong>Conversas pelo WhatsApp:</strong> ao clicar em um botão do site, você abre uma conversa no WhatsApp.
            O tratamento dessa conversa segue também a política do próprio WhatsApp.
          </li>
          <li>
            <strong>Dados de navegação:</strong> informações técnicas como páginas visitadas, dispositivo e navegador,
            que podem ser coletadas por ferramentas de hospedagem e de estatística.
          </li>
        </ul>

        <h2>3. Para que usamos os dados</h2>
        <ul>
          <li>Enviar conteúdos, novidades e dicas que você pediu para receber.</li>
          <li>Responder mensagens e apresentar as soluções que você tiver interesse.</li>
          <li>Melhorar o site, medir audiência e manter a segurança.</li>
        </ul>

        <h2>4. Base legal</h2>
        <p>
          Tratamos os dados de cadastro com base no seu <strong>consentimento</strong> (art. 7º, I). Os dados de
          navegação podem ser tratados com base no <strong>legítimo interesse</strong> (art. 7º, IX) de manter e
          aprimorar o site. Você pode retirar o consentimento a qualquer momento.
        </p>

        <h2>5. Compartilhamento</h2>
        <p>
          Não vendemos os seus dados. Eles podem ser processados por prestadores que ajudam a manter o site, como
          serviços de hospedagem, banco de dados e envio de e-mail, que seguem obrigações de confidencialidade e
          segurança. Também podemos compartilhar dados quando exigido por lei.
        </p>

        <h2>6. Links de afiliado e sites de terceiros</h2>
        <p>
          O site contém links para lojas e empresas parceiras. Ao clicar, você passa a seguir as políticas de
          privacidade desses sites, que podem usar cookies para identificar a origem da compra. Veja o{" "}
          <a href="/aviso-de-afiliados">Aviso de Afiliados</a>.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Podemos usar cookies e tecnologias semelhantes para o funcionamento do site e para estatísticas de acesso.
          Você pode bloquear ou apagar cookies nas configurações do seu navegador, mas algumas funções podem ser
          afetadas.
        </p>

        <h2>8. Por quanto tempo guardamos</h2>
        <p>
          Guardamos os dados de cadastro enquanto você quiser receber nossos conteúdos ou até que peça a exclusão.
          Dados de navegação são mantidos pelo tempo necessário para as finalidades descritas ou conforme a lei.
        </p>

        <h2>9. Seus direitos</h2>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>portabilidade dos dados;</li>
          <li>eliminação dos dados tratados com base no consentimento;</li>
          <li>informação sobre com quem compartilhamos os dados;</li>
          <li>revogação do consentimento.</li>
        </ul>
        <p>
          Para exercer qualquer direito, escreva para <a href={`mailto:${email}`}>{email}</a>. Você também pode
          reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2>10. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acesso não autorizado,
          perda ou alteração. Nenhum sistema é 100% seguro, mas trabalhamos para reduzir riscos.
        </p>

        <h2>11. Alterações</h2>
        <p>
          Podemos atualizar esta Política. A data da última atualização aparece no topo desta página.
        </p>
      </div>
    </div>
  );
}
