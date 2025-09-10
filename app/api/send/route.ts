import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// initialize resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // get request body from frontend
    const body = await req.json();
    const { to, subject, message } = body;

    // basic validation
    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing to / subject / message fields' },
        { status: 400 }
      );
    }

    // send the email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // must be verified in Resend dashboard
      to,                            // string or array
      subject,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
