import { createFileRoute } from "@tanstack/react-router";

import heroWindow from "@/assets/hero-window.jpg";
import productMockup from "@/assets/product-mockup.jpg";
import emotionalWide from "@/assets/emotional-wide.jpg";
import quietDetail from "@/assets/quiet-detail.jpg";

import { CtaLink, CHECKOUT_URL } from "@/components/landing/CtaLink";
import { FloatingCta } from "@/components/landing/FloatingCta";
import { Reveal } from "@/components/landing/Reveal";
import { useParallax } from "@/components/landing/Parallax";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Como Recuperar o Ex | Entenda o Que Fazer Depois do Término" },
      {
        name: "description",
        content:
          "Um guia digital para quem ainda tem sentimentos pelo ex e quer entender melhor como agir depois de um término.",
      },
      {
        property: "og:title",
        content: "Como Recuperar o Ex | Entenda o Que Fazer Depois do Término",
      },
      {
        property: "og:description",
        content:
          "Um guia digital para quem ainda tem sentimentos pelo ex e quer entender melhor como agir depois de um término.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Como Recuperar o Ex | Entenda o Que Fazer Depois do Término",
      },
      {
        name: "twitter:description",
        content:
          "Um guia digital para quem ainda tem sentimentos pelo ex e quer entender melhor como agir depois de um término.",
      },
    ],
  }),
  component: Landing,
});

const situacoes = [
  "Você abre a conversa e pensa em mandar mensagem.",
  "Você tenta entender onde tudo começou a dar errado.",
  "Você se pergunta se deveria dar espaço.",
  "Você vê algo que lembra aquela pessoa.",
  "Você pensa: e se eu tivesse feito diferente?",
];

const conteudos = [
  { n: "01", t: "Entender o momento do término", d: "Enxergar com mais calma o que aconteceu antes de decidir qualquer coisa." },
  { n: "02", t: "Identificar comportamentos que podem afastar ainda mais", d: "Reconhecer atitudes comuns que costumam aumentar a distância." },
  { n: "03", t: "Saber quando agir e quando dar espaço", d: "Diferenciar o impulso do momento de uma decisão pensada." },
  { n: "04", t: "Entender melhor a comunicação", d: "Perceber como o tom e o timing mudam o sentido de uma conversa." },
  { n: "05", t: "Evitar erros comuns depois do término", d: "Situações que se repetem e podem ser evitadas com clareza." },
  { n: "06", t: "Ter mais clareza sobre os próximos passos", d: "Organizar o que depende de você e o que não depende." },
];

const paraQuem = [
  "Ainda pensa nessa pessoa todos os dias",
  "Não sabe se deve procurar ou esperar",
  "Tem medo de tomar uma atitude errada",
  "Ainda acredita que existe algo a ser resolvido",
  "Quer entender melhor o que fazer depois do término",
];

const faq = [
  {
    q: "Como recebo o conteúdo?",
    a: "Após a conclusão da compra, você recebe o acesso ao conteúdo digital por e-mail, na plataforma de entrega do checkout.",
  },
  {
    q: "É um produto físico?",
    a: "Não. É um conteúdo digital, feito para ser lido no celular, tablet ou computador.",
  },
  {
    q: "Preciso falar com meu ex imediatamente?",
    a: "Não. O guia existe justamente para ajudar você a pensar antes de agir e a entender o momento com mais calma.",
  },
  {
    q: "O conteúdo garante que meu ex vai voltar?",
    a: "Não. Nenhum conteúdo pode controlar a decisão de outra pessoa. A proposta é ajudar você a compreender o momento e agir com mais clareza.",
  },
  {
    q: "Quando recebo o acesso?",
    a: "O acesso é liberado logo após a confirmação do pagamento pelo checkout.",
  },
];

