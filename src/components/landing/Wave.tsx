import { cn } from "@/lib/utils";

/** Divisor em onda suave, inspirado em layouts editoriais modernos. */
export function Wave({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-[60px] w-full md:h-[110px]", flip && "rotate-180", className)}
    >
      <path
        fill="currentColor"
        d="M0,64 C180,120 340,8 540,26 C740,44 860,120 1060,104 C1240,90 1340,36 1440,20 L1440,120 L0,120 Z"
      />
    </svg>
  );
}
