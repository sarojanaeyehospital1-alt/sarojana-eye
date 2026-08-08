import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Contact,
  Glasses,
  MapPin,
  Phone,
  ScanEye,
  Sparkles,
} from "lucide-react";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { HOSPITAL } from "@/lib/constants/hospital";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Indira Opticals by Sarojana Eye Hospital | Spectacles & Contact Lenses Hasthinapuram",
  description:
    "INDIRA OPTICALS by Sarojana Eye Hospital — frames, spectacles, progressive lenses and contact lenses at our Hasthinapuram centre, Hyderabad.",
  path: "/opticals",
  keywords: [
    "Indira Opticals Hasthinapuram",
    "opticals Sarojana Eye Hospital",
    "spectacles Hyderabad",
    "contact lenses Hasthinapuram",
  ],
});

const OFFERINGS = [
  {
    title: "Spectacles & Frames",
    desc: "Wide range of frames and prescription spectacles fitted after an accurate eye evaluation.",
    icon: Glasses,
  },
  {
    title: "Progressive & Specialty Lenses",
    desc: "Progressive, bifocal, and specialty lenses for clear vision at every distance.",
    icon: ScanEye,
  },
  {
    title: "Contact Lenses",
    desc: "Soft, toric, and daily disposable options with professional fitting guidance.",
    icon: Contact,
  },
  {
    title: "Eyewear Consultation",
    desc: "Personalised advice on lens type, coatings, and frames that suit your lifestyle.",
    icon: Sparkles,
  },
];

const HIGHLIGHTS = [
  "In-hospital opticals at Sarojana Eye Hospital, Hasthinapuram",
  "Prescriptions guided by our eye specialists",
  "Frames, spectacles, and contact lenses under one roof",
  "Same location — convenient after your eye checkup",
];

export default function OpticalsPage() {
  return (
    <>
      <PageHeroWave
        badge="By Sarojana Eye Hospital"
        title="INDIRA OPTICALS"
        subtitle="Quality frames, spectacles, and contact lenses at our Hasthinapuram centre — trusted opticals from Sarojana Eye Hospital."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Opticals", href: "/opticals" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
            Our Opticals
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800">
            Complete eyewear care after your eye exam
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-teal-500" />
          <p className="mt-4 text-base leading-relaxed text-muted">
            INDIRA OPTICALS by Sarojana Eye Hospital brings frames, lenses, and
            contact lens options to the same trusted centre where you receive
            your eye evaluation — so clear vision and comfortable eyewear start
            in one place.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {OFFERINGS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-white p-5 shadow-card transition hover:border-teal-600 hover:shadow-card-hover sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white shadow-card">
          <div
            className="px-6 py-6 text-white sm:px-8"
            style={{
              background:
                "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
            }}
          >
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Why choose Indira Opticals
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Opticals backed by Sarojana Eye Hospital’s clinical care.
            </p>
          </div>
          <ul className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-heading text-xl font-bold text-foreground">
              Visit us
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {HOSPITAL.address.full}
            </p>
            <p className="mt-3 text-sm font-medium text-teal-800">
              {HOSPITAL.timings.display}
            </p>
            <p className="mt-1 text-sm text-muted">{HOSPITAL.timings.note}</p>
          </article>

          <article className="rounded-3xl border border-border bg-gradient-to-br from-teal-50 to-white p-6 shadow-card sm:p-8">
            <h2 className="font-heading text-xl font-bold text-teal-800">
              Need help choosing eyewear?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Call or book an appointment — our team can guide you after your
              eye checkup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={HOSPITAL.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              >
                <Phone className="h-4 w-4" />
                {HOSPITAL.phoneDisplay}
              </a>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-xl border border-teal-600 px-5 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
