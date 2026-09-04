import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { CtaLink } from "@/components/landing/CtaLink";
import { FloatingCta } from "@/components/landing/FloatingCta";
import heroImage from "@/assets/hero-reflection.jpg";

const TITLE = "Como Recuperar o Ex | Entenda o Que Fazer Depois do Término";
const DESCRIPTION =
  "Um conteúdo digital para quem ainda tem sentimentos pelo ex e quer entender melhor como agir depois de um término, evitando decisões impulsivas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const situacoes = [
  "Você ainda pensa nele(a) todos os dias.",
  "Não sabe se deveria mandar mensagem.",
  "Fica tentando entender onde tudo deu errado.",
  "Tem vontade de tentar novamente, mas não sabe por onde começar.",
  "Sente que qualquer atitude errada pode afastar ainda mais.",
  "Uma parte sua ainda acredita que a história não terminou.",
];

const modulos = [
  { n: "01", t: "Entenda o momento do término" },
  { n: "02", t: "Saiba quais comportamentos podem afastar ainda mais" },
  { n: "03", t: "Entenda como agir durante o período de distância" },
  { n: "04", t: "Aprenda a lidar melhor com a comunicação" },
  { n: "05", t: "Reconheça erros que podem estar prejudicando uma possível reaproximação" },
  { n: "06", t: "Tenha mais clareza sobre os próximos passos" },
];

const paraQuem = [
  "Você terminou recentemente e ainda sente dificuldade para seguir em frente.",
  "Ainda existe sentimento pela outra pessoa.",
  "Você não sabe se deve procurar ou dar espaço.",
  "Quer entender melhor como agir depois do término.",
  "Quer evitar atitudes impulsivas que possam piorar a situação.",
];

