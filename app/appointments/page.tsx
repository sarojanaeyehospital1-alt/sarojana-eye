import type { Metadata } from "next";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { HOSPITAL } from "@/lib/constants/hospital";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Book Appointment | Sarojana Eye Hospital Hasthinapuram",
  description:
    "Book an eye appointment at Sarojana Eye Hospital, Hasthinapuram, Hyderabad. Choose your doctor, service, and preferred time slot online.",
  path: "/appointments",
  keywords: [
    "Sarojana Eye Hospital appointment",
    "eye doctor appointment Hyderabad",
  ],
});

type Props = {
  searchParams: Promise<{ doctor?: string; service?: string }>;
};

const STEPS = [
  {
    title: "Submit request",
    text: "Share your details and preferred slot.",
  },
  {
    title: "We call to confirm",
    text: "Our team confirms within 2 hours during clinic hours.",
  },
  {
    title: "Visit the hospital",
    text: "Arrive at Hasthinapuram with your confirmation.",
  },
] as const;

export default async function AppointmentsPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <PageHeroWave
        title="Book an Appointment"
        subtitle="We will call you within 2 hours during working hours to confirm your visit"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Appointments", href: "/appointments" },
        ]}
        icon={<CalendarDays className="h-12 w-12 text-white" />}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <AppointmentForm
            defaultDoctor={params.doctor ?? ""}
            defaultService={params.service ?? ""}
          />

          <aside className="space-y-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
              <div
                className="px-6 py-5 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
                }}
              >
                <h2 className="font-heading text-2xl font-bold">
                  Clinic information
                </h2>
                <p className="mt-1 text-sm text-white/80">
                  Hasthinapuram, Hyderabad
                </p>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex gap-3 rounded-2xl bg-teal-50 p-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal-500">
                      Clinic timings
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
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={HOSPITAL.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                What happens next
              </h3>
              <ol className="mt-5 space-y-4">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-sm font-bold text-teal-700">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-start gap-2 rounded-2xl bg-teal-50 px-4 py-3 text-sm text-teal-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                <p>
                  For urgent needs, call{" "}
                  <a
                    href={HOSPITAL.phoneHref}
                    className="font-semibold underline-offset-2 hover:underline"
                  >
                    {HOSPITAL.phoneDisplay}
                  </a>{" "}
                  directly.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
