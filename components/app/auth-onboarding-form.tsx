"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Role, User } from "@prisma/client"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { authOnboardingSchema } from "@/config/validation"
import { toast } from "@/hooks/use-toast"

import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { sendMail } from "@/actions/mail"
import { updateUser } from "@/actions/user"

export function AuthOnboarding({ user }: { user: User }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof authOnboardingSchema>>({
    resolver: zodResolver(authOnboardingSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      terms: false,
    },
  })

  async function onSubmit(data: z.infer<typeof authOnboardingSchema>) {
    setIsLoading(true)

    try {
      const updatedUser = await updateUser(user.email, {
        first_name: data.first_name.trim(),
        last_name: data.last_name.trim(),
        username: data.username.trim(),
        verified: true,
        role: data.role,
        image: `https://avatars.jakerunzer.com/${data.username}`,
      })

      /*       if (data.role === Role.STUDENT) {
        await createStudentProfile(updatedUser)
      } else if (data.role === Role.INSTRUCTOR) {
        await createInstructorProfile(updatedUser)
      } */

      // TODO: Send a new-email to the user
      await sendMail("new-user", {
        email: user.email,
        username: data.username,
      })

      // TODO: If the user is an instructor, send an email to the admin to verify (Notifications)

      router.push("/")
    } catch (error) {
      return toast({
        title: "Erreur",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-6 text-left"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-4">
          <div className="grid gap-2 md:grid-cols-2 md:gap-4">
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Ghaddab" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Amine" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="amine_xx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-2">
            <FormLabel>Email</FormLabel>
            <Input readOnly value={user.email} />
          </div>

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un rôle" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={Role.STUDENT}>Etudiant</SelectItem>
                    <SelectItem value={Role.INSTRUCTOR}>Formateur</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>
                  J&apos;accepte les{" "}
                  <a
                    href="/post/terms"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    conditions d&apos;utilisation
                  </a>
                </FormLabel>
              </FormItem>
            )}
          />

          <button className={buttonVariants()} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            Continuer
            <Icons.chevronRight className="ml-2 size-4 stroke-[3px]" />
          </button>
        </div>
      </form>
    </Form>
  )
}
