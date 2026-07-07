import { AdminNotification } from '@/emails/AdminNotification'
import { ClientConfirmation } from '@/emails/ClientConfirmation'

// Lazy initialize Resend only when needed
let resend: any = null

function getResend() {
  if (!resend) {
    const { Resend } = require('resend')
    const apiKey = process.env.RESEND_API_KEY
    
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not defined in environment variables')
    }
    
    resend = new Resend(apiKey)
  }
  return resend
}

interface EmailData {
  clientName: string
  clientEmail: string
  destination: string
  arrivalDate: string
  departureDate: string
  adults: string
  childrenUnder2: string
  childrenUnder10: string
  details: string
}

// Generate a unique booking ID
function generateBookingId(): string {
  const prefix = 'MH'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

export async function sendBookingEmails(data: EmailData) {
  const bookingId = generateBookingId()
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@modernheritage.eg'

  try {
    const resendInstance = getResend()

    // Send admin notification email
    const adminResult = await resendInstance.emails.send({
      from: 'onboarding@resend.dev',
      to: adminEmail,
      subject: `New Booking Inquiry: ${data.clientName}`,
      react: AdminNotification({
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        destination: data.destination,
        arrivalDate: data.arrivalDate,
        departureDate: data.departureDate,
        adults: data.adults,
        childrenUnder2: data.childrenUnder2,
        childrenUnder10: data.childrenUnder10,
        details: data.details,
        bookingId,
      }),
    })

    // Send client confirmation email
    const clientResult = await resendInstance.emails.send({
      from: 'onboarding@resend.dev',
      to: data.clientEmail,
      subject: `Your Journey Begins: Booking Confirmation #${bookingId}`,
      react: ClientConfirmation({
        clientName: data.clientName,
        bookingId,
        destination: data.destination,
        arrivalDate: data.arrivalDate,
        departureDate: data.departureDate,
        adults: data.adults,
        childrenUnder2: data.childrenUnder2,
        childrenUnder10: data.childrenUnder10,
      }),
    })

    console.log('Admin email sent:', adminResult)
    console.log('Client email sent:', clientResult)

    return { success: true, bookingId, adminResult, clientResult }
  } catch (error) {
    console.error('Error sending emails:', error)
    throw error
  }
}