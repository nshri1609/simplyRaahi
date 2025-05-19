import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { to, subject, formData } = await req.json();

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
      }
    });

    // Format the email content
    const emailContent = `
      New Tour Request from Simply Raahi Website

      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Number of Travelers: ${formData.travelers}
      Preferred Dates: ${formData.dates}

      Message:
      ${formData.message}

      This is an automated email from the Simply Raahi website.
    `;

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 