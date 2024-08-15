import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import { MagicLinkData } from "@/types/auth"

import { siteConfig } from "@/config/site"

export function EmailMagicLink({ magicLink }: { magicLink: MagicLinkData }) {
  return (
    <Html>
      <Head />
      <Preview>
        Confirmez votre e-mail pour {siteConfig.name} en cliquant sur le bouton
        ci-dessous.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={siteConfig.images.logo}
            height="42"
            alt={`${siteConfig.name} logo`}
            style={logo}
          />
          <Heading style={heading}>
            Votre code de connexion pour {siteConfig.name}
          </Heading>
          <Section style={buttonContainer}>
            <Button style={button} href={`${magicLink.otp_link}`}>
              Connexion à {siteConfig.name}
            </Button>
          </Section>

          <Text style={paragraph}>
            Ce lien et ce code ne seront valides que pendant les 5 prochaines
            minutes. Si le lien ne fonctionne pas, vous pouvez utiliser le code
            de vérification de connexion directement :
          </Text>

          <Section style={codeBox}>
            <Text style={confirmationCodeText}>{magicLink.passCode}</Text>
          </Section>

          <Hr style={hr} />
          <Link href={siteConfig.url} style={reportLink}>
            {siteConfig.name}
          </Link>
        </Container>
      </Body>
    </Html>
  )
}

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
}

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
}

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
}

const buttonContainer = {
  padding: "27px 0 27px",
}

const button = {
  backgroundColor: "#ff0000",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "11px 23px",
}

const reportLink = {
  fontSize: "14px",
  color: "#b4becc",
}

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
}

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
}

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center" as const,
  verticalAlign: "middle",
}
