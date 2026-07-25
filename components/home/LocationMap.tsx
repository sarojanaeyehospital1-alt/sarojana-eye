import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { HOSPITAL } from "@/lib/constants/hospital";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LocationMap() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Find Us in Hasthinapuram"
          subtitle="Eye hospital near Nagarjuna Sagar Road, Hyderabad"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-brand">
            <iframe
              title="Sarojana Eye Hospital location map – Hasthinapuram, Hyderabad"
              src={HOSPITAL.mapsEmbed}
              className="h-[360px] w-full border-0 lg:h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-brand sm:p-8">
            <h3 className="font-heading text-2xl font-semibold text-primary">
              Contact Details
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{HOSPITAL.address.full}</span>
              </li>
              <li>
                <a
                  href={HOSPITAL.phoneHref}
                  className="inline-flex items-center gap-3 hover:text-primary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {HOSPITAL.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HOSPITAL.email}`}
                  className="inline-flex items-center gap-3 hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {HOSPITAL.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Morning: {HOSPITAL.timings.morning}
                  <br />
                  Evening: {HOSPITAL.timings.evening}
                  <br />
                  <span className="font-semibold text-warning">
                    Sunday Closed
                  </span>
                </span>
              </li>
            </ul>
            <a
              href={HOSPITAL.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
