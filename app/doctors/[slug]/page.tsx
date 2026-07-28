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

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[35%_1fr]">
          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card-hover">
              <div className="relative aspect-[4/4.2] bg-gradient-to-br from-teal-800 to-teal-500">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - Eye Surgeon at Sarojana Eye Hospital, Hasthinapuram, Hyderabad`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <h1 className="font-heading text-[26px] font-bold leading-tight text-teal-600">
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
          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-[28px] font-bold text-teal-800">
                About {doctor.name}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{doctor.bio}</p>
              <p className="mt-4 leading-relaxed text-muted">{doctor.bioExtra}</p>
              <div className="mt-6 h-px bg-teal-200" />
            </section>

            <section>
              <h2 className="font-heading text-[28px] font-bold text-teal-800">
                Qualifications & Training
              </h2>
              <div className="relative mt-6 border-l-2 border-teal-500 pl-6">
                {doctor.qualificationDetails.map((q, index) => {
                  const Icon = getIcon(q.icon);
                  return (
                    <div
                      key={q.title}
                      className={`relative mb-4 rounded-2xl border border-border p-4 last:mb-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-teal-50/70"
                      }`}
                    >
                      <span className="absolute -left-[1.9rem] top-5 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-white" />
                      <div className="flex gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-foreground">{q.title}</p>
                          <p className="mt-1 text-sm text-muted">{q.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-[28px] font-bold text-teal-800">
                Professional Experience
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {doctor.affiliations.map((a) => (
                  <div
                    key={`${a.hospital}-${a.role}`}
                    className="rounded-2xl border border-border bg-white p-5 shadow-card"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-bold text-foreground">{a.hospital}</p>
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
              <h2 className="font-heading text-[28px] font-bold text-teal-800">
                Areas of Expertise
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {doctor.expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-teal-600/25 bg-teal-600/10 px-4 py-2.5 text-sm font-semibold text-teal-700"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-[28px] font-bold text-teal-800">
                Appointment Timings
              </h2>
              <ClinicTimingsBox className="mt-4 max-w-md" />
              <p className="mt-3 text-sm text-muted">
                For urgent appointments, call directly
              </p>
              <a
                href={`tel:+91${doctor.phone}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              >
                <Phone className="h-4 w-4" />
                Call {doctor.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
              </a>
            </section>

            <FaqAccordion
              faqs={doctor.faqs}
              title={`Questions about ${doctor.name}`}
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
