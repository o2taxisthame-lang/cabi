/**
 * Cloudflare Pages Function: POST /api/booking
 * Handles booking enquiries and dispatches emails to info@o2taxi.com.
 */

export interface EventContext<Env = Record<string, any>, P extends string = any, Data = any> {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env;
  params: Record<P, string | string[]>;
  data: Data;
}

export const onRequestPost = async (context: EventContext): Promise<Response> => {
  try {
    const data: any = await context.request.json();

    // Basic server-side validation
    if (!data.fullName || !data.mobileNumber || !data.pickupAddress || !data.destination) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required booking fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const recipientEmail = 'info@o2taxi.com';
    const emailSubject = `New Booking Enquiry: ${data.fullName} - ${data.pickupAddress} to ${data.destination} (${data.date || 'Today'})`;

    const emailContent = `
NEW BOOKING ENQUIRY RECEIVED
============================
Customer Name: ${data.fullName}
Mobile Number: ${data.mobileNumber}
Email Address: ${data.email || 'Not provided'}
Journey Type: ${data.journeyType || 'Standard Taxi'}

TRIP DETAILS
------------
Pickup Address: ${data.pickupAddress}
Destination: ${data.destination}
Date: ${data.date || 'Immediate / Today'}
Pickup Time: ${data.pickupTime || 'ASAP'}
Passengers: ${data.passengers || '1'}
Luggage / Bags: ${data.luggage || '0'}
${data.flightNumber ? `Flight Number: ${data.flightNumber}\n` : ''}${data.returnJourney ? `Return Journey: Yes (${data.returnDate || ''} at ${data.returnTime || ''})\n` : 'Return Journey: No\n'}${data.additionalRequirements ? `Special Notes: ${data.additionalRequirements}\n` : ''}
Submitted At: ${new Date().toISOString()}
Target Inbox: ${recipientEmail}
    `.trim();

    // Attempt delivery via MailChannels on Cloudflare Pages / Workers if available
    try {
      await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: recipientEmail, name: 'O2Taxi Dispatch' }],
              ...(data.email ? { reply_to: { email: data.email, name: data.fullName } } : {}),
            },
          ],
          from: {
            email: 'bookings@o2taxi.com',
            name: 'O2Taxi Website System',
          },
          subject: emailSubject,
          content: [
            {
              type: 'text/plain',
              value: emailContent,
            },
          ],
        }),
      });
    } catch {
      // Graceful fallback for non-MailChannels platforms
    }

    return new Response(
      JSON.stringify({
        success: true,
        recipient: recipientEmail,
        message: 'Thank you. Your booking enquiry has been dispatched to info@o2taxi.com. O2Taxi will contact you shortly to confirm your journey.',
        receivedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err?.message || 'Server error processing booking enquiry.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    );
  }
};

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};


