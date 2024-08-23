"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { useLogSnag } from "@logsnag/next"
import { signIn } from "next-auth/react"
import { useFormStatus } from "react-dom"

import { LogEvents } from "@/config/events"
import { siteConfig } from "@/config/site"
import { toast } from "@/hooks/use-toast"

import { Icons } from "@/components/shared/icons"
import { Input } from "@/components/ui/input"

import { isBanned } from "@/actions/user"

function SubmitButton() {
  const { pending } = useFormStatus()

  if (pending) {
    return (
      <div className="absolute right-0 top-1">
        <Icons.spinner className="absolute right-2 top-2.5 mr-3 size-4 animate-spin text-base" />
      </div>
    )
  }

  return (
    <button
      type="submit"
      className="bg-primary text-primary-foreground absolute right-2 top-2 z-10 h-7 rounded-md px-4 text-sm font-medium"
    >
      <Icons.chevronRight className="size-4 stroke-[3px]" />
    </button>
  )
}

export function AuthEmail() {
  const router = useRouter()
  const { track } = useLogSnag()

  return (
    <div>
      <div className="flex justify-center">
        <form
          className="w-[95%]"
          action={async (formData) => {
            const email = formData.get("email") as string
            track({
              event: LogEvents.Waitlist.name,
              notify: true,
              icon: LogEvents.Waitlist.icon,
              channel: LogEvents.Waitlist.channel,
              description: `${email} joined the waitlist for ${siteConfig.name}`,
              tags: {
                email,
              },
            })

            try {
              if (await isBanned(email)) {
                return toast({
                  title: "Votre compte a été banni",
                  variant: "destructive",
                })
              }

              await signIn("email", {
                email: email.toLowerCase(),
                redirect: false,
                callbackUrl: "/onboarding",
              })

              router.push("/otp-code/" + email.toLowerCase())
              return toast({
                title:
                  "Un code de vérification a été envoyé à votre adresse e-mail",
                description: "Veuillez vérifier votre boîte de réception",
              })
            } catch (error) {
              return toast({
                title: "Erreur",
                variant: "destructive",
              })
            }
          }}
        >
          <fieldset className="relative">
            <Input
              placeholder="email@example.com"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              aria-label="Email address"
              required
            />
            <SubmitButton />
          </fieldset>
        </form>
      </div>
    </div>
  )
}
