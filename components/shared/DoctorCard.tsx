"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Clock3,
  Phone,
  Sparkles,
} from "lucide-react";
import type { Doctor } from "@/lib/types";
import { HOSPITAL } from "@/lib/constants/hospital";

export function DoctorCard({
  doctor,
  compact = false,
  index = 0,
}: {
  doctor: Doctor;
  compact?: boolean;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-brand"
    >
      {/* soft glow on hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-light/20 blur-3xl transition duration-500 group-hover:bg-primary-light/35" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className={`relative grid ${compact ? "" : "lg:grid-cols-[280px_1fr]"}`}>
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
          <Image
            src={doctor.image}
            alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
            fill
            sizes="(max-width: 1024px) 100vw, 280px"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/20 to-transparent" />

          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary-light" />
            Expert Surgeon
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:hidden">
            <p className="font-heading text-xl font-bold leading-tight">
              {doctor.name}
            </p>
            <p className="mt-1 text-sm text-white/85">{doctor.specialisation}</p>
          </div>
        </div>

        <div className={`relative flex flex-col ${compact ? "p-5" : "p-6 sm:p-8"}`}>
          <div className="hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-light">
              Consultant Ophthalmologist
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
              <Link
                href={`/doctors/${doctor.slug}`}
                className="transition-colors hover:text-primary"
              >
                {doctor.name}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted">{doctor.title}</p>
            <p className="mt-3 inline-flex rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
              {doctor.specialisation}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {doctor.qualifications.slice(0, 3).map((q) => (
              <span
                key={q}
                className="rounded-full border border-primary/15 bg-gradient-to-r from-background to-white px-3 py-1 text-xs font-medium text-primary shadow-sm"
              >
                {q.split("–")[0].trim()}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/80 bg-background/70 p-3">
              <p className="flex items-start gap-2 text-sm text-muted">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{doctor.previousHospital}</span>
              </p>
            </div>
            <div className="rounded-xl border border-border/80 bg-background/70 p-3">
              <p className="flex items-start gap-2 text-sm text-muted">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{HOSPITAL.timings.display}</span>
              </p>
            </div>
          </div>

          {!compact && (
            <p className="mt-5 line-clamp-2 text-sm leading-relaxed text-muted">
              {doctor.bio}
            </p>
          )}

          <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5 mt-6">
            <a
              href={`tel:+91${doctor.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-background"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <Link
              href={`/appointments?doctor=${doctor.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-2.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
            <Link
              href={`/doctors/${doctor.slug}`}
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-primary transition hover:bg-background"
            >
              View Profile
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
