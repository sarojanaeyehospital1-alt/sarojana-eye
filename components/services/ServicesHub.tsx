"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  SERVICES,
  SERVICE_CATEGORIES,
} from "@/lib/constants/services";
import type { Service, ServiceCategory } from "@/lib/types";

function ServiceListingCard({ service }: { service: Service }) {
  const [showBenefits, setShowBenefits] = useState(false);

  const detailHref = `/services/${service.slug}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:border-teal-600 hover:shadow-card-hover sm:min-h-[320px]">
      <Link
        href={detailHref}
        className="relative block aspect-[16/10] overflow-hidden bg-teal-50"
        aria-label={`View ${service.title} details`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-2.5 top-2.5 z-10 max-w-[70%] truncate rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-700 shadow-sm">
          {service.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <Link href={detailHref} className="block">
          <h3 className="font-heading text-lg font-semibold text-teal-800 transition group-hover:text-teal-700 sm:text-xl">
            {service.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {service.shortDesc}
        </p>

        <div className="my-3 h-px bg-border sm:my-4" />

        <div className="md:block">
          <button
            type="button"
            className="mb-2 text-left text-xs font-semibold uppercase tracking-wide text-teal-700 md:pointer-events-none"
            onClick={() => setShowBenefits((v) => !v)}
          >
            Key Benefits {showBenefits ? "▴" : "▾"}
          </button>
          <ul
            className={`space-y-1.5 text-sm text-muted ${
              showBenefits ? "block" : "hidden md:block"
            }`}
          >
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={detailHref}
          className="mt-4 inline-flex min-h-10 items-center gap-1 self-start rounded-xl px-3 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-600 hover:text-white sm:mt-5"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function ServicesHub() {
  const [category, setCategory] = useState<ServiceCategory>("All");

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: SERVICES.length };
    for (const cat of SERVICE_CATEGORIES) {
      if (cat === "All") continue;
      map[cat] = SERVICES.filter((s) => s.category === cat).length;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    if (category === "All") return SERVICES;
    return SERVICES.filter((s) => s.category === category);
  }, [category]);

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 border-b border-border bg-white/95 px-4 py-3 shadow-sm backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-teal-600 text-white"
                    : "border border-teal-600 bg-white text-teal-600 hover:bg-teal-50"
                }`}
              >
                {cat} ({counts[cat] ?? 0})
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((service) => (
            <ServiceListingCard key={service.id} service={service} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
