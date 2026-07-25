import type { Metadata } from "next";
import {
  AlertTriangle,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { ContactForm } from "@/components/shared/ContactForm";
import { HOSPITAL } from "@/lib/constants/hospital";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Sarojana Eye Hospital | Hasthinapuram, Hyderabad",
  description:
    "Contact Sarojana Eye Hospital at Hasthinapuram Central near Nagarjuna School, Nagarjuna Sagar Road, Hyderabad. Call, WhatsApp, or send a message.",
  path: "/contact",
  keywords: [
    "eye hospital near Nagarjuna Sagar Road Hyderabad",
    "eye specialist near Hasthinapuram Central",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHeroWave
        title="Contact Us"
        subtitle="Eye hospital near Nagarjuna Sagar Road, Hasthinapuram, Hyderabad — call, WhatsApp, or send us a message"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-4 text-sm text-foreground sm:p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <p>
            <strong className="font-semibold">Sunday Closed.</strong>{" "}
            {HOSPITAL.emergency.note}
          </p>
        </div>

        {/* Quick action cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={HOSPITAL.phoneHref}
            className="group rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-card-hover"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
              <Phone className="h-5 w-5" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-500">
              Call Us
            </p>
            <p className="mt-1 font-heading text-lg font-semibold text-foreground">
              {HOSPITAL.phoneDisplay}
            </p>
          </a>

          <a
            href={HOSPITAL.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-whatsapp hover:shadow-card-hover"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp transition group-hover:bg-whatsapp group-hover:text-white">
              <FaWhatsapp className="h-5 w-5" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-500">
              WhatsApp
            </p>
            <p className="mt-1 font-heading text-lg font-semibold text-foreground">
              Chat with us
            </p>
          </a>

          <a
            href={`mailto:${HOSPITAL.email}`}
            className="group rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-card-hover"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
              <Mail className="h-5 w-5" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-500">
              Email
            </p>
            <p className="mt-1 truncate font-heading text-base font-semibold text-foreground">
              {HOSPITAL.email}
            </p>
          </a>

          <a
            href={HOSPITAL.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-card-hover"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
              <Navigation className="h-5 w-5" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-500">
              Directions
            </p>
            <p className="mt-1 font-heading text-lg font-semibold text-foreground">
              Get Directions
            </p>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Info + map */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
              <div
                className="px-6 py-5 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
                }}
              >
                <h2 className="font-heading text-2xl font-bold">
                  Visit the Hospital
                </h2>
                <p className="mt-1 text-sm text-white/80">
                  Hasthinapuram Central, Hyderabad
                </p>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex gap-3 rounded-2xl bg-teal-50 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-500">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground">
                      {HOSPITAL.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-border p-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-500">
                      Clinic Timings
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Morning: {HOSPITAL.timings.morning}
                    </p>
                    <p className="text-sm text-foreground">
                      Evening: {HOSPITAL.timings.evening}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-warning">
                      Sunday: Holiday
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={HOSPITAL.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white hover:bg-teal-800"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={HOSPITAL.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 text-sm font-semibold text-white hover:opacity-90"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Google Map – Sarojana Eye Hospital Hasthinapuram"
                src={HOSPITAL.mapsEmbed}
                className="h-[300px] w-full border-0 sm:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
