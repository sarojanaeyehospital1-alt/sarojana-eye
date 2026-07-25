import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import type { Service } from "@/lib/types";
import Link from "next/link";

export function ServiceDetailContent({ service }: { service: Service }) {
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.definition,
    procedureType: "https://schema.org/PercutaneousProcedure",
    howPerformed: service.approach.join(" "),
    preparation: "Comprehensive eye evaluation at Sarojana Eye Hospital",
    followup: service.recovery,
    status: "https://schema.org/EventScheduled",
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "MedicalClinic",
      name: HOSPITAL.name,
      address: HOSPITAL.address.full,
    },
  };

  return (
    <>
      <SchemaOrg data={procedureSchema} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` },
          ]}
        />

        <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          {service.title} at Sarojana Eye Hospital, Hyderabad
        </h1>
        <p className="mt-2 text-muted">
          Eye care near Nagarjuna Sagar Road, Hasthinapuram Central
        </p>

        <section className="mt-8 prose-none">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            What is {service.title}?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{service.definition}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold">
            Why is {service.title} important?
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{service.importance}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold">
            Our approach & procedure steps
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
            {service.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold">
            Who needs this treatment?
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {service.whoNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold">
            Recovery & aftercare
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{service.recovery}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-semibold">
            Why choose us for {service.title}?
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {service.whyChoose.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 font-heading text-2xl font-semibold">
            Doctors who perform this care
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} compact />
            ))}
          </div>
        </section>

        <div className="mt-12">
          <FaqAccordion
            faqs={service.faqs}
            title={`${service.title} – Common Questions`}
          />
        </div>

        <section className="mt-8 rounded-2xl bg-gradient-to-r from-primary to-primary-dark p-8 text-white">
          <h2 className="font-heading text-2xl font-bold">
            Book {service.title} at Sarojana Eye Hospital
          </h2>
          <p className="mt-2 text-white/85">
            Schedule your visit in Hasthinapuram, Hyderabad today.
          </p>
          <Link
            href="/appointments"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-primary"
          >
            Book Appointment
          </Link>
        </section>

        <div className="mt-10">
          <AppointmentForm defaultService={service.slug} />
        </div>
      </div>
    </>
  );
}
