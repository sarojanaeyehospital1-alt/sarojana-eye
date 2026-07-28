"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, CalendarDays } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HOSPITAL } from "@/lib/constants/hospital";

export function StickyBookButton() {
  const pathname = usePathname();
  const hideBook = pathname === "/appointments";
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-[70px] right-[20px] z-40 hidden flex-col items-end gap-3 sm:flex">
      {/* Scroll / swipe up */}
      {showScrollTop ? (
        <button
          type="button"
          aria-label="Scroll to top"
          title="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-700 shadow-brand transition hover:scale-105 hover:bg-teal-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}

      {/* WhatsApp */}
      <a
        href={HOSPITAL.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us"
        className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-brand-lg transition hover:scale-105"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      {/* Book Appointment */}
      {!hideBook ? (
        <Link
          href="/appointments"
          aria-label="Book Appointment"
          className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white shadow-hero transition hover:scale-[1.02] hover:bg-teal-800"
        >
          <CalendarDays className="h-5 w-5" />
          Book Appointment
        </Link>
      ) : null}
    </div>
  );
}
