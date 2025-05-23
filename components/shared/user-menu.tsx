import Link from "next/link"
import { User } from "@prisma/client"

import { signOut } from "@/lib/auth"

import { RoleBadge } from "@/components/shared/role-badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

async function handleSignOut() {
  "use server"
  await signOut()
}

export function UserMenu({
  user,
  children,
}: {
  user: User
  children?: React.ReactNode
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[250px]">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <p className="text-muted-foreground px-2 text-sm">{user.email}</p>
        <RoleBadge role={user.type} />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/account" className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={handleSignOut}>
          <DropdownMenuItem className="text-destructive hover:bg-destructive/30 hover:text-destructive-foreground cursor-pointer">
            Se déconnecter
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function UserMenuIconDropdown({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar className="size-9">
            <AvatarImage src={user.image!} />
            <AvatarFallback>{user.name![0]}</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[250px]">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <p className="text-muted-foreground px-2 text-sm">{user.email}</p>
        <RoleBadge role={user.type} />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/account" className="w-full">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={handleSignOut}>
          <DropdownMenuItem className="text-destructive hover:bg-destructive/30 hover:text-destructive-foreground cursor-pointer">
            Se déconnecter
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function UserMenuDropdown({ user }: { user: User }) {
  return (
    <div className="flex items-center justify-between px-2 pb-4">
      <div>
        <p className="text-base font-medium leading-none">{user.name}</p>
        <p className="text-muted-foreground text-sm font-light">{user.email}</p>
      </div>
      <Avatar className="size-5">
        <AvatarImage src={user.image} />
        <AvatarFallback>{user.email[0]}</AvatarFallback>
      </Avatar>
    </div>
  )
}
