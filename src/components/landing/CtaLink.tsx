import { cn } from "@/lib/utils";

export const CHECKOUT_URL = "https://pay.kiwify.com.br/nCtiEXI";

export function CtaLink({
  children,
  className,
  variant = "solid",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "light";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        "group relative inline-flex min-h-13 items-center justify-center overflow-hidden rounded-sm px-9 py-4 text-center text-[0.82rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "solid" &&
          "bg-wine text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-lift)]",
        variant === "outline" &&
          "border border-wine/30 text-wine hover:border-wine/60 hover:bg-wine/[0.04]",
        variant === "light" &&
          "border border-[color-mix(in_oklab,var(--gold)_55%,transparent)] bg-transparent text-[var(--sand)] hover:bg-[color-mix(in_oklab,var(--gold)_14%,transparent)]",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--hairline-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}
