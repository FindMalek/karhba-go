import React from "react"
import Image from "next/image"
import { User } from "@prisma/client"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { MobileNav } from "@/components/layout/mobile-nav"
import {
  SiteAuthentification,
  SiteNavigation,
} from "@/components/layout/site-navigation"
import { Icons } from "@/components/shared/icons"
import { UserMenu } from "@/components/shared/user-menu"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader({ user }: { user: User | Boolean }) {
  return (
    <header className="bg-background sticky top-0 z-50 mx-auto max-w-7xl border-b px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="relative flex px-2 lg:px-0">
          <div className="flex shrink-0 items-center">
            <Icons.logo className="h-8 w-auto" />
            <span className="text-secondary-foreground ml-2 mt-2 font-bold">
              {siteConfig.name}
            </span>
          </div>
        </div>

        <div className="hidden w-full sm:max-w-xs lg:block">
          <div className="relative">
            <Icons.search className="text-muted-foreground absolute left-2 top-2.5 size-4" />
            <Input
              type="search"
              placeholder="Recherche..."
              className="w-full pl-8 lg:w-[400px]"
            />
          </div>
        </div>

        <MobileNav user={user} />

        <div className="hidden lg:block">
          {user ? (
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="small-icon"
                className="mr-4"
                aria-label="Notifications"
              >
                <Icons.bell className="text-muted-foreground size-6" />
              </Button>
              <UserMenu user={user as User}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Image
                    src={(user as User).image}
                    alt={(user as User).name!}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </Button>
              </UserMenu>
            </div>
          ) : (
            <SiteAuthentification />
          )}
        </div>
      </div>
    </header>
  )
}
