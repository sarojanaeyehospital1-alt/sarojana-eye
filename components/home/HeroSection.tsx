"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { HOSPITAL } from "@/lib/constants/hospital";

const SLIDES = [
  {
    id: "lasik",
    badge: "Laser Vision Correction",
    title: "See Clearly with Expert LASIK Surgery",
    subtitle: "LASIK • SMILE • TRANS PRK • SMARTSURF",
    description:
      "Freedom from glasses with advanced laser technology by fellowship-trained surgeons. Safe, precise vision correction at our Hasthinapuram centre.",
    image: "/images/banner/banner-2.png",
    imageAlt: "LASIK eye surgery at Sarojana Eye Hospital, Hasthinapuram Hyderabad",
    primaryCta: { label: "Book LASIK Consultation", href: "/appointments" },
    secondaryCta: { label: "Laser Procedures", href: "/laser-procedures" },
    showWhatsapp: false,
  },
  {
    id: "surgeons",
    badge: "Aravind & L.V. Prasad Trained",
    title: "Meet Our Fellowship-Trained Eye Surgeons",
    subtitle: "Phaco & LASIK Specialists You Can Trust",
    description:
      "Consult Dr. Chirra Karunakar Reddy (FICO UK) and Dr. Papagari Anitha Reddy for cataract, LASIK, and comprehensive eye care.",
    image: "/images/banner/banner-3.png",
    imageAlt: "Expert eye surgeons at Sarojana Eye Hospital, Hasthinapuram",
    primaryCta: { label: "Meet Our Doctors", href: "/doctors" },
    secondaryCta: { label: "Book Appointment", href: "/appointments" },
    showWhatsapp: false,
  },
  {
    id: "eye-care",
    badge: "20+ Years | 25,000+ Patients Treated",
    title: "Advanced Eye Care in the Heart of Hyderabad",
    subtitle: "LASIK • Cataract • Glaucoma • Retina Specialists",
    description:
      "Sarojana Eye Hospital, Hasthinapuram's most trusted ophthalmology centre — 20+ years of surgical excellence near Nagarjuna Sagar Road.",
    image: "/images/banner/banner-1.png",
    imageAlt:
      "Sarojana Eye Hospital – Advanced eye care in Hasthinapuram, Hyderabad",
    primaryCta: { label: "Book Appointment", href: "/appointments" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    showWhatsapp: true,
  },
] as const;

const AUTO_PLAY_MS = 3000;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  const slide = SLIDES[active];

  return (
    <section
      className="relative h-[min(100vh,820px)] min-h-[480px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hospital highlights"
    >
      {/* Full-width background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-teal-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-teal-950/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl text-white lg:max-w-3xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-cyan-200" />
                {slide.badge}
              </div>

              <h1 className="font-heading text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="mt-4 text-base font-medium text-white/95 sm:text-xl">
                {slide.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 shadow-hero transition hover:bg-teal-50 sm:text-base"
                >
                  <CalendarDays className="h-5 w-5" />
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex min-h-11 items-center rounded-xl border-2 border-white/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
                >
                  {slide.secondaryCta.label}
                </Link>
                {slide.showWhatsapp ? (
                  <a
                    href={HOSPITAL.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:text-base"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-black/35 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-black/35 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots + counter */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-3 sm:bottom-8">
        <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}: ${s.title}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-10 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-white/70 sm:text-sm">
          {active + 1} / {SLIDES.length}
        </span>
      </div>
    </section>
  );
}
