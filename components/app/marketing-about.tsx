import React from "react"

import { MarketingAboutAuth } from "@/components/app/marketing-about-auth"
import { BentoCard, BentoGrid } from "@/components/fancy/bento-grid"
import { GradientCircle } from "@/components/fancy/gradient-circle"
import { Icons } from "@/components/shared/icons"

const features = [
  {
    Icon: Icons.lock,
    name: "Secure Authentication",
    description: "Ready-to-use, secure user authentication with Next Auth.",
    href: "https://next-auth.js.org/",
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
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        Track user interactions and gather valuable insights to improve your
        application.
      </>
    ),
  },
  {
    Icon: Icons.mail,
    name: "Email Integration",
    description: "Seamless email sending with Nodemailer and Gmail SMTP.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <>Send transactional emails, notifications, and more without hassle.</>
    ),
  },
  {
    Icon: Icons.puzzle,
    name: "Ready Components",
    description: "Variety of pre-built pages and UI components.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <>
        Speed up your development with customizable, pre-designed pages and
        components.
      </>
    ),
  },
  {
    Icon: Icons.globe,
    name: "Global Reach",
    description:
      "Built-in support for multiple languages with Next Internationalization.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        Easily add and manage translations to make your app accessible to a
        global audience.
      </>
    ),
  },

  {
    Icon: Icons.databaseZap,
    name: "Database Management",
    description: "Efficient database handling with Prisma ORM.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <>Simplify your database interactions with powerful Prisma tools. </>
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
]

export function MarketingAbout() {
  return (
    <GradientCircle>
      <BentoGrid className="container">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </GradientCircle>
  )
}
