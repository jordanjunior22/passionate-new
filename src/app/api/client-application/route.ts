import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const requiredFields = ["name", "email", "phone"];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ message: `${field} is required.` }, { status: 400 });
      }
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      zip,
      contactMethod,
      bestTime,
      programs,
      notes,
      disabilityStatus,
      receivingServices,
      emergencyName,
      emergencyPhone,
      emergencyRelation,
    } = data;

    const formattedPrograms = programs?.length ? programs.join(", ") : "N/A";

    // Confirmation email to applicant
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "Thank you for your application – Passionate Center & Homes",
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2>Hello ${name},</h2>
          <p>Thank you for submitting your application. Our team will review your request and get in touch soon.</p>
          <p><strong>Submitted Programs:</strong> ${formattedPrograms}</p>
          <p><strong>Best Time to Contact:</strong> ${bestTime}</p>
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>— Passionate Center & Homes</p>
        </div>
      `,
    });

    // Internal notification email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Client Application: ${name}`,
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2>New Client Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}, ${city}, ${state}, ${zip}</p>
          <p><strong>Contact Preference:</strong> ${contactMethod}</p>
          <p><strong>Best Time to Contact:</strong> ${bestTime}</p>
          <p><strong>Disability Diagnosis:</strong> ${disabilityStatus}</p>
          <p><strong>Currently Receiving Services:</strong> ${receivingServices}</p>
          <p><strong>Programs of Interest:</strong> ${formattedPrograms}</p>
          <p><strong>Notes:</strong> ${notes || "N/A"}</p>
          <h3>Emergency Contact</h3>
          <p><strong>Name:</strong> ${emergencyName}</p>
          <p><strong>Phone:</strong> ${emergencyPhone}</p>
          <p><strong>Relationship:</strong> ${emergencyRelation}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Client application submission error:", error);
    return NextResponse.json(
      { message: "Server error processing your request" },
      { status: 500 }
    );
  }
}
