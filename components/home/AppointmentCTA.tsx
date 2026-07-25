import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { HOSPITAL } from "@/lib/constants/hospital";
import { AppointmentForm } from "@/components/shared/AppointmentForm";

export function AppointmentCTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Ready to Experience Better Vision?
            </h2>
            <p className="mt-3 text-lg text-white/85">
              Book your consultation at Sarojana Eye Hospital today — the trusted
              eye hospital near Nagarjuna Sagar Road, Hasthinapuram.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={HOSPITAL.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary"
              >
                <Phone className="h-5 w-5" />
                Call: {HOSPITAL.phoneDisplay}
              </a>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-5 py-3 font-semibold text-white"
              >
                <CalendarDays className="h-5 w-5" />
                Book Online
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-1 text-foreground shadow-brand-lg">
            <AppointmentForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
