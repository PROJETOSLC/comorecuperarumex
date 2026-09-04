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
import { Reveal } from "@/components/landing/Reveal";
import heroImage from "@/assets/hero-reflection.jpg";
import detailImage from "@/assets/detail-stilllife.jpg";

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
  { n: "01", t: "Entenda o momento do término", d: "O que costuma acontecer nos primeiros dias e por que tudo parece urgente." },
  { n: "02", t: "Comportamentos que podem afastar", d: "Atitudes comuns que parecem certas e acabam criando mais distância." },
  { n: "03", t: "Como agir durante a distância", d: "O que fazer com o tempo de silêncio em vez de apenas esperar." },
  { n: "04", t: "Lidar melhor com a comunicação", d: "Como pensar antes de falar, escrever ou responder." },
  { n: "05", t: "Reconhecer erros em curso", d: "Sinais de que algo pode estar prejudicando uma possível reaproximação." },
  { n: "06", t: "Clareza sobre os próximos passos", d: "Um caminho para decidir com consciência, não pela ansiedade." },
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

function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`rule-gold w-full opacity-70 ${className}`} aria-hidden />;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOPO */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-[0.95rem] tracking-[0.16em] text-ink uppercase">
            Recuperar<span className="text-terracotta">.</span>
          </span>
          <span className="hidden text-xs tracking-[0.18em] text-muted-foreground uppercase sm:block">
            Guia digital
          </span>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden bg-[image:var(--gradient-warm)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-multiply"
          style={{ backgroundImage: "var(--texture-grain)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-20 md:pt-28 md:pb-32">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta/60" aria-hidden />
              <p className="eyebrow">Para quem ainda não conseguiu se desligar</p>
            </div>
            <h1 className="mt-7 text-[2.35rem] leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.4rem]">
              Talvez você não queira esquecer seu ex.
              <span className="mt-4 block font-light text-wine italic">
                Talvez você só queira saber se ainda existe uma chance.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.03rem] leading-[1.75] text-muted-foreground">
              Entenda o que fazer depois de um término, como lidar com a distância e quais atitudes
              podem aumentar — ou destruir — as chances de uma reaproximação.
            </p>
            <div className="mt-10">
              <CtaLink className="w-full sm:w-auto">Quero entender o que fazer agora</CtaLink>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                Conteúdo digital • Acesso imediato
              </p>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -top-5 -left-5 hidden h-40 w-40 rounded-tl-[2rem] border-t border-l border-gold/50 md:block" aria-hidden />
            <div className="absolute -right-5 -bottom-5 hidden h-40 w-40 rounded-br-[2rem] border-r border-b border-gold/50 md:block" aria-hidden />
            <img
              src={heroImage}
              width={1280}
              height={1600}
              alt="Mulher sentada junto à janela, refletindo em silêncio após o fim de um relacionamento"
              className="aspect-4/5 w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
        <GoldRule />
      </header>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Identificação</p>
          <h2 className="mt-5 text-[1.85rem] leading-[1.2] text-ink md:text-[2.6rem]">
            Se você chegou até aqui, provavelmente está vivendo uma dessas situações…
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situacoes.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 70}>
              <div className="group h-full rounded-[1.25rem] border border-border/70 bg-card p-7 shadow-[0_1px_0_oklch(1_0_0)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--shadow-soft)]">
                <span className="block h-px w-10 bg-terracotta/50 transition-all duration-500 group-hover:w-16" aria-hidden />
                <p className="mt-5 text-[1rem] leading-[1.7] text-foreground/85">{s}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-14">
          <p className="border-l border-terracotta/60 pl-6 font-display text-xl leading-snug text-wine italic md:text-2xl">
            E o pior é não saber se insistir aproxima ou afasta.
          </p>
        </Reveal>
      </section>

      {/* TRANSIÇÃO */}
      <section className="relative overflow-hidden border-y border-border bg-sand/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32">
          <Reveal>
            <img
              src={detailImage}
              width={1600}
              height={1008}
              loading="lazy"
              alt="Carta escrita à mão, xícara de cerâmica e flores secas sobre linho claro"
              className="aspect-4/3 w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Antes de agir</p>
            <h2 className="mt-5 text-[1.85rem] leading-[1.2] text-ink md:text-[2.5rem]">
              Antes de tomar qualquer atitude, entenda o que está acontecendo.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-[1.75] text-muted-foreground">
              Depois de um término, é muito fácil agir pela saudade, ansiedade ou medo de perder a
              pessoa definitivamente. O problema é que, nesse momento, algumas atitudes que parecem
              certas podem acabar tornando uma reaproximação ainda mais difícil.
            </p>
            <p className="mt-5 text-[1.02rem] leading-[1.75] text-muted-foreground">
              <span className="text-foreground">Como Recuperar o Ex</span> é um guia digital criado
              para ajudar você a compreender melhor esse momento e agir com mais consciência, no seu
              tempo.
            </p>
            <CtaLink className="mt-9 w-full sm:w-auto" variant="outline">
              Quero conhecer o método
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">O que você encontra</p>
          <h2 className="mt-5 text-[1.85rem] leading-[1.2] text-ink md:text-[2.6rem]">
            Um passo a passo para enxergar a situação com mais clareza.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-14 gap-y-2 md:grid-cols-2">
          {modulos.map((m, i) => (
            <Reveal as="article" key={m.n} delay={i * 60}>
              <div className="group flex gap-6 border-b border-border/70 py-8 transition-colors duration-500 hover:border-gold/60">
                <span className="font-display text-2xl leading-none text-terracotta/60 transition-colors duration-500 group-hover:text-terracotta md:text-[1.75rem]">
                  {m.n}
                </span>
                <div>
                  <h3 className="text-[1.15rem] leading-snug text-ink">{m.t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{m.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EMOCIONAL */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-wine)] text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: "var(--texture-grain)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
          <Reveal>
            <span className="mx-auto block h-px w-16 bg-gold/70" aria-hidden />
            <h2 className="mt-10 text-[2rem] leading-[1.18] md:text-[2.9rem]">
              Você não precisa tomar uma decisão no impulso.
            </h2>
            <p className="mx-auto mt-9 max-w-2xl text-[1.03rem] leading-[1.8] text-primary-foreground/75">
              Talvez você ainda ame essa pessoa. Talvez esteja apenas sentindo falta. Talvez exista
              uma possibilidade de recomeço — ou talvez o melhor caminho seja entender isso e seguir
              em frente.
            </p>
            <p className="mt-8 font-display text-xl text-gold italic md:text-2xl">
              O primeiro passo é parar de agir no automático.
            </p>
            <CtaLink
              className="mt-11 w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              variant="outline"
            >
              Quero entender melhor minha situação
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* PARA QUEM É / TRANSPARÊNCIA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <Reveal>
            <p className="eyebrow">Para quem é</p>
            <h2 className="mt-5 text-[1.7rem] leading-[1.2] text-ink md:text-[2.2rem]">
              Este conteúdo pode fazer sentido para você se…
            </h2>
            <ul className="mt-9 space-y-5">
              {paraQuem.map((p) => (
                <li key={p} className="flex gap-4 text-[1rem] leading-[1.7] text-foreground/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/60">
                    <Check className="size-3 text-terracotta" aria-hidden />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[1.5rem] border border-border/70 bg-secondary/70 p-9 md:p-10">
              <p className="eyebrow">Transparência</p>
              <h2 className="mt-5 text-[1.35rem] text-ink md:text-[1.6rem]">
                E uma coisa importante:
              </h2>
              <p className="mt-5 text-[0.98rem] leading-[1.75] text-muted-foreground">
                Este conteúdo não promete controlar sentimentos de outra pessoa, nem garante que
                alguém vai voltar. O objetivo é oferecer conhecimento e direcionamento para que você
                possa entender melhor a situação e tomar decisões mais conscientes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONFIANÇA */}
      <section className="border-y border-border bg-sand/60">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Confiança</p>
            <h2 className="mt-5 text-[1.85rem] leading-[1.2] text-ink md:text-[2.5rem]">
              Por que não agir no impulso?
            </h2>
            <div className="mt-8 space-y-6 text-[1.03rem] leading-[1.8] text-muted-foreground">
              <p>
                Términos mexem com emoções fortes. Saudade, ansiedade e medo aparecem juntos e,
                muitas vezes, é justamente nesse estado que tomamos as decisões mais difíceis de
                desfazer.
              </p>
              <p>
                Buscar informação e organizar o pensamento antes de agir não muda o que a outra
                pessoa sente — mas ajuda você a escolher com mais calma o que fazer, o que dizer e
                quando simplesmente esperar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="mt-5 text-[1.85rem] leading-[1.2] text-ink md:text-[2.4rem]">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border/70">
                <AccordionTrigger className="py-6 text-left text-[1.02rem] text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[0.98rem] leading-[1.75] text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-t border-border bg-[image:var(--gradient-warm)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{ backgroundImage: "var(--texture-grain)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <Reveal>
            <span className="mx-auto block h-px w-16 bg-gold/70" aria-hidden />
            <h2 className="mt-10 text-[1.95rem] leading-[1.18] text-ink md:text-[2.7rem]">
              Talvez você não consiga controlar o que a outra pessoa sente.
              <span className="mt-4 block font-light text-wine italic">
                Mas pode escolher como vai agir daqui para frente.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-[1.03rem] leading-[1.8] text-muted-foreground">
              Se você quer entender melhor o que fazer depois de um término e parar de agir apenas
              pela ansiedade ou saudade, conheça o conteúdo.
            </p>
            <CtaLink className="mt-11 w-full sm:w-auto">Obter acesso ao conteúdo</CtaLink>
            <p className="mt-5 text-sm text-muted-foreground">
              Você será direcionado para o checkout seguro.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-12 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 — Todos os direitos reservados.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
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
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
