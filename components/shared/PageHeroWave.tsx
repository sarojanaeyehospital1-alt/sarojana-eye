import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

type PageHeroWaveProps = {
  title: string;
  subtitle: string;
  crumbs: { name: string; href: string }[];
  badge?: string;
  icon?: ReactNode;
};

export function PageHeroWave({
  title,
  subtitle,
  crumbs,
  badge,
  icon,
}: PageHeroWaveProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 50%, #22A8BF 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
        <Breadcrumb light items={crumbs} />
        <div className="mt-2 flex flex-col items-start gap-5 text-left sm:items-center sm:text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="w-full max-w-3xl min-w-0">
            {badge ? (
              <span className="mb-3 inline-flex max-w-full rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur sm:text-xs">
                {badge}
              </span>
            ) : null}
            <h1 className="break-words font-heading text-[1.65rem] font-bold leading-tight sm:text-4xl lg:text-[48px]">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base lg:text-lg">
              {subtitle}
            </p>
          </div>
          {icon ? (
            <div className="hidden shrink-0 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur lg:block">
              {icon}
            </div>
          ) : null}
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 64"
        fill="currentColor"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path d="M0,32 C240,64 480,0 720,24 C960,48 1200,64 1440,24 L1440,64 L0,64 Z" />
      </svg>
    </section>
  );
}

export function ClinicTimingsBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl bg-teal-50 p-4 text-sm text-muted ${className}`}
    >
      <p className="font-semibold text-teal-800">🕙 Mon–Sat</p>
      <p className="mt-1">Morning: 10:00 AM – 1:00 PM</p>
      <p>Evening: 5:00 PM – 8:00 PM</p>
      <p className="mt-2 font-medium text-warning">🔴 Sunday: Holiday</p>
    </div>
  );
}

export function SectionCtaBand({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  dark = false,
}: {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "bg-teal-800 py-14 text-white"
          : "bg-gradient-to-r from-teal-800 via-teal-600 to-teal-500 py-14 text-white"
      }
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">{subtitle}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {secondaryHref.startsWith("tel:") || secondaryHref.startsWith("http") ? (
            <a
              href={secondaryHref}
              className="inline-flex rounded-xl border-2 border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex rounded-xl border-2 border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
          <Link
            href={primaryHref}
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-600 shadow-card transition hover:bg-teal-50"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