const faq = [
  {
    q: "Como recebo o conteúdo?",
    a: "Após a confirmação do pagamento, o acesso é disponibilizado digitalmente conforme as instruções apresentadas no checkout.",
  },
  {
    q: "Preciso entrar em contato com meu ex imediatamente?",
    a: "Não. O conteúdo foi pensado justamente para ajudar você a entender melhor o momento antes de tomar decisões impulsivas.",
  },
  {
    q: "O método garante que meu ex vai voltar?",
    a: "Não. Nenhum método pode garantir o sentimento ou a decisão de outra pessoa. O objetivo é oferecer orientação para você compreender melhor a situação e agir de maneira mais consciente.",
  },
  { q: "É um produto físico?", a: "Não. É um produto digital." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-warm)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:items-center md:gap-16 md:pt-24 md:pb-28">
          <div className="reveal">
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-terracotta uppercase">
              Para quem ainda não conseguiu se desligar
            </p>
            <h1 className="mt-6 text-[2.1rem] leading-[1.15] text-ink sm:text-5xl md:text-[3.1rem]">
              Talvez você não queira esquecer seu ex.
              <span className="mt-3 block text-wine italic">
                Talvez você só queira saber se ainda existe uma chance.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
              Entenda o que fazer depois de um término, como lidar com a distância e quais atitudes
              podem aumentar — ou destruir — as chances de uma reaproximação.
            </p>
            <div className="mt-9">
              <CtaLink className="w-full sm:w-auto">Quero entender o que fazer agora</CtaLink>
              <p className="mt-4 text-sm text-muted-foreground">
                Conteúdo digital • Acesso imediato
              </p>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-rose-soft/60 blur-2xl" />
            <img
              src={heroImage}
              width={1280}
              height={1600}
              alt="Mulher sentada junto à janela, refletindo em silêncio após o fim de um relacionamento"
              className="aspect-4/5 w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </header>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl text-[1.7rem] leading-snug text-ink md:text-4xl">
          Se você chegou até aqui, provavelmente está vivendo uma dessas situações…
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {situacoes.map((s) => (
            <li
              key={s}
              className="rounded-2xl border border-border/70 bg-card p-6 text-[0.98rem] leading-relaxed text-foreground/85 transition-colors duration-300 hover:border-terracotta/40"
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-12 border-l-2 border-terracotta/60 pl-5 text-lg text-wine italic md:text-xl">
          E o pior é não saber se insistir aproxima ou afasta.
        </p>
      </section>

      {/* TRANSIÇÃO */}
      <section className="bg-sand/70">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h2 className="text-[1.7rem] leading-snug text-ink md:text-4xl">
            Antes de tomar qualquer atitude, entenda o que está acontecendo.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-muted-foreground">
            Depois de um término, é muito fácil agir pela saudade, ansiedade ou medo de perder a
            pessoa definitivamente. O problema é que, nesse momento, algumas atitudes que parecem
            certas podem acabar tornando uma reaproximação ainda mais difícil.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-muted-foreground">
            <span className="text-foreground">Como Recuperar o Ex</span> é um guia digital criado
            para ajudar você a compreender melhor esse momento e agir com mais consciência, no seu
            tempo.
          </p>
          <CtaLink className="mt-10 w-full sm:w-auto">Quero conhecer o método</CtaLink>
        </div>
      </section>

      {/* O QUE VOCÊ ENCONTRA */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl text-[1.7rem] leading-snug text-ink md:text-4xl">
          Um passo a passo para enxergar a situação com mais clareza.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {modulos.map((m) => (
            <article key={m.n} className="bg-card p-7 md:p-8">
              <span className="font-display text-2xl text-terracotta/70">{m.n}</span>
              <h3 className="mt-3 text-lg leading-snug text-ink">{m.t}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* EMOCIONAL */}
      <section className="bg-wine text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <h2 className="text-[1.8rem] leading-snug md:text-[2.6rem]">
            Você não precisa tomar uma decisão no impulso.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-primary-foreground/80">
            Talvez você ainda ame essa pessoa. Talvez esteja apenas sentindo falta. Talvez exista
            uma possibilidade de recomeço — ou talvez o melhor caminho seja entender isso e seguir
            em frente.
          </p>
          <p className="mt-6 text-lg text-gold italic">O primeiro passo é parar de agir no automático.</p>
          <CtaLink
            className="mt-10 w-full border border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            variant="outline"
          >
            Quero entender melhor minha situação
          </CtaLink>
        </div>
      </section>

      {/* PARA QUEM É / NÃO É */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-[1.6rem] leading-snug text-ink md:text-3xl">
              Este conteúdo pode fazer sentido para você se…
            </h2>
            <ul className="mt-8 space-y-4">
              {paraQuem.map((p) => (
                <li key={p} className="flex gap-3 text-[0.98rem] leading-relaxed text-foreground/85">
                  <Check className="mt-1 size-4 shrink-0 text-terracotta" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-secondary p-8 md:p-10">
            <h2 className="text-[1.4rem] text-ink md:text-2xl">E uma coisa importante:</h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              Este conteúdo não promete controlar sentimentos de outra pessoa, nem garante que
              alguém vai voltar. O objetivo é oferecer conhecimento e direcionamento para que você
              possa entender melhor a situação e tomar decisões mais conscientes.
            </p>
          </div>
        </div>
      </section>

      {/* CONFIANÇA */}
      <section className="bg-sand/70">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="text-[1.7rem] leading-snug text-ink md:text-4xl">
            Por que não agir no impulso?
          </h2>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Términos mexem com emoções fortes. Saudade, ansiedade e medo aparecem juntos e, muitas
              vezes, é justamente nesse estado que tomamos as decisões mais difíceis de desfazer.
            </p>
            <p>
              Buscar informação e organizar o pensamento antes de agir não muda o que a outra pessoa
              sente — mas ajuda você a escolher com mais calma o que fazer, o que dizer e quando
              simplesmente esperar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-[1.7rem] leading-snug text-ink md:text-4xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base text-ink">{item.q}</AccordionTrigger>
              <AccordionContent className="text-[0.98rem] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <h2 className="text-[1.8rem] leading-snug text-ink md:text-[2.5rem]">
            Talvez você não consiga controlar o que a outra pessoa sente.
            <span className="mt-3 block text-wine italic">
              Mas pode escolher como vai agir daqui para frente.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
            Se você quer entender melhor o que fazer depois de um término e parar de agir apenas
            pela ansiedade ou saudade, conheça o conteúdo.
          </p>
          <CtaLink className="mt-10 w-full sm:w-auto">Obter acesso ao conteúdo</CtaLink>
          <p className="mt-4 text-sm text-muted-foreground">
            Você será direcionado para o checkout seguro.
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 — Todos os direitos reservados.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-wine">
              Termos de Uso
            </a>
            <a href="#" className="transition-colors hover:text-wine">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-wine">
              Suporte
            </a>
          </nav>
        </div>
      </footer>

      <FloatingCta />
      <div className="h-16 md:hidden" aria-hidden />
    </div>
  );
}