function Landing() {
  const heroImg = useParallax(28);
  const wideImg = useParallax(22);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Topbar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-5 md:px-10">
          <span className="font-display text-[0.95rem] tracking-[0.16em] uppercase text-wine">
            Recuperar<span className="text-[var(--gold)]">.</span>
          </span>
          <a
            href={CHECKOUT_URL}
            className="hidden text-[0.68rem] font-medium uppercase tracking-[0.22em] text-wine transition-colors duration-300 hover:text-terracotta md:inline-block"
          >
            Conhecer o guia
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-[100svh] w-full overflow-hidden pt-14">
          <div ref={heroImg.ref} className="absolute inset-0">
            <img
              src={heroWindow}
              alt="Mulher sentada sozinha junto à janela de um apartamento, em um momento de reflexão"
              width={1600}
              height={1920}
              className="h-[112%] w-full object-cover object-[62%_center]"
              style={{ transform: `translate3d(0, ${-heroImg.offset}px, 0)` }}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.19_0.02_45/0.86)_0%,oklch(0.19_0.02_45/0.6)_42%,oklch(0.19_0.02_45/0.15)_75%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.17_0.018_45/0.75),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay [background-image:var(--texture-grain)]" />

          <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-[1240px] flex-col justify-end px-5 pb-16 pt-24 md:justify-center md:px-10 md:pb-24">
            <div className="max-w-[46rem]">
              <Reveal>
                <p className="eyebrow text-[var(--gold)]">
                  Um guia para quem ainda não conseguiu se desligar
                </p>
                <div className="mt-5 h-px w-16 bg-[var(--hairline-gold)] opacity-70" />
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-7 font-display text-[2.15rem] leading-[1.1] text-[var(--sand)] sm:text-5xl md:text-[4.1rem] md:leading-[1.06]">
                  Talvez você não queira esquecer seu ex.
                  <span className="mt-3 block">
                    Talvez você só queira saber se{" "}
                    <em className="display-italic text-[var(--champagne)]">
                      ainda existe uma chance
                    </em>
                    .
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-[var(--sand)]/75 md:text-[1.05rem]">
                  Antes de mandar aquela mensagem, tomar uma decisão ou tentar recomeçar, entenda o
                  que pode estar acontecendo.
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <CtaLink className="w-full sm:w-auto">Quero entender o que fazer agora</CtaLink>
                  <a
                    href="#conteudo"
                    className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--sand)]/70 underline-offset-8 transition-colors duration-300 hover:text-[var(--champagne)] hover:underline"
                  >
                    Conhecer o conteúdo ↓
                  </a>
                </div>
                <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--sand)]/50">
                  Conteúdo digital • Acesso imediato
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2 — IDENTIFICAÇÃO */}
        <section className="relative overflow-hidden bg-[var(--gradient-warm)] px-5 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-14 md:grid-cols-12 md:gap-16">
              <Reveal className="md:col-span-6">
                <p className="eyebrow">Identificação</p>
                <h2 className="mt-6 font-display text-[1.85rem] leading-[1.18] text-ink md:text-[2.7rem] md:leading-[1.14]">
                  Você não sente falta apenas da pessoa.{" "}
                  <em className="display-italic text-wine">
                    Sente falta de tudo o que imaginou que viveria com ela.
                  </em>
                </h2>
                <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
                  A rotina continua, mas alguma parte do dia ainda pertence a essa história. E é
                  justamente aí que costumam nascer as decisões tomadas no impulso.
                </p>
              </Reveal>

              <div className="md:col-span-6">
                <ul className="space-y-0">
                  {situacoes.map((s, i) => (
                    <Reveal as="li" key={s} delay={i * 80}>
                      <div className="group flex items-baseline gap-6 border-t border-border/70 py-6 transition-colors duration-300 hover:border-[color-mix(in_oklab,var(--gold)_60%,transparent)] md:py-7">
                        <span className="numeral text-sm text-terracotta/70 transition-colors duration-300 group-hover:text-terracotta">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-serif-alt text-[1.05rem] leading-snug text-ink/85 transition-transform duration-300 group-hover:translate-x-1 md:text-[1.2rem]">
                          {s}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                  <li className="border-t border-border/70" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3 — FRASE DE IMPACTO */}
        <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-[var(--gradient-wine)] px-5 py-28 md:px-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay [background-image:var(--texture-grain)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mx-auto h-px w-20 bg-[var(--hairline-gold)] opacity-70" />
              <h2 className="mt-10 font-display text-[1.95rem] leading-[1.2] text-[var(--sand)] md:text-[3.1rem] md:leading-[1.15]">
                O problema não é sentir.
                <span className="mt-3 block">
                  É <em className="display-italic text-[var(--champagne)]">não saber o que fazer</em>{" "}
                  com o que você está sentindo.
                </span>
              </h2>
              <p className="mx-auto mt-10 max-w-xl text-[0.98rem] leading-relaxed text-[var(--sand)]/65">
                Depois de um término, agir pela saudade pode parecer natural. Mas nem toda atitude
                que traz alívio naquele momento ajuda a construir uma possível reaproximação.
              </p>
              <div className="mx-auto mt-12 h-px w-20 bg-[var(--hairline-gold)] opacity-70" />
            </Reveal>
          </div>
        </section>

        {/* 4 — PRODUTO */}
        <section id="guia" className="bg-background px-5 py-24 md:px-10 md:py-36">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 md:grid-cols-2 md:gap-20">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-3 -z-10 border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] md:-inset-5" />
                <img
                  src={productMockup}
                  alt="Guia digital Como Recuperar o Ex apoiado em uma superfície de linho, com páginas internas ao lado"
                  loading="lazy"
                  width={1408}
                  height={1408}
                  className="w-full object-cover shadow-[var(--shadow-lift)]"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow">O guia</p>
              <h2 className="mt-6 font-display text-[1.85rem] leading-[1.16] text-ink md:text-[2.6rem]">
                Um guia para você{" "}
                <em className="display-italic text-wine">parar de agir no impulso</em>.
              </h2>
              <p className="mt-7 text-[0.98rem] leading-relaxed text-muted-foreground">
                Como Recuperar o Ex é um guia digital criado para ajudar você a compreender melhor o
                momento depois de um término, organizar seus próximos passos e evitar comportamentos
                que podem dificultar ainda mais uma possível reaproximação.
              </p>
              <div className="mt-8 h-px w-full bg-border" />
              <dl className="mt-8 grid grid-cols-2 gap-6 text-[0.78rem] uppercase tracking-[0.16em] text-muted-foreground">
                <div>
                  <dt className="text-terracotta/80">Formato</dt>
                  <dd className="mt-2 tracking-normal text-ink normal-case">Conteúdo digital</dd>
                </div>
                <div>
                  <dt className="text-terracotta/80">Acesso</dt>
                  <dd className="mt-2 tracking-normal text-ink normal-case">Imediato após a compra</dd>
                </div>
              </dl>
              <div className="mt-10">
                <CtaLink className="w-full sm:w-auto">Quero conhecer o guia</CtaLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5 — TIMELINE */}
        <section id="conteudo" className="bg-[var(--sand)] px-5 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1240px]">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">O que você vai encontrar</p>
              <h2 className="mt-6 font-display text-[1.85rem] leading-[1.16] text-ink md:text-[2.7rem]">
                O que muda quando você deixa de agir{" "}
                <em className="display-italic text-wine">pela ansiedade</em>?
              </h2>
            </Reveal>

            <div className="mt-14 border-t border-ink/10">
              {conteudos.map((c, i) => (
                <Reveal key={c.n} delay={i * 60}>
                  <div className="group grid grid-cols-1 gap-3 border-b border-ink/10 py-8 transition-colors duration-300 hover:bg-background/60 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10 md:pl-4">
                    <span className="numeral col-span-1 text-sm text-terracotta md:col-span-1">
                      {c.n}
                    </span>
                    <h3 className="col-span-1 font-display text-[1.25rem] leading-snug text-ink transition-transform duration-300 group-hover:translate-x-1 md:col-span-6 md:text-[1.5rem]">
                      {c.t}
                    </h3>
                    <p className="col-span-1 text-[0.92rem] leading-relaxed text-muted-foreground md:col-span-5">
                      {c.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — EMOCIONAL */}
        <section className="bg-background px-0 py-20 md:py-32">
          <div className="mx-auto max-w-[1400px] md:pr-10">
            <div ref={wideImg.ref} className="relative w-full overflow-hidden md:w-[80%]">
              <img
                src={emotionalWide}
                alt="Pessoa caminhando sozinha por uma rua tranquila ao entardecer"
                loading="lazy"
                width={1920}
                height={1088}
                className="h-[70svh] w-full scale-105 object-cover md:h-[78svh]"
                style={{ transform: `translate3d(0, ${-wideImg.offset * 0.4}px, 0) scale(1.06)` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.17_0.018_45/0.72),oklch(0.17_0.018_45/0.25))]" />

              <div className="absolute inset-0 flex items-center px-5 md:px-16">
                <Reveal className="max-w-lg border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-[oklch(0.19_0.02_45/0.35)] p-7 backdrop-blur-[3px] md:p-11">
                  <h2 className="font-display text-[1.5rem] leading-[1.22] text-[var(--sand)] md:text-[2.1rem]">
                    Talvez a história ainda não tenha terminado.
                    <span className="mt-2 block display-italic text-[var(--champagne)]">
                      Ou talvez você precise entender como seguir em frente.
                    </span>
                  </h2>
                  <p className="mt-6 text-[0.95rem] leading-relaxed text-[var(--sand)]/75">
                    Você não precisa descobrir tudo hoje. Mas pode começar entendendo o que fazer a
                    partir de agora.
                  </p>
                  <div className="mt-8">
                    <CtaLink variant="light">Quero entender melhor</CtaLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 7 — PARA QUEM É */}
        <section className="bg-background px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 md:grid-cols-12 md:gap-20">
            <Reveal className="md:col-span-7">
              <p className="eyebrow">Para quem é</p>
              <h2 className="mt-6 font-display text-[1.85rem] leading-[1.16] text-ink md:text-[2.6rem]">
                Feito para quem está tentando entender{" "}
                <em className="display-italic text-wine">o que aconteceu</em>.
              </h2>
              <p className="mt-8 text-[0.8rem] uppercase tracking-[0.2em] text-terracotta">
                Talvez seja para você se…
              </p>
              <ul className="mt-6 space-y-0">
                {paraQuem.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-4 border-b border-border/70 py-5 text-[1rem] leading-relaxed text-ink/85"
                  >
                    <span className="mt-[0.35rem] text-[var(--gold)]">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140} className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 -z-10 border border-border md:-inset-4" />
                <img
                  src={quietDetail}
                  alt="Mãos segurando uma xícara ao lado de uma carta escrita à mão e flores secas"
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="w-full object-cover shadow-[var(--shadow-soft)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8 — TRANSPARÊNCIA */}
        <section className="bg-[var(--sand)] px-5 py-24 md:px-10 md:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-px w-16 bg-[var(--hairline-gold)]" />
            <p className="eyebrow mt-8">Transparência</p>
            <h2 className="mt-6 font-display text-[1.9rem] leading-[1.16] text-ink md:text-[2.8rem]">
              Sem <em className="display-italic text-wine">promessas impossíveis</em>.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-serif-alt text-[1.1rem] leading-relaxed text-ink/75 md:text-[1.25rem]">
              Ninguém pode controlar o sentimento ou a decisão de outra pessoa. Por isso, este
              conteúdo não promete que seu ex vai voltar.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
              A proposta é diferente: ajudar você a compreender melhor o momento, evitar decisões
              impulsivas e enxergar seus próximos passos com mais clareza.
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-[var(--hairline-gold)]" />
          </Reveal>
        </section>

        {/* 9 — FAQ */}
        <section className="bg-background px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-12 md:gap-20">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">Dúvidas</p>
              <h2 className="mt-6 font-display text-[1.75rem] leading-[1.16] text-ink md:text-[2.3rem]">
                Perguntas <em className="display-italic text-wine">frequentes</em>
              </h2>
            </Reveal>

            <Reveal delay={120} className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((f, i) => (
                  <AccordionItem key={f.q} value={`i-${i}`} className="border-b border-border/70">
                    <AccordionTrigger className="py-6 text-left font-display text-[1.05rem] text-ink hover:no-underline md:text-[1.2rem]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-7 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* 10 — CTA FINAL */}
        <section className="relative overflow-hidden bg-[var(--gradient-wine)] px-5 py-28 md:px-10 md:py-40">
          <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay [background-image:var(--texture-grain)]" />
          <Reveal className="relative mx-auto max-w-3xl text-center">
            <p className="eyebrow text-[var(--gold)]">Antes do próximo passo</p>
            <h2 className="mt-8 font-display text-[2rem] leading-[1.14] text-[var(--sand)] md:text-[3.4rem] md:leading-[1.1]">
              Você não pode escolher o que a outra pessoa sente.
              <span className="mt-3 block display-italic text-[var(--champagne)]">
                Mas pode escolher como vai agir.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-[0.98rem] leading-relaxed text-[var(--sand)]/70">
              Se você quer entender melhor o que fazer depois de um término, conheça o guia.
            </p>
            <div className="mt-11 flex flex-col items-center gap-5">
              <CtaLink variant="light" className="w-full sm:w-auto">
                Obter acesso ao guia
              </CtaLink>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--sand)]/45">
                Você será direcionado para um checkout seguro.
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[var(--espresso)] px-5 py-14 md:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 text-[0.78rem] text-[var(--sand)]/45 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-[0.95rem] uppercase tracking-[0.16em] text-[var(--sand)]/80">
            Recuperar<span className="text-[var(--gold)]">.</span>
          </span>
          <p className="max-w-md leading-relaxed">
            Conteúdo digital de caráter informativo. Não substitui acompanhamento profissional de
            saúde mental.
          </p>
          <span>© {new Date().getFullYear()} Como Recuperar o Ex</span>
        </div>
      </footer>

      <FloatingCta />
    </div>
  );
}
