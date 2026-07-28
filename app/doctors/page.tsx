import type { Metadata } from "next";
import { CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";
import { DoctorsPageHero } from "@/components/doctors/DoctorsPageHero";
import { DoctorProfileCard } from "@/components/doctors/DoctorProfileCard";
import { SectionCtaBand } from "@/components/shared/PageHeroWave";
import { DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL } from "@/lib/constants/hospital";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Best Eye Doctors in Hasthinapuram Hyderabad | Our Surgeons",
  description:
    "Meet Dr. Chirra Karunakar Reddy and Dr. Papagari Anitha Reddy — Phaco & LASIK surgeons at Sarojana Eye Hospital, Hasthinapuram, Hyderabad.",
  path: "/doctors",
  keywords: ["best eye doctor in Hyderabad", "LASIK surgeon Hasthinapuram"],
});

export default function DoctorsPage() {
  return (
    <>
      <DoctorsPageHero />

      <section id="our-doctors" className="doctor-mesh-bg py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              Our team
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Expert surgeons,{" "}
              <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                personalised care
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Fellowship-trained ophthalmologists dedicated to restoring vision with
              precision, compassion, and the latest surgical technology.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-14">
            {DOCTORS.map((doctor, index) => (
              <DoctorProfileCard
                key={doctor.id}
                doctor={doctor}
                reverse={index % 2 === 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-gradient-to-br from-teal-50 via-white to-cyan-50/40 py-12 sm:py-14">
        <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 shadow-sm">
            <CalendarDays className="h-3.5 w-3.5" />
            Appointments
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Book your eye consultation
          </h2>
          <p className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-teal-100 bg-white/80 px-4 py-2.5 text-sm text-muted shadow-sm sm:text-base">
            <Clock3 className="h-4 w-4 text-teal-600" />
            Morning {HOSPITAL.timings.morning} · Evening {HOSPITAL.timings.evening}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/appointments"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-600 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-teal-300 bg-white px-6 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              Call clinic
            </a>
          </div>
        </div>
      </section>

      <SectionCtaBand
        title="Consult with Hyderabad's Top Eye Surgeons"
        subtitle="Call us or fill the form — we'll confirm your slot within 2 hours"
        secondaryHref={HOSPITAL.phoneHref}
        secondaryLabel="Call clinic"
        primaryHref="/appointments"
        primaryLabel="Book Appointment"
      />
    </>
  );
}
