"use client";

import { useMemo, useState } from "react";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants/services";

export function ServicesFilterGrid() {
  const [category, setCategory] = useState<(typeof SERVICE_CATEGORIES)[number]>(
    "All",
  );

  const filtered = useMemo(() => {
    if (category === "All") return SERVICES;
    return SERVICES.filter((s) => s.category === category);
  }, [category]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              category === cat
                ? "bg-primary text-white"
                : "border border-border bg-white text-muted hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
