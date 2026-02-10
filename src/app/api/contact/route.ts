
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // The sender address (must be verified/authorized)
      to: process.env.CONTACT_EMAIL || "info@circuitodelaexcelencia.com", // The recipient address
      replyTo: email, // Reply to the user who filled the form
      subject: `Nuevo mensaje de contacto: ${subject || "Sin Asunto"}`,
      text: `
        Has recibido un nuevo mensaje desde el formulario de contacto:

        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || "No proporcionado"}
        Asunto: ${subject || "Sin Asunto"}

        Mensaje:
        ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p>Has recibido un nuevo mensaje desde el formulario de contacto del sitio web:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${phone || "No proporcionado"}</li>
          <li><strong>Asunto:</strong> ${subject || "Sin Asunto"}</li>
        </ul>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
