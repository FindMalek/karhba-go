import { unstable_setRequestLocale } from "next-intl/server"

import { locales } from "@/config/consts"

import { MarketingHeader } from "@/components/layout/marketing-header"

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale)

  return (
    <main>
      <MarketingHeader />
      {children}
    </main>
  )
}
