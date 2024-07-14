import React from "react"

export function GradientCircle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="after:bg-background pointer-events-none relative -z-10 mx-auto my-[-14.5rem] h-[45rem] overflow-hidden pt-28 [--color:theme(colors.sky.500)] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:size-full before:opacity-60 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_50%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))]" />
      {children}
      <div className="after:bg-background pointer-events-none relative -z-10 mx-auto my-[-18.8rem] h-[45rem] rotate-180 overflow-hidden [--color:theme(colors.sky.500)] [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:size-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))]" />
    </>
  )
}
