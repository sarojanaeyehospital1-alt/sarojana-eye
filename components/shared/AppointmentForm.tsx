"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, CheckCircle2, Phone } from "lucide-react";
import { DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL } from "@/lib/constants/hospital";
import { SERVICES } from "@/lib/constants/services";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  doctor: z.string().optional(),
  service: z.string().optional(),
  date: z.string().optional(),
  slot: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type AppointmentFormProps = {
  compact?: boolean;
  defaultDoctor?: string;
  defaultService?: string;
};

export function AppointmentForm({
  compact = false,
  defaultDoctor = "",
  defaultService = "",
}: AppointmentFormProps) {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      doctor: defaultDoctor,
      service: defaultService,
      slot: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    setSuccess(true);
    reset({
      name: "",
      phone: "",
      email: "",
      doctor: defaultDoctor,
      service: defaultService,
      date: "",
      slot: "",
      message: "",
    });
  };

  if (success) {
    return (
      <div
        className={`flex flex-col items-center justify-center border border-success/25 bg-white text-center shadow-card ${
          compact ? "rounded-2xl p-6" : "rounded-3xl p-8 sm:p-10"
        }`}
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <p className="mt-4 font-heading text-2xl font-semibold text-foreground">
          Appointment request received
        </p>
        <p className="mt-2 max-w-sm text-sm text-muted">
          We&apos;ll call you within 2 hours to confirm your appointment during
          working hours.
        </p>
        <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Submit another request
          </button>
          <a
            href={HOSPITAL.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-teal-600 hover:text-teal-700"
          >
            <Phone className="h-4 w-4" />
            Call clinic
          </a>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded-2xl border border-border bg-white p-5 shadow-brand sm:p-6"
        noValidate
      >
        <div className="grid gap-4">
          <Field label="Full Name *" error={errors.name?.message}>
            <input
              {...register("name")}
              className={inputClass(!!errors.name)}
              placeholder="Your full name"
              autoComplete="name"
            />
          </Field>
          <Field label="Phone Number *" error={errors.phone?.message}>
            <input
              {...register("phone")}
              className={inputClass(!!errors.phone)}
              placeholder="10-digit mobile"
              inputMode="numeric"
              autoComplete="tel"
            />
          </Field>
          <Field label="Select Service">
            <select {...register("service")} className={inputClass(false)}>
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Request Appointment"}
        </button>
        <p className="text-center text-xs text-muted">
          For urgent appointments, call{" "}
          <a href={HOSPITAL.phoneHref} className="font-semibold text-primary">
            {HOSPITAL.phoneDisplay}
          </a>
          .
        </p>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-3xl border border-border bg-white shadow-card"
      noValidate
    >
      <div className="border-b border-border bg-teal-50/80 px-6 py-5 sm:px-8">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
            <CalendarDays className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-heading text-2xl font-bold text-teal-800">
              Request an appointment
            </h2>
            <p className="mt-1 text-sm text-muted">
              Fill in your details — we&apos;ll confirm by phone during clinic
              hours.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-7 px-6 py-6 sm:px-8 sm:py-7">
        <FormSection title="Your details">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name *" error={errors.name?.message}>
              <input
                {...register("name")}
                className={inputClass(!!errors.name)}
                placeholder="Your full name"
                autoComplete="name"
              />
            </Field>
            <Field label="Phone Number *" error={errors.phone?.message}>
              <input
                {...register("phone")}
                className={inputClass(!!errors.phone)}
                placeholder="10-digit mobile"
                inputMode="numeric"
                autoComplete="tel"
              />
            </Field>
            <Field
              label="Email (optional)"
              error={errors.email?.message}
              className="sm:col-span-2"
            >
              <input
                {...register("email")}
                type="email"
                className={inputClass(!!errors.email)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </Field>
          </div>
        </FormSection>

        <FormSection title="Visit preferences">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Select Doctor">
              <select {...register("doctor")} className={inputClass(false)}>
                <option value="">Any available doctor</option>
                {DOCTORS.map((d) => (
                  <option key={d.id} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Select Service">
              <select {...register("service")} className={inputClass(false)}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred Date">
              <input
                {...register("date")}
                type="date"
                className={inputClass(false)}
              />
            </Field>
            <Field label="Preferred Time Slot">
              <select {...register("slot")} className={inputClass(false)}>
                <option value="">Select slot</option>
                <option value="morning">
                  Morning ({HOSPITAL.timings.morning})
                </option>
                <option value="evening">
                  Evening ({HOSPITAL.timings.evening})
                </option>
              </select>
            </Field>
          </div>
        </FormSection>

        <FormSection title="Notes">
          <Field label="Message / Symptoms (optional)">
            <textarea
              {...register("message")}
              rows={4}
              className={`${inputClass(false)} resize-y`}
              placeholder="Briefly describe your concern"
            />
          </Field>
        </FormSection>

        <div className="space-y-3 border-t border-border pt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
          </button>
          <p className="text-center text-xs text-muted">
            For urgent appointments, call{" "}
            <a
              href={HOSPITAL.phoneHref}
              className="font-semibold text-teal-700 hover:underline"
            >
              {HOSPITAL.phoneDisplay}
            </a>{" "}
            directly.
          </p>
        </div>
      </div>
    </form>
  );
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal-600">
        {title}
      </p>
      {children}
    </div>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm ${className}`}>
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
