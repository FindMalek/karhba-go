import Link from "next/link"
import { redirect } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { AuthRegister } from "@/components/app/auth-register"
import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"

import { getAuthedUser } from "@/actions/session"

export function generateMetadata() {
  return {
    title: `Créer un compte`,
    description: `Créez un compte pour accéder à toutes les fonctionnalités de ${siteConfig.name}.`,
  }
}

export default async function RegisterPage() {
  const user = await getAuthedUser()

  if (user && !user.verified) {
    return redirect("/onboarding")
  }

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center overflow-x-hidden lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Se connecter
      </Link>
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
              &ldquo; Kif tjik haja blesh matfalathash &rdquo;
            </p>
            <footer className="text-sm">@findmalek</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Icons.logo className="mx-auto size-10" />

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Créer Votre Compte {siteConfig.name}
            </h1>

            <AuthRegister />
          </div>

          <p className="text-muted-foreground px-8 text-center text-sm">
            En continuant, vous acceptez les{" "}
            <Link
              href="/post/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              les conditions d&apos;utilisation
            </Link>{" "}
            et la{" "}
            <Link
              href="/post/privacy"
              className="hover:text-primary underline underline-offset-4"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
