"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  Phone,
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
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.4, delay: index * 0.05 },
  };

  const infoRows = [
    { label: "Specialty", value: doctor.title },
    { label: "Degrees", value: doctor.shortBadges.join(", ") },
    {
      label: "Experience",
      value: doctor.stats.map((s) => `${s.value} ${s.label}`).join(" · "),
    },
    {
      label: "Expertise",
      value: doctor.expertise.slice(0, 4).join(", "),
    },
  ];

  if (compact) {
    return (
      <motion.article
        {...motionProps}
        className="overflow-hidden rounded-2xl border border-teal-100/80 bg-white shadow-card transition hover:border-teal-200 hover:shadow-card-hover"
      >
        <div className="grid sm:grid-cols-[168px_1fr]">
          <div className="relative min-h-[190px] bg-teal-50 sm:min-h-full">
            <Image
              src={doctor.image}
              alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital`}
              fill
              sizes="168px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-600">
              {doctor.categoryLabel}
            </p>
            <h3 className="mt-1.5 font-heading text-xl font-bold text-foreground">
              {doctor.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{doctor.title}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {doctor.shortBadges.slice(0, 3).map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-teal-100 bg-teal-50 px-2.5 py-0.5 text-[11px] font-medium text-teal-800"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
              {doctor.bio}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              <Link
                href={`/appointments?doctor=${doctor.slug}`}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-teal-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                <CalendarDays className="h-4 w-4" />
                Book
              </Link>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="inline-flex min-h-10 items-center gap-1 rounded-xl border border-teal-200 px-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
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
      className="scroll-mt-28 border-b border-teal-100/80 pb-14 last:border-b-0 last:pb-0 lg:pb-20"
    >
      <div
        className={`grid items-start gap-8 lg:grid-cols-[minmax(280px,0.92fr)_1.08fr] lg:gap-12 xl:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Sticky doctor image — Avila-style */}
        <div className="lg:sticky lg:top-28">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-teal-50 shadow-[0_12px_40px_rgba(15,90,104,0.14)] lg:mx-0 lg:max-w-none">
            <Image
              src={doctor.image}
              alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
              priority={index === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#062a31]/90 to-transparent px-5 pb-5 pt-16">
              <p className="font-heading text-lg font-bold text-white">
                {doctor.name}
              </p>
              <p className="mt-0.5 text-sm text-teal-100/90">
                {doctor.specialisation}
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling content */}
        <div>
          {showCategory ? (
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600">
              {doctor.categoryLabel}
            </p>
          ) : null}

          <p className="mt-3 text-sm font-medium leading-snug text-teal-800 sm:text-base">
            Best {doctor.specialisation} in Hasthinapuram, Hyderabad
          </p>

          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-[2.1rem]">
            {doctor.name}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            {doctor.bio}
          </p>

          {doctor.bioExtra ? (
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
              {doctor.bioExtra}
            </p>
          ) : null}

          {/* Info table */}
          <div className="mt-7 overflow-hidden rounded-xl border border-teal-100 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {infoRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-teal-50/40" : "bg-white"}
                  >
                    <th
                      scope="row"
                      className="w-[32%] whitespace-nowrap px-4 py-3.5 align-top text-[13px] font-bold text-teal-800 sm:w-36 sm:px-5"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-3.5 text-[13px] leading-relaxed text-foreground/85 sm:px-5 sm:text-sm">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trusted support checklist */}
          <div className="mt-8">
            <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
              Trusted Eye Care Support
            </h3>
            <ul className="mt-4 space-y-2.5">
              {doctor.expertise.slice(0, 5).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted sm:text-[15px]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 space-y-2 text-sm sm:text-[15px]">
            <p>
              <span className="font-semibold text-foreground">Email:</span>{" "}
              <a
                href={`mailto:${email}`}
                className="text-teal-700 transition hover:underline"
              >
                {email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-foreground">Call:</span>{" "}
              <a
                href={`tel:+91${doctor.phone}`}
                className="text-teal-700 transition hover:underline"
              >
                {phoneDisplay}
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={`tel:+91${doctor.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-teal-50"
            >
              <Phone className="h-4 w-4 text-teal-600" />
              {phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/60 px-3.5 py-2 text-sm font-medium text-foreground transition hover:bg-emerald-50"
            >
              <FaWhatsapp className="h-4 w-4 text-whatsapp" />
              WhatsApp
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-teal-50"
            >
              <Mail className="h-4 w-4 text-teal-600" />
              Mail
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/appointments?doctor=${doctor.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-700 px-5 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
            <Link
              href={`/doctors/${doctor.slug}`}
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
            >
              View full profile
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
