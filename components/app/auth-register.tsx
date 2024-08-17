"use client"

import React from "react"

import { Icons } from "@/components/shared/icons"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function AuthRegister() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <RadioGroup
        defaultValue="option1"
        className="flex w-full flex-col items-start gap-4"
      >
        <Label
          htmlFor="option1"
          className="[&:has(:checked)]:border-primary [&:has(:checked)]:bg-muted relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border p-6"
        >
          <RadioGroupItem
            id="option1"
            value="option1"
            className="peer sr-only"
          />
          <div className="space-y-1">
            <h4 className="font-medium">Option 1</h4>
            <p className="text-muted-foreground text-sm">
              This is the first option.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground absolute right-2 top-2 rounded-full p-1">
            <Icons.check className="size-4" />
          </div>
        </Label>
        <Label
          htmlFor="option2"
          className="[&:has(:checked)]:border-primary [&:has(:checked)]:bg-muted relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border p-6"
        >
          <RadioGroupItem
            id="option2"
            value="option2"
            className="peer sr-only"
          />
          <div className="space-y-1">
            <h4 className="font-medium">Option 1</h4>
            <p className="text-muted-foreground text-sm">
              This is the first option.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground absolute right-2 top-2 rounded-full p-1">
            <Icons.check className="size-4" />
          </div>
        </Label>
      </RadioGroup>
    </div>
  )
}
