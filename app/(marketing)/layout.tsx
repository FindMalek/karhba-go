import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

import { getAuthedUser } from "@/actions/session"

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await getAuthedUser()

  return (
    <main>
      <SiteHeader user={user} />
      {children}
      <SiteFooter />
    </main>
  )
}
