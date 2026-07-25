"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HOSPITAL } from "@/lib/constants/hospital";

export function StickyBookButton() {
  const pathname = usePathname();
  const hideBook = pathname === "/appointments";

  return (
    <div className="fixed bottom-[20px] right-[20px] z-40 hidden flex-col items-end gap-3 sm:flex">
      {/* WhatsApp on top */}
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

      {/* Book Appointment below WhatsApp */}
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
