import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
import { HOSPITAL, NAV_LINKS } from "@/lib/constants/hospital";
import { SERVICES } from "@/lib/constants/services";

export function Footer() {
  const year = new Date().getFullYear();
  const keyServices = SERVICES.slice(0, 6);

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0A3D47 0%, #0F5A68 40%, #1A7A8A 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-heading text-2xl font-bold sm:text-3xl">
              Ready for clearer vision?
            </p>
            <p className="mt-1 text-sm text-white/75">
              Book a consultation at Hasthinapuram — we&apos;ll confirm within 2
              hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {HOSPITAL.phoneDisplay}
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-teal-700 shadow-card transition hover:bg-teal-50"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5">
            <Image
              src="/images/footer.png"
              alt="Sarojana Eye Hospital logo"
              width={280}
              height={96}
              className="h-24 w-auto object-contain sm:h-28"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/75">
            Advanced ophthalmology care in Hasthinapuram, Hyderabad — LASIK,
            cataract, glaucoma, and comprehensive eye care with 20+ years of
            excellence.
          </p>
          <div className="mt-5 flex gap-2.5">
            {[
              {
                href: HOSPITAL.social.facebook,
                label: "Facebook",
                icon: FaFacebookF,
              },
              {
                href: HOSPITAL.social.instagram,
                label: "Instagram",
                icon: FaInstagram,
              },
              {
                href: HOSPITAL.social.youtube,
                label: "YouTube",
                icon: FaYoutube,
              },
              {
                href: HOSPITAL.social.gmb,
                label: "Google Business Profile",
                icon: FaGoogle,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white hover:text-teal-700"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <div className="mt-2 mb-4 h-0.5 w-10 rounded-full bg-teal-400" />
          <ul className="space-y-2.5 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex transition hover:translate-x-1 hover:text-teal-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/appointments"
                className="inline-flex font-semibold text-teal-200 transition hover:text-white"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Services</h3>
          <div className="mt-2 mb-4 h-0.5 w-10 rounded-full bg-teal-400" />
          <ul className="space-y-2.5 text-sm text-white/80">
            {keyServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex transition hover:translate-x-1 hover:text-teal-200"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="inline-flex font-semibold text-teal-200 hover:text-white"
              >
                View All Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold">Contact</h3>
          <div className="mt-2 mb-4 h-0.5 w-10 rounded-full bg-teal-400" />
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm">
              <p className="flex gap-2.5 text-sm text-white/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <span>{HOSPITAL.address.full}</span>
              </p>
            </div>
            <a
              href={HOSPITAL.phoneHref}
              className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 text-sm text-white/85 transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4 text-teal-300" />
              {HOSPITAL.phoneDisplay}
            </a>
            <a
              href={`mailto:${HOSPITAL.email}`}
              className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 text-sm text-white/85 transition hover:bg-white/15"
            >
              <Mail className="h-4 w-4 shrink-0 text-teal-300" />
              <span className="truncate">{HOSPITAL.email}</span>
            </a>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3.5 text-sm text-white/85">
              <p className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <span>
                  {HOSPITAL.timings.display}
                  <br />
                  <span className="text-warning">{HOSPITAL.timings.note}</span>
                </span>
              </p>
            </div>
            <a
              href={HOSPITAL.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-teal-200 hover:text-white hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/15 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-white/65 sm:flex-row sm:text-left sm:text-sm sm:px-6 lg:px-8">
          <p>
            © {year} {HOSPITAL.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-end">
            <span>Hasthinapuram, Hyderabad · Restoring Vision, Changing Lives</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>
              Developed by{" "}
              <a
                href="https://techdr.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-200 transition hover:text-white hover:underline"
              >
                techDr
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
