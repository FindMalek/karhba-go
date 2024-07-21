import React from "react";
import { getTranslations } from "next-intl/server";



import { siteConfig } from "@/config/site";



import { MarketingAboutAnalytics } from "@/components/app/marketing-about-analytics";
import { MarketingAboutAuth } from "@/components/app/marketing-about-auth";
import { MarketingAboutComponents } from "@/components/app/marketing-about-components";
import { MarketingAboutMarquee } from "@/components/app/marketing-about-marquee";
import { BentoCard, BentoGrid } from "@/components/fancy/bento-grid";
import { EvervaultCard } from "@/components/fancy/evervault-card";
import { Globe } from "@/components/fancy/globe";
import { GradientCircle } from "@/components/fancy/gradient-circle";
import { Icons } from "@/components/shared/icons";





const features = (t: (arg: string) => string) => [
  {
    Icon: Icons.lock,
    name: "Secure Authentication",
    description: "Ready-to-use, secure user authentication with Next Auth.",
    href: "https://next-auth.js.org",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <MarketingAboutAuth className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.graph,
    name: "Insightful Analytics",
    description: "Monitor your app's usage with LogSnag.",
    className: "col-span-3 lg:col-span-1",
    href: "https://logsnag.com",
    cta: "Learn more",
    background: (
      <MarketingAboutAnalytics className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.mail,
    name: "Email Integration",
    description: "Seamless email sending with Nodemailer and Gmail SMTP.",
    href: "https://nodemailer.com",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 row-span-1 lg:row-span-2",
    background: (
      <MarketingAboutMarquee className="absolute left-1/2 h-[600px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.puzzle,
    name: "Ready Components",
    description: "Variety of pre-built pages and UI components.",
    href: "/upcoming",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <MarketingAboutComponents className="absolute left-1/2 h-[200px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.databaseZap,
    name: "Database Management",
    description: "Efficient database handling with Prisma ORM.",
    className: "col-span-3 lg:col-span-1",
    href: "https://www.prisma.io/nextjs",
    cta: "Learn more",
    background: (
      <EvervaultCard className="absolute left-1/2 h-[200px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <Icons.prisma className="size-16" />
      </EvervaultCard>
    ),
  },
  {
    Icon: Icons.globe,
    name: "Global Reach",
    description:
      "Built-in support for multiple languages with Next Internationalization.",
    className: "col-span-3 lg:col-span-2",
    href: "https://next-intl-docs.vercel.app/",
    cta: "Learn more",
    background: (
      <Globe className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.blog,
    name: "Blog Pages",
    description:
      "Create, edit, and manage blog posts with static Markdown pages.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        Easily add and manage content with a built-in blogging system, complete
        with Markdown support for rich text formatting.
      </>
    ),
  },
  {
    Icon: Icons.zap,
    name: t("features.f-8.title"),
    description: t("features.f-8.description"),
    className: "col-span-3 lg:col-span-1",
    href: "https://imgsrc.io/tools/open-graph-debugger",
    cta: "Learn more",
    background: (
      <>
        Easily add and manage content with a built-in blogging system, complete
        with Markdown support for rich text formatting.
      </>
    ),
  },
  {
    Icon: Icons.copy,
    name: t("features.f-9.title"),
    description: t("features.f-9.description"),
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        Easily add and manage content with a built-in blogging system, complete
        with Markdown support for rich text formatting.
      </>
    ),
  },
  {
    Icon: Icons.toggleRight,
    name: t("features.f-10.title"),
    description: t("features.f-10.description"),
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        Easily add and manage content with a built-in blogging system, complete
        with Markdown support for rich text formatting.
      </>
    ),
  },
]

export async function MarketingAbout() {
  const t = await getTranslations("app.components.app.marketing-about")
  return (
    <GradientCircle>
      <h2 className="container mb-8 text-center text-xl font-normal">
        <span className="text-4xl font-semibold">{siteConfig.name}? </span>
        <br className="block lg:hidden" />
        {t("overview")}
      </h2>
      <BentoGrid className="container">
        {features(t).map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </GradientCircle>
  )
}