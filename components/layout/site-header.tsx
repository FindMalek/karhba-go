import React from "react"
import { User } from "@prisma/client"

import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader({ user }: { user: User | Boolean }) {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav user={user} />
        <MobileNav />
        {/**
         * TODO: Add a SearchIcon for the mobile only
         */}
      </div>
    </header>
  )
}
