"use client"

import { Link, usePathname } from "@navigation"

import { siteConfig } from "@/config/site"
import {navigationLinks} from "@/config/consts"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/shared/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="size-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={cn(
              "hover:text-foreground/80 transition-colors",
              pathname === link.path ? "text-foreground" : "text-foreground/60"
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
