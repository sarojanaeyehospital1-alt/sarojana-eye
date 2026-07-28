import type { Metadata } from "next";
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
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

      <section id="our-doctors" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
              <Sparkles className="h-3.5 w-3.5 text-teal-500" />
              Our Doctors
            </p>
            <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Meet our eye specialists
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Fellowship-trained Phaco &amp; LASIK surgeons providing personalised
              eye care at Sarojana Eye Hospital, Hasthinapuram.
            </p>
          </div>

          <div>
            {DOCTORS.map((doctor, index) => (
              <DoctorProfileCard
                key={doctor.id}
                doctor={doctor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
            <CalendarDays className="h-3.5 w-3.5" />
            Appointments
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Book your eye consultation
          </h2>
          <div className="mt-5 flex flex-col items-center gap-2.5 text-sm text-muted sm:flex-row sm:justify-center sm:gap-6 sm:text-base">
            <p className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-teal-600" />
              Morning {HOSPITAL.timings.morning} · Evening {HOSPITAL.timings.evening}
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-600" />
              Hasthinapuram, Hyderabad
            </p>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/appointments"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800"
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
