import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
  name: "KarhbaGo",
  description:
    "KarhbaGo est la plateforme idéale pour simplifier la location de voitures en Tunisie. Trouvez facilement le véhicule parfait grâce à des filtres avancés, réservez en ligne en toute sécurité, et communiquez directement avec les agences de location. Profitez d'une expérience fluide, multilingue et adaptée à vos besoins, que vous soyez un particulier ou une agence.",
  url: "https://karhbago.findmalek.com",
  images: {
    default: "https://karhbago.findmalek.com/og.png",
    notFound: "https://karhbago.findmalek.com/not-found.png",
    logo: "https://emojicdn.elk.sh/🚗?style=twitter",
  },
  links: {
    twitter: "https://twitter.com/foundmalek",
    github: "https://github.com/findmalek/karhbago",
  },
  author: {
    name: "findmalek",
    url: "https://www.findmalek.com",
    email: "hi@findmalek.com",
    github: "https://github.com/findmalek",
  },
  keywords: [
    "location de voitures",
    "plateforme de location de voitures",
    "car rental Tunisia",
    "réservation de voitures en ligne",
    "agence de location de voitures",
    "location de voitures pas cher",
    "comparateur de location de voitures",
    "réservation de véhicules",
    "KarhbaGo",
    "location de voitures avec assurance",
    "plateforme de location",
    "location de voitures sécurisé",
    "contrat de location de voitures en ligne",
    "location de voitures multilingue",
    "service de location de voitures",
    "rent car Tunisia",
    "car rental platform",
    "gestion de flotte de voitures",
    "avis location de voitures",
    "réservation instantanée de voitures",
    "paiement sécurisé location de voitures",
  ],
}

export const notFoundMetadata = {
  title: "",
  description: "",
  openGraph: {
    title: `${siteConfig.name} | HERE`,
    description: "",
    images: [
      {
        url: siteConfig.images.notFound,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | HERE`,
    description: siteConfig.description,
    images: [siteConfig.images.notFound],
    creator: `@${siteConfig.author.name}`,
  },
}
