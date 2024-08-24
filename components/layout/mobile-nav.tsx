"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { User } from "@prisma/client"

import { navigationLinks } from "@/config/consts"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/shared/icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
    >
      {children}
    </Link>
  )
}

export function MobileNav({ user }: { user: User | Boolean }) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Icons.menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="min-h-screen data-[state=closed]:duration-0 data-[state=open]:duration-0"
          side="top"
        >
          <div className="mt-12 flow-root space-y-3">
            <Link href="/register" className={cn("w-full", buttonVariants())}>
              Inscription
            </Link>
            <Link
              href="/login"
              className={cn("w-full", buttonVariants({ variant: "outline" }))}
            >
              Connexion
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
