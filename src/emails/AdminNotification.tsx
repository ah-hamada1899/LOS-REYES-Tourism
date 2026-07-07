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

interface AdminNotificationProps {
  clientName: string
  clientEmail: string
  destination: string
  arrivalDate: string
  departureDate: string
  adults: string
  childrenUnder2: string
  childrenUnder10: string
  details: string
  bookingId: string
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const AdminNotification = ({
  clientName,
  clientEmail,
  destination,
  arrivalDate,
  departureDate,
  adults,
  childrenUnder2,
  childrenUnder10,
  details,
  bookingId,
}: AdminNotificationProps) => {
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
      <Preview>New Booking Inquiry: {clientName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Img
              src={`${baseUrl}/images/logo.png`}
              width="120"
              height="auto"
              alt="Modern Heritage"
              style={logo}
            />
            <Heading style={h1}>New Booking Inquiry</Heading>
            <Text style={subtitle}>Booking ID: {bookingId}</Text>
          </Section>

          <Hr style={hr} />

          {/* Client Information */}
          <Section style={section}>
            <Heading style={h2}>Client Information</Heading>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Name</Text>
                <Text style={value}>{clientName}</Text>
              </Column>
              <Column style={column}>
                <Text style={label}>Email</Text>
                <Text style={value}>{clientEmail}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Trip Details */}
          <Section style={section}>
            <Heading style={h2}>Trip Details</Heading>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Destination</Text>
                <Text style={value}>{destination}</Text>
              </Column>
              <Column style={column}>
                <Text style={label}>Arrival Date</Text>
                <Text style={value}>{formattedArrival}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Departure Date</Text>
                <Text style={value}>{formattedDeparture}</Text>
              </Column>
              <Column style={column}>
                <Text style={label}>Adults</Text>
                <Text style={value}>{adults}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Children (Under 2)</Text>
                <Text style={value}>{childrenUnder2}</Text>
              </Column>
              <Column style={column}>
                <Text style={label}>Children (Under 10)</Text>
                <Text style={value}>{childrenUnder10}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Inquiry Details */}
          <Section style={section}>
            <Heading style={h2}>Inquiry Details</Heading>
            <Text style={detailsText}>{details}</Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              This is an automated notification from Modern Heritage.
              <br />
              Please respond to the client within 24 hours.
            </Text>
            <Text style={footerLink}>
              <Link href={`${baseUrl}/admin/bookings/${bookingId}`} style={link}>
                View in Dashboard
              </Link>
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
  fontSize: '28px',
  fontWeight: '600',
  fontFamily: '"Playfair Display", Georgia, serif',
  margin: '20px 0 8px',
}

const subtitle = {
  color: '#7f7663',
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
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

const row = {
  marginBottom: '12px',
}

const column = {
  width: '50%',
  verticalAlign: 'top' as const,
}

const label = {
  color: '#7f7663',
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
}

const value = {
  color: '#1b1d0e',
  fontSize: '16px',
  fontWeight: '400',
  margin: '0',
}

const detailsText = {
  color: '#4d4635',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
}

const hr = {
  borderColor: '#d0c5af',
  margin: '0',
}

const footerSection = {
  paddingTop: '20px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#7f7663',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 12px',
}

const footerLink = {
  margin: '0',
}

const link = {
  color: '#d4af37',
  textDecoration: 'underline',
  fontWeight: '600',
}

export default AdminNotification