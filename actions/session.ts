import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

export async function getAuthedUser() {
  const session = await getServerSession(authOptions)
  return session?.user ?? false
}
