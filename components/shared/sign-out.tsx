"use client"

import { signOut } from "next-auth/react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

export function SignoutButton() {
  return (
    <DropdownMenuItem
      className="text-destructive hover:bg-destructive/30 hover:text-destructive-foreground cursor-pointer"
      onClick={() => {
        signOut()
      }}
    >
      Se déconnecter
    </DropdownMenuItem>
  )
}
