"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserType } from "@prisma/client"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { authRegisterSchema } from "@/config/validation"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function AuthRegister() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof authRegisterSchema>>({
    resolver: zodResolver(authRegisterSchema),
  })

  async function onSubmit(data: z.infer<typeof authRegisterSchema>) {
    setIsLoading(true)

    console.log(data)

    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4 space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex w-full flex-col gap-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Label className="hover:bg-secondary [&:has(:checked)]:border-primary relative flex w-full cursor-pointer flex-col justify-center rounded-lg border p-6 transition-all duration-300">
                        <RadioGroupItem
                          value={UserType.CLIENT}
                          className="peer sr-only"
                        />
                        <div className="space-y-1 text-left">
                          <h4 className="font-medium">Locataire</h4>
                          <p className="text-muted-foreground text-sm">
                            Je veux louer une voiture
                          </p>
                        </div>
                        <div className="absolute right-2 top-2 rounded-full p-1">
                          {form.watch("type") === UserType.CLIENT ? (
                            <Icons.circleCheck className="text-primary size-4" />
                          ) : (
                            <Icons.circle className="text-muted size-4" />
                          )}
                        </div>
                      </Label>
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Label className="hover:bg-secondary [&:has(:checked)]:border-primary relative flex w-full cursor-pointer flex-col justify-center rounded-lg border p-6 transition-all duration-300">
                        <RadioGroupItem
                          value={UserType.AGENCY}
                          className="peer sr-only"
                        />
                        <div className="space-y-1 text-left">
                          <h4 className="font-medium">Agence</h4>
                          <p className="text-muted-foreground text-sm">
                            Je veux gérer et louer des véhicules
                          </p>
                        </div>
                        <div className="absolute right-2 top-2 rounded-full p-1">
                          {form.watch("type") === UserType.AGENCY ? (
                            <Icons.circleCheck className="text-primary size-4" />
                          ) : (
                            <Icons.circle className="text-muted size-4" />
                          )}
                        </div>
                      </Label>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.watch("type") && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button
          type="submit"
          className={cn(
            "w-full",
            !form.formState.isValid &&
              "bg-secondary cursor-not-allowed"
          )}
          disabled={isLoading || !form.formState.isValid}
        >
          Continuer
          {isLoading && <Icons.spinner className="ml-2 size-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  )
}
