'use server'

import { sendBookingEmails } from '@/lib/email'

interface BookingData {
  name: string
  email: string
  destination: string
  arrivalDate: string
  departureDate: string
  adults: string
  childrenUnder2: string
  childrenUnder10: string
  details: string
}

export async function sendBookingEmail(data: BookingData) {
  try {
    const result = await sendBookingEmails({
      clientName: data.name,
      clientEmail: data.email,
      destination: data.destination,
      arrivalDate: data.arrivalDate,
      departureDate: data.departureDate,
      adults: data.adults,
      childrenUnder2: data.childrenUnder2,
      childrenUnder10: data.childrenUnder10,
      details: data.details,
    })

    return { 
      success: true, 
      bookingId: result.bookingId,
      message: 'Booking request sent successfully!'
    }
  } catch (error) {
    console.error('Error in sendBookingEmail action:', error)
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to send booking request'
    }
  }
}