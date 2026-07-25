"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import { DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL } from "@/lib/constants/hospital";
import { ClinicTimingsBox } from "@/components/shared/PageHeroWave";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit mobile required"),
  doctor: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ServiceSidebarForm({ defaultService }: { defaultService?: string }) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
    reset();
    void defaultService;
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/10 p-4 text-sm text-foreground">
        Request received. We&apos;ll call within 2 hours during clinic hours.
        <button
          type="button"
          className="mt-2 block font-semibold text-teal-600"
          onClick={() => setDone(false)}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-teal-600"
      />
      {errors.name ? (
        <p className="text-xs text-red-600">{errors.name.message}</p>
      ) : null}
      <input
        {...register("phone")}
        placeholder="Phone"
        className="w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-teal-600"
      />
      {errors.phone ? (
        <p className="text-xs text-red-600">{errors.phone.message}</p>
      ) : null}
      <select
        {...register("doctor")}
        className="w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-teal-600"
      >
        <option value="">Select Doctor</option>
        {DOCTORS.map((d) => (
          <option key={d.id} value={d.slug}>
            {d.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white hover:bg-teal-800 disabled:opacity-70"
      >
        {isSubmitting ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
}

export function ServiceSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        <div className="bg-teal-600 px-5 py-4 text-white">
          <h3 className="font-heading text-lg font-semibold">Book a Consultation</h3>
        </div>
        <div className="p-5">
          <ServiceSidebarForm />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
            Or call directly
          </p>
          <div className="mt-2 space-y-2">
            {DOCTORS.map((d) => (
              <a
                key={d.id}
                href={`tel:+91${d.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-teal-700 hover:underline"
              >
                <Phone className="h-4 w-4" />
                {d.name.split(" ").slice(0, 3).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
        <h3 className="font-heading text-lg font-semibold text-teal-800">Timings</h3>
        <ClinicTimingsBox className="mt-3" />
      </div>

      <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
        <h3 className="mb-4 font-heading text-lg font-semibold text-teal-800">
          Our Specialists
        </h3>
        <div className="space-y-4">
          {DOCTORS.map((d) => (
            <div key={d.id} className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-teal-100">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/doctors/${d.slug}`}
                  className="block truncate text-sm font-semibold text-foreground hover:text-teal-600"
                >
                  {d.name}
                </Link>
                <p className="truncate text-xs text-muted">{d.title}</p>
                <a
                  href={`tel:+91${d.phone}`}
                  className="mt-1 inline-flex text-xs font-semibold text-teal-600"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
        <h3 className="font-heading text-lg font-semibold text-teal-800">Location</h3>
        <p className="mt-3 flex gap-2 text-sm text-muted">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
          {HOSPITAL.address.full}
        </p>
        <a
          href={HOSPITAL.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Get Directions
        </a>
      </div>
    </aside>
  );
}

export function CandidateLists({
  suitable,
  avoid,
}: {
  suitable: string[];
  avoid: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-success/25 bg-success/5 p-5">
        <h3 className="mb-3 font-semibold text-foreground">Ideal candidates</h3>
        <ul className="space-y-2 text-sm text-muted">
          {suitable.map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-warning/30 bg-warning/5 p-5">
        <h3 className="mb-3 font-semibold text-foreground">Who should avoid / caution</h3>
        <ul className="space-y-2 text-sm text-muted">
          {avoid.map((item) => (
            <li key={item} className="flex gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
