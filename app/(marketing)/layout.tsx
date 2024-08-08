import { locales } from "@/config/consts"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <main>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  )
}
