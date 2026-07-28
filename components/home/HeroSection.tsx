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

type Slide = (typeof SLIDES)[number];

const AUTO_PLAY_MS = 3000;

function HeroSlideImage({
  slide,
  active,
  reduceMotion,
}: {
  slide: Slide;
  active: number;
  reduceMotion: boolean | null;
}) {
  return (
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
          className="object-cover object-center"
        />
      </motion.div>
    </AnimatePresence>
  );
}

function HeroSlideContent({
  slide,
  reduceMotion,
  compact,
}: {
  slide: Slide;
  reduceMotion: boolean | null;
  compact?: boolean;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={reduceMotion ? false : { opacity: 0, y: compact ? 16 : 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: compact ? -12 : -20 }}
        transition={{ duration: compact ? 0.35 : 0.45 }}
        className={`max-w-2xl text-white ${compact ? "" : "lg:max-w-3xl"}`}
      >
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md ${
            compact
              ? "mb-3 px-3.5 py-1.5 text-xs"
              : "mb-5 px-4 py-2 text-sm"
          }`}
        >
          <Sparkles
            className={`text-cyan-200 ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`}
          />
          {slide.badge}
        </div>

        <h1
          className={`font-heading font-bold leading-tight ${
            compact
              ? "text-2xl sm:text-3xl"
              : "text-3xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {slide.title}
        </h1>

        <p
          className={`font-medium text-white/95 ${
            compact
              ? "mt-2.5 text-sm sm:text-base"
              : "mt-4 text-base sm:text-xl"
          }`}
        >
          {slide.subtitle}
        </p>

        <p
          className={`max-w-xl leading-relaxed ${
            compact
              ? "mt-2.5 text-sm text-white/80"
              : "mt-4 text-sm text-white/85 sm:text-lg"
          }`}
        >
          {slide.description}
        </p>

        <div
          className={`flex flex-wrap ${compact ? "mt-5 gap-2.5" : "mt-8 gap-3"}`}
        >
          <Link
            href={slide.primaryCta.href}
            className={`inline-flex min-h-11 items-center gap-2 rounded-xl bg-white font-semibold text-teal-800 shadow-hero transition hover:bg-teal-50 ${
              compact
                ? "px-4 py-2.5 text-sm"
                : "px-5 py-3 text-sm sm:text-base"
            }`}
          >
            <CalendarDays className={compact ? "h-4 w-4" : "h-5 w-5"} />
            {slide.primaryCta.label}
          </Link>
          <Link
            href={slide.secondaryCta.href}
            className={`inline-flex min-h-11 items-center rounded-xl border-2 border-white/80 font-semibold text-white transition hover:bg-white/10 ${
              compact
                ? "px-4 py-2.5 text-sm"
                : "px-5 py-3 text-sm sm:text-base"
            }`}
          >
            {slide.secondaryCta.label}
          </Link>
          {slide.showWhatsapp ? (
            <a
              href={HOSPITAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center gap-2 rounded-xl bg-whatsapp font-semibold text-white transition hover:opacity-90 ${
                compact
                  ? "px-4 py-2.5 text-sm"
                  : "px-5 py-3 text-sm sm:text-base"
              }`}
            >
              <MessageCircle className={compact ? "h-4 w-4" : "h-5 w-5"} />
              WhatsApp Us
            </a>
          ) : null}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

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
      className="relative w-full overflow-hidden lg:h-[min(100vh,820px)] lg:min-h-[480px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hospital highlights"
    >
      {/* Desktop: full-bleed slider (direct child of section — reliable height) */}
      <div className="absolute inset-0 hidden lg:block">
        <HeroSlideImage slide={slide} active={active} reduceMotion={reduceMotion} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-teal-900/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent to-teal-950/20" />
      </div>

      {/* Mobile: image on top, content below */}
      <div className="flex flex-col lg:hidden">
        <div className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-[320px] md:h-[380px]">
          <HeroSlideImage slide={slide} active={active} reduceMotion={reduceMotion} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-teal-950/80 to-transparent" />

          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Slide ${i + 1}`}
                aria-selected={i === active}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-white" : "w-2 bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-teal-950 to-teal-900 px-4 py-7 text-white">
          <HeroSlideContent slide={slide} reduceMotion={reduceMotion} compact />
        </div>
      </div>

      {/* Desktop: text overlay */}
      <div className="relative z-10 hidden h-full items-center lg:flex">
        <div className="mx-auto w-full max-w-7xl px-8 py-20">
          <HeroSlideContent slide={slide} reduceMotion={reduceMotion} />
        </div>
      </div>

      {/* Desktop arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-black/35 lg:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-black/35 lg:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Desktop dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 hidden flex-col items-center gap-3 lg:flex">
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
        <span className="text-sm font-medium text-white/70">
          {active + 1} / {SLIDES.length}
        </span>
      </div>
    </section>
  );
}
