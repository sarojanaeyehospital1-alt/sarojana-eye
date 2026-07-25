"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, MapPin, Menu, Phone } from "lucide-react";
import { HOSPITAL, NAV_LINKS } from "@/lib/constants/hospital";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="bg-primary-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            Hasthinapuram, Hyderabad
          </span>
          <span className="hidden sm:inline">|</span>
          <span>{HOSPITAL.timings.display}</span>
          <span className="hidden sm:inline">|</span>
          <span>Sunday Closed</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-white/95 shadow-brand backdrop-blur"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:py-4">
          <Link href="/" className="flex min-w-0 shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Sarojana Eye Hospital logo – Hasthinapuram, Hyderabad"
              width={200}
              height={56}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-background text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-3 py-2 text-sm font-semibold text-primary transition hover:bg-background"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link
              href="/appointments"
              prefetch
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground hover:bg-background lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
