import { cn } from "@/lib/utils"

export function TextAnimatedGradient({
  text,
  className,
}: {
  className?: string
  text: string
}) {
  return (
    <span
      className={cn(
        "animate-text-gradient inline-flex bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </span>
  )
}
