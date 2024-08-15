"use client"

import { signOut } from "next-auth/react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

export function SignoutButton() {
  return (
    <DropdownMenuItem
      className="cursor-pointer text-red-600"
      onClick={() => {
        signOut()
      }}
    >
      Se déconnecter
    </DropdownMenuItem>
  )
}
