"use server";
import { ContactSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";

export type ContactState = {
  message?: string;
  error?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    _form?: string[];
  };
  values?: Record<string, string>;
};

export const ContactMessage = async (
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> => {
  const values = Object.fromEntries(formData.entries()) as Record<
    string,
    string
  >;

  const validatedFields = ContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors, values };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return { message: "Thanks for contact us.", values: {} };
  } catch (error) {
    console.log(error);
    return { error: { _form: ["Server error. Please try again."] }, values };
  }
};
