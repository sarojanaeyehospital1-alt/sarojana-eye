import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";
import { getIcon } from "@/lib/utils/icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-brand transition duration-300 hover:-translate-y-1 hover:border-l-4 hover:border-l-primary hover:shadow-brand-lg"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.shortDesc}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
