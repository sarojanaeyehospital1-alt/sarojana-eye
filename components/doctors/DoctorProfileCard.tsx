"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { Doctor } from "@/lib/types";
import { HOSPITAL } from "@/lib/constants/hospital";

function formatPhone(phone: string) {
  if (phone.length === 10) {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return `+91 ${phone}`;
}

export function DoctorProfileCard({
  doctor,
  compact = false,
  reverse = false,
  showCategory = true,
  index = 0,
}: {
  doctor: Doctor;
  compact?: boolean;
  reverse?: boolean;
  showCategory?: boolean;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();
  const email = doctor.email ?? HOSPITAL.email;
  const phoneDisplay = formatPhone(doctor.phone);
  const whatsappUrl = `https://wa.me/91${doctor.phone}`;

  const motionProps = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay: index * 0.05 },
  };

  if (compact) {
    return (
      <motion.article
        {...motionProps}
        className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal-300/60 hover:shadow-card-hover"
      >
        <div className="grid sm:grid-cols-[190px_1fr]">
          <div className="relative min-h-[210px] overflow-hidden bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 sm:min-h-full">
            <Image
              src={doctor.image}
              alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital`}
              fill
              sizes="190px"
              className="object-cover object-top transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-800 shadow-sm">
              {doctor.specialisation.split(" ")[0]}
            </span>
          </div>

          <div className="flex flex-col p-5 sm:p-6">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600">
              <Sparkles className="h-3.5 w-3.5" />
              {doctor.categoryLabel}
            </p>
            <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
              {doctor.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{doctor.title}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {doctor.shortBadges.slice(0, 4).map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-teal-100 bg-gradient-to-r from-teal-50 to-white px-2 py-0.5 text-[11px] font-medium text-teal-800 sm:text-xs"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
              {doctor.bio}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {doctor.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-teal-100 bg-teal-50/50 px-3 py-1.5"
                >
                  <p className="font-heading text-sm font-bold text-teal-700">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              <Link
                href={`/appointments?doctor=${doctor.slug}`}
                className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 px-3 text-sm font-semibold text-white shadow-md transition hover:from-teal-800 hover:to-teal-700 sm:flex-none sm:px-4"
              >
                <CalendarDays className="h-4 w-4" />
                Book
              </Link>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="inline-flex min-h-10 items-center justify-center gap-1 rounded-xl border border-teal-200 px-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
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

  return (
    <motion.article
      id={doctor.slug}
      {...motionProps}
      className="scroll-mt-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-teal-100/80 bg-white p-5 shadow-card transition duration-300 hover:shadow-card-hover sm:p-7 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-100/30 blur-3xl" />

        {showCategory ? (
          <div className="relative mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-teal-600/60 to-transparent" />
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-gradient-to-r from-teal-50 to-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 shadow-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-teal-500" />
              {doctor.categoryLabel}
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-teal-600/60 to-transparent" />
          </div>
        ) : null}

        <div
          className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="doctor-card-frame relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative z-[2] overflow-hidden rounded-[1.15rem] shadow-hero">
              <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:min-h-[500px]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition duration-700 hover:scale-[1.03]"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 z-[3] rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-bottom-4 sm:-right-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
                {doctor.meetLabel}
              </p>
              <p className="mt-0.5 font-heading text-sm font-bold text-foreground">
                {doctor.specialisation}
              </p>
            </div>
          </div>

          <div className="relative">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs">
                ✦
              </span>
              {doctor.meetLabel}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-[2rem] lg:text-4xl">
              {doctor.name}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
              {doctor.title}
            </p>

            <div className="mt-6 rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/70 to-white p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Qualifications
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.shortBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-white bg-white/90 px-3 py-1.5 text-sm font-semibold text-teal-800 shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 border-l-4 border-teal-500/70 pl-4 text-sm leading-relaxed text-muted sm:text-base">
              {doctor.bio}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {doctor.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-teal-100 bg-gradient-to-b from-white to-teal-50/50 px-3 py-3 text-center shadow-sm transition hover:border-teal-200 hover:shadow-md"
                >
                  <p className="font-heading text-lg font-bold text-teal-700 sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                Specialises in
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.expertise.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-teal-200/80 bg-white px-3.5 py-1.5 text-sm font-medium text-teal-800 shadow-sm transition hover:border-teal-300 hover:bg-teal-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`tel:+91${doctor.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-teal-100 bg-white px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-teal-200 hover:bg-teal-50"
              >
                <Phone className="h-4 w-4 text-teal-600" />
                {phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/50 px-3.5 py-2 text-sm font-medium text-foreground transition hover:bg-emerald-50"
              >
                <FaWhatsapp className="h-4 w-4 text-whatsapp" />
                WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-teal-100 bg-white px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-teal-200 hover:bg-teal-50"
              >
                <Mail className="h-4 w-4 text-teal-600" />
                <span className="max-w-[180px] truncate sm:max-w-none">{email}</span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/appointments?doctor=${doctor.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 px-6 text-sm font-semibold text-white shadow-lg transition hover:from-teal-900 hover:via-teal-800 hover:to-teal-700 hover:shadow-xl"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href={`tel:+91${doctor.phone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-teal-600/30 bg-white px-6 text-sm font-semibold text-teal-700 transition hover:border-teal-600 hover:bg-teal-50"
              >
                <Phone className="h-4 w-4" />
                Call clinic
              </a>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-1.5 px-3 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
              >
                View full profile
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
