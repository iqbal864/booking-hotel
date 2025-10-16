import { object, string } from "zod";

export const ContactSchema = object({
  name: string().min(4, "Name at least 4 characters"),
  email: string()
    .min(10, "Email at least 10 characters")
    .email("Please enter a valid email"),
  subject: string().min(6, "Subject at least 6 characters"),
  message: string()
    .min(25, "Message at least 50 characters")
    .max(200, "Message maximum 200 characters"),
});
