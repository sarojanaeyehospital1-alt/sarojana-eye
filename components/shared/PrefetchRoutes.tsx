"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/hospital";

const EXTRA_ROUTES = ["/appointments"] as const;

export function PrefetchRoutes() {
  const router = useRouter();

  useEffect(() => {
    const routes = [...NAV_LINKS.map((l) => l.href), ...EXTRA_ROUTES];
    const unique = Array.from(new Set(routes));

    // Warm main pages so clicks feel instant
    const id = window.setTimeout(() => {
      unique.forEach((href) => {
        try {
          router.prefetch(href);
        } catch {
          /* ignore */
        }
      });
    }, 300);

    return () => window.clearTimeout(id);
  }, [router]);

  return null;
}
