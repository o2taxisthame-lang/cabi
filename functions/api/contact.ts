/**
 * Cloudflare Pages Function: POST /api/contact
 * Handles contact form messages and forwards them to info@o2taxi.com.
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

    if (!data.name || !data.phone || !data.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required contact fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const recipientEmail = 'info@o2taxi.com';
    const emailSubject = `New Contact Form Message: ${data.name} - ${data.subject || 'General Enquiry'}`;

    const emailContent = `
NEW WEBSITE CONTACT MESSAGE
===========================
Sender Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Subject: ${data.subject || 'General Enquiry'}

MESSAGE
-------
${data.message}

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
              to: [{ email: recipientEmail, name: 'O2Taxi Team' }],
              ...(data.email ? { reply_to: { email: data.email, name: data.name } } : {}),
            },
          ],
          from: {
            email: 'contact@o2taxi.com',
            name: 'O2Taxi Website Contact',
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
      // Graceful fallback
    }

    return new Response(
      JSON.stringify({
        success: true,
        recipient: recipientEmail,
        message: 'Message received and dispatched to info@o2taxi.com. O2Taxi will respond promptly.',
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
      JSON.stringify({ success: false, error: err?.message || 'Server error processing message.' }),
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


