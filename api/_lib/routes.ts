import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // In a real app, you would validate the email format here

      const smtpUser = process.env.SMTP_USER;

      if (!smtpUser) {
        console.warn("SMTP_USER is not defined. Email transmission may fail or go to spam.");
      }

      const info = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${smtpUser || "info@ruppaul.com"}>`, // sender address should be the authenticated user
        replyTo: `"${name}" <${email}>`, // reply directly to the sender
        to: smtpUser || "info@ruppaul.com", // send to yourself (the authenticated user)
        subject: `StartUp Portfolio Contact: ${name}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`, // plain text body
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      res.json({ message: "Email sent successfully", messageId: info.messageId });
    } catch (error: any) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  });

  return httpServer;
}

