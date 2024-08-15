import { Role } from "@prisma/client"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/shared/icons"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

export function RoleBadge({ role }: { role: Role }) {
  return (
    <Badge variant="outline" className="absolute right-2 top-2 font-medium">
      {role === "ADMIN" && (
        <div>
          <Icons.shield
            className={cn(
              buttonVariants({ variant: "link", size: "icon" }),
              "text-muted-foreground size-4 pr-1"
            )}
          />
          Admin
        </div>
      )}
      {role === "STUDENT" && (
        <div>
          <Icons.user
            className={cn(
              buttonVariants({ variant: "link", size: "icon" }),
              "text-muted-foreground size-4 pr-1"
            )}
          />
          Étudiant
        </div>
      )}
      {role === "INSTRUCTOR" && (
        <div>
          <Icons.pencil
            className={cn(
              buttonVariants({ variant: "link", size: "icon" }),
              "text-muted-foreground size-4 pr-1"
            )}
          />
          Formateur
        </div>
      )}
    </Badge>
  )
}
