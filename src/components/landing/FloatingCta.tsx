import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "./CtaLink";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-500 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={CHECKOUT_URL}
        className="flex min-h-12 items-center justify-center rounded-sm bg-wine/95 px-6 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-lift)] backdrop-blur"
      >
        Conhecer o guia →
      </a>
    </div>
  );
}
