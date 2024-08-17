import Link from "next/link"
import { redirect } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/* import { AuthOnboarding } from "@/components/app/auth-onboarding-form"
 */import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"

import { getAuthedUser } from "@/actions/session"

export function generateMetadata() {
  return {
    title: "Remplissez vos informations",
    description: `Finalisez votre inscription pour accéder à toutes les fonctionnalités de ${siteConfig.name}.`,
  }
}

export default async function OnboardingPage() {
  const user = await getAuthedUser()

  if ((user && user.verified) || !user) {
    return redirect("/")
  }

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="bg-muted relative hidden h-full flex-col p-10 lg:flex dark:border-r">
        <div className="absolute inset-0" />
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "relative z-20 flex w-fit items-center text-lg font-semibold"
          )}
        >
          <Icons.logo className="mr-2 size-6" />
          {siteConfig.name}
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo; Apprentissage continu, croissance personnelle et
              professionnelle &rdquo;
            </p>
            <footer className="text-sm">Ghaddab Amine</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Icons.logo className="mx-auto size-10" />

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Remplissez vos informations
            </h1>
            <p className="text-muted-foreground text-sm">
              Finalisez votre inscription pour accéder à toutes les
              fonctionnalités.
            </p>
            {/* <AuthOnboarding user={user} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
