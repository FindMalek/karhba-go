import Link from "next/link"

import { StatusWidget } from "@/components/shared/status-widget"
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function UserDropdown() {
  return (
    <div>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href="/account" className="w-full">
          Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <StatusWidget />
      </DropdownMenuItem>
      <DropdownMenuSeparator />
    </div>
  )
}
