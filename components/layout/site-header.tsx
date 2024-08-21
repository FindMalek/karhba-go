import React from "react"
import { User } from "@prisma/client"

import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"

// TODO: Get inspired from Vercel & Tailwind UI for the 
// With centered search and secondary links
export function SiteHeader({ user }: { user: User | Boolean }) {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav user={user} />
        <MobileNav />
      </div>
    </header>
  )
}
