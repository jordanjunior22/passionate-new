import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// For Next.js 13+ App Router
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate the required fields
    if (
      !data.email_address ||
      !data.merge_fields?.FNAME ||
      !data.merge_fields?.MESSAGE
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Add to Mailchimp list
    const mailchimpData = {
      email_address: data.email_address,
      status: data.status,
      merge_fields: data.merge_fields,
    };

    const listId = "YOUR_MAILCHIMP_LIST_ID"; // Replace with your list ID
    const DC = process.env.MAILCHIMP_SERVER_PREFIX;
    const url = `https://${DC}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const mailchimpResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `anystring:${process.env.MAILCHIMP_API_KEY}`
        ).toString("base64")}`,
      },
      body: JSON.stringify(mailchimpData),
    });

    const mailchimpResult = await mailchimpResponse.json();

    // If there was a Mailchimp error that wasn't just "already subscribed"
    if (!mailchimpResponse.ok && mailchimpResult.title !== "Member Exists") {
      console.error("Mailchimp error:", mailchimpResult);
      return NextResponse.json(
        { message: "Failed to add contact to mailing list" },
        { status: 500 }
      );
    }

    // 2. Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: data.email_address,
      subject: "Thank you for your message!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2>Hello ${data.merge_fields.FNAME},</h2>
          <p>Thank you for reaching out to us. We've received your message and will get back to you shortly.</p>
          <p>Here's a copy of what you sent:</p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #333;">
            <p><em>${data.merge_fields.MESSAGE}</em></p>
          </div>
          <p>Best regards,</p>
          <p><strong>Your Company Name</strong></p>
        </div>
      `,
    });

    // 3. Send notification to admin
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Contact Form Submission from ${data.merge_fields.FNAME}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${data.merge_fields.FNAME}</p>
          <p><strong>Email:</strong> ${data.email_address}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #333;">
            <p>${data.merge_fields.MESSAGE}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { message: "Server error processing your request" },
      { status: 500 }
    );
  }
}
