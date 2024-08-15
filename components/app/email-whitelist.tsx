import * as React from "react"
import {
  Body,
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

export function EmailWhitelist() {
  return (
    <Html>
      <Head />
      <Preview>
        Vous avez rejoint la liste blanche pour la bêta privée de{" "}
        {siteConfig.name}.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={siteConfig.images.logo}
              width="50"
              height="50"
              alt={`Logo de ${siteConfig.name}`}
            />
            <Hr style={hr} />
            {/* TODO: Generate mail/hero-whitelist.png */}
            <Img
              src={`${siteConfig.url}/mail/hero-whitelist.png`}
              width="600"
              height="300"
              alt={`${siteConfig.name}`}
            />
            <Text style={paragraph}>
              Merci de vous être inscrit à la liste blanche pour{" "}
              {siteConfig.name} ! Nous sommes ravis de vous avoir à bord et nous
              apprécions votre intérêt pour notre projet.
            </Text>
            <Text style={paragraph}>
              Nous avons hâte de partager {siteConfig.name} avec vous et le
              reste de notre communauté. En attendant, si vous avez des
              questions ou des remarques, n&apos;hésitez pas à répondre à cet
              e-mail.
            </Text>
            <Text style={paragraph}>
              Pour les dernières mises à jour, vous pouvez nous suivre sur X{" "}
              <Link href={siteConfig.links.twitter} style={anchor}>
                @Stelify
              </Link>
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              Vous recevez cet e-mail car vous avez choisi de recevoir des mises
              à jour de <Link href={siteConfig.url}>{siteConfig.name}</Link>.
            </Text>
            <Text style={footer}>
              <Link href={siteConfig.url}>{siteConfig.name}</Link>, Monastir,
              Tunisie
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const box = {
  padding: "0 48px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
}

const anchor = {
  color: "#556cd6",
  textDecoration: "underline",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
}
