"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Eye, Heart, Stethoscope } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL } from "@/lib/constants/hospital";

const HERO_BADGES = [
  "Aravind & L.V. Prasad trained",
  "FICO UK fellowship",
  "20+ years experience",
];

const PAGE_STATS = [
  { value: "2", label: "Specialists", icon: Stethoscope },
  { value: "20+", label: "Years experience", icon: Award },
  { value: "5 Lakh+", label: "Happy patients", icon: Heart },
  { value: "10K+", label: "Procedures done", icon: Eye },
];

export function DoctorsPageHero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #072f36 0%, #0F5A68 45%, #1A7A8A 100%)",
          }}
        />
        <div className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-teal-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Breadcrumb
            light
            items={[
              { name: "Home", href: "/" },
              { name: "Doctors", href: "/doctors" },
            ]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div
              className="text-center lg:text-left"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-sm font-medium text-white/65">
                {HOSPITAL.name} · Hasthinapuram, Hyderabad
              </p>

              <h1 className="mt-3 font-heading text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.7rem]">
                Meet Our Experienced Eye Surgeons
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
                Fellowship-trained Phaco &amp; LASIK surgeons delivering precise,
                compassionate eye care at one trusted centre.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {HERO_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="#our-doctors"
                  className="inline-flex min-h-11 items-center rounded-xl border-2 border-white/50 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Meet the team
                </a>
                <Link
                  href="/appointments"
                  className="inline-flex min-h-11 items-center rounded-xl bg-white px-6 text-sm font-semibold text-teal-800 shadow-md transition hover:bg-teal-50"
                >
                  Book appointment
                </Link>
              </div>
            </motion.div>

            <div className="flex justify-center gap-4 sm:gap-5">
              {DOCTORS.map((doctor, i) => (
                <motion.div
                  key={doctor.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.12 + i * 0.1 }}
                  className={i === 1 ? "mt-8 sm:mt-12" : ""}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/30 shadow-[0_16px_40px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
                    <div className="relative h-44 w-32 sm:h-56 sm:w-40">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes="160px"
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#062a31] via-[#062a31]/70 to-transparent px-2.5 pb-3 pt-12">
                        <p className="text-center text-xs font-semibold text-white sm:text-sm">
                          {doctor.name.replace("Dr. ", "")}
                        </p>
                        <p className="mt-0.5 text-center text-[10px] text-white/70">
                          {doctor.specialisation}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <svg
          className="relative w-full text-white"
          viewBox="0 0 1440 40"
          fill="currentColor"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,28 1440,18 L1440,40 L0,40 Z" />
        </svg>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 py-7 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8">
          {PAGE_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="rounded-2xl border border-teal-100 bg-gradient-to-b from-teal-50/70 to-white px-3 py-4 text-center"
              >
                <Icon className="mx-auto h-5 w-5 text-teal-600" />
                <p className="mt-2 font-heading text-2xl font-bold text-teal-800 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
