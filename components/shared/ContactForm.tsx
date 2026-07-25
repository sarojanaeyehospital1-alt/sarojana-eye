"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  message: z.string().min(5, "Please enter your message"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 700));
    setSuccess(true);
    reset();
  };

  if (success) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-success/25 bg-white p-8 text-center shadow-card">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <p className="mt-4 font-heading text-2xl font-semibold text-foreground">
          Message sent
        </p>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thank you for contacting Sarojana Eye Hospital. We will get back to
          you shortly during clinic hours.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-3xl border border-border bg-white shadow-card"
      noValidate
    >
      <div className="border-b border-border bg-teal-50/80 px-6 py-5 sm:px-8">
        <h2 className="font-heading text-2xl font-bold text-teal-800">
          Send us a message
        </h2>
        <p className="mt-1 text-sm text-muted">
          Fill the form and our team will respond shortly.
        </p>
      </div>

      <div className="space-y-4 px-6 py-6 sm:px-8 sm:py-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name *" error={errors.name?.message}>
            <input
              {...register("name")}
              placeholder="Your name"
              autoComplete="name"
              className={inputClass(!!errors.name)}
            />
          </Field>
          <Field label="Phone Number *" error={errors.phone?.message}>
            <input
              {...register("phone")}
              placeholder="10-digit mobile"
              inputMode="numeric"
              autoComplete="tel"
              className={inputClass(!!errors.phone)}
            />
          </Field>
        </div>

        <Field label="Email (optional)" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="Message *" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="How can we help you?"
            className={`${inputClass(!!errors.message)} resize-y`}
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-70"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-background/40 px-3.5 py-3 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-teal-500/30 ${
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-border focus:border-teal-600"
  }`;
}
