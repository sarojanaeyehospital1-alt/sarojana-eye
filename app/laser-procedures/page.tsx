import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { LasikEligibilityChecker } from "@/components/laser/LasikEligibilityChecker";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { LASER_PROCEDURES } from "@/lib/constants/services";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import { DOCTORS } from "@/lib/constants/doctors";
import { getIcon } from "@/lib/utils/icons";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "LASIK & Laser Eye Surgery in Hasthinapuram Hyderabad",
  description:
    "Compare LASIK, SMILE, TRANS PRK, SMARTSURF & INTRALASE at Sarojana Eye Hospital. Fellowship-trained surgeons in Hasthinapuram, Hyderabad.",
  path: "/laser-procedures",
  keywords: [
    "LASIK surgery Hyderabad",
    "SMILE laser surgery Hyderabad",
    "LASIK surgery in Hasthinapuram",
  ],
});

const FAQS = [
  {
    question: "Is LASIK surgery available in Hasthinapuram?",
    answer:
      "Yes. Sarojana Eye Hospital offers LASIK and advanced laser vision correction counselling and pathways in Hasthinapuram, Hyderabad.",
  },
  {
    question: "What is the difference between LASIK and SMILE?",
    answer:
      "LASIK uses a corneal flap, while SMILE is a flapless keyhole procedure that removes a lenticule through a small incision. Suitability depends on your eye measurements.",
  },
  {
    question: "How long does laser vision correction take?",
    answer:
      "Laser treatment time is typically brief; the full visit includes preparation and post-procedure instructions. Your surgeon will explain the exact plan.",
  },
  {
    question: "Can I get LASIK if I have dry eyes?",
    answer:
      "Mild dryness may be manageable; significant dry eye may favour surface procedures or medical optimisation first. Evaluation is essential.",
  },
];

const COMPARISON = [
  {
    feature: "Approach",
    lasik: "Flap-based",
    smile: "Flapless keyhole",
    prk: "Surface, no flap",
  },
  {
    feature: "Recovery feel",
    lasik: "Typically rapid",
    smile: "Quick for many patients",
    prk: "Slower surface healing",
  },
  {
    feature: "Often chosen when",
    lasik: "Standard candidates",
    smile: "Eligible myopia profiles",
    prk: "Thinner cornea / no-flap preference",
  },
];

const WHY_US = [
  "Fellowship-trained Phaco & LASIK surgeons",
  "Honest eligibility counselling — not one-size protocols",
  "Multiple laser options including SMILE & TRANS PRK",
  "Convenient Hasthinapuram location in Hyderabad",
];

export default function LaserProceduresPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Laser Vision Correction",
    description:
      "LASIK, SMILE, TRANS PRK, SMARTSURF and INTRALASE laser eye procedures at Sarojana Eye Hospital, Hasthinapuram, Hyderabad.",
    url: `${SITE_URL}/laser-procedures`,
    provider: { "@type": "MedicalClinic", name: HOSPITAL.name },
  };

  return (
    <>
      <SchemaOrg data={schema} />

      <PageHeroWave
        title="Advanced Laser Vision Correction in Hyderabad"
        subtitle="LASIK · TRANS PRK · SMARTSURF · INTRALASE · SMILE — fellowship-trained surgeons in Hasthinapuram"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Laser Procedures", href: "/laser-procedures" },
        ]}
        badge="Laser Vision Correction"
        icon={<Sparkles className="h-16 w-16 text-white" />}
      />

      {/* Intro strip */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-muted sm:text-base">
            All procedures are performed after detailed corneal evaluation by our
            Phaco &amp; LASIK specialists.
          </p>
          <Link
            href="/appointments"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
          >
            <CalendarDays className="h-4 w-4" />
            Book Laser Evaluation
          </Link>
        </div>
      </section>

      {/* Procedures grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
            Our Technologies
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800 sm:text-4xl">
            Laser Procedures We Offer
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-teal-500" />
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Choose the technology that fits your eyes and lifestyle — guided by
            your surgeon after a full assessment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LASER_PROCEDURES.map((proc) => {
            const Icon = getIcon(proc.icon);
            return (
              <article
                key={proc.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-card-hover"
              >
                <div
                  className="px-6 py-5 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
                  }}
                >
                  <Icon className="h-8 w-8 text-teal-100" />
                  <h3 className="mt-3 font-heading text-2xl font-bold">
                    {proc.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/75">{proc.fullName}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {proc.details}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {proc.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-teal-50/50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
              Compare Options
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800">
              LASIK vs SMILE vs TRANS PRK
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-teal-500" />
          </div>

          <div className="mt-8 overflow-x-auto rounded-3xl border border-border bg-white shadow-card">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-800 via-teal-600 to-teal-500 text-white">
                  <th className="px-5 py-4 font-semibold">Feature</th>
                  <th className="px-5 py-4 font-semibold">LASIK</th>
                  <th className="px-5 py-4 font-semibold">SMILE</th>
                  <th className="px-5 py-4 font-semibold">TRANS PRK</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 === 0
                        ? "border-t border-border bg-white"
                        : "border-t border-border bg-teal-50/40"
                    }
                  >
                    <td className="px-5 py-4 font-semibold text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-5 py-4 text-muted">{row.lasik}</td>
                    <td className="px-5 py-4 text-muted">{row.smile}</td>
                    <td className="px-5 py-4 text-muted">{row.prk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility + Why us */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <LasikEligibilityChecker />

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
              <div
                className="px-6 py-5 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 100%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-teal-200" />
                  <h2 className="font-heading text-2xl font-bold">
                    Why our surgeons?
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="leading-relaxed text-muted">
                  Laser counselling at {HOSPITAL.name} is led by Phaco &amp; LASIK
                  surgeons with FICO (U.K.) and L.V. Prasad / Aravind-linked
                  training backgrounds. We prioritise safety, honest eligibility
                  advice, and the procedure that fits your eyes.
                </p>
                <ul className="mt-5 space-y-3">
                  {WHY_US.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3">
                  {DOCTORS.map((d) => (
                    <Link
                      key={d.id}
                      href={`/doctors/${d.slug}`}
                      className="flex items-center justify-between rounded-xl border border-border bg-teal-50/50 px-4 py-3 text-sm transition hover:border-teal-600"
                    >
                      <span>
                        <span className="block font-semibold text-foreground">
                          {d.name}
                        </span>
                        <span className="text-xs text-muted">
                          {d.specialisation}
                        </span>
                      </span>
                      <span className="font-semibold text-teal-600">View →</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/appointments"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white hover:bg-teal-800"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book Laser Evaluation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={FAQS} title="Laser Surgery FAQs" />

      {/* Bottom CTA */}
      <section
        className="py-14 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 50%, #22A8BF 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold">
            Am I eligible for LASIK?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Book a detailed corneal evaluation at {HOSPITAL.name}, Hasthinapuram.
            We&apos;ll recommend the safest option for your eyes.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/appointments"
              className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50"
            >
              Book Appointment
            </Link>
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex rounded-xl border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call {HOSPITAL.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
