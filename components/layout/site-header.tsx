"use client"

import React from "react"
import Image from "next/image"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { User } from "@prisma/client"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/shared/icons"
import { UserMenu } from "@/components/shared/user-menu"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

export function SiteHeader({ user }: { user: User | Boolean }) {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="lg:divide-secondary mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex shrink-0 items-center">
                  <Icons.logo className="h-8 w-auto" />
                  <span className="text-secondary-foreground ml-2 mt-2 hidden font-bold md:block">
                    {siteConfig.name}
                  </span>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Recherche...
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Icons.search
                        className="text-secondary-foreground/50 size-5"
                        aria-hidden="true"
                      />
                    </div>
                    <Input
                      id="search"
                      name="search"
                      placeholder="Recherche..."
                      type="search"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                <DisclosureButton
                  className={cn(
                    "relative inline-flex items-center justify-center",
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })
                  )}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <Icons.close className="block size-6" aria-hidden="true" />
                  ) : (
                    <Icons.menu className="block size-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="hidden gap-x-8 lg:relative lg:ml-4 lg:flex lg:items-center">
                {/* <Button
                  size={"icon"}
                  variant={"ghost"}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <Icons.bell className="size-6" aria-hidden="true" />
                </Button> */}
                <div className="relative ml-4 shrink-0">
                  <UserMenu
                    user={user as User} /* className="relative ml-4 shrink-0" */
                  >
                    <Image
                      src={(user as User).image}
                      alt="Profile image"
                      className="size-8 cursor-pointer rounded-full object-cover transition-all duration-300 hover:border-4"
                      width={300}
                      height={300}
                    />
                  </UserMenu>
                </div>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <DisclosurePanel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <Image
                    className="size-8 rounded-full"
                    src={(user as User).image}
                    alt={(user as User).email}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {(user as User).name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {(user as User).email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <Icons.bell className="size-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

{
  /* <div className="container flex h-14 max-w-screen-2xl items-center">
<MainNav user={user} />
<MobileNav />
</div> */
}
