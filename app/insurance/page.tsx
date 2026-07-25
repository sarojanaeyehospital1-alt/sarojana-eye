import type { Metadata } from "next";
import Link from "next/link";
import {
  Ban,
  CheckCircle2,
  CreditCard,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { HOSPITAL } from "@/lib/constants/hospital";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Insurance Reimbursement | Sarojana Eye Hospital Hyderabad",
  description:
    "Insurance reimbursement is available for all providers at Sarojana Eye Hospital. Cashless is not available. Learn claim steps and documents needed.",
  path: "/insurance",
  keywords: ["eye hospital insurance Hyderabad", "ophthalmology reimbursement"],
});

const STEPS = [
  {
    number: "01",
    title: "Pay at the hospital",
    desc: "Pay for consultation or procedure at the hospital counter.",
  },
  {
    number: "02",
    title: "Collect documents",
    desc: "Collect itemised bills, payment receipts, and discharge/procedure notes.",
  },
  {
    number: "03",
    title: "Submit to insurer",
    desc: "Submit documents to your insurance provider as per their claim process.",
  },
  {
    number: "04",
    title: "Receive reimbursement",
    desc: "Follow up with your insurer for reimbursement credit to your account.",
  },
];

const DOCUMENTS = [
  "Valid photo ID and insurance policy / card details",
  "Doctor prescription and diagnosis notes",
  "Itemised hospital bills and payment receipts",
  "Investigation reports (if applicable)",
  "Filled claim form as required by your insurer",
];

const PAYMENT_ICONS = [
  { label: "Cash", icon: Wallet },
  { label: "UPI", icon: CreditCard },
  { label: "Debit/Credit Card", icon: CreditCard },
];

export default function InsurancePage() {
  return (
    <>
      <PageHeroWave
        title="Insurance & Payment Information"
        subtitle="Clear guidance for patients at our Hasthinapuram centre — reimbursement available for all providers"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Insurance", href: "/insurance" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Status cards */}
        <div className="grid gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-success/25 bg-white p-6 shadow-card sm:p-8">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-success/10" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-success/15 text-success">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <p className="mt-4 inline-flex rounded-full bg-success/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-success">
              Available
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">
              Insurance Reimbursement
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Reimbursement is available for all insurance providers. Patients
              pay at the counter and claim from their insurer using documents we
              provide.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-warning/30 bg-white p-6 shadow-card sm:p-8">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-warning/10" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-warning/15 text-warning">
              <Ban className="h-6 w-6" />
            </span>
            <p className="mt-4 inline-flex rounded-full bg-warning/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-warning">
              Not Available
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">
              Cashless Insurance
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Cashless insurance is currently not available. There is no direct
              billing settlement with insurers at the hospital at this time.
            </p>
          </article>
        </div>

        {/* Note band */}
        <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50 px-5 py-4 text-sm text-teal-800">
          <strong className="font-semibold">Important:</strong>{" "}
          {HOSPITAL.insurance.note}
        </div>

        {/* Steps */}
        <div className="mt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
              How It Works
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800">
              Step-by-step reimbursement process
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-teal-500" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition hover:border-teal-600 hover:shadow-card-hover"
              >
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
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white shadow-card">
          <div
            className="px-6 py-6 text-white sm:px-8"
            style={{
              background:
                "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
            }}
          >
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-teal-200" />
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                Documents needed for an insurance claim
              </h2>
            </div>
            <p className="mt-2 text-sm text-white/80">
              Keep these ready to speed up your reimbursement process.
            </p>
          </div>
          <ul className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {DOCUMENTS.map((doc) => (
              <li
                key={doc}
                className="flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment options */}
        <div className="mt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500">
              At the Counter
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-teal-800">
              Payment options
            </h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-teal-500" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(HOSPITAL.payments.length
              ? HOSPITAL.payments
              : PAYMENT_ICONS.map((p) => p.label)
            ).map((label, index) => {
              const Icon = PAYMENT_ICONS[index]?.icon ?? CreditCard;
              return (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-white p-5 text-center shadow-card"
                >
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-heading text-lg font-semibold text-foreground">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Help CTA */}
        <div className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-teal-50 to-white p-6 shadow-card sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-teal-800">
            Need help with insurance documents?
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Our front desk can guide you on the paperwork required for your
            claim. Reach out during clinic hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
            >
              <Phone className="h-4 w-4" />
              {HOSPITAL.phoneDisplay}
            </a>
            <a
              href={`mailto:${HOSPITAL.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-teal-600 px-5 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-teal-700 hover:underline"
            >
              Contact page →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
