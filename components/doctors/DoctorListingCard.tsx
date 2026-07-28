"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock3, Phone } from "lucide-react";
import type { Doctor } from "@/lib/types";

export function DoctorListingCard({
  doctor,
  index = 0,
  variant = "full",
}: {
  doctor: Doctor;
  index?: number;
  variant?: "full" | "preview";
}) {
  const reduceMotion = useReducedMotion();
  const currentRole = doctor.affiliations.find((a) => a.tag === "Current");

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-card transition hover:border-teal-600/25 hover:shadow-card-hover"
    >
      <div className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 px-5 pb-7 pt-8 text-center text-white sm:px-6 sm:pb-8 sm:pt-9">
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-[3px] border-white/90 shadow-lg ring-4 ring-white/20 sm:h-28 sm:w-28">
          <Image
            src={doctor.image}
            alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="mt-4 font-heading text-lg font-bold leading-tight sm:text-xl">
          {doctor.name}
        </h2>
        <p className="mt-1.5 text-xs text-white/80 sm:text-sm">{doctor.title}</p>
        <p className="mt-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/25 sm:text-sm">
          {doctor.specialisation}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap justify-center gap-1.5">
          {doctor.shortBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-md border border-teal-100 bg-teal-50/60 px-2 py-0.5 text-[11px] font-medium text-teal-800 sm:text-xs"
            >
              {badge}
            </span>
          ))}
        </div>

        {variant === "full" && currentRole ? (
          <div className="mt-5 border-y border-border/70 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Current Role
            </p>
            <p className="mt-1.5 text-sm font-medium text-foreground">
              {currentRole.role}
            </p>
            <p className="text-sm text-muted">{currentRole.hospital}</p>
          </div>
        ) : null}

        <p
          className={`mt-5 text-sm leading-relaxed text-muted ${
            variant === "preview" ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {doctor.bio}
        </p>

        {variant === "full" ? (
          <p className="mt-4 flex items-start gap-2 text-xs text-muted sm:text-sm">
            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
            <span>{doctor.experience}</span>
          </p>
        ) : null}

        <div className="mt-auto space-y-3 pt-6">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <a
              href={`tel:+91${doctor.phone}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-teal-600/30 bg-white px-4 text-sm font-semibold text-teal-700 transition hover:border-teal-600 hover:bg-teal-50"
            >
              <Phone className="h-4 w-4 shrink-0" />
              Call
            </a>
            <Link
              href={`/appointments?doctor=${doctor.slug}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              <CalendarDays className="h-4 w-4 shrink-0" />
              Book
            </Link>
          </div>

          <Link
            href={`/doctors/${doctor.slug}`}
            className="inline-flex w-full items-center justify-center gap-1.5 py-1 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
          >
            View full profile
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
