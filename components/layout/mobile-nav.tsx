
import * as React from "react"
import Link from "next/link"
import { navMobileLinks } from "@/data/navigations"
import { User } from "@prisma/client"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/shared/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
          <Accordion type="single" collapsible className="w-full pt-4">
            {navMobileLinks.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="-px-2 -mx-2 border-b-0"
              >
                <AccordionTrigger className="transition-color bg-background text-muted-foreground hover:bg-muted rounded-md px-4 text-lg font-semibold hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {item.links.map((link, linkIndex) => (
                    <Link
                      href={link.href}
                      key={linkIndex}
                      className="transition-color bg-background text-muted-foreground hover:bg-muted group flex min-w-full items-center space-x-2 rounded-md p-4 text-lg font-semibold hover:no-underline"
                    >
                      <link.icon className="group-hover:text-primary size-6 group-hover:transition-all group-hover:duration-300" />
                      <span className="text-muted-foreground group-hover:text-secondary-foreground group-hover:transition-all group-hover:duration-300">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Separator className="my-5" />
          hello
          <Separator className="my-5" />
        </SheetContent>
      </Sheet>
    </div>
  )
}
