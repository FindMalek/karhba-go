import { siteConfig } from "@/config/site"

import { Icons } from "@/components/shared/icons"

interface Icon {
  icon: JSX.Element
  url: string
}

const icons: Icon[] = [
  { icon: <Icons.globe />, url: "#" },
  { icon: <Icons.twitter />, url: "#" },
  { icon: <Icons.discord />, url: "#" },
]

export function SiteFooter() {
  return (
    <footer className="p-5 lg:px-10">
      <div className="flex w-full flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="header-logo flex items-center gap-x-2">
          <Icons.logo className="size-8 rounded-full" />
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            {siteConfig.name}
          </h2>
        </div>
        <div className="social-icons flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-xl text-neutral-500 hover:text-neutral-900 hover:dark:text-white"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
