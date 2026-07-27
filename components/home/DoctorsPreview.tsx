import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorListingCard } from "@/components/doctors/DoctorListingCard";
import { DOCTORS } from "@/lib/constants/doctors";

export function DoctorsPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Expert Surgeons"
          subtitle="Fellowship-trained Phaco & LASIK specialists serving Hasthinapuram, Hyderabad"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {DOCTORS.map((doctor, index) => (
            <DoctorListingCard
              key={doctor.id}
              doctor={doctor}
              index={index}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/doctors"
            className="font-semibold text-primary hover:underline"
          >
            View full doctor profiles →
          </Link>
        </div>
      </div>
    </section>
  );
}
