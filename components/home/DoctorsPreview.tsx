"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CalendarDays,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DOCTORS } from "@/lib/constants/doctors";
import type { Doctor } from "@/lib/types";

const TRUST_POINTS = [
  "Aravind & L.V. Prasad trained",
  "FICO UK fellowship",
  "20+ years combined experience",
];

function HomeDoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const reduceMotion = useReducedMotion();
  const badge = doctor.specialisation.split("&")[0]?.trim() || "Eye Care";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-[0_4px_24px_rgba(26,122,138,0.08)] transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_12px_40px_rgba(26,122,138,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-400" />

      <div className="grid md:grid-cols-[240px_1fr]">
        <div className="relative min-h-[260px] overflow-hidden bg-gradient-to-br from-teal-800 to-teal-600 md:min-h-full">
          <Image
            src={doctor.image}
            alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital`}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-teal-900/20" />
          <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-800 shadow-md backdrop-blur-sm">
            {badge}
          </span>
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-md">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
              {doctor.meetLabel}
            </p>
            <p className="mt-0.5 text-xs font-bold text-white">
              {doctor.specialisation}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-100/40 blur-2xl" />

          <p className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-teal-700">
            <Stethoscope className="h-3.5 w-3.5" />
            {doctor.categoryLabel}
          </p>

          <h3 className="mt-3 font-heading text-xl font-bold text-foreground sm:text-2xl lg:text-[1.65rem]">
            {doctor.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
            {doctor.title}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {doctor.shortBadges.map((item) => (
              <span
                key={item}
                className="rounded-md border border-teal-100 bg-gradient-to-r from-teal-50 to-white px-2.5 py-1 text-xs font-semibold text-teal-800 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-4 border-l-[3px] border-teal-500/70 pl-3.5 text-sm leading-relaxed text-muted">
            {doctor.bio}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {doctor.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-teal-100 bg-gradient-to-b from-white to-teal-50/60 px-2 py-3 text-center transition group-hover:border-teal-200"
              >
                <p className="font-heading text-sm font-bold text-teal-700 sm:text-base">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/appointments?doctor=${doctor.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 px-5 text-sm font-semibold text-white shadow-md transition hover:from-teal-800 hover:to-teal-700 hover:shadow-lg"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
            <Link
              href={`/doctors/${doctor.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-teal-200 bg-white px-4 text-sm font-semibold text-teal-700 transition hover:border-teal-300 hover:bg-teal-50"
            >
              Full profile
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function DoctorsPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-white py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Expert Surgeons"
          subtitle="Fellowship-trained Phaco & LASIK specialists serving Hasthinapuram, Hyderabad"
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {TRUST_POINTS.map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-xs font-medium text-foreground shadow-sm sm:text-sm"
            >
              <Award className="h-3.5 w-3.5 text-teal-600" />
              {point}
            </span>
          ))}
        </div>

        <div className="space-y-7 sm:space-y-9">
          {DOCTORS.map((doctor, index) => (
            <HomeDoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/doctors"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 px-8 text-sm font-semibold text-white shadow-lg transition hover:from-teal-900 hover:via-teal-800 hover:to-teal-700 hover:shadow-xl sm:w-auto sm:min-w-[240px]"
          >
            <Sparkles className="h-4 w-4" />
            View all doctors
          </Link>
        </div>
      </div>
    </section>
  );
}
