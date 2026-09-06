import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";
import { Wave } from "./Wave";

export function OfferSection() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-[var(--sand)]">
      <div className="text-background">
        <Wave flip />
      </div>

      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-8 md:px-10 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Acesso ao guia</p>
          <h2 className="mt-6 font-display text-[1.9rem] leading-[1.16] text-ink md:text-[2.7rem]">
            Acesso imediato, direto no{" "}
            <em className="display-italic text-wine">seu celular ou computador</em>.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-12 max-w-xl">
          <div className="relative rounded-sm border border-[color-mix(in_oklab,var(--gold)_50%,transparent)] bg-card p-9 text-center shadow-[var(--shadow-soft)] md:p-12">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              Guia digital completo
            </p>
            <p className="numeral mt-7 text-[3rem] leading-none text-wine md:text-[3.6rem]">
              R$ 47,90
            </p>
            <p className="mt-4 text-[0.9rem] text-muted-foreground">
              ou 6x de R$ 8,79 no cartão
            </p>
            <div className="mx-auto mt-8 h-px w-16 bg-[var(--hairline-gold)]" />
            <div className="mt-8">
              <CtaLink className="w-full">Quero o guia agora</CtaLink>
            </div>
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              Compra segura • Acesso enviado por e-mail
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
