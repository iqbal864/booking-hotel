"use client";

import { useActionState } from "react";
import { ContactMessage, ContactState } from "@/lib/action";
import clsx from "clsx";

const ContactForm = () => {
  const INITIAL_STATE: ContactState = {};

  const [state, formAction, isPending] = useActionState(
    ContactMessage,
    INITIAL_STATE
  );
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-green-50"
          role="alert"
        >
          <div className="font-medium">{state.message}</div>
        </div>
      ) : null}
      <form action={formAction}>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <input
              type="text"
              name="name"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Name*"
              defaultValue={state?.values?.name ?? ""}
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.name?.[0]}
              </p>
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="email@example.com*"
              defaultValue={state?.values?.email ?? ""}
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.email?.[0]}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Subject*"
              defaultValue={state?.values?.subject ?? ""}
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.subject?.[0]}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Your Message*"
              defaultValue={state?.values?.message ?? ""}
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2">
                {state?.error?.message?.[0]}
              </p>
            </div>
          </div>
        </div>
        <button
          className={clsx(
            "mt-7 px-10 text-center py-4 font-semibold text-white w-full bg-purple-500 rounded-sm hover:bg-purple-600 cursor-pointer",
            {
              "opacity-50 cursor-progress animated-pulse": isPending,
            }
          )}
          type="submit"
          disabled={isPending}
        >
          {isPending ? "In Progress..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
