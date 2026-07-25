"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HOSPITAL } from "@/lib/constants/hospital";

export function MobileBottomBar() {
  const pathname = usePathname();
  const onAppointments = pathname === "/appointments";

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 p-2 backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={HOSPITAL.phoneHref}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-teal-600 py-3 text-xs font-semibold text-teal-600"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={HOSPITAL.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-whatsapp py-3 text-xs font-semibold text-white"
        >
          <FaWhatsapp className="h-4 w-4" />
          WhatsApp
        </a>
        {onAppointments ? (
          <a
            href={HOSPITAL.phoneHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-teal-600 py-3 text-xs font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        ) : (
          <Link
            href="/appointments"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-teal-600 py-3 text-xs font-semibold text-white shadow-card"
          >
            <CalendarDays className="h-4 w-4" />
            Book
          </Link>
        )}
      </div>
    </div>
  );
}
