"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Phone } from "lucide-react";
import type { Doctor } from "@/lib/types";
import { ClinicTimingsBox } from "@/components/shared/PageHeroWave";

export function DoctorListingCard({
  doctor,
  index = 0,
}: {
  doctor: Doctor;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-teal-600/12 bg-white shadow-[0_8px_40px_rgba(26,122,138,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(26,122,138,0.22)]"
    >
      <div
        className="px-6 pb-8 pt-10 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
        }}
      >
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-hero">
          <Image
            src={doctor.image}
            alt={`${doctor.name} – Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="mt-5 font-heading text-2xl font-bold">{doctor.name}</h2>
        <span className="mt-2 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
          {doctor.specialisation}
        </span>
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          {doctor.shortBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-teal-600/30 bg-teal-600/10 px-3 py-1 text-xs font-semibold text-teal-600"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="border-l-2 border-teal-500 pl-4">
          {doctor.affiliations.slice(0, 2).map((item) => (
            <div key={`${item.hospital}-${item.role}`} className="relative mb-3 last:mb-0">
              <span className="absolute -left-[1.4rem] top-1.5 h-2.5 w-2.5 rounded-full bg-teal-600" />
              <p className="text-sm font-semibold text-foreground">{item.role}</p>
              <p className="text-sm text-muted">
                {item.hospital}{" "}
                <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-bold uppercase text-teal-700">
                  {item.tag}
                </span>
              </p>
            </div>
          ))}
        </div>

        <ClinicTimingsBox />

        <p className="line-clamp-3 text-sm italic leading-relaxed text-muted">
          {doctor.bio}
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          <a
            href={`tel:+91${doctor.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-600 px-4 py-3 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
          >
            <Phone className="h-4 w-4" />
            Call Doctor
          </a>
          <Link
            href={`/appointments?doctor=${doctor.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            <CalendarDays className="h-4 w-4" />
            Book
          </Link>
        </div>

        <Link
          href={`/doctors/${doctor.slug}`}
          className="inline-flex text-sm font-semibold text-teal-600 underline-offset-4 hover:underline"
        >
          View Full Profile →
        </Link>
      </div>
    </motion.article>
  );
}
