"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HOSPITAL, NAV_LINKS } from "@/lib/constants/hospital";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-teal-900/45 backdrop-blur-[2px]"
        aria-label="Close menu"
        onClick={onClose}
      />

      <motion.div
        ref={panelRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col overflow-hidden bg-white shadow-hero"
      >
        {/* Header */}
        <div
          className="relative px-5 pb-5 pt-5 text-white"
          style={{
            background:
              "linear-gradient(135deg, #0F5A68 0%, #1A7A8A 55%, #22A8BF 100%)",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <Link href="/" onClick={onClose} className="min-w-0">
              <Image
                src="/images/logo.png"
                alt="Sarojana Eye Hospital logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs text-white/90 backdrop-blur">
            <Clock3 className="h-3.5 w-3.5" />
            {HOSPITAL.timings.display}
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-500">
            Menu
          </p>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch
                    onClick={onClose}
                    className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-[15px] font-medium transition ${
                      active
                        ? "bg-teal-600 text-white shadow-card"
                        : "text-foreground hover:bg-teal-50 hover:text-teal-700"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`h-4 w-4 ${
                        active ? "text-white/80" : "text-teal-300"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sticky CTAs */}
        <div className="border-t border-border bg-teal-50/60 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Link
            href="/appointments"
            prefetch
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-teal-800"
          >
            <CalendarDays className="h-4 w-4" />
            Book Appointment
          </Link>
          <a
            href={HOSPITAL.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-whatsapp py-3 text-sm font-semibold text-white"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
          <p className="mt-3 text-center text-[11px] text-muted">
            Hasthinapuram, Hyderabad · Sunday Closed
          </p>
        </div>
      </motion.div>
    </div>
  );
}
