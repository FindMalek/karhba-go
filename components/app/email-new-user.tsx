import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import { siteConfig } from "@/config/site"

export function EmailNewUser({ username }: { username: string }) {
  return (
    <Html>
      <Head />
      <Preview>
        Bienvenue sur {siteConfig.name} - {username} sera ravi de vous
        accueillir !
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={siteConfig.images.logo}
            width="50"
            height="50"
            alt={`Logo de ${siteConfig.name}`}
            style={logo}
          />
          <Text style={heading}>Bienvenue sur {siteConfig.name}</Text>
          <Text style={paragraph}>Bonjour {username},</Text>
          <Text style={paragraph}>
            Bienvenue sur {siteConfig.name} ! Je suis Malek, l&apos;un des
            fondateurs.
          </Text>
          <Text style={paragraph}>
            Nous avons travaillé sur {siteConfig.name} ces derniers mois et,
            pendant ce temps, nous avons mis en place les fonctionnalités de
            base pour démarrer. Cependant, avec vos retours, nous pourrons
            prendre les bonnes décisions pour améliorer la plateforme.
          </Text>
          <Text style={paragraph}>
            Pendant notre phase de bêta privée, il est possible que vous
            rencontriez quelques bugs, mais nous souhaitons vraiment recevoir
            tous vos retours.
          </Text>
          <Text style={paragraph}>
            Si vous avez des questions, n&apos;hésitez pas à{" "}
            <Link style={link} href={`${siteConfig.url}/contact`}>
              nous contacter
            </Link>
            .
          </Text>
          {/* TODO: Generate mail/hero-new-user.png */}
          <Img
            src={`${siteConfig.url}/mail/hero-new-user.png`}
            width={600}
            height={400}
            alt={`${siteConfig.name}`}
            style={logo}
          />

          <Text style={paragraph}>
            Cordialement, les fondateurs
            <br />
            <Text style={boldText}>Malek & Moatez</Text>
          </Text>

          <Section style={btnContainer}>
            <Button style={button} href={siteConfig.url}>
              Commencer
            </Button>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            <Link href={siteConfig.url}>{siteConfig.name}</Link>, Monastir,
            Tunisie
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const logo = {
  margin: "0 auto",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const boldText = {
  fontWeight: "bold",
  fontSize: "19px",
}

const btnContainer = {
  textAlign: "center" as const,
}

const button = {
  backgroundColor: "#73cb6b",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "10px 0",
}

const link = {
  color: "#556cd6",
  textDecoration: "underline",
}
