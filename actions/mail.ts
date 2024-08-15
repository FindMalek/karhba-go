"use server"

import { render } from "@react-email/render"
import nodemailer from "nodemailer"

import { env } from "@/env.mjs"
import {
  MagicLinkData,
  MailOptions,
  MailType,
  NewUserData,
  WaitlistData,
} from "@/types/mail"

import { siteConfig } from "@/config/site"

import { EmailMagicLink } from "@/components/app/email-magic-link"
import { EmailNewUser } from "@/components/app/email-new-user"
import { EmailWhitelist } from "@/components/app/email-whitelist"

export async function sendMail(
  type: MailType,
  body: MagicLinkData | WaitlistData | NewUserData
) {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    host: env.SMTP_SERVER,
    port: env.SMTP_PORT,
    auth: {
      user: env.FROM_EMAIL_GMAIL,
      pass: env.FROM_EMAIL_PASSWORD,
    },
  })

  let mailOptions: MailOptions
  switch (type) {
    case "magic-link": {
      const html = render(EmailMagicLink({ magicLink: body as MagicLinkData }))
      mailOptions = {
        from: `${siteConfig.name} <${env.FROM_EMAIL}>`,
        to: (body as MagicLinkData).email,
        subject: `Votre Magic Link et OTP code ${siteConfig.name}`,
        html,
      }
      break
    }
    case "whitelist": {
      const html = render(EmailWhitelist())
      mailOptions = {
        from: `${siteConfig.name} <${env.FROM_EMAIL}>`,
        to: (body as WaitlistData).email,
        subject: `Vous êtes invité à rejoindre la version bêta privée de ${siteConfig.name}`,
        html,
      }
      break
    }
    case "new-user": {
      const html = render(
        EmailNewUser({ username: (body as NewUserData).username })
      )
      mailOptions = {
        from: `${siteConfig.name} <${env.FROM_EMAIL}>`,
        to: (body as NewUserData).email,
        subject: `Bienvenu to ${siteConfig.name}`,
        html,
      }
      break
    }
  }

  try {
    await mailTransporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.log("Error sending email:", error)
    return false
  }
}
