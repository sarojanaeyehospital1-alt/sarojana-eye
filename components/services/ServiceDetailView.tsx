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
import { getServiceBySlug, SERVICES } from "@/lib/constants/services";
import { getIcon } from "@/lib/utils/icons";
import type { Service } from "@/lib/types";

export function ServiceDetailView({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  const { content } = service;

  const related = content.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as Service[];

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: content.whatIs,
    procedureType: service.category,
    bodyLocation: "Eye",
    followup: content.recovery.map((r) => `${r.milestone}: ${r.note}`).join("; "),
    howPerformed: content.steps.map((s) => s.title).join(" → "),
    preparation: "Pre-operative evaluation required",
    status: "https://schema.org/EventScheduled",
    url: `${SITE_URL}/services/${service.slug}`,
    recognizingAuthority: {
      "@type": "Organization",
      name: "All India Ophthalmological Society",
    },
    provider: {
      "@type": "MedicalClinic",
      name: HOSPITAL.name,
      address: HOSPITAL.address.full,
    },
  };

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <SchemaOrg data={procedureSchema} />
      <BreadcrumbSchema items={crumbs} />

      <PageHeroWave
        title={`${service.title} in Hyderabad | Sarojana Eye Hospital`}
        subtitle={service.shortDesc}
        crumbs={crumbs}
        badge={service.category}
        icon={<Icon className="h-16 w-16 text-white" />}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <section>
              <h2 className="font-heading text-2xl font-bold text-teal-800 sm:text-[28px]">
                What is {service.title}?
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{content.whatIs}</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal-800 sm:text-[28px]">
                Why is {service.title} Important?
              </h2>
              <ul className="mt-5 space-y-4">
                {content.whyImportant.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal-800 sm:text-[28px]">
                How is {service.title} Performed at Sarojana Eye Hospital?
              </h2>
              <div className="mt-6 space-y-4">
                {content.steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-border bg-white p-5 shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600 font-heading text-lg font-bold text-white">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
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
              <h2 className="mb-5 font-heading text-2xl font-bold text-teal-800 sm:text-[28px]">
                Who Should Consider {service.title}?
              </h2>
              <CandidateLists
                suitable={content.candidates.suitable}
                avoid={content.candidates.avoid}
              />
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal-800 sm:text-[28px]">
                Recovery & Aftercare
              </h2>
              <div className="mt-6 border-l-2 border-teal-500 pl-6">
                {content.recovery.map((item) => (
                  <div key={item.milestone} className="relative mb-6 last:mb-0">
                    <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-teal-50" />
                    <p className="font-semibold text-teal-800">{item.milestone}</p>
                    <p className="mt-1 text-sm text-muted">{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <FaqAccordion
              faqs={content.faqs}
              title={`Frequently Asked Questions about ${service.title}`}
            />

            {related.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-teal-800">
                  You may also be interested in
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {related.map((rel) => {
                    const RelIcon = getIcon(rel.icon);
                    return (
                      <Link
                        key={rel.id}
                        href={`/services/${rel.slug}`}
                        className="rounded-2xl border border-border bg-white p-4 shadow-card transition hover:border-teal-600 hover:shadow-card-hover"
                      >
                        <RelIcon className="h-6 w-6 text-teal-600" />
                        <p className="mt-2 font-heading font-semibold text-foreground">
                          {rel.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-muted">
                          {rel.shortDesc}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          <div>
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
