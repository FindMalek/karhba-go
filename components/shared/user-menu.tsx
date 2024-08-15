import { User } from "@prisma/client"

import { RoleBadge } from "@/components/shared/role-badge"
import { SignoutButton } from "@/components/shared/sign-out"
import { UserDropdown } from "@/components/shared/user-dropdown"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
        <DropdownMenuLabel>
          {user.first_name} {user.last_name}
        </DropdownMenuLabel>
        <p className="text-muted-foreground px-2 text-sm">{user.email}</p>
        <RoleBadge role={user.role} />
        <UserDropdown />
        <SignoutButton />
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
            <AvatarFallback>{user.username![0]}</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[250px]">
        <DropdownMenuLabel>
          {user.first_name} {user.last_name}
        </DropdownMenuLabel>
        <p className="text-muted-foreground px-2 text-sm">{user.email}</p>
        <RoleBadge role={user.role} />
        <UserDropdown />
        <SignoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
