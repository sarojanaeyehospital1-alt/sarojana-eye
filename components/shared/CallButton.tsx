"use client";

import { Phone } from "lucide-react";
import { HOSPITAL } from "@/lib/constants/hospital";

export function CallButton() {
  return (
    <a
      href={HOSPITAL.phoneHref}
      aria-label={`Call ${HOSPITAL.name}`}
      className="fixed bottom-20 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-brand-lg transition hover:bg-primary-dark sm:hidden"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
