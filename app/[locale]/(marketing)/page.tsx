import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

import { siteConfig } from "@/config/site"

import { MarketingWaitlistForm } from "@/components/app/marketing-waitlist-form"
import { BackgroundBeams } from "@/components/fancy/background-beams"
import { MarketingHero } from "@/components/app/marketing-hero"

export async function generateMetadata() {
  const t = await getTranslations("app.pages.home")

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${siteConfig.name} | ${t("title")}`,
      description: t("description"),
      images: [
        {
          url: `${siteConfig.url}/opengraph/waitlist.png`,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${t("title")}`,
      description: siteConfig.description,
      images: [`${siteConfig.url}/opengraph/waitlist.png`],
      creator: "@findmalek",
    },
  }
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations("app.pages.home")

  return (
    <div >
      <MarketingHero />
    </div>
  )
}
