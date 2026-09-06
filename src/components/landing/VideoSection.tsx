import { Reveal } from "./Reveal";
import { CtaLink } from "./CtaLink";
import { Wave } from "./Wave";

export function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden [background-image:var(--gradient-rose)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay [background-image:var(--texture-grain)]" />

      <div className="relative mx-auto max-w-[1080px] px-5 pb-4 pt-20 text-center md:px-10 md:pt-28">
        <Reveal>
          <p className="eyebrow text-[var(--champagne)]">Assista antes de decidir</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[1.9rem] leading-[1.16] text-[var(--sand)] md:text-[2.9rem]">
            Entenda, em poucos minutos, o que costuma{" "}
            <em className="display-italic text-[var(--champagne)]">acontecer depois do término</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-[var(--sand)]/75">
            Assista ao vídeo abaixo com calma. Ele explica a proposta do guia e ajuda você a decidir
            se faz sentido para o seu momento.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mx-auto mt-11 aspect-video w-full overflow-hidden rounded-sm border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-espresso shadow-[var(--shadow-lift)]">
            <iframe
              title="Vídeo de apresentação do guia Como Recuperar o Ex"
              src="https://scripts.converteai.net/81db61c3-5fb5-4dab-bb13-1e366ad766fc/players/62f910cda90dbc000a0e8fc5/embed.html"
              className="absolute left-0 top-0 h-full w-full"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="origin"
              style={{ border: 0 }}
            />
          </div>

          <p className="mt-5 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--sand)]/55">
            Verifique se o som do seu aparelho está ligado
          </p>

          <div className="mt-9">
            <CtaLink variant="light" className="w-full sm:w-auto">
              Quero conhecer o guia
            </CtaLink>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 text-background">
        <Wave />
      </div>
    </section>
  );
}
