import Image from "next/image"
import Link from "next/link"
import { User } from "@prisma/client"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "@/components/shared/icons"
import { UserMenu } from "@/components/shared/user-menu"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MainNav({ user }: { user: User | Boolean }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex grow items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="size-6" />
          <span className="hidden font-semibold lg:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      <div className="relative grow">
        <Icons.search className="text-secondary-foreground/50 absolute left-3 top-1/2 size-4 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Suzuki Swift..."
          className="w-full max-w-md pl-10"
        />
      </div>

      <div className="flex grow items-center justify-end space-x-4">
        {user === false || (user as User).verified === false ? (
          <Link
            href="/register"
            className={cn("hidden space-x-1 sm:inline-flex", buttonVariants())}
          >
            <span>Commencez</span>
            <Icons.chevronRight className="size-4" />
          </Link>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              {(user as User).type === "AGENCY" && (
                <Link href="/course/add-course">
                  <Icons.folderPlus
                    className={cn(
                      "text-secondary-foreground/80 size-5",
                      buttonVariants({
                        size: "small-icon",
                        variant: "ghost",
                      })
                    )}
                  />
                </Link>
              )}
              {(user as User).type === "CLIENT" && (
                <>
                  <Link href="/favourite">
                    <Icons.heart
                      className={cn(
                        "text-secondary-foreground/80 size-5",
                        buttonVariants({
                          size: "small-icon",
                          variant: "ghost",
                        })
                      )}
                    />
                  </Link>
                  <Link href="/cart">
                    <Icons.cart
                      className={cn(
                        "text-secondary-foreground/80 size-5",
                        buttonVariants({
                          size: "small-icon",
                          variant: "ghost",
                        })
                      )}
                    />
                  </Link>
                </>
              )}
              <Link href="/notifications">
                <Icons.bell
                  className={cn(
                    "text-secondary-foreground/80 size-5",
                    buttonVariants({
                      size: "small-icon",
                      variant: "ghost",
                    })
                  )}
                />
              </Link>
              <UserMenu user={user as User}>
                <Image
                  src={(user as User).image!}
                  alt="Profile image"
                  className="size-8 cursor-pointer rounded-full object-cover transition-all duration-300 hover:border-4"
                  width={300}
                  height={300}
                />
              </UserMenu>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
