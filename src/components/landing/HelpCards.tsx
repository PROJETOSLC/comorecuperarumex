import { Reveal } from "./Reveal";

const cards = [
  {
    icon: "✻",
    t: "Entender o momento",
    d: "Enxergar com mais calma o que aconteceu antes de tomar qualquer decisão sobre a relação.",
  },
  {
    icon: "❦",
    t: "Evitar decisões no impulso",
    d: "Reconhecer atitudes comuns depois do término que costumam aumentar ainda mais a distância.",
  },
  {
    icon: "✦",
    t: "Enxergar os próximos passos",
    d: "Organizar o que depende de você, com mais clareza sobre como agir a partir de agora.",
  },
];

export function HelpCards() {
  return (
    <section className="bg-background px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Como o guia pode ajudar</p>
          <h2 className="mt-6 font-display text-[1.85rem] leading-[1.16] text-ink md:text-[2.6rem]">
            Três frentes para você{" "}
            <em className="display-italic text-wine">recuperar a clareza</em>
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[var(--hairline-gold)]" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 110}>
              <article className="group h-full rounded-sm border border-border/70 bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--gold)_55%,transparent)] hover:shadow-[var(--shadow-soft)] md:p-10">
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-[1.4rem] text-[var(--sand)] [background-image:var(--gradient-rose)]"
                >
                  {c.icon}
                </span>
                <h3 className="mt-7 font-display text-[1.25rem] leading-snug text-ink">{c.t}</h3>
                <p className="mt-4 text-[0.94rem] leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
