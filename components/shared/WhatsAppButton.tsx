"use client";

import { FaWhatsapp } from "react-icons/fa";
import { HOSPITAL } from "@/lib/constants/hospital";

/** Mobile-only WhatsApp float; desktop uses StickyBookButton stack */
export function WhatsAppButton() {
  return (
    <a
      href={HOSPITAL.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      className="pulse-ring fixed bottom-[138px] right-[20px] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-brand-lg transition hover:scale-105 sm:hidden"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
