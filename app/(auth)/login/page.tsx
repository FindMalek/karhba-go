import Link from "next/link"
import { redirect } from "next/navigation"

import { cn } from "@/lib/utils"

import { AuthUserEmail } from "@/components/app/auth-user-email"
import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"

import { getAuthedUser } from "@/actions/session"

export function generateMetadata() {
  return {
    title: "Se connecter",
    description:
      "Connectez-vous pour accéder à toutes les fonctionnalités de l'application.",
  }
}

export default async function LoginPage() {
  const user = await getAuthedUser()

  if (user && !user.verified) {
    return redirect("/onboarding")
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <Icons.chevronLeft className="mr-2 size-4" />
        Retour
      </Link>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Icons.logo className="mx-auto size-10" />

        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Connecter vous
          </h1>
          <p className="text-muted-foreground text-sm">
            Connectez-vous pour accéder à toutes les fonctionnalités.
          </p>

          <AuthUserEmail type="login" />
        </div>

        <p className="text-muted-foreground px-8 text-center text-sm">
          Vous n&apos;avez pas de compte ?{" "}
          <Link
            href="/register"
            className="hover:text-primary underline underline-offset-4"
          >
            Créer un compte.
          </Link>
        </p>
      </div>
    </div>
  )
}
