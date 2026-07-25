import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";
import { HOSPITAL } from "@/lib/constants/hospital";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-gradient-to-br from-primary via-primary to-white">
      <div className="hero-particles pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="left-[8%] top-[20%]" style={{ animationDelay: "0s" }} />
        <span className="left-[18%] top-[65%]" style={{ animationDelay: "2s" }} />
        <span className="left-[35%] top-[30%]" style={{ animationDelay: "4s" }} />
        <span className="left-[12%] top-[80%]" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto grid min-h-[100vh] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
        <div className="text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            ⭐ 20+ Years | 25,000+ Patients Treated
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
            Advanced Eye Care in the Heart of Hyderabad
          </h1>
          <p className="mt-4 text-lg font-medium text-white/95 sm:text-xl">
            LASIK • Cataract • Glaucoma • Retina Specialists
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Sarojana Eye Hospital, Hasthinapuram&apos;s most trusted ophthalmology
            centre, bringing 20+ years of surgical excellence to every patient near
            Nagarjuna Sagar Road.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary shadow-brand transition hover:bg-background"
            >
              <CalendarDays className="h-5 w-5" />
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border-2 border-white px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
            <a
              href={HOSPITAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/40 shadow-brand-lg lg:aspect-[5/4]">
            <Image
              src="/images/banner.png"
              alt="Sarojana Eye Hospital – Advanced eye care in Hasthinapuram, Hyderabad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
