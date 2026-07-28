"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Eye, Heart, Stethoscope } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL } from "@/lib/constants/hospital";

const HERO_BADGES = [
  "20+ years combined surgical experience",
  "Aravind & L.V. Prasad trained",
  "FICO UK fellowship",
];

const PAGE_STATS = [
  { value: "2", label: "Specialists", icon: Stethoscope },
  { value: "20+", label: "Years experience", icon: Award },
  { value: "25K+", label: "Happy patients", icon: Heart },
  { value: "10K+", label: "Procedures done", icon: Eye },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function DoctorsPageHero() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0a3d47 0%, #0F5A68 35%, #1A7A8A 65%, #22A8BF 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="hero-particles pointer-events-none absolute inset-0">
          <span style={{ top: "18%", left: "12%", animationDelay: "0s" }} />
          <span style={{ top: "55%", left: "8%", animationDelay: "2s" }} />
          <span style={{ top: "30%", right: "15%", animationDelay: "4s" }} />
          <span style={{ top: "70%", right: "25%", animationDelay: "1s" }} />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Breadcrumb
            light
            items={[
              { name: "Home", href: "/" },
              { name: "Doctors", href: "/doctors" },
            ]}
          />

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
            <motion.div
              className="text-center lg:text-left"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur sm:text-sm"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                {HOSPITAL.name} · Hasthinapuram
              </motion.span>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-4 font-heading text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.85rem]"
              >
                Meet the specialists{" "}
                <span className="bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent">
                  behind your care
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0"
              >
                Advanced Phaco, LASIK, and comprehensive eye care — fellowship-trained
                surgeons, one trusted hospital in Hasthinapuram, Hyderabad.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                {HERO_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur transition hover:bg-white/20 sm:text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                <a
                  href="#our-doctors"
                  className="inline-flex min-h-11 items-center rounded-xl border-2 border-white/70 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:border-white hover:bg-white/15"
                >
                  Meet the team
                </a>
                <Link
                  href="/appointments"
                  className="inline-flex min-h-11 items-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-teal-800 shadow-hero transition hover:scale-[1.02] hover:bg-teal-50"
                >
                  Book appointment
                </Link>
              </motion.div>
            </motion.div>

            <div className="flex justify-center gap-5 sm:gap-7">
              {DOCTORS.map((doctor, i) => (
                <motion.div
                  key={doctor.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 32, rotate: i === 0 ? -3 : 3 }}
                  animate={{ opacity: 1, y: 0, rotate: i === 0 ? -2 : 2 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15, type: "spring" }}
                  className={`relative ${i === 1 ? "mt-10 sm:mt-14" : ""}`}
                >
                  <div className="absolute -inset-1 rounded-[1.1rem] bg-gradient-to-br from-white/50 via-teal-200/40 to-cyan-300/30 blur-sm" />
                  <div className="relative overflow-hidden rounded-2xl border-2 border-white/50 shadow-hero">
                    <div className="h-40 w-32 sm:h-48 sm:w-40">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={160}
                        height={192}
                        className="h-full w-full object-cover object-top"
                        priority
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-950/90 via-teal-950/50 to-transparent px-3 pb-3 pt-10">
                      <p className="text-center text-xs font-semibold text-white sm:text-sm">
                        {doctor.name.replace("Dr. ", "")}
                      </p>
                      <p className="mt-0.5 text-center text-[10px] text-white/75 sm:text-xs">
                        {doctor.specialisation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <svg
          className="relative w-full text-white"
          viewBox="0 0 1440 64"
          fill="currentColor"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,64 480,0 720,24 C960,48 1200,64 1440,24 L1440,64 L0,64 Z" />
        </svg>
      </section>

      <section className="relative border-b border-border bg-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:gap-6 sm:px-6 lg:px-8">
          {PAGE_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/80 to-white p-4 text-center shadow-card transition hover:border-teal-200 hover:shadow-card-hover"
              >
                <div className="stat-shimmer absolute inset-0 opacity-0 transition group-hover:opacity-100" />
                <span className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="relative mt-2 font-heading text-2xl font-bold text-teal-700 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="relative mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
