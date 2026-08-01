import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import {
  CandidateLists,
  ServiceSidebar,
} from "@/components/services/ServiceSidebar";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import { getServiceBySlug } from "@/lib/constants/services";
import { getIcon } from "@/lib/utils/icons";
import type { Service } from "@/lib/types";

export function ServiceDetailView({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  const { content } = service;

  const related = content.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as Service[];

  const pageUrl = `${SITE_URL}/services/${service.slug}`;
  const imageUrl = `${SITE_URL}${service.image}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: content.metaTitle,
      description: content.metaDesc,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${pageUrl}#procedure` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
        contentUrl: imageUrl,
        caption: service.imageAlt,
      },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": `${pageUrl}#procedure`,
      name: service.title,
      alternateName: service.shortDesc,
      description: content.whatIs,
      procedureType: service.category,
      bodyLocation: "Eye",
      image: imageUrl,
      followup: content.recovery
        .map((r) => `${r.milestone}: ${r.note}`)
        .join("; "),
      howPerformed: content.steps.map((s) => s.title).join(" → "),
      preparation: "Pre-operative evaluation required",
      status: "https://schema.org/EventScheduled",
      url: pageUrl,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      recognizingAuthority: {
        "@type": "Organization",
        name: "All India Ophthalmological Society",
      },
      provider: {
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/#clinic`,
        name: HOSPITAL.name,
        address: HOSPITAL.address.full,
        url: SITE_URL,
      },
    },
  ];

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  const sectionTitle =
    "font-heading text-xl font-bold text-teal-800 sm:text-2xl lg:text-[28px]";

  return (
    <>
      <SchemaOrg data={schema} />
      <BreadcrumbSchema items={crumbs} id={`${pageUrl}#breadcrumb`} />

      <PageHeroWave
        title={`${service.title} in Hyderabad | Sarojana Eye Hospital`}
        subtitle={service.shortDesc}
        crumbs={crumbs}
        badge={service.category}
        icon={<Icon className="h-16 w-16 text-white" />}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-8 sm:space-y-10 lg:space-y-12">
            <section>
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-teal-50 shadow-card sm:mb-6 sm:aspect-[16/9] sm:rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority
                  className="object-cover"
                />
              </div>
              <h2 className={sectionTitle}>What is {service.title}?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {content.whatIs}
              </p>
            </section>

            {/* Mobile: book form early; full sidebar (timings/doctors/location) after content */}
            <div className="lg:hidden">
              <ServiceSidebar bookOnly />
            </div>

            <section>
              <h2 className={sectionTitle}>Why is {service.title} Important?</h2>
              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {content.whyImportant.map((item) => (
                  <li key={item.title} className="flex gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={sectionTitle}>
                How is {service.title} Performed at Sarojana Eye Hospital?
              </h2>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {content.steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-border bg-white p-4 shadow-card sm:rounded-2xl sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600 font-heading text-base font-bold text-white sm:h-12 sm:w-12 sm:rounded-xl sm:text-lg">
                        {step.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={`${sectionTitle} mb-4 sm:mb-5`}>
                Who Should Consider {service.title}?
              </h2>
              <CandidateLists
                suitable={content.candidates.suitable}
                avoid={content.candidates.avoid}
              />
            </section>

            <section>
              <h2 className={sectionTitle}>Recovery & Aftercare</h2>
              <div className="mt-5 border-l-2 border-teal-500 pl-4 sm:mt-6 sm:pl-6">
                {content.recovery.map((item) => (
                  <div key={item.milestone} className="relative mb-5 last:mb-0 sm:mb-6">
                    <span className="absolute -left-[1.4rem] top-1 h-2.5 w-2.5 rounded-full bg-teal-600 ring-4 ring-teal-50 sm:-left-[1.9rem] sm:h-3 sm:w-3" />
                    <p className="text-sm font-semibold text-teal-800 sm:text-base">
                      {item.milestone}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <FaqAccordion
              faqs={content.faqs}
              title={`Frequently Asked Questions about ${service.title}`}
              embedded
            />

            {related.length > 0 && (
              <section>
                <h2 className={sectionTitle}>You may also be interested in</h2>
                <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="overflow-hidden rounded-xl border border-border bg-white shadow-card transition hover:border-teal-600 hover:shadow-card-hover sm:rounded-2xl"
                    >
                      <div className="relative aspect-[16/10] bg-teal-50">
                        <Image
                          src={rel.image}
                          alt={rel.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3.5 sm:p-4">
                        <p className="font-heading text-sm font-semibold text-foreground sm:text-base">
                          {rel.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-muted">
                          {rel.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Mobile: remaining sidebar info after main content */}
            <div className="lg:hidden">
              <ServiceSidebar infoOnly />
            </div>
          </div>

          {/* Desktop sticky sidebar */}
          <div className="hidden min-w-0 lg:block">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
