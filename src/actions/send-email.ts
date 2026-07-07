// app/actions/send-email.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const destination = formData.get('destination') as string;
  const travelDates = formData.get('travelDates') as string;
  const partySize = formData.get('partySize') as string;
  const inquiry = formData.get('inquiry') as string;

  // Validate required fields
  if (!name || !email || !inquiry) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // You'll need to verify your domain for production
      to: ['ah.hamada1899@gmail.com'], // Where you want to receive the form submissions
      subject: `New Itinerary Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              h2 { color: #1a1a1a; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #666; }
              .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-radius: 4px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Itinerary Request</h2>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Destination Interests</div>
                <div class="value">${destination || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Travel Dates</div>
                <div class="value">${travelDates || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Party Size</div>
                <div class="value">${partySize || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Inquiry Details</div>
                <div class="value">${inquiry}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

        const { data2, error2 } = await resend.emails.send({
      from: 'onboarding@resend.dev', // You'll need to verify your domain for production
      to: ['ah.hamada1899@gmail.com'], // Where you want to receive the form submissions
      subject: `sec email ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              h2 { color: #1a1a1a; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #666; }
              .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-radius: 4px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Itinerary Request</h2>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Destination Interests</div>
                <div class="value">${destination || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Travel Dates</div>
                <div class="value">${travelDates || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Party Size</div>
                <div class="value">${partySize || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="label">Inquiry Details</div>
                <div class="value">${inquiry}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error2) {
      console.error('Resend error:', error2);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Your itinerary request has been sent successfully! We\'ll get back to you soon.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}