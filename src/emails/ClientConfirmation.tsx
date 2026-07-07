import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ClientConfirmationProps {
  clientName: string
  bookingId: string
  destination: string
  arrivalDate: string
  departureDate: string
  adults: string
  childrenUnder2: string
  childrenUnder10: string
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const ClientConfirmation = ({
  clientName,
  bookingId,
  destination,
  arrivalDate,
  departureDate,
  adults,
  childrenUnder2,
  childrenUnder10,
}: ClientConfirmationProps) => {
  const formattedArrival = new Date(arrivalDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const formattedDeparture = new Date(departureDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Html>
      <Head />
      <Preview>Your Journey Begins: Booking Confirmation #{bookingId}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Img
              src={`${baseUrl}/images/logo.png`}
              width="140"
              height="auto"
              alt="Modern Heritage"
              style={logo}
            />
            <Heading style={h1}>Booking Confirmation</Heading>
            <Text style={bookingIdText}>Booking ID: {bookingId}</Text>
          </Section>

          <Hr style={hr} />

          {/* Welcome Message */}
          <Section style={welcomeSection}>
            <Text style={greeting}>Dear {clientName},</Text>
            <Text style={message}>
              Thank you for choosing Modern Heritage for your Egyptian journey. 
              We are honored to help you discover the timeless wonders of Egypt.
            </Text>
            <Text style={message}>
              Your booking request has been received and our team is already 
              crafting a bespoke experience tailored just for you.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Booking Summary */}
          <Section style={section}>
            <Heading style={h2}>Your Journey Summary</Heading>
            <Section style={summaryCard}>
              <Row style={row}>
                <Column style={summaryLabel}>Destination</Column>
                <Column style={summaryValue}>{destination}</Column>
              </Row>
              <Row style={row}>
                <Column style={summaryLabel}>Arrival Date</Column>
                <Column style={summaryValue}>{formattedArrival}</Column>
              </Row>
              <Row style={row}>
                <Column style={summaryLabel}>Departure Date</Column>
                <Column style={summaryValue}>{formattedDeparture}</Column>
              </Row>
              <Row style={row}>
                <Column style={summaryLabel}>Guests</Column>
                <Column style={summaryValue}>
                  {adults} Adult{parseInt(adults) > 1 ? 's' : ''}
                  {parseInt(childrenUnder2) > 0 && `, ${childrenUnder2} Child(ren) Under 2`}
                  {parseInt(childrenUnder10) > 0 && `, ${childrenUnder10} Child(ren) Under 10`}
                </Column>
              </Row>
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Next Steps */}
          <Section style={section}>
            <Heading style={h2}>What Happens Next?</Heading>
            <Section style={stepSection}>
              <Row style={stepRow}>
                <Column style={stepNumber}>1</Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>We Review Your Request</Text>
                  <Text style={stepDesc}>
                    Our team will carefully review your preferences and requirements.
                  </Text>
                </Column>
              </Row>
              <Row style={stepRow}>
                <Column style={stepNumber}>2</Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Craft Your Itinerary</Text>
                  <Text style={stepDesc}>
                    We'll create a personalized itinerary with exclusive experiences.
                  </Text>
                </Column>
              </Row>
              <Row style={stepRow}>
                <Column style={stepNumber}>3</Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Finalize Your Journey</Text>
                  <Text style={stepDesc}>
                    We'll present your bespoke journey and make any adjustments.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Contact Section */}
          <Section style={section}>
            <Heading style={h2}>Need Help?</Heading>
            <Text style={contactText}>
              Our concierge team is available 24/7 to assist you.
            </Text>
            <Text style={contactInfo}>
              📧 <Link href="mailto:concierge@modernheritage.eg" style={link}>
                concierge@modernheritage.eg
              </Link>
              <br />
              📞 <Link href="tel:+201234567890" style={link}>
                +20 123 456 7890
              </Link>
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              We look forward to welcoming you to Egypt.
            </Text>
            <Text style={footerText}>
              <Link href={baseUrl} style={link}>
                www.modernheritage.eg
              </Link>
            </Text>
            <Text style={footerSmall}>
              © 2024 Modern Heritage. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#fbfbe2',
  fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '40px 0',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #d0c5af',
  borderRadius: '8px',
  margin: '0 auto',
  maxWidth: '600px',
  padding: '40px 48px',
}

const headerSection = {
  textAlign: 'center' as const,
  paddingBottom: '20px',
}

const logo = {
  margin: '0 auto 20px',
}

const h1 = {
  color: '#735c00',
  fontSize: '32px',
  fontWeight: '600',
  fontFamily: '"Playfair Display", Georgia, serif',
  margin: '20px 0 8px',
}

const bookingIdText = {
  color: '#d4af37',
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  margin: '0',
}

const welcomeSection = {
  padding: '20px 0',
}

const greeting = {
  color: '#1b1d0e',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 12px',
}

const message = {
  color: '#4d4635',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px',
}

const h2 = {
  color: '#1b1d0e',
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: '"Playfair Display", Georgia, serif',
  margin: '0 0 16px',
}

const section = {
  padding: '20px 0',
}

const summaryCard = {
  backgroundColor: '#fbfbe2',
  borderRadius: '8px',
  padding: '16px 20px',
}

const summaryLabel = {
  color: '#7f7663',
  fontSize: '14px',
  fontWeight: '500',
  padding: '6px 0',
  width: '40%',
}

const summaryValue = {
  color: '#1b1d0e',
  fontSize: '16px',
  fontWeight: '600',
  padding: '6px 0',
  width: '60%',
}

const row = {
  marginBottom: '4px',
}

const stepSection = {
  padding: '8px 0',
}

const stepRow = {
  marginBottom: '16px',
}

const stepNumber = {
  backgroundColor: '#d4af37',
  borderRadius: '50%',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '700',
  height: '32px',
  textAlign: 'center' as const,
  verticalAlign: 'middle' as const,
  width: '32px',
  padding: '4px',
}

const stepContent = {
  paddingLeft: '12px',
  verticalAlign: 'middle' as const,
}

const stepTitle = {
  color: '#1b1d0e',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 4px',
}

const stepDesc = {
  color: '#4d4635',
  fontSize: '14px',
  lineHeight: '1.4',
  margin: '0',
}

const contactText = {
  color: '#4d4635',
  fontSize: '16px',
  margin: '0 0 12px',
}

const contactInfo = {
  color: '#4d4635',
  fontSize: '16px',
  lineHeight: '2',
  margin: '0',
}

const footerSection = {
  paddingTop: '20px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#4d4635',
  fontSize: '16px',
  margin: '0 0 8px',
}

const footerSmall = {
  color: '#7f7663',
  fontSize: '12px',
  margin: '16px 0 0',
}

const link = {
  color: '#d4af37',
  textDecoration: 'underline',
  fontWeight: '600',
}

const hr = {
  borderColor: '#d0c5af',
  margin: '0',
}

export default ClientConfirmation