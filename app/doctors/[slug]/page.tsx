import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ClinicTimingsBox } from "@/components/shared/PageHeroWave";
import { DoctorProfileCard } from "@/components/doctors/DoctorProfileCard";
import { getDoctorBySlug, DOCTORS } from "@/lib/constants/doctors";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import { getIcon } from "@/lib/utils/icons";
import { createMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return createMetadata({
    title: doctor.metaTitle,
    description: doctor.metaDesc,
    path: `/doctors/${doctor.slug}`,
    keywords: doctor.expertise.map((e) => `${e} Hyderabad`),
    image: doctor.image,
  });
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const otherDoctors = DOCTORS.filter((d) => d.slug !== doctor.slug);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: doctor.name, href: `/doctors/${doctor.slug}` },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.bio,
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Ophthalmology",
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: HOSPITAL.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: HOSPITAL.address.street,
        addressLocality: HOSPITAL.address.city,
        postalCode: "500079",
      },
    },
    hasCredential: doctor.shortBadges,
    telephone: doctor.phone,
    image: `${SITE_URL}${doctor.image}`,
    url: `${SITE_URL}/doctors/${doctor.slug}`,
    availableService: {
      "@type": "MedicalProcedure",
      name: "LASIK Surgery",
    },
  };

  return (
    <>
      <SchemaOrg data={schema} />
      <BreadcrumbSchema items={crumbs} />

      <div className="border-b border-border bg-teal-50/60">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumb items={crumbs} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,35%)_minmax(0,1fr)] lg:gap-8">
          {/* Sticky sidebar */}
          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card-hover">
              <div className="relative aspect-[4/4.2] max-h-[360px] bg-gradient-to-br from-teal-800 to-teal-500 sm:max-h-none">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-4 p-4 sm:p-5">
                <div>
                  <h1 className="font-heading text-xl font-bold leading-tight text-teal-600 sm:text-[26px]">
                    {doctor.name}
                  </h1>
                  <span className="mt-2 inline-flex rounded-full bg-teal-600/10 px-3 py-1 text-xs font-semibold text-teal-700">
                    {doctor.specialisation}
                  </span>
                </div>

                <ul className="space-y-2.5 border-y border-border py-4 text-sm text-muted">
                  <li>📋 {doctor.title}</li>
                  <li>🏥 {HOSPITAL.name}</li>
                  <li className="flex gap-2">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    {HOSPITAL.timings.display}
                  </li>
                  <li className="font-medium text-warning">📵 Sunday Closed</li>
                </ul>

                <div className="grid gap-2">
                  <a
                    href={`tel:+91${doctor.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-600 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50"
                  >
                    <Phone className="h-4 w-4" />
                    Call Doctor
                  </a>
                  <a
                    href={`https://wa.me/91${doctor.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 text-sm font-semibold text-white"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <Link
                    href={`/appointments?doctor=${doctor.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white hover:bg-teal-800"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Appointment
                  </Link>
                </div>

                <div className="rounded-xl bg-teal-50 p-4 text-center">
                  <div className="flex justify-center gap-0.5 text-warning">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-bold text-foreground">5.0</p>
                  <p className="text-xs text-muted">Based on patient feedback</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main column */}
          <div className="min-w-0 space-y-8 sm:space-y-10">
            <section>
              <h2 className="font-heading text-xl font-bold text-teal-800 sm:text-[28px]">
                About {doctor.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {doctor.bio}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                {doctor.bioExtra}
              </p>
              <div className="mt-5 h-px bg-teal-200 sm:mt-6" />
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-teal-800 sm:text-[28px]">
                Qualifications & Training
              </h2>
              <div className="relative mt-5 border-l-2 border-teal-500 pl-4 sm:mt-6 sm:pl-6">
                {doctor.qualificationDetails.map((q, index) => {
                  const Icon = getIcon(q.icon);
                  return (
                    <div
                      key={q.title}
                      className={`relative mb-3 rounded-xl border border-border p-3.5 last:mb-0 sm:mb-4 sm:rounded-2xl sm:p-4 ${
                        index % 2 === 0 ? "bg-white" : "bg-teal-50/70"
                      }`}
                    >
                      <span className="absolute -left-[1.35rem] top-5 h-2.5 w-2.5 rounded-full bg-teal-600 ring-4 ring-white sm:-left-[1.9rem] sm:h-3 sm:w-3" />
                      <div className="flex gap-3">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600 sm:h-10 sm:w-10 sm:rounded-xl">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground sm:text-base">
                            {q.title}
                          </p>
                          <p className="mt-1 text-sm text-muted">{q.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-teal-800 sm:text-[28px]">
                Professional Experience
              </h2>
              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                {doctor.affiliations.map((a) => (
                  <div
                    key={`${a.hospital}-${a.role}`}
                    className="rounded-xl border border-border bg-white p-4 shadow-card sm:rounded-2xl sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-white sm:h-10 sm:w-10 sm:rounded-xl">
                        <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground sm:text-base">
                          {a.hospital}
                        </p>
                        <p className="mt-1 text-sm text-muted">{a.role}</p>
                        <span className="mt-2 inline-flex rounded-full bg-teal-600/10 px-2 py-0.5 text-[10px] font-bold uppercase text-teal-700">
                          {a.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-teal-800 sm:text-[28px]">
                Areas of Expertise
              </h2>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
                {doctor.expertise.map((item) => (
                  <div
                    key={item}
                    className="inline-flex max-w-full items-center gap-2 rounded-full border border-teal-600/25 bg-teal-600/10 px-3 py-2 text-xs font-semibold text-teal-700 sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span className="min-w-0">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-teal-800 sm:text-[28px]">
                Appointment Timings
              </h2>
              <ClinicTimingsBox className="mt-4 max-w-md" />
              <p className="mt-3 text-sm text-muted">
                For urgent appointments, call directly
              </p>
              <a
                href={`tel:+91${doctor.phone}`}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              >
                <Phone className="h-4 w-4" />
                Call {doctor.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
              </a>
            </section>

            <FaqAccordion
              faqs={doctor.faqs}
              title={`Questions about ${doctor.name}`}
              embedded
            />

            {otherDoctors.length > 0 && (
              <section>
                <h2 className="mb-5 font-heading text-2xl font-bold text-teal-800">
                  Also consult with our other specialist
                </h2>
                <div className="grid gap-6">
                  {otherDoctors.map((d) => (
                    <DoctorProfileCard key={d.id} doctor={d} compact />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
