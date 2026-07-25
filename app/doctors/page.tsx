import type { Metadata } from "next";
import { PageHeroWave, SectionCtaBand } from "@/components/shared/PageHeroWave";
import { DoctorListingCard } from "@/components/doctors/DoctorListingCard";
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

const TRUST = [
  "🏥 Trained at Aravind Eye Hospital & LV Prasad",
  "🎓 International Fellowship (FICO, UK)",
  "⭐ 20+ Years Combined Experience",
];

export default function DoctorsPage() {
  return (
    <>
      <PageHeroWave
        title="Meet Our Expert Eye Surgeons"
        subtitle="Fellowship-trained ophthalmologists with decades of surgical excellence at Sarojana Eye Hospital, Hyderabad"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Doctors", href: "/doctors" },
        ]}
      />

      <section className="border-b border-teal-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-5 text-center sm:flex-row sm:gap-0 sm:px-6 lg:px-8">
          {TRUST.map((item, i) => (
            <div key={item} className="flex items-center sm:flex-1 sm:justify-center">
              {i > 0 ? (
                <span className="mr-4 hidden h-8 w-px bg-teal-100 sm:block" />
              ) : null}
              <p className="text-sm font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {DOCTORS.map((doctor, index) => (
            <DoctorListingCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </section>

      <SectionCtaBand
        title="Consult with Hyderabad's Top Eye Surgeons"
        subtitle="Call us or fill the form — we'll confirm your slot within 2 hours"
        secondaryHref={HOSPITAL.phoneHref}
        secondaryLabel="📞 Call Now"
        primaryHref="/appointments"
        primaryLabel="📅 Book Appointment"
      />
    </>
  );
}
