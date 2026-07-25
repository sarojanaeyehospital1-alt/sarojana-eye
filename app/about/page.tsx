import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  Award,
  Building2,
  Eye,
  HeartHandshake,
  Microscope,
  Sparkles,
  Stethoscope,
  Target,
} from "lucide-react";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { StatsCounter } from "@/components/home/StatsCounter";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { LocationMap } from "@/components/home/LocationMap";
import { createMetadata } from "@/lib/utils/metadata";
import { HOSPITAL } from "@/lib/constants/hospital";
import { DOCTORS } from "@/lib/constants/doctors";

export const metadata: Metadata = createMetadata({
  title: "About Sarojana Eye Hospital | Eye Care in Hasthinapuram, Hyderabad",
  description:
    "Learn about Sarojana Eye Hospital’s mission, vision, and 20+ years of ophthalmology excellence in Hasthinapuram near Nagarjuna Sagar Road, Hyderabad.",
  path: "/about",
  keywords: ["about Sarojana Eye Hospital", "eye hospital Hasthinapuram"],
});

const VALUES = [
  {
    title: "Precision",
    desc: "Evidence-based diagnostics and meticulous surgical technique in every consultation.",
    icon: Target,
  },
  {
    title: "Compassion",
    desc: "Patient-first communication so families understand options with clarity and confidence.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    desc: "Modern laser and cataract technologies aligned with evolving eye care standards.",
    icon: Sparkles,
  },
  {
    title: "Accessibility",
    desc: "Quality ophthalmology care available locally in Hasthinapuram, Hyderabad.",
    icon: Accessibility,
  },
];

const INFRASTRUCTURE = [
  {
    title: "Consultation Suites",
    desc: "Dedicated rooms for comprehensive eye examinations and counselling.",
    icon: Stethoscope,
  },
  {
    title: "Diagnostic Support",
    desc: "Refraction, pressure checks, and retina evaluation under one roof.",
    icon: Microscope,
  },
  {
    title: "Surgical Pathways",
    desc: "Phacoemulsification and laser vision correction counselling pathways.",
    icon: Eye,
  },
  {
    title: "Patient Comfort",
    desc: "Friendly waiting areas with clear guidance on every treatment plan.",
    icon: Building2,
  },
];

const AFFILIATIONS = [
  {
    name: "Aravind Eye Hospital, Madurai",
    detail: "Anterior segment fellowship training pedigree",
  },
  {
    name: "L.V. Prasad Eye Hospital",
    detail: "World-renowned eye care institute association",
  },
  {
    name: "Yashoda Hospital, Malakpet",
    detail: "Former senior consultant experience",
  },
  {
    name: "F.I.C.O (U.K.)",
    detail: "International Council of Ophthalmology fellowship",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeroWave
        title={`About ${HOSPITAL.name}`}
        subtitle={HOSPITAL.subTagline}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
              Our Story
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800 sm:text-4xl">
              Trusted eye care in the heart of Hasthinapuram
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-teal-500" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Sarojana Eye Hospital was founded to bring advanced ophthalmology
                closer to families in Hasthinapuram and across Hyderabad. What
                began as a commitment to ethical, high-quality eye care has grown
                into a trusted centre for LASIK, cataract surgery, glaucoma care,
                paediatric ophthalmology, and comprehensive eye examinations near
                Nagarjuna Sagar Road.
              </p>
              <p>
                Our clinical leadership draws from premier institutes — including
                training and affiliations associated with Aravind Eye Hospital,
                Madurai; L.V. Prasad Eye Hospital; and former consultant
                experience at Yashoda Hospital, Malakpet — ensuring patients
                receive care grounded in excellence and empathy.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/doctors"
                className="inline-flex rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              >
                Meet Our Doctors
              </Link>
              <Link
                href="/appointments"
                className="inline-flex rounded-xl border border-teal-600 px-5 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-500/20 to-teal-800/10 blur-sm" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-card-hover">
              <Image
                src="/images/banner.png"
                alt="Sarojana Eye Hospital – advanced eye care in Hasthinapuram, Hyderabad"
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-teal-50/60 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-border bg-white p-7 shadow-card sm:p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-card">
              <Target className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-teal-800">
              Our Mission
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Bringing world-class eye care to every doorstep in Hyderabad —
              especially communities around Hasthinapuram Central.
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-white p-7 shadow-card sm:p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-card">
              <Eye className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-teal-800">
              Our Vision
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              A Hyderabad where no one loses sight due to lack of access to
              quality care.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
            What Guides Us
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800">
            Our Values
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-teal-500" />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-card-hover"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                <value.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-gradient-to-b from-white to-teal-50/40 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
              Facilities
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800">
              Hospital infrastructure highlights
            </h2>
            <p className="mt-3 text-muted">
              Designed for accurate diagnosis, comfortable visits, and clear
              treatment guidance.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {INFRASTRUCTURE.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-card"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
          <div
            className="px-6 py-7 text-white sm:px-8"
            style={{
              background:
                "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
            }}
          >
            <div className="flex items-start gap-3">
              <Award className="mt-1 h-7 w-7 shrink-0 text-teal-200" />
              <div>
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                  Clinical affiliations & pedigree
                </h2>
                <p className="mt-2 max-w-3xl text-sm text-white/85 sm:text-base">
                  Our surgeons’ backgrounds include Fellowship of the
                  International Council of Ophthalmology (U.K.), anterior segment
                  fellowship training linked to Aravind Eye Hospital, Madurai,
                  association with L.V. Prasad Eye Hospital, and senior
                  consultant experience at Yashoda Hospital, Malakpet.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            {AFFILIATIONS.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-teal-100 bg-teal-50/70 p-5"
              >
                <p className="font-heading text-lg font-semibold text-teal-800">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border px-6 py-5 sm:px-8">
            <Link
              href="/doctors"
              className="inline-flex font-semibold text-teal-600 hover:underline"
            >
              Meet our doctors →
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors preview strip */}
      <section className="border-y border-border bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-teal-800 sm:text-3xl">
                Led by fellowship-trained surgeons
              </h2>
              <p className="mt-2 text-muted">
                Experienced Phaco &amp; LASIK specialists serving Hasthinapuram.
              </p>
            </div>
            <Link
              href="/doctors"
              className="text-sm font-semibold text-teal-600 hover:underline"
            >
              View profiles →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {DOCTORS.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctors/${doctor.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-teal-50/40 p-4 transition hover:border-teal-600 hover:shadow-card"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-teal-200">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-lg font-semibold text-foreground">
                    {doctor.name}
                  </p>
                  <p className="truncate text-sm text-muted">{doctor.title}</p>
                  <p className="mt-1 text-xs font-semibold text-teal-600">
                    {doctor.specialisation}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <LocationMap />
      <AppointmentCTA />
    </>
  );
}
