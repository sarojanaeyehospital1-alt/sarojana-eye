import { HOSPITAL } from "@/lib/constants/hospital";
import Link from "next/link";

export function InsuranceSection() {
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center lg:flex-row lg:text-left">
        <div className="space-y-2 text-sm sm:text-base">
          <p className="font-medium text-foreground">
            ✅ Insurance Reimbursement: Available for all providers
          </p>
          <p className="text-muted">
            ❌ Cashless Insurance: Not available — pay at counter and claim from
            insurer
          </p>
          <p className="text-muted">
            💳 Payment: {HOSPITAL.payments.join(" | ")}
          </p>
        </div>
        <Link
          href="/insurance"
          className="rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-background"
        >
          Insurance Details
        </Link>
      </div>
    </section>
  );
}
