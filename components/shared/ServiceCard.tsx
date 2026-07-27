import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-brand transition duration-300 hover:-translate-y-1 hover:border-l-4 hover:border-l-primary hover:shadow-brand-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-teal-50">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
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
      </div>
    </Link>
  );
}
