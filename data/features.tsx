import { MarketingAboutAnalytics } from "@/components/app/marketing-about-analytics"
import { MarketingAboutAuth } from "@/components/app/marketing-about-auth"
import { MarketingAboutBlogs } from "@/components/app/marketing-about-blogs"
import { MarketingAboutComponents } from "@/components/app/marketing-about-components"
import { MarketingAboutMarquee } from "@/components/app/marketing-about-marquee"
import { MarketingAboutSeo } from "@/components/app/marketing-about-seo"
import { EvervaultCard } from "@/components/fancy/evervault-card"
import { Globe } from "@/components/fancy/globe"
import { Icons } from "@/components/shared/icons"

export const features = [
  {
    Icon: Icons.lock,
    name: "Sécurité renforcée",
    description: "Vos données et transactions sont protégées par des protocoles de sécurité avancés.",
    href: "https://next-auth.js.org",
    cta: "En savoir plus",
    className: "col-span-3 lg:col-span-1",
    background: (
      <MarketingAboutAuth className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.graph,
    name: "Analyses et rapports",
    description: "Suivez les performances de votre flotte grâce à des analyses détaillées.",
    className: "col-span-3 lg:col-span-1",
    href: "https://logsnag.com",
    cta: "En savoir plus",
    background: (
      <MarketingAboutAnalytics className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.mail,
    name: "Communication facile",
    description: "Communiquez directement avec les clients via notre système de messagerie intégré.",
    href: "https://nodemailer.com",
    cta: "En savoir plus",
    className: "col-span-3 lg:col-span-1 row-span-1 lg:row-span-2",
    background: (
      <MarketingAboutMarquee className="absolute left-1/2 h-[600px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.puzzle,
    name: "Gestion simplifiée",
    description: "Gérez vos annonces et réservations en toute simplicité grâce à une interface intuitive.",
    href: "/upcoming",
    cta: "En savoir plus",
    className: "col-span-3 lg:col-span-1",
    background: (
      <MarketingAboutComponents className="absolute left-1/2 h-[200px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.databaseZap,
    name: "Performances optimisées",
    description: "Profitez d'une plateforme rapide et fiable, optimisée pour des performances maximales.",
    className: "col-span-3 lg:col-span-1",
    href: "https://www.prisma.io/nextjs",
    cta: "En savoir plus",
    background: (
      <EvervaultCard className="absolute left-1/2 h-[200px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <Icons.prisma className="size-16" />
      </EvervaultCard>
    ),
  },
  {
    Icon: Icons.globe,
    name: "Support multilingue",
    description: "Accédez à la plateforme dans plusieurs langues pour une expérience utilisateur globale.",
    className: "col-span-3 lg:col-span-2",
    href: "https://next-intl-docs.vercel.app/",
    cta: "En savoir plus",
    background: (
      <Globe className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.blog,
    name: "Avis et commentaires",
    description: "Consultez les avis des utilisateurs et laissez votre propre retour d'expérience.",
    className: "col-span-3 lg:col-span-1",
    href: "/post",
    cta: "En savoir plus",
    background: (
      <MarketingAboutBlogs className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.zap,
    name: "SEO optimisé",
    description: "Bénéficiez d'une visibilité accrue grâce à des outils SEO intégrés.",
    className: "col-span-3 lg:col-span-1",
    href: "https://imgsrc.io/tools",
    cta: "En savoir plus",
    background: (
      <MarketingAboutSeo className="absolute left-1/2 h-[300px] max-w-md -translate-x-1/2 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Icons.copy,
    name: "Gestion de contenu",
    description: "Ajoutez et gérez facilement du contenu grâce à un système de blog intégré.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "En savoir plus",
    background: (
      <>
        Easily add and manage content with a built-in blogging system, complete
        with Markdown support for rich text formatting.
      </>
    ),
  },
  {
    Icon: Icons.toggleRight,
    name: "Personnalisation",
    description: "Personnalisez votre expérience utilisateur avec des fonctionnalités sur mesure.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "En savoir plus",
    background: (
      <>
        Easily add and manage content with a built-in blogging system, complete
        with Markdown support for rich text formatting.
      </>
    ),
  },
]
