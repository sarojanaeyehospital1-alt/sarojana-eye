import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { DOCTORS } from "@/lib/constants/doctors";

export function DoctorsPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Meet Our Expert Surgeons"
          subtitle="Fellowship-trained Phaco & LASIK specialists serving Hasthinapuram, Hyderabad"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
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
