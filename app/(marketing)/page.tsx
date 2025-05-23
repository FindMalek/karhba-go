import { MarketingCallToAction } from "@/components/app/marketing-call-to-action"
import { MarketingFAQs } from "@/components/app/marketing-faqs"
import { MarketingHero } from "@/components/app/marketing-hero"

export default async function Home() {
  return (
    <div>
      <MarketingHero />
      <MarketingCallToAction />
      <MarketingFAQs />
    </div>
  )
}
