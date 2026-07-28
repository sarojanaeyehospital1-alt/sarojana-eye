import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SERVICES } from "@/lib/constants/services";

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Eye Care Services"
          subtitle="Comprehensive Ophthalmology Services at Hasthinapuram, Hyderabad"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
