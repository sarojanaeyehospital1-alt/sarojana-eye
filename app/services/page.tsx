import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { ServicesHub } from "@/components/services/ServicesHub";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import { SERVICES } from "@/lib/constants/services";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Eye Care Services in Hasthinapuram Hyderabad | Sarojana Eye Hospital",
  description:
    "Sarojana Eye Hospital offers comprehensive eye care services in Hyderabad — LASIK, SMILE, TRANS PRK, SMARTSURF, INTRALASE, cataract surgery, glaucoma, diabetic eye care, retina evaluation & more. Book your appointment today.",
  path: "/services",
  keywords: [
    "eye care services Hyderabad",
    "cataract surgery Hasthinapuram",
    "glaucoma treatment Hyderabad",
    "LASIK surgery Hyderabad",
    "SMILE laser surgery Hyderabad",
    "TRANS PRK Hyderabad",
  ],
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eye Care Services at Sarojana Eye Hospital",
    description:
      "Complete list of ophthalmology services offered in Hasthinapuram, Hyderabad",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
      image: `${SITE_URL}${service.image}`,
      description: service.shortDesc,
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <SchemaOrg data={itemListSchema} />

      <PageHeroWave
        title="Comprehensive Eye Care Services in Hyderabad"
        subtitle="From routine eye checkups to advanced laser surgeries — all under one roof at Hasthinapuram"
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <ServicesHub />
      </section>

      <section className="bg-teal-800 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-8 w-8 text-teal-300" />
          <h2 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            Advanced Laser Vision Correction
          </h2>
          <p className="mt-3 text-white/80">
            LASIK · TRANS PRK · SMARTSURF · INTRALASE · SMILE
          </p>
          <Link
            href="/laser-procedures"
            className="mt-6 inline-flex rounded-xl border-2 border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Laser Procedures →
          </Link>
          <p className="mt-4 text-xs text-white/70">
            All procedures by fellowship-trained surgeons
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-teal-800 sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Our doctors will guide you to the right treatment after a
            comprehensive eye evaluation
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-teal-600 px-5 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50"
            >
              📞 Call Us
            </a>
            <Link
              href="/appointments"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
            >
              📅 Book a Checkup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
