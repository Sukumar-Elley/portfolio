import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({ name: z.string().trim().min(2).max(80), email: z.string().email().max(160), message: z.string().trim().min(10).max(4000), website: z.string().optional() });

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());
    if (payload.website) return NextResponse.json({ ok: true });
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) return NextResponse.json({ error: "Contact service is not configured." }, { status: 503 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject: `Portfolio contact from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
    });
    if (result.error) return NextResponse.json({ error: "Unable to send message." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
}