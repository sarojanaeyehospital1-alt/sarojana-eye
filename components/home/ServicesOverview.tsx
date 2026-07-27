"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SERVICES } from "@/lib/constants/services";

export function ServicesOverview() {
  const loop = [...SERVICES, ...SERVICES];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Our Eye Care Services"
          subtitle="Comprehensive Ophthalmology Services at Hasthinapuram, Hyderabad"
        />

        <div className="group relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />

          <div className="flex w-max animate-services-marquee gap-5 will-change-transform group-hover:[animation-play-state:paused]">
            {loop.map((service, i) => (
              <div
                key={`${service.id}-${i}`}
                className="w-[280px] shrink-0 sm:w-[320px] lg:w-[360px]"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
