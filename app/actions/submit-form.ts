"use server";

import React from "react";
import { Resend } from 'resend';

import { formReceiverEmail, emailSubject } from "@/lib/constant";
import { getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from '../components/contact-form-email';


const secretKey = process.env.NEXT_PUBLIC_RESENDER_KEY;
const resend = new Resend(secretKey);

export async function onSubmit(formData: FormData) {
    let errorMsg: string = ""
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: formReceiverEmail,
      subject: emailSubject,
      reply_to: formData.get("email") as string,
      react: React.createElement(ContactFormEmail, {
        sender: formData.get("email") as string,
        message: formData.get("message") as string,
      })
    });

    // if email sent successfully, the api response would include key: "id"
    // if email failed to send, the api response would include key: message & statusCode
    if (!Object.hasOwnProperty(data, "id")) {
        errorMsg = getErrorMessage(data)
    }
    
    return errorMsg;
  } catch (error: unknown) {
    errorMsg = getErrorMessage(error)
    return  errorMsg;
  }
}