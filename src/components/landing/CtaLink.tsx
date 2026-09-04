import { cn } from "@/lib/utils";

export const CHECKOUT_URL = "https://pay.kiwify.com.br/XFOECYi";

export function CtaLink({
  children,
  className,
  variant = "solid",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        "inline-flex min-h-13 items-center justify-center rounded-full px-8 py-4 text-center text-[0.95rem] font-medium tracking-wide transition-all duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "solid"
          ? "bg-wine text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-primary"
          : "border border-wine/25 bg-transparent text-wine hover:bg-wine/5",
        className,
      )}
    >
      {children}
    </a>
  );
}
