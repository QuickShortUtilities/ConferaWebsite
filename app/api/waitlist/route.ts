import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Store in Confera Backend or any email service
    // Currently logs to console — wire to Resend / Mailchimp / Supabase as needed
    console.log(`[Waitlist] New signup: ${email} at ${new Date().toISOString()}`);

    // Example: forward to ConferaBackend
    // const res = await fetch(`${process.env.BACKEND_URL}/api/waitlist`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });

    return NextResponse.json({ success: true, message: 'Welcome to Confera.' });
  } catch (err) {
    console.error('[Waitlist] Error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
