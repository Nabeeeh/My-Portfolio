"use server";

import React from "react";
import { Resend } from "resend";

import { getErrorMessage, validateFormInputs } from "./utils";

import ContactFormEmail from "../_email/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmailAction = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!validateFormInputs(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateFormInputs(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mohamednabeeh008@gmail.com",
      subject: "Message from Portfolio contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, { senderEmail, message }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
